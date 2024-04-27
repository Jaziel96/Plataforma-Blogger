import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Obtener detalles del usuario
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user details');
        }
        const userDetails = await userResponse.json();
        setUser(userDetails);

        // Obtener publicaciones del usuario
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        if (!postsResponse.ok) {
          throw new Error('Failed to fetch user posts');
        }
        const postsData = await postsResponse.json();
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching user details and posts:', error);
      }
    };

    fetchUserDetails();
  }, [id]);

  return (
    <div>
      {user && (
        <div>
          <h2>User Details</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Website: {user.website}</p>
        </div>
      )}

      <h2>User Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`} className='font-semibold text-blue-500 hover:underline'>
              {post.title}
            </Link>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDetails;
