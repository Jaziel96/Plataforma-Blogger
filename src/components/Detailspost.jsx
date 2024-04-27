import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Detailspost = () => {
  const { id } = useParams(); // Obtener el id de los parámetros de la URL
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch post details
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!postResponse.ok) {
          throw new Error('Failed to fetch post details');
        }
        const postData = await postResponse.json();
        setPost(postData);

        // Fetch user details
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user details');
        }
        const userData = await userResponse.json();
        setUser(userData);

        // Fetch comments
        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        if (!commentsResponse.ok) {
          throw new Error('Failed to fetch comments');
        }
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {post && (
        <div>
          <h2>Title: {post.title}</h2>
          <p>Body: {post.body}</p>
        </div>
      )}

      {user && (
        <div>
          <p>Name: <Link to={`/user/${post.userId}`} className='font-semibold text-blue-500 hover:underline'>{user.name}</Link></p>
          <p>Email: {user.email}</p>
          <p>Website: {user.website}</p>
        </div>
      )}

      <h3>Comments</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <p>Name: {comment.name}</p>
            <p>Email: {comment.email}</p>
            <p>Body: {comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Detailspost;
