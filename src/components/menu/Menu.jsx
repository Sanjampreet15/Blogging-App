import React from "react";
import styles from "./menu.module.css";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subHeading}>{"What's hot"}</h2>
      <h1 className={styles.heading}>Most Popular</h1>
      <div href="/" className={styles.item}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.posttitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.Username}>John Doe</span>
              <span className={styles.date}> - .10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.Culture}`}>
              Culture
            </span>
            <h3 className={styles.posttitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.Username}>John Doe</span>
              <span className={styles.date}> - .10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Food
            </span>
            <h3 className={styles.posttitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.Username}>John Doe</span>
              <span className={styles.date}> - .10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.Fashion}`}>
              Fashion
            </span>
            <h3 className={styles.posttitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.Username}>John Doe</span>
              <span className={styles.date}> - .10.03.2023</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Middle section */}
      <h2 className={styles.subHeading}>Chosen By the editor</h2>
      <h1 className={styles.title}>Editors pick</h1>

      {/* last section */}
      <h2 className={styles.subHeading}>Chosen By the editor</h2>
      <h1 className={styles.title}>Editors pick</h1>
      <div href="/" className={styles.item}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.posttitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.Username}>John Doe</span>
              <span className={styles.date}> - .10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.Culture}`}>
              Culture
            </span>
            <h3 className={styles.posttitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.Username}>John Doe</span>
              <span className={styles.date}> - .10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Food
            </span>
            <h3 className={styles.posttitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.Username}>John Doe</span>
              <span className={styles.date}> - .10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.Fashion}`}>
              Fashion
            </span>
            <h3 className={styles.posttitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.Username}>John Doe</span>
              <span className={styles.date}> - .10.03.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
