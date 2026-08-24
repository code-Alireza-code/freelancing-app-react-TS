import { useCallback, useEffect, useState } from "react";

export function useCountdown(initialSeconds: number) {
  const [expiresAt, setExpiresAt] = useState<number | null>(null);
  const [remaining, setRemaining] = useState(0);

  const start = useCallback(() => {
    const expiration = Date.now() + initialSeconds * 1000;

    setExpiresAt(expiration);
    setRemaining(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    if (!expiresAt) return;

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
