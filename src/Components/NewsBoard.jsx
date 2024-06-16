import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItems';
import './NewsBoard.css'; // Import the CSS file

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error('Error fetching data:', error));
  }, [category]);

  return (
    <div>    
        <marquee className="news-marquee"  direction="right">

            <h2 className='text-center'>
      <span className='text-white'>Updated </span> <span className='badge bg-danger'>News</span>        
      </h2>      </marquee>

      {articles.map((news, index) => (
        <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  );
}

export default NewsBoard;
