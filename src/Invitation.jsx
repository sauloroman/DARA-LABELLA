import { Hero, Timer, Gallery, Location, Presents, Confirm, Farewell, Kid } from "./site"
import { Music } from "./site/components/Music"

export const Invitation = () => {
  return (
    <>
      <Music />
      <div className="container">
        <Hero />
        <Kid />
        <Timer />
        <Gallery />
        <Location />
        <Presents />
        <Confirm />
        <Farewell />
        {/* <Footer /> */}
      </div>
    </>
  )
}
