// ==UserScript=={{{
// @name        Sort Feeds
// @namespace   https://ash.fail
// @match       http://[MINIFLUX_URL_HERE]/feeds
// @grant       none
// @version     1.0.0
// @author      https://ash.fail
// @icon        data:image/png;base64,AAABAAIAEBAAAAEAIABoBAAAJgAAACAgAAABACAAqBAAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAAAEAABhBwAAYQcAAAAAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+tra3/d3d3/3d3d/93d3f/ioqK///////n5+f/fHx8/3d3d/93d3f/3t7e//////+UlJT/d3d3/3d3d/+urq7//Pz8/ykpKf8AAAD/AAAA/93d3f//////mpqa/wAAAP8AAAD/gICA///////z8/P/AQEB/wAAAP8qKir//Pz8//////81NTX/AAAA/wAAAP/p6en//////46Ojv8AAAD/AAAA/46Ojv//////6enp/wAAAP8AAAD/NTU1////////////NTU1/wAAAP8AAAD/6enp//////+Ojo7/AAAA/wAAAP+Ojo7//////+np6f8AAAD/AAAA/zU1Nf///////////zU1Nf8AAAD/AAAA/+np6f//////jo6O/wAAAP8AAAD/jo6O///////p6en/AAAA/wAAAP81NTX///////////81NTX/AAAA/wAAAP/p6en//////46Ojv8AAAD/AAAA/46Ojv//////6enp/wAAAP8AAAD/NTU1////////////NTU1/wAAAP8AAAD/6enp//////+Ojo7/AAAA/wAAAP+Ojo7//////+np6f8AAAD/AAAA/zU1Nf///////////zU1Nf8AAAD/AAAA/+np6f//////jo6O/wAAAP8AAAD/kJCQ///////p6en/AAAA/wAAAP82Njb///////////81NTX/AAAA/wAAAP/p6en//////319ff8AAAD/AAAA/5ubm///////19fX/wAAAP8AAAD/S0tL///////29vb/JiYm/wAAAP8AAAD/ZGRk/7e3t/82Njb/AAAA/wEBAf9dXV3/oqKi/3t7e/8AAAD/AAAA/4WFhf//////rq6u/1lZWf8rKyv/BAQE/+Hh4f9nZ2f/Gxsb/yEhIf+Tk5P//f39/5GRkf8rKyv/Ghoa/11dXf/z8/P///////////////////////j4+P/+/v7//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAIAAAAEAAAAABACAAAAAAAAAQAADDDgAAww4AAAAAAAAAAAAA/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8XFxf8JCQn/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/0tLS/////////////////+bm5v/CQkJ/wAAAP8AAAD/AAAA/wAAAP8BAQH/goKC/////////////////1hYWP8CAgL/AAAA/wAAAP8AAAD/AAAA/wkJCf/FxcX///////Hx8f88PDz/AAAA/wAAAP8AAAD/AAAA/wAAAP+ioqL//////////////////////zU1Nf8AAAD/AAAA/wAAAP8AAAD/CQkJ/9ra2v/////////////////p6en/AAAA/wAAAP8AAAD/AAAA/wAAAP89PT3/8fHx/////////////////2lpaf8AAAD/AAAA/wAAAP8AAAD/AAAA/9TU1P//////////////////////ICAg/wAAAP8AAAD/AAAA/wAAAP8fHx///////////////////////9TU1P8AAAD/AAAA/wAAAP8AAAD/AAAA/2tra///////////////////////aWlp/wAAAP8AAAD/AAAA/wAAAP8AAAD/1NTU//////////////////////8fHx//AAAA/wAAAP8AAAD/AAAA/x8fH///////////////////////09PT/wAAAP8AAAD/AAAA/wAAAP8AAAD/a2tr//////////////////////9paWn/AAAA/wAAAP8AAAD/AAAA/wAAAP/U1NT//////////////////////x8fH/8AAAD/AAAA/wAAAP8AAAD/Hx8f///////////////////////T09P/AAAA/wAAAP8AAAD/AAAA/wAAAP9ra2v//////////////////////2lpaf8AAAD/AAAA/wAAAP8AAAD/AAAA/9TU1P//////////////////////Hx8f/wAAAP8AAAD/AAAA/wAAAP8fHx///////////////////////9PT0/8AAAD/AAAA/wAAAP8AAAD/AAAA/2tra///////////////////////aWlp/wAAAP8AAAD/AAAA/wAAAP8AAAD/1NTU//////////////////////8fHx//AAAA/wAAAP8AAAD/AAAA/x8fH///////////////////////09PT/wAAAP8AAAD/AAAA/wAAAP8AAAD/a2tr//////////////////////9paWn/AAAA/wAAAP8AAAD/AAAA/wAAAP/U1NT//////////////////////x8fH/8AAAD/AAAA/wAAAP8AAAD/Hx8f///////////////////////T09P/AAAA/wAAAP8AAAD/AAAA/wAAAP9ra2v//////////////////////2lpaf8AAAD/AAAA/wAAAP8AAAD/AAAA/9TU1P//////////////////////Hx8f/wAAAP8AAAD/AAAA/wAAAP8fHx///////////////////////9PT0/8AAAD/AAAA/wAAAP8AAAD/AAAA/2tra///////////////////////aWlp/wAAAP8AAAD/AAAA/wAAAP8AAAD/1NTU//////////////////////8fHx//AAAA/wAAAP8AAAD/AAAA/x8fH///////////////////////09PT/wAAAP8AAAD/AAAA/wAAAP8AAAD/a2tr//////////////////////9paWn/AAAA/wAAAP8AAAD/AAAA/wAAAP/U1NT//////////////////////x8fH/8AAAD/AAAA/wAAAP8AAAD/Hx8f///////////////////////T09P/AAAA/wAAAP8AAAD/AAAA/wAAAP9ra2v//////////////////////2lpaf8AAAD/AAAA/wAAAP8AAAD/AAAA/9TU1P//////////////////////Hx8f/wAAAP8AAAD/AAAA/wAAAP8fHx///////////////////////9PT0/8AAAD/AAAA/wAAAP8AAAD/AAAA/2tra///////////////////////aWlp/wAAAP8AAAD/AAAA/wAAAP8AAAD/1NTU//////////////////////8fHx//AAAA/wAAAP8AAAD/AAAA/x8fH///////////////////////09PT/wAAAP8AAAD/AAAA/wAAAP8AAAD/a2tr//////////////////////9paWn/AAAA/wAAAP8AAAD/AAAA/wAAAP/U1NT//////////////////////x8fH/8AAAD/AAAA/wAAAP8AAAD/Hx8f///////////////////////T09P/AAAA/wAAAP8AAAD/AAAA/wAAAP9ra2v//////////////////////2lpaf8AAAD/AAAA/wAAAP8AAAD/AAAA/9TU1P//////////////////////Hx8f/wAAAP8AAAD/AAAA/wAAAP8jIyP//////////////////////9PT0/8AAAD/AAAA/wAAAP8AAAD/AAAA/21tbf//////////////////////aWlp/wAAAP8AAAD/AAAA/wAAAP8AAAD/1NTU//////////////////////8YGBj/AAAA/wAAAP8AAAD/AAAA/zQ0NP//////////////////////zMzM/wAAAP8AAAD/AAAA/wAAAP8AAAD/enp6//////////////////////9paWn/AAAA/wAAAP8AAAD/AAAA/wAAAP/T09P//////////////////f39/wcHB/8AAAD/AAAA/wAAAP8AAAD/PT09//////////////////////+5ubn/AAAA/wAAAP8AAAD/AAAA/wAAAP+Xl5f//////////////////////2hoaP8AAAD/AAAA/wAAAP8AAAD/AAAA/z4+Pv/p6en////////////ExMT/AAAA/wAAAP8AAAD/AAAA/wAAAP8JCQn/dnZ2//v7+////////////3p6ev8AAAD/AAAA/wAAAP8AAAD/AAAA/83Nzf/////////////////a2tr/Ly8v/wAAAP8AAAD/AAAA/wAAAP8AAAD/XFxc/xISEv9vb2//hISE/yAgIP8AAAD/AAAA/wAAAP8AAAD/BQUF/9LS0v85OTn/KCgo/4CAgP90dHT/BgYG/wAAAP8AAAD/AAAA/wAAAP8sLCz//v7+////////////w8PD/wMDA/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP/j4+P/oqKi/xMTE/8AAAD/AAAA/wAAAP8AAAD/AAAA/wEBAf+RkZH///////X19f9tbW3/AQEB/wAAAP8AAAD/AAAA/wAAAP8AAAD/CgoK/8XFxf//////////////////////9vb2/8vLy/+cnJz/bW1t/z8/P/8RERH/AAAA/+Pj4///////7u7u/5KSkv9ERET/KCgo/y0tLf9WVlb/v7+////////////////////////Y2Nj/c3Nz/z09Pf8kJCT/Li4u/2ZmZv/Y2Nj////////////////////////////////////////////////////////////k5OT/+/v7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
// @license     Unlicense
// @description Add sort options to feeds page on https://miniflux.app feed reader
// @homepageURL https://git.ash.fail/userscripts
// @supportURL  https://ash.fail/contact.html
// ==/UserScript==}}}

