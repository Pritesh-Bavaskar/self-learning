import React from 'react';

const TermsOfService = () => {
  const effectiveDate = 'May 8, 2025';
  const appName = 'Ace It';
  const supportEmail = 'support@aceit.com';

  return (
    <div className="terms-of-service container mx-auto px-4 max-w-4xl">
      <div className="w-screen bg-gray-900 text-white py-8 mb-6 -mx-[50vw] left-[50%] relative">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center pt-12">Terms of Service</h1>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">Effective Date: {effectiveDate}</p>

      <p className="mb-4">
        Please read these Terms of Service ("Terms") carefully before using {appName} ("we", "our", "us"). 
        By accessing or using our platform, you agree to be bound by these Terms.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. Use of Our Services</h2>
        <ul className="list-disc list-inside">
          <li>You must be at least 16 years old to use our services</li>
          <li>You are responsible for maintaining the confidentiality of your login credentials</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property</h2>
        <ul className="list-disc list-inside">
          <li>All questions, solutions, videos, and content are the property of {appName}</li>
          <li>You may not reproduce, resell, or distribute content without written permission</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3. Subscription and Payment</h2>
        <ul className="list-disc list-inside">
          <li>Monthly fees are non-refundable unless otherwise stated</li>
          <li>Subscription is personal and non-transferable</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">4. AI Doubt-Solving</h2>
        <ul className="list-disc list-inside">
          <li>The platform offers limited AI-based doubt support (within a monthly token quota)</li>
          <li>Misuse of the AI feature (spam or unrelated queries) may result in restriction or ban</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
        <p>We may suspend or terminate your access if you breach these Terms or misuse the platform.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
        <p>We are not liable for any exam outcomes or indirect losses. Use the platform as a learning aid, not a guarantee.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
        <p>We may update these Terms from time to time. Continued use means you accept the revised Terms.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
        <p>
          Questions about these Terms? Reach us at:{' '}
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

export default TermsOfService;
