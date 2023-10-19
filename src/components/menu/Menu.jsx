import React from "react";
import styles from "./menu.module.css";
import Image from "next/image";
import Link from "next/link";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subHeading}>{"What's hot"}</h2>
      <h1 className={styles.heading}>Most Popular</h1>
      <MenuPosts withImage={false} />
      
      {/* Middle section */}
      <h2 className={styles.subHeading}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      {/* last section */}
      <h2 className={styles.subHeading}>Chosen By the editor</h2>
      <h1 className={styles.title}>Editors pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
