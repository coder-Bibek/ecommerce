import Page from "../../components/templates/Page";
import styles from "./index.module.scss"

export default function Home(): JSX.Element {
    return (
        <Page title="HomePage">
            <section className={styles.homeContainer}>
                <p>This is homepage</p>
            </section>
        </Page>
    )
}