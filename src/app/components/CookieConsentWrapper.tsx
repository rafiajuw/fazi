'use client';

import CookieConsent from 'react-cookie-consent';

const CookieConsentWrapper: React.FC = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      cookieName="hashmiEventsConsent"
      style={{ background: '#6A1B9A' }}
      buttonStyle={{ background: '#FFFFFF', color: '#6A1B9A', fontWeight: 'bold' }}
    >
      We use cookies to enhance your experience. By continuing, you agree to our cookie policy.
    </CookieConsent>
  );
};

export default CookieConsentWrapper;