import React from "react"
import styles from "./index.module.scss"

interface PageProps {
    children: React.ReactNode
    title?: string
}

export default function Page({ children, title }: PageProps): JSX.Element {
    return (
        <main>
            {title && <h1>{title}</h1>}
            <section className={styles.mainContainer}>
                {children}
            </section>
        </main>
    )
}