import { useEffect, useState, useRef } from "react";

function getToday() {
    const now = new Date();
    return {
        day: now.getDate(),
        month: now.getMonth(),
    };
}

function msUntilMidnight() {
    const now = new Date();
    const tomorrow = new Date();

    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    return tomorrow - now;
}

export function useMidnightDate() {
    const [date, setDate] = useState(getToday());
    const timeoutRef = useRef(null);

    useEffect(() => {
        const schedule = () => {
            const delay = msUntilMidnight();

            timeoutRef.current = setTimeout(() => {
                setDate(getToday());
                schedule();
            }, delay);
        };

        schedule();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    return date;
}