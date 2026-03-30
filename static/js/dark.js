// Dark Mode Toggle with System Preference Detection

(function() {
    function getPreferredTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            document.documentElement.classList.add('dark-theme');
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            document.documentElement.classList.remove('dark-theme');
            document.body.setAttribute('data-theme', 'light');
        }
    }

    applyTheme(getPreferredTheme());

    document.addEventListener('DOMContentLoaded', function() {
        // Create fixed toggle button (same as main site)
        var toggleBtn = document.createElement('button');
        toggleBtn.className = 'theme-toggle';
        toggleBtn.setAttribute('aria-label', 'Toggle dark mode');
        toggleBtn.innerHTML = '<svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="20" height="20"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg><svg class="moon-icon" style="display:none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="20" height="20"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
        document.body.appendChild(toggleBtn);

        function updateIcons() {
            var isDark = document.body.classList.contains('dark-theme');
            var sun = toggleBtn.querySelector('.sun-icon');
            var moon = toggleBtn.querySelector('.moon-icon');
            if (sun) sun.style.display = isDark ? 'none' : 'block';
            if (moon) moon.style.display = isDark ? 'block' : 'none';
        }

        updateIcons();

        function toggleTheme() {
            var isDark = document.body.classList.contains('dark-theme');
            applyTheme(isDark ? 'light' : 'dark');
            localStorage.setItem('theme', isDark ? 'light' : 'dark');
            updateIcons();
        }

        toggleBtn.addEventListener('click', toggleTheme);

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
                updateIcons();
            }
        });
    });
})();
