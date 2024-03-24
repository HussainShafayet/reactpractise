import React, {useState, useEffect} from 'react'

export default function GetPost() {
    const [isLoading, setLoading] = useState(true);
    const [post, setPost] = useState({});
    const [isError, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/5')
        .then(response => response.json())
        .then((data) => {
            setLoading(false);
            setPost(data);
            console.log(data);
        })
        .catch(error => {
            setLoading(false);
            setPost({});
            setError('Something went wrong!');
        });
    }, []);
  return (
    <div>
        {isLoading ? <p>Loading...</p> : <p>{post.title}</p>}
        {isError || null}
    </div>
  )
}
