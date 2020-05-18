import React from "react";
import YouTube from "react-youtube";

class YouTubeVideo extends React.Component {
  videoOnReady(event) {
    event.target.stopVideo();
  }
  render() {
    const opts = {
      width: "400px",
      height: "280px",
      playerVars: {
        autoplay: 1,
      },
    };
    const { videoId } = this.props;
    return (
      <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} />
    );
  }
}
export default YouTubeVideo;
