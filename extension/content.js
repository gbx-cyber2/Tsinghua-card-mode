(function () {
    'use strict';

    function switchToCardMode() {
        var cardTab = document.querySelector('.tab2');
        var listTab = document.querySelector('.tab1');
        if (cardTab && listTab && listTab.classList.contains('active')) {
            cardTab.click();
        }
    }

    function observe() {
        var container = document.querySelector('.caouozuco');
        if (!container) {
            setTimeout(observe, 200);
            return;
        }

        switchToCardMode();

        var observer = new MutationObserver(function () {
            switchToCardMode();
        });

        observer.observe(container, {
            attributes: true,
            attributeFilter: ['class'],
            subtree: true
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', observe);
    } else {
        observe();
    }
})();
