document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const sortSelect = document.getElementById('sort-select');
    const difficultySelect = document.getElementById('difficulty-select');
    const container = document.querySelector('.grid');
    const themeToggle = document.getElementById('theme-toggle');

    // Store original card data for sorting
    const cards = Array.from(document.querySelectorAll('.prompt-card')).map(card => ({
        element: card,
        title: (card.getAttribute('data-title') || '').toLowerCase(),
        tags: (card.getAttribute('data-tags') || '').toLowerCase(),
        content: (card.textContent || '').toLowerCase(),
        difficulty: (card.querySelector('.difficulty-badge')?.textContent || '').toLowerCase()
    }));

    // Shuffle cards randomly on startup (Fisher-Yates)
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    // Store random order index so we can restore it later
    cards.forEach((card, idx) => {
        card.randomOrder = idx;
    });

    function updateGrid() {
        const query = searchInput.value.toLowerCase();
        const sortMode = sortSelect.value; // 'relevance', 'az', 'za'
        const difficultyFilter = difficultySelect.value; // 'all' or specific value

        // 1. Calculate Scores & Filter
        const results = cards.map(item => {
            let score = 0;
            let visible = true;

            // Search Filter & Scoring
            if (query) {
                if (item.title.includes(query)) score += 100;
                else if (item.tags.includes(query)) score += 50;
                else if (item.content.includes(query)) score += 10;
                else visible = false;
            } else {
                score = 1; // Default score to keep them visible if no search
            }

            // Difficulty Filter
            if (difficultyFilter !== 'all' && item.difficulty !== difficultyFilter) {
                visible = false;
            }

            return { ...item, score, visible };
        });

        // 2. Sort
        results.sort((a, b) => {
            if (sortMode === 'az') return a.title.localeCompare(b.title);
            if (sortMode === 'za') return b.title.localeCompare(a.title);

            // sortMode === 'relevance'
            if (query) {
                // With search query: sort by semantic relevance score
                return b.score - a.score;
            }
            // No query: preserve the random startup order
            return a.randomOrder - b.randomOrder;
        });

        // 3. Render (DOM Manipulation)
        results.forEach(item => {
            if (item.visible) {
                item.element.style.display = '';
                container.appendChild(item.element); // Re-append to sort
            } else {
                item.element.style.display = 'none';
            }
        });
    }

    // Event Listeners
    if (searchInput) searchInput.addEventListener('input', updateGrid);
    if (sortSelect) sortSelect.addEventListener('change', updateGrid);
    if (difficultySelect) difficultySelect.addEventListener('change', updateGrid);

    // Global Filter Function (for Semantic Links)
    window.filterBySearch = (query) => {
        if (!searchInput) return;
        searchInput.value = query;
        sortSelect.value = 'relevance'; // Force relevance when clicking a link
        updateGrid();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // --- Click Logic: 1x Toggle, 2x Copy, 3x Close ---
    let clickCount = 0;
    let clickTimer = null;
    const CLICK_DELAY = 400; // ms

    container.addEventListener('click', (e) => {
        const card = e.target.closest('.prompt-card');
        if (!card) return;

        // Handle specific Copy Button (always copy)
        const copyBtn = e.target.closest('.copy-btn');
        if (copyBtn) {
            e.stopPropagation(); // Don't trigger the card logic
            const rawText = decodeURIComponent(card.getAttribute('data-copy-text'));
            copyToClipboard(rawText, copyBtn);
            return;
        }

        // Ignore interactive elements
        if (e.target.closest('a') || e.target.closest('.tag') || e.target.closest('summary')) {
            return;
        }

        clickCount++;

        if (clickCount === 1) {
            // Wait to see if it becomes a double click
            clickTimer = setTimeout(() => {
                // It stayed a single click -> Toggle
                clickCount = 0;
                toggleCard(card);
            }, CLICK_DELAY);

        } else if (clickCount === 2) {
            // It is a double click -> Copy
            clearTimeout(clickTimer); // Cancel toggle

            // Perform Copy
            const rawText = decodeURIComponent(card.getAttribute('data-copy-text'));
            const btn = card.querySelector('.copy-btn');
            copyToClipboard(rawText, btn);

            // Wait briefly to see if it becomes a triple click
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, CLICK_DELAY);

        } else if (clickCount === 3) {
            // It is a triple click -> Close
            clearTimeout(clickTimer);
            clickCount = 0;

            console.log("Triple click detected. Closing...");
            try {
                // Workaround for "Scripts may close only the windows that were opened by it"
                window.opener = null;
                window.open("", "_self");
                window.close();
            } catch (err) {
                console.warn("Could not close window:", err);
                alert("Window could not be closed automatically due to browser security restrictions.");
            }
        }
    });

    function toggleCard(card) {
        const details = card.querySelector('details');
        if (details) {
            if (details.hasAttribute('open')) {
                details.removeAttribute('open');
            } else {
                details.setAttribute('open', '');
            }
        }
    }

    async function copyToClipboard(text, btnElement) {
        if (!text) return;

        let success = false;

        // Try modern Clipboard API first (requires secure context + clipboard-write permission)
        if (navigator.clipboard && navigator.clipboard.writeText) {
            try {
                await navigator.clipboard.writeText(text);
                success = true;
            } catch (err) {
                // Fails silently in iframes (e.g. Home Assistant Ingress) — fall through to legacy
                console.warn("Clipboard API unavailable, trying execCommand fallback:", err);
            }
        }

        // Fallback: execCommand — works inside iframes without clipboard-write permission policy
        if (!success) {
            try {
                const textarea = document.createElement("textarea");
                textarea.value = text;
                textarea.style.position = "fixed";
                textarea.style.left = "-9999px";
                textarea.style.top = "-9999px";
                textarea.setAttribute("readonly", "");
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                success = document.execCommand("copy");
                document.body.removeChild(textarea);
            } catch (err) {
                console.error("execCommand fallback also failed:", err);
            }
        }

        // Visual Feedback
        if (success && btnElement) {
            const originalContent = btnElement.innerHTML;
            // Checkmark icon
            btnElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
            btnElement.classList.add("copied");

            setTimeout(() => {
                btnElement.innerHTML = originalContent;
                btnElement.classList.remove("copied");
            }, 2000);
        } else if (!success) {
            console.error("Failed to copy text — both Clipboard API and execCommand failed.");
        }
    }

    // --- Theme Logic ---
    if (themeToggle) {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        const VALID_MODES = ["light", "dark", "auto"];

        // SVG icons for each mode
        const THEME_ICONS = {
            light: `<svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>`,
            dark: `<svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>`,
            auto: `<svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>`,
        };

        const THEME_LABELS = {
            light: "Hell-Modus (klicken für Dunkel)",
            dark: "Dunkel-Modus (klicken für Auto)",
            auto: "Automatischer Modus (klicken für Hell)",
        };

        // Returns the visual theme ('light' | 'dark') for a given mode
        function getEffectiveTheme(mode) {
            if (mode === "dark") return "dark";
            if (mode === "light") return "light";
            // auto: follow system
            return systemPrefersDark.matches ? "dark" : "light";
        }

        function updateMetaThemeColor(effectiveTheme) {
            const metaThemeColor = document.querySelector('meta[name="theme-color"]');
            if (metaThemeColor) {
                metaThemeColor.setAttribute("content", effectiveTheme === "dark" ? "#1a1a1a" : "#fafafa");
            }
        }

        // Apply a mode ('light' | 'dark' | 'auto') and persist it
        function applyMode(mode) {
            currentMode = mode;
            const effective = getEffectiveTheme(mode);
            document.documentElement.setAttribute("data-theme", effective);
            updateMetaThemeColor(effective);
            themeToggle.innerHTML = THEME_ICONS[mode];
            themeToggle.setAttribute("aria-label", THEME_LABELS[mode]);
            localStorage.setItem("theme", mode);
        }

        // Refresh the effective theme without changing the mode (used by auto listeners)
        function refreshAutoTheme() {
            if (currentMode === "auto") {
                const effective = getEffectiveTheme("auto");
                document.documentElement.setAttribute("data-theme", effective);
                updateMetaThemeColor(effective);
            }
        }

        // 1. Determine initial mode
        //    Priority: localStorage → URL param → 'auto'
        const savedTheme = localStorage.getItem("theme");
        const urlTheme = new URLSearchParams(location.search).get("theme");

        let currentMode = "auto"; // default
        if (savedTheme && VALID_MODES.includes(savedTheme)) {
            currentMode = savedTheme;
        } else if (urlTheme && VALID_MODES.includes(urlTheme)) {
            currentMode = urlTheme;
        }

        applyMode(currentMode);

        // 2. System change listener — only re-applies when mode is 'auto'
        systemPrefersDark.addEventListener("change", refreshAutoTheme);

        // 3. postMessage from HA parent — applies only in auto mode
        //    HA sends: { type: 'theme-update', theme: 'dark' | 'light' }
        window.addEventListener("message", (e) => {
            if (e.data?.type === "theme-update") {
                const haTheme = e.data.theme;
                if (currentMode === "auto" && (haTheme === "dark" || haTheme === "light")) {
                    document.documentElement.setAttribute("data-theme", haTheme);
                    updateMetaThemeColor(haTheme);
                }
            }
        });

        // 4. Manual Toggle: cycle auto → light → dark → auto
        themeToggle.addEventListener("click", () => {
            const cycle = { auto: "light", light: "dark", dark: "auto" };
            applyMode(cycle[currentMode] || "auto");
        });
    }

    // Initial Render
    updateGrid();
});
