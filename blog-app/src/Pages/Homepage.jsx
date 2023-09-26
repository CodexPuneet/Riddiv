import React from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <div>
      <div className={styles.photo_list}>
        <h1 style={{color:"teal", fontFamily:"Cursive", fontSize:'28px', margin:'20px 0px' }}>Blog Posts</h1>
        <div className={styles.grid_container}>
          {data.map((el) => (
            <Link to={`/post/${el.id}`} key={el.id}>
              <div className={styles.grid_item}>
                <img
                  src={el.image}
                  className={styles.Image}
                  alt={el.blog_name}
                />
                <p className={styles.title}>{el.blog_name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
