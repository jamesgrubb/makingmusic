import { useContext } from "react"
import { MusicPlayerContext } from "./context/MusicPlayerContext"

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext)
  console.log("URL from state " + state.tracks[0].node.title)
  console.log(state.tracks[0])
  function playTrack(index) {
    console.log(
      "clicked index " +
        index +
        " state.currentTrackIndex " +
        state.currentTrackIndex
    )

    if (index === state.currentTrackIndex) {
      togglePlay()
    } else {
      var playPromise = state.audioPlayer.play()
      if (playPromise !== undefined) {
        playPromise
          .then(_ => {
            state.audioPlayer.pause()
          })
          .catch(error => {
            console.log(error)
          })
      }
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
      var playPromise = state.audioPlayer.play()
      if (playPromise !== undefined) {
        playPromise
          .then(_ => {
            state.audioPlayer.pause()
          })
          .catch(error => {
            console.log(error)
          })
      }
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
