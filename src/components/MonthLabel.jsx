import styles from "./MonthLabel.module.css";
import { useMidnightDate } from "../hooks/useMidnightDate.js";

const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

function MonthLabel() {
    const { month } = useMidnightDate();
    
    return (
        <h1 className={styles.label}>{months[month]}</h1>
    );
}

export default MonthLabel;