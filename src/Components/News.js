import React, {useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = ({ setProgress,...props }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);

  const updateNews = async () => {
    setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    setProgress(50);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResult(parsedData.totalResults);
    setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  

  // ...

  // const handleOnNext = async () => {
  //  setaPge(page+1)
  //  updateNews();
  // };

  // const handleOnPrev = async () => {
  //   setaPge(page-1)
  //   updateNews();
  // };

  // ...

  
    function sentenceCase(str) {
      return str.toLowerCase().replace(/(^|\s)\S/g, function (match) {
        return match.toUpperCase();
      });
    }
    return (
      <div className="container my-2">
        <div className="heading" >
  <h3 style={{ marginTop: "50px", display: "inline-block", marginRight: "5px" }}>
    Fresh Feed -
  </h3>
  <h4 style={{ display: "inline-block", marginLeft: "5px" }}>
    {sentenceCase(props.category)}
  </h4>
</div>


        {loading && <Spinner />}
        <div className="row my-10 ">
          {articles.map((article, index) => (
            <div className="col-md-3" key={index}>
              <NewsItem
                title={article.title?.slice(0, 30)}
                description={article.description?.slice(0, 80)}
                newsUrl={article.url}
                imageUrl={article.urlToImage}
                author={article.author}
                time={article.publishedAt}
              />
            </div>
          ))}
        </div>
        {/* <div className="d-flex justify-content-between my-5">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handleOnPrev}
            style = {{top : "10px",position:"relative" }}
          >
            &larr;Prev
          </button>
          <button
            disabled={page + 1 > Math.ceil(totalResult / props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={handleOnNext}
            style = {{top : "10px",position:"relative"}}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );

   
  
}
News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "science",
  };
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
export default News;
