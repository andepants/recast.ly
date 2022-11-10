import exampleVideoData from '../data/exampleVideoData.js'
import VideoList from './VideoList.js'
import Search from './Search.js'
import VideoPlayer from './VideoPlayer.js'
import searchYouTube from "../lib/searchYouTube.js";

const { useState } = React;

//bring in setState and useState properly

//(in view goes here) use <Search/>
var App = () => {

  // var clickedVideo = exampleVideoData[0]; // || whatever we click

  // callback inside of app that is passed down to each videoListEntry
  //

  //const onListItemClick = (event) => {
    //console.log('clicked bruh');
  //};

  //const [isDone, setIsDone] = useState(false);

  //Initialize a state in App to keep track of all the videos in the video list.

  const [video, setClickedVideo] = useState(null);
  const [videos, setVideoTracker] = useState([]);

  const getYouTubeVideos = (query) => {
    searchYouTube((query, (videos)) => {
      setClickedVideo(videos[0]);
      setVideoTracker(videos);
    });
  };

  //Initialize a state in App to keep track of the current video in the player.

  //Pass down these states as props to the children components. Continue to use the example data.

  const handleNewVideoClick = (video) => {
    setClickedVideo(video);
  }

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search handleSearchInputChange={getYouTubeVideos} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em> <VideoPlayer video={video}/></h5></div>
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData} handleNewVideoClick={handleNewVideoClick}/>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;



//<div><h5><em>videoList</em> view goes here</h5></div>

//<VideoList videoItems={exampleVideoData}/>