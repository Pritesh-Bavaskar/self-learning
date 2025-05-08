import React from 'react';

const PrivacyPolicy = () => {
  const effectiveDate = 'May 8, 2025';
  const appName = 'Ace It';
  const supportEmail = 'support@aceit.com';

  return (
    <div className="privacy-policy container mx-auto max-w-4xl">
      <div className="w-screen bg-gray-900 text-white py-8 mb-6 -mx-[50vw] left-[50%] relative">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center pt-12">Privacy Policy</h1>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">Effective Date: {effectiveDate}</p>

      <p className="mb-4">
        Welcome to {appName} ("we", "our", or "us"). We are committed to protecting your privacy. 
        This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <ul className="list-disc list-inside">
          <li>Personal Information: Name, email address, phone number (optional), payment details</li>
          <li>Usage Data: Exam preferences, performance metrics, question interaction, session data</li>
          <li>Device Data: IP address, browser type, operating system</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside">
          <li>To deliver personalized exam content and track progress</li>
          <li>For customer support and doubt resolution</li>
          <li>To improve our platform and learning experience</li>
          <li>For processing payments and subscription management</li>
          <li>To send important updates and mentor session alerts</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3. Data Sharing</h2>
        <p className="mb-2">We do not sell your data.</p>
        <p>Data is shared only with service providers (like payment gateways or AI APIs) strictly for operational needs.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p className="mb-2">Your data is stored securely using encrypted servers.</p>
        <p>We restrict access to your data to authorized personnel only.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
        <p className="mb-2">You can access, update, or delete your personal data anytime.</p>
        <p>You may opt out of promotional messages.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">6. Children's Privacy</h2>
        <p>Our platform is intended for students aged 16 and above. We do not knowingly collect data from children below 16 years of age.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
        <p>
          If you have any questions or concerns, contact us at:{' '}
          <a 
            href={`mailto:${supportEmail}`} 
            className="text-blue-600 hover:underline"
          >
            {supportEmail}
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
