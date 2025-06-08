import React, { useState, useEffect, useCallback } from 'react';
import ExitIntentModal from './ExitIntentModal';

const ExitIntentHandler: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  
  // Use this to track whether we've shown the modal during this session
  useEffect(() => {
    const sessionHasTriggered = sessionStorage.getItem('exitIntentShown');
    if (sessionHasTriggered === 'true') {
      setHasTriggered(true);
    }
  }, []);
  
  const handleExitIntent = useCallback((e: MouseEvent) => {
    // Only trigger if moving to the top of the page
    if (
      e.clientY <= 30 && // User's mouse is near the top
      !hasTriggered && // We haven't shown the modal yet
      document.activeElement?.tagName !== 'INPUT' && // User is not in a form field
      document.activeElement?.tagName !== 'TEXTAREA' // User is not in a form field
    ) {
      setShowModal(true);
      setHasTriggered(true);
      sessionStorage.setItem('exitIntentShown', 'true');
    }
  }, [hasTriggered]);
  
  useEffect(() => {
    // Only add listener after user has been on the page for at least 5 seconds
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleExitIntent);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleExitIntent);
    };
  }, [handleExitIntent]);
  
  const handleClose = () => {
    setShowModal(false);
  };
  
  return <ExitIntentModal isOpen={showModal} onClose={handleClose} />;
};

export default ExitIntentHandler;
