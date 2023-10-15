import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import AuthLinks from '../authLinks/AuthLinks'
import Themetoggle from '../themeToggle/ThemeToggle'
import Link from 'next/link'

 const Navbar = () =>{
    return (
        <div className={styles.container}>
        <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width ={24} height={24}/>
        <Image src="/instagram.png" alt="instagram" width ={24} height={24}/>
        <Image src="/tiktok.png" alt="tiktok" width ={24} height={24}/>
        <Image src="/youtube.png" alt="youtube" width ={24} height={24}/>
        </div>
        <div className={styles.logo}>RajdeepBlog</div>
        <div className={styles.links}>
        <Themetoggle/>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks/>
        </div>
        </div>
    );
 };

 export default Navbar