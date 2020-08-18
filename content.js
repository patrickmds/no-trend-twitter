
document.addEventListener('DOMContentLoaded', function () {
    let toggleTrend = document.getElementById('toggle-trend');
    toggleTrend.addEventListener('change', function () {
        let div = document.querySelector('[aria-label="Timeline: Trending now"]');
        alert('teste');
        if (toogleTrend.checked) {
            div.style.display = "none";
        } else {
            div.style.display = "flex";
        }
    });
});
