import { InfiniteQueryObserverResult } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface useIntersectionObserverProps {
  threshold?: number;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
}

const useIntersectionObserver = ({
  hasNextPage,
  fetchNextPage,
  threshold,
}: useIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(
      async (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasNextPage) {
          await fetchNextPage();
        }
      },
      { threshold: threshold || 0.5 }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [target, hasNextPage, fetchNextPage, threshold]);

  return { setTarget };
};

export default useIntersectionObserver;
