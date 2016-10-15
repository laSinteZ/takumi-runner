function addLinks() {

    var vkLink, yaLink;
    var listens = document.getElementsByClassName("listen");
    for (i = 0; i < listens.length; i++) {

        authorName = listens[i].lastElementChild.getAttribute("data-artist");
        songName = listens[i].lastElementChild.getAttribute("data-name");

        vkLink = document.createElement('a');
        vkLink.setAttribute("href", "https://vk.com/audio?q=" + authorName + "%20" + songName);
        vkLink.setAttribute("target", "_blank");
        vkLink.innerHTML = "VK";

        yaLink = document.createElement('a');
        yaLink.setAttribute("href", "https://music.yandex.ru/search?text=" + authorName + "%20" + songName);
        yaLink.setAttribute("target", "_blank");
        yaLink.innerHTML = "Ya";

        listens[i].appendChild(vkLink);
        listens[i].innerHTML = listens[i].innerHTML + ' ';
        listens[i].appendChild(yaLink);

    }
}

addLinks();
