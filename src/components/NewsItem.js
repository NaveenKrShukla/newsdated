import React from 'react';

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="card h-100 ">
      <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text my--2">{description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toDateString()} | Source: {source}</small>
      </div>
      <div className="card-footer">
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;
