import Video from 'react-video-renderer';

<Video src="https://mysite.com/video.mp4">
  {(video, state, actions) => (
    <div>
      {video}
      <div>{state.currentTime} / {state.duration} / {state.buffered}</div>
      <progress value={state.currentTime} max={state.duration} onChange={actions.navigate} />
      <progress value={state.volume} max={1} onChange={actions.setVolume} />
      <button onClick={actions.play}>Play</button>
      <button onClick={actions.pause}>Pause</button>
      <button onClick={actions.requestFullScreen}>Fullscreen</button>
    </div>
  )}
</Video>