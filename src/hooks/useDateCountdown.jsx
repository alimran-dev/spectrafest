import { useEffect, useState } from "react";

const useDateCountdown = (date) => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const eventDate = new Date(date);
  const now = new Date().getTime();
  const remaining = eventDate - now;

  const dayLeft = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hourLeft = Math.floor(
    (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minuteLeft = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const secondLeft = Math.floor((remaining % (1000 * 60)) / 1000);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDay(dayLeft);
      setHour(hourLeft);
      setMinute(minuteLeft);
      setSecond(secondLeft);
    }, 1000);
    if (remaining < 0) {
        clearTimeout(timer);
        setDay(0);
        setHour(0);
        setMinute(0);
        setSecond(0);
    }
  },[dayLeft, hourLeft, minuteLeft, remaining, secondLeft]);
  return { day, hour, minute, second };
};

export default useDateCountdown;
