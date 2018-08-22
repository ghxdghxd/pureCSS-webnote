var bottomItems = document.querySelectorAll("div.mobile-bottom-nav__item");
bottomItems.forEach(function (e, i) {
    e.addEventListener("click", function (e) {
        bottomItems.forEach(function (e2, i2) {
            e2.classList.remove("mobile-bottom-nav__item--active");
        })
        this.classList.add("mobile-bottom-nav__item--active");
    });
});

document.getElementById("search-icon").onclick = function () {
    document.getElementById("circle-big").classList.toggle("change");
    document.getElementById("circle-small").classList.toggle("change");
    document.getElementById("line-left").classList.toggle("change");
    document.getElementById("line-right").classList.toggle("change");
    document.getElementById("full-search").classList.toggle("change");
    document.getElementById('tipue_search_input').focus();
    // window.setTimeout(function () { document.getElementById('full-search-text').focus(); }, 0);
}; 

