import { useEffect, useState } from "react";
import axios from "axios"

export const Feed = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((resp) => {
        setPosts(resp?.data?.posts || []);
    })
  }, []);

  return (
    <section className='feed-section' >
        {
            posts?.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className='post-card' >
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <h1>No posts available</h1>
            )
        }
    </section>
  )
}
