"use client";

import { ReactNode, Suspense } from "react";

interface SearchParamsWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function SearchParamsWrapper({
  children,
  fallback = <div>Loading...</div>,
}: SearchParamsWrapperProps) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}
