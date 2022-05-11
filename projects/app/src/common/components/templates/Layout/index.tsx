import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./index.module.scss"

export default function MainLayout(): JSX.Element {
    return (
        <section className={styles.topContainer}>
            <h1>Navbar</h1>
            <Outlet></Outlet>
            <h2>Footer</h2>
        </section>
    )
}
