import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./index.module.scss"

export default function MainLayout(): JSX.Element {
    return (
        <section className={styles.topContainer}>
            <header>
                <section>
                    <h1>Logo</h1>
                    <p>Search</p>
                    <section className={styles.loginContainer}>
                        <p>Login</p>
                        <p>Signup</p>
                    </section>
                </section>
            </header>
            <section className={styles.layoutContainer}>
                <h1>Navbar</h1>
                <Outlet></Outlet>
                <h2>Footer</h2>
            </section>
        </section>
    )
}
