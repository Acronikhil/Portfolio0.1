class VideoManager {

    constructor() {
        this.players = {};
        this.currentVideo = null;

        document.querySelectorAll(".yt-video").forEach(iframe => {
            this.players[iframe.id] = new YouTubeController(iframe);
        });
    }

    play(id) {

        if (this.currentVideo && this.currentVideo !== id) {
            this.players[this.currentVideo].pause();
        }

        pauseMusic();

        this.players[id].play();

        this.currentVideo = id;
    }

    pause(id) {

        if (this.players[id]) {
            this.players[id].pause();
        }

        this.currentVideo = null;
    }
}