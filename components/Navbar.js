import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Navbar = () => {
  const [selected, setSelected] = useState(1);

  return (
    <nav className={styles.mainnav}>
      <ul>
        <Link href={"/"}>
          <li
            onClick={() => setSelected(1)}
            className={selected === 1 ? styles.hoverEffect : ""}
            // style={selected && { borderBottom: "2px solid white" }}
          >
            Home
          </li>
        </Link>
        <Link href={"/about"}>
          <li
            onClick={() => setSelected(2)}
            className={selected === 2 ? styles.hoverEffect : ""}
          >
            About
          </li>
        </Link>
        <Link href={"/contact"}>
          <li
            onClick={() => setSelected(3)}
            className={selected === 3 ? styles.hoverEffect : ""}
          >
            Contact
          </li>
        </Link>
        <Link href={"/blog"}>
          <li
            onClick={() => setSelected(4)}
            className={selected === 4 ? styles.hoverEffect : ""}
          >
            Blogs
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
