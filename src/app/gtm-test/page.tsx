"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics/gtm";

export default function GTMTest() {
  useEffect(() => {
    // Check if dataLayer is initialized
    if (typeof window !== 'undefined') {
      console.log('dataLayer state:', window.dataLayer);
    }
    
    // Track a test event when page loads
    trackEvent("test_page_view", {
      page_name: "GTM Test Page",
      timestamp: new Date().toISOString()
    });
  }, []);

  const handleTestClick = () => {
    // Track a test click event
    trackEvent("test_button_click", {
      button_name: "Test Button",
      timestamp: new Date().toISOString()
    });
    alert("Event tracked! Check GTM debugger to confirm.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-8">Google Tag Manager Test Page</h1>
      
      <div className="mb-8 max-w-md text-center">
        <p className="mb-4">
          This page is used to test the Google Tag Manager integration. When this page loads, 
          it should send a <code>test_page_view</code> event to GTM.
        </p>
        
        <p className="mb-4">
          You can also click the button below to send a <code>test_button_click</code> event.
        </p>
      </div>
      
      <button 
        onClick={handleTestClick}
        className="px-6 py-3 bg-klare-accent text-white rounded-md hover:bg-opacity-90 transition-all"
      >
        Track Test Event
      </button>
      
      <div className="mt-8 text-sm">
        <p>GTM Container ID: GTM-WVVS7S7W</p>
      </div>
    </div>
  );
}
