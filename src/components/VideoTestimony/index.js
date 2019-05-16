import React from "react"
import VideoCard from "./VideoCard"
import videoData from "./videoData"
import "./VideoTestimony.css"
const VideoTestimony = () => (
  <div className="vidios-container">{videoData.map(VideoCard)}</div>
)

export default VideoTestimony
