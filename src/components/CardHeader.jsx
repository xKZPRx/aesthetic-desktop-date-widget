import styles from "./CardHeader.module.css";

function CardHeader() {
    
    return (
        <div className={styles.card}>
            <h1 className={styles.header}>Today's Date</h1>
        </div>
    );
}

export default CardHeader;