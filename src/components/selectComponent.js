import React from "react"
import Home from "./Home"
import EventDatabase from "./EventDatabase"
import VideoTestimony from "./VideoTestimony"
import PressDatabase from "./PressDatabase"
import Sumgait from "./Sumgait"
import Maragha from "./Maragha"
import Other from "./Other"
import AboutUs from "./AboutUs"
export default selectedTab => {
  switch (selectedTab) {
    case "Home":
      return <Home />
    case "Event Database":
      return <EventDatabase />
    case "Press Database":
      return <PressDatabase />
    case "Video Testimony":
      return <VideoTestimony />
    case "Sumgait":
      return <Sumgait />
    case "Maragha":
      return <Maragha />
    case "Other":
      return <Other />
    case "About Us":
      return <AboutUs />
    default:
      return <Home />
  }
}
