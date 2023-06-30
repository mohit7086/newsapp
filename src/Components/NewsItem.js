import React from 'react';

const NewsItem = (props)=> {
  
    let { title, description, imageUrl, newsUrl, author, time } = props;
    return (
      <div>
        <div className="card" style={{ top: "30px", marginBottom: "10px"}}>
          <img src={imageUrl} className="card-img-top" style={{ width: "100%", height: "13rem" }} alt="..." />
          <div className="card-body" style={{ height: "17rem", position: "relative" }}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text" style={{ fontSize: "0.8rem", color: "gray" }}>by {author} on {new Date(time).toGMTString()}</p>
            <a href={newsUrl} className="btn btn-sm btn-danger" style={{ position: "absolute", bottom: "10px" }}>Read More</a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
