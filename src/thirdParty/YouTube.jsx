import React from "react";
import YouTube from "react-youtube";

class YouTubeVideo extends React.Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: "300px",
      width: "100%",
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
