import { useState, useEffect } from 'react';

function Home2() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data.products);  // Assurez-vous que 'data.products' correspond à la structure de votre API
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <ul>
        {posts.map(product => (
          <li style={{listStyle:"non"}} key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home2;
