class YouTubeController {

  constructor(iframe) {
    this.iframe = typeof iframe === "string"
        ? document.getElementById(iframe)
        : iframe;

    if (!this.iframe) {
      console.error("Iframe not found");
      return;
    }

    this.playerWindow = this.iframe.contentWindow;
  }

  play() {
    this.playerWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
  }

  pause() {
    this.playerWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      "*"
    );
  }

}