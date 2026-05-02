import CardHeader from "./CardHeader.jsx";
import DateDisplay from "./DateDisplay.jsx";
import styles from "./DateCard.module.css";

function DateCard() {

    return (
        <div className={styles.card}>
            <CardHeader />
            <DateDisplay />
        </div>
    );
}

export default DateCard;