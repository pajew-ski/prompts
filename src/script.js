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
            // If searching (and sort is relevance), prioritize score
            if (query && sortMode === 'relevance') {
                return b.score - a.score;
            }

            // Otherwise (or if explicitly sorting A-Z/Z-A), sort by title
            if (sortMode === 'za') {
                return b.title.localeCompare(a.title);
            }
            // Default to A-Z
            return a.title.localeCompare(b.title);
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
                window.close();
            } catch (err) {
                console.warn("Could not close window:", err);
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
        try {
            await navigator.clipboard.writeText(text);

            // Visual Feedback
            if (btnElement) {
                const originalContent = btnElement.innerHTML;
                // Checkmark icon
                btnElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
                btnElement.classList.add('copied');

                setTimeout(() => {
                    btnElement.innerHTML = originalContent;
                    btnElement.classList.remove('copied');
                }, 2000);
            }
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    }

    // --- Theme Logic ---
    if (themeToggle) {
        // 1. Initial Load: Check LocalStorage, then System
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark.matches)) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
             document.documentElement.setAttribute('data-theme', 'light');
        }

        // 2. System Change Listener
        // Requirement: "System settings automatically follow... overrides manual toggle until automation strikes again"
        // Interpretation: When system changes, it takes priority and clears manual override.
        systemPrefersDark.addEventListener('change', (e) => {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);

            // Clear manual override so it sticks to system now
            localStorage.removeItem('theme');
        });

        // 3. Manual Toggle
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Initial Render
    updateGrid();
});
