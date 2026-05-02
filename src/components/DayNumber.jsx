import styles from "./DayNumber.module.css";
import { useMidnightDate } from "../hooks/useMidnightDate.js";

function DayNumber() {
    const { day } = useMidnightDate();
    const formatDay = (d) => String(d).padStart(2, "0");
    
    return (
        <h1 className={styles.header}>{formatDay(day)}</h1>
    );
}

export default DayNumber;