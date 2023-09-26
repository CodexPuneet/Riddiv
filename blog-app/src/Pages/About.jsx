import React from "react";
import data from "../data.json";
import styles from "./About.module.css";

const About = () => {
    return (
        <div>
          <div className={styles.photo_list}>
            <h1 style={{color:"teal", fontFamily:"Cursive", fontSize:'28px', margin:'20px 0px' }}>About Page</h1>
            <div className={styles.grid_container}>
              {data.map((el) => (
                <div key={el.id} className={styles.grid_item}>
                  <img src={el.image} className={styles.image} alt={el.blog_name} />
                  <p className={styles.title}>Blog Name: {el.blog_name}</p>
                  <p>Author Name: {el.author_name}</p>
                  <p> Email: {el.email}</p>
                  <p> Gender: {el.gender}</p>
                  <p> Blog Details:- {el.author_details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };


export default About