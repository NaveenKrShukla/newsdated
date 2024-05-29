import React, { useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const Search = (props) => {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    props.setProgress(10);
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&country=${props.country}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setLoading(false);
    props.setProgress(100);
  };

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
        Search News
      </h1>
      <form onSubmit={handleSearch}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-dark" type="submit">
            Search
          </button>
        </div>
      </form>
      {loading && <Spinner />}
      <div className="row">
        {articles.map((article) => (
          <div className="col-md-4" key={article.url}>
            <NewsItem
              title={article.title}
              description={article.description}
              imageUrl={article.urlToImage}
              newsUrl={article.url}
              author={article.author}
              date={article.publishedAt}
              source={article.source.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Search.propTypes = {
  setProgress: PropTypes.func.isRequired,
  apiKey: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
  country: PropTypes.string,
};

Search.defaultProps = {
  pageSize: 5,
  country: 'in',
};

export default Search;
