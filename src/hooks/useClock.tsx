import { useEffect, useState } from "react";

export const useClock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const current = new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setTime(current);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
};