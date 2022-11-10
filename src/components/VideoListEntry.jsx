var VideoListEntry = ({video, handleNewVideoClick}) => {


  return (
    <div className="video-list-entry media"
    onClick={(event) => handleNewVideoClick(video)}
    >
      <div className="media-left media-middle">
        <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{video.snippet.title}</div>
        <div className="video-list-entry-detail">{video.snippet.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;


// const GroceryListItem = (props) => {
//   const [isOrdered, setIsOrdered] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const style = {
//     textDecoration: isOrdered ? 'line-through' : 'none',
//     fontWeight: isHovered ? 'bold' : 'normal'
//   }

//   return (
//     <li
//       style={style}
//       onClick={() => {setIsOrdered(!isOrdered)}}
//       onMouseEnter={() => {setIsHovered(!isHovered)}}
//       onMouseLeave={() => {setIsHovered(!isHovered)}}
//     >
//       {props.item}
//     </li>
//   )
// }


{/* <img className="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" alt="" /> */}
