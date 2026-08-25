import { useCallback, useEffect, useState } from "react";

export function useCountdown(duration: number) {
  const [expiresAt, setExpiresAt] = useState<number | null>(null);
  const [remaining, setRemaining] = useState(0);

  const start = useCallback(() => {
    setExpiresAt(Date.now() + duration * 1000);
  }, [duration]);

  useEffect(() => {
    if (expiresAt === null) {
      return;
    }

    const update = () => {
      const seconds = Math.max(0, Math.ceil((expiresAt - Date.now()) / 1000));

      setRemaining(seconds);

      if (seconds === 0) {
        setExpiresAt(null);
      }
    };

    update();

    const interval = setInterval(update, 250);

    return () => clearInterval(interval);
  }, [expiresAt]);

  return {
    remaining,
    isRunning: remaining > 0,
    isFinished: remaining === 0,
    start,
  };
}
