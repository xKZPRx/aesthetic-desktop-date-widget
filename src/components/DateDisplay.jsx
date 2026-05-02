import DayNumber from "./DayNumber.jsx";
import MonthLabel from "./MonthLabel.jsx";
import styles from "./DateDisplay.module.css";

function DateDisplay() {
    
    return (
        <div className={styles.card}>
            <DayNumber />
            <MonthLabel />
        </div>
    );
}

export default DateDisplay;