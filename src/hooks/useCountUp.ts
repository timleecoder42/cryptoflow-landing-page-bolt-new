import { useState, useEffect, useRef, useCallback } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
}

export function useCountUp({
  end,
  duration = 3000, // 默認動畫持續時間 3 秒
  delay = 0,
  prefix = '',
  suffix = '',
}: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const animationStartedRef = useRef(false);

  const start = useCallback(() => {
    if (animationStartedRef.current) return; // 防止重複觸發動畫
    animationStartedRef.current = true;

    const startTime = Date.now() + delay;
    const endValue = Math.floor(end);

    timerRef.current = setInterval(() => {
      const now = Date.now();
      if (now < startTime) return;

      const progress = Math.min((now - startTime) / duration, 1);
      const currentValue = Math.floor(endValue * progress);

      setCount(currentValue);

      // 在控制台中顯示進度
      console.log(`Animating: ${currentValue}/${endValue} (${Math.floor(progress * 100)}%)`);

      if (progress === 1) {
        console.log('Animation completed.');
        clearInterval(timerRef.current!);
        timerRef.current = null;
      }
    }, 16); // 更新頻率約為 60 FPS
  }, [end, duration, delay]);

  useEffect(() => {
    return () => {
      // 清理計時器
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return {
    count: `${prefix}${count}${suffix}`,
    start,
  };
}
