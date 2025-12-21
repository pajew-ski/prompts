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

    // Card Expand Logic (Click anywhere on card)
    // Card Expand Logic (Click anywhere on card)
    container.addEventListener('click', (e) => {
        // 1. Handle Copy Button Click
        const copyBtn = e.target.closest('.copy-btn');
        if (copyBtn) {
            e.stopPropagation();
            const card = copyBtn.closest('.prompt-card');
            const rawText = decodeURIComponent(card.getAttribute('data-copy-text'));
            copyToClipboard(rawText, copyBtn);
            return;
        }

        const card = e.target.closest('.prompt-card');
        if (!card) return;

        // Prevent toggling if clicking on tags, links, or the summary itself (native behavior)
        if (e.target.closest('a') || e.target.closest('.tag') || e.target.closest('summary')) {
            return;
        }

        // Prevent double-toggle on double click (only handle single click)
        if (e.detail > 1) return;

        const details = card.querySelector('details');
        if (details) {
            // Toggle open attribute logic
            if (details.hasAttribute('open')) {
                details.removeAttribute('open');
            } else {
                details.setAttribute('open', '');
            }
        }
    });

    // Double Click Logic (Copy)
    container.addEventListener('dblclick', (e) => {
        const card = e.target.closest('.prompt-card');
        if (!card) return;

        // Optional: Ignore if clicking on interactive elements that consume dblclick
        if (e.target.closest('a') || e.target.closest('input')) return;

        const rawText = decodeURIComponent(card.getAttribute('data-copy-text'));
        const btn = card.querySelector('.copy-btn');
        copyToClipboard(rawText, btn);
    });

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

    // Theme Toggle Logic
    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Initial Render to ensure sort order matches default (A-Z or Relevance)
    updateGrid();
});
