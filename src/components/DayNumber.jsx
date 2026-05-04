import styles from "./DayNumber.module.css";
import { useMidnightDate } from "../hooks/useMidnightDate.js";
import { formatDay } from "../utils/formatDay.js";

function DayNumber() {
    const { day } = useMidnightDate();
    
    return (
        <h1 className={styles.header}>{formatDay(day)}</h1>
    );
}

export default DayNumber;