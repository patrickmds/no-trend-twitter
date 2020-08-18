document.addEventListener('DOMContentLoaded', function () {
    let toggleTrend = document.getElementById('toggle-trend');

    toggleTrend.addEventListener('change', function (e) {
        let div = document.querySelector('[aria-label="Timeline: Trending now"]');
        let display = '';
        if (e.target.checked) {
            display = 'none';
        } else {
            display = 'flex';
        }
        chrome.tabs.query({url: "*://twitter.com/*"}, (tabs) => {
            for (let i = 0; i < tabs.length; i++) {
                console.log('teste');
                chrome.tabs.insertCSS(tabs[i].id, {
                    code: 'div[aria-label="Timeline: Trending now"]{ display: ' + display + ' !important}'
                });
            }
        });
    });
});
