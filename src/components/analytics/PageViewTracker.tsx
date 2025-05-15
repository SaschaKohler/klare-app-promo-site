"use client";

import { useEffect, ReactNode } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/lib/analytics/gtm";

interface PageViewTrackerProps {
  children: ReactNode;
}

const PageViewTracker = ({ children }: PageViewTrackerProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      // Construct full URL with search params
      const url = searchParams.size > 0 
        ? `${pathname}?${searchParams.toString()}`
        : pathname;

      // Track page view
      trackPageView(url, document.title);
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
};

export default PageViewTracker;
