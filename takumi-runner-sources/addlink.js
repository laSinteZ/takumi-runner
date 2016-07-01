function addLinks() {

    var vkLink;
    var listens = document.getElementsByClassName("listen");
    for (i = 0; i < listens.length; i++) {

        authorName = listens[i].lastElementChild.getAttribute("data-artist");
        songName = listens[i].lastElementChild.getAttribute("data-name");

        vkLink = document.createElement('a');
        vkLink.setAttribute("href", "https://vk.com/audio?q=" + authorName + "%20" + songName);
        vkLink.setAttribute("target", "_blank");
        vkLink.innerHTML = "VK";

        listens[i].appendChild(vkLink);
    }
}

addLinks();
