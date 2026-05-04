import styles from "./MonthLabel.module.css";
import { useMidnightDate } from "../hooks/useMidnightDate.js";
import { formatMonth } from "../utils/formatMonth.js"

function MonthLabel() {
    const { month } = useMidnightDate();
    
    return (
        <h1 className={styles.label}>{formatMonth(month)}</h1>
    );
}

export default MonthLabel;