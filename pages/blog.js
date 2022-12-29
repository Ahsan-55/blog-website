import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  // console.log(props);
  // useEffect(() => {

  // }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogData) => {
          return (
            <Link key={blogData.slug} href={`/blogpost/${blogData.slug}`}>
              <div className={styles.blogItem}>
                <h3>{blogData.title}</h3>
                <p className={styles.blogItemP}>
                  {blogData.content.substr(0, 200)}...
                </p>
              </div>
            </Link>
          );
        })}
      </main>
    </div>
  );
};

//Server Side Rendering
export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();

  return {
    props: { allBlogs },
  };
}

export default blog;
