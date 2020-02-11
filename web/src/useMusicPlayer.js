import { useContext } from "react"
import { MusicPlayerContext } from "./context/MusicPlayerContext"

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext)

  function togglePlay() {
    setState(state => ({ ...state, isPlaying: !state.isPlaying }))
  }

  return {
    togglePlay,
  }
}

export default useMusicPlayer
