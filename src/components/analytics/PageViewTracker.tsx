"use client";

import { useEffect, ReactNode } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/lib/analytics/gtm";
import SearchParamsWrapper from "@/components/utils/SearchParamsWrapper";

interface PageViewTrackerProps {
  children: ReactNode;
}

const PageViewTrackerContent = ({ children }: PageViewTrackerProps) => {
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

const PageViewTracker = ({ children }: PageViewTrackerProps) => {
  return (
    <SearchParamsWrapper>
      <PageViewTrackerContent>{children}</PageViewTrackerContent>
    </SearchParamsWrapper>
  );
};

export default PageViewTracker;
