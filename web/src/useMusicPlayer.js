import { useContext } from "react"
import { MusicPlayerContext } from "./context/MusicPlayerContext"

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext)

  console.log(state)

  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePlay()
    } else {
      state.audioPlayer.pause()
      state.audioPlayer = new Audio(state.tracks[index].node.url)
      state.audioPlayer.play()
      setState(state => ({
        ...state,
        currentTrackIndex: index,
        isPlaying: true,
      }))
    }
  }

  function togglePlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause()
    } else {
      state.audioPlayer.play()
    }
    setState(state => ({ ...state, isPlaying: !state.isPlaying }))
  }
  return {
    isPlaying: state.isPlaying,
    togglePlay,
    playTrack,
    currentTrackName:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].node.title,
    trackList: state.tracks,
  }
}

export default useMusicPlayer
