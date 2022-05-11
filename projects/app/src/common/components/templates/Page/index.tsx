import React from "react"
import styles from "./index.module.scss"

interface PageProps {
    children: React.ReactNode
    title?: string
}

export default function Page({ children, title }: PageProps): JSX.Element {
    return (
        <main className={styles.mainContainer}>
            {title && <h1>{title}</h1>}
            {children}
        </main>
    )
}
