
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";
import styles from "./Blog.module.css";

const Blog = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState([]);

  useEffect(() => {
    const post = data.find((post) => post.id === parseInt(id));
    setBlogPost(post);
  }, [id]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.box}>
      
      <div className={styles.mainBox}>
        <img
          className={styles.Image}
          src={blogPost.image}
          alt={blogPost.author_name}
        />
        <h1 className={styles.name}>{blogPost.blog_name}</h1>
        <p className={styles.blogDetails}>{blogPost.blog_details}</p>
      </div>
      <br />
      <Link to="/">
        <button className={styles.button}> Go Back</button>
      </Link>
      
    </div>
  );
};

export default Blog;