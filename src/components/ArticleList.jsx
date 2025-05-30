import React, { useEffect, useState } from "react";

const API_URL = "https://www.crmcarecloud.com/wp-json/wp/v2/posts";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`${API_URL}?page=${page}&per_page=5&_embed`)
      .then((res) => {
        setTotalPages(Number(res.headers.get("X-WP-TotalPages")));
        return res.json();
      })
      .then(setArticles)
      .catch(console.error);
  }, [page]);

  return (
    <div className="article-list-wrapper">
      {articles.map((post) => (
        <div key={post.id} className="article-card">
          <h2 className="article-title">
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="article-link">
              {post.title.rendered}
            </a>
          </h2>
          <p className="article-meta">
            <strong className="article-author">Autor:</strong> {post._embedded.author[0].name} <br />
            <strong className="article-date">Datum:</strong> {new Date(post.date).toLocaleDateString()}
          </p>
        </div>
      ))}

      <div className="pagination">
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
          Předchozí
        </button>
        <span className="pagination-info">Stránka {page} z {totalPages}</span>
        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))} disabled={page === totalPages}>
          Další
        </button>
      </div>
    </div>
  );
}

export default ArticleList;
