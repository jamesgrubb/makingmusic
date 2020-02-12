import { useContext } from "react"
import { MusicPlayerContext } from "./context/MusicPlayerContext"

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext)

  function togglePlay() {
    setState(state => ({ ...state, isPlaying: !state.isPlaying }))
  }

  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePlay()
    } else {
      setState(state => ({
        ...state,
        currentTrackIndex: index,
        isPlaying: true,
      }))
    }
  }

  return {
    togglePlay,
    playTrack,
  }
}

export default useMusicPlayer
