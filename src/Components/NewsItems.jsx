import React from 'react';
import image from '../assets/news.jpg';
import  { useState } from 'react';

const NewsItems = ({ title, description, src, url }) => {
  const [read, setRead] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleReadClick = () => {
    setRead(!read);
  };

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  return (
    <div className="mb-4 d-inline-block my-3 mx-3 px-3 py-1">
      <div className="card bg-black text-light px-2 py-2" style={{ width: '18rem' }}>
        <img src={src ?src :image} style={{ height: "200px", width: "100%" }} className="card-img-top" alt="News" />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text ">{description ? description.slice(0, 90) : "No description available"}</p>
          <pre><a href={url} className="btn btn-primary"> More</a> <button className={`btn btn-success ${read ? 'read' : ''}`} onClick={handleLikeClick}>{read ? 'read' : 'unread'}</button> <button className={`btn btn-danger ${liked ? 'liked' : ''}`} onClick={handleLikeClick}>{liked ? 'Liked' : 'Like'}</button>       
       </pre> </div>
      </div>
    </div>
  );
}

export default NewsItems;