function getTitle(feed) {
    return feed.getElementsByTagName("a")[0].textContent.trim();
}

function compareAlpha(lhs, rhs) {
    return getTitle(lhs) < getTitle(rhs) ? -1 : 1;
}

function getUnread(feed) {
    return Number(
        feed.querySelectorAll('[aria-hidden="true"]')[1].textContent,
    );
}

function compareUnread(lhs, rhs) {
    const diff = getUnread(lhs) - getUnread(rhs);
    if (diff > 0) {
        return -1;
    } else if (diff < 0) {
        return 1;
    } else {
        return 1;
    }
}

sorters = {
    alpha: compareAlpha,
    "alpha-rev": (lhs, rhs) => compareAlpha(lhs, rhs) * -1,
    unread: (lhs, rhs) => compareUnread(lhs, rhs) || compareAlpha(lhs, rhs),
    "unread-rev": (lhs, rhs) =>
        compareUnread(lhs, rhs) * -1 || compareAlpha(lhs, rhs),
};

function sortFeeds(strategy) {
    const items = document.getElementsByClassName("items")[0];
    const feeds = Array.from(items.children).filter(
        (v) => !v.classList.contains("feed-parsing-error"),
    );

    feeds.sort(sorters[strategy]);

    while (
        items.lastElementChild &&
        !items.lastElementChild.classList.contains("feed-parsing-error")
    ) {
        items.removeChild(items.lastElementChild);
    }

    for (feed of feeds) {
        items.appendChild(feed);
    }

    localStorage.setItem("sortStrategy", strategy);
}

sortFeeds(localStorage.getItem("sortStrategy") || "alpha");

const select = document.createElement("select");
select.addEventListener("change", (e) => sortFeeds(e.currentTarget.value));

for (strategy of ["alpha", "unread"]) {
    const option = document.createElement("option");
    option.value = strategy;
    option.textContent = strategy[0].toUpperCase() + strategy.slice(1);
    select.append(option.cloneNode(true));

    option.value += "-rev";
    option.textContent += " (reverse)";
    select.append(option);
}

const menu = document.querySelector(
    '[aria-label="Feeds Menu"]',
).firstElementChild;

const label = document.createElement("label");
label.textContent = "Sort by";
menu.append(label);

const li = document.createElement("li");
li.append(select);
menu.append(li);

select.value = localStorage.getItem("sortStrategy");

// vim: fdm=marker
