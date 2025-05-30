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
    <div>
      {articles.map((post) => (
        <div key={post.id} style={{ marginBottom: "2rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
          <h2>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              {post.title.rendered}
            </a>
          </h2>
          <p>
            <strong>Autor:</strong> {post._embedded.author[0].name} <br />
            <strong>Datum:</strong> {new Date(post.date).toLocaleDateString()}
          </p>
        </div>
      ))}

      <div style={{ marginTop: "2rem" }}>
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
          Předchozí
        </button>
        <span style={{ margin: "0 1rem" }}>Stránka {page} z {totalPages}</span>
        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))} disabled={page === totalPages}>
          Další
        </button>
      </div>
    </div>
  );
}

export default ArticleList;
