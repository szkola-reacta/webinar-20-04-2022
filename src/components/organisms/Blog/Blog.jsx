import { useState, useEffect } from 'react';

import { fetchPosts } from 'services/posts';
// const posts = [
//   { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
//   { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
//   { id: 3, title: 'Adam Małysz Zgolił wąs',
//      intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
//    }
//  ];

function BlogTile(props) {
  const { alamaMaKota } = props;
  return (
    <div>
      <h2>{alamaMaKota.title}</h2>
      <p>{alamaMaKota.intro}</p>
    </div>
  );
}

function Blog() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPosts()
    .then(data => setPosts(data.records))
    .catch(() => setError("Try again later"))
  }, []);

  return (
    <div>
      <h1>My awesome blog</h1>
      <hr />
      {error && <p>{error}</p>}
      {posts.map((elem) => (
        <BlogTile key={elem.id} alamaMaKota={elem.fields} />
      ))}
    </div>
  );
}

export { Blog };
