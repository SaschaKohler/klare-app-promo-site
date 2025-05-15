// Add global type for dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Push data to Google Tag Manager dataLayer
 * @param data - The data to push to the dataLayer
 */
export const pushToDataLayer = (data: Record<string, any>): void => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
};

/**
 * Track a page view event
 * @param url - The URL of the page being viewed
 * @param title - The title of the page being viewed
 */
export const trackPageView = (url: string, title: string): void => {
  pushToDataLayer({
    event: 'pageview',
    page: {
      path: url,
      title: title
    }
  });
};

/**
 * Track a custom event
 * @param eventName - The name of the event
 * @param eventParams - Additional parameters for the event
 */
export const trackEvent = (eventName: string, eventParams: Record<string, any> = {}): void => {
  pushToDataLayer({
    event: eventName,
    ...eventParams
  });
};
