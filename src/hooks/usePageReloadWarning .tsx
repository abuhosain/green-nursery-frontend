import { useEffect } from 'react';

const usePageReloadWarning = (shouldWarn: boolean) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (shouldWarn) {
        const message = 'You have items in your cart. Are you sure you want to leave?';
        event.preventDefault();
        event.returnValue = message; // Standard way to trigger the dialog
        return message; // For some browsers
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [shouldWarn]);
};

export default usePageReloadWarning;
