const checkPermission = () => {
    if (!("serviceWorker" in navigator)) {
      throw new Error("No support");
    }
  };
  
  const registerSw = async () => {
    try {
      const registration = await navigator.serviceWorker.register('sw.js');
      return registration;
    } catch (error) {
      console.error('Service worker registration failed:', error);
      // You can handle the error here, such as showing a user-friendly message
      // or performing fallback behavior.
    }
  };
  
  try {
    checkPermission();
    registerSw();
  } catch (error) {
    console.error('Error during service worker setup:', error);
    // You can handle the error here, such as showing a user-friendly message
    // or performing fallback behavior.
  }
  