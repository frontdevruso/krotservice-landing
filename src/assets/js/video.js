import Plyr from "plyr";

const videos = document.querySelectorAll('.player__init');

videos.forEach(function(video) {
    new Plyr(video);
})