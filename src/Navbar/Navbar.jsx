import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Search from "../Search/Search";
// import { IoSearchSharp } from "react-icons/io5";

const Navbar=()=>{
    return (
        <nav className={styles.navbar}> 
        <div>
        <Logo />
        </div>
            <Search placeholder="Search a album of your choice"/>
            <Button children="Give Feedback"/>
        </nav>
    )
}

export default Navbar;