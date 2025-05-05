import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Fincom Africa',
  description: 'Learn how Fincom Africa collects, uses, and protects your personal information',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16  ">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-lg prose-indigo max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
          <p className='text-white'>
            We collect information you provide directly, including name, email address, and payment details when you register or make a purchase.
          </p>
          <p className='text-white'>
            We automatically collect certain information about your device and usage through cookies and similar technologies.
          </p>
        </section>

        <section className="mb-12 text-white">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain our services</li>
            <li>To process transactions</li>
            <li>To communicate with you</li>
            <li>To improve our services</li>
            <li>For security and fraud prevention</li>
          </ul>
        </section>

        <section className="mb-12 text-white">
          <h2 className="text-2xl font-semibold mb-4">3. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers who assist in our operations</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners in case of merger or acquisition</li>
          </ul>
        </section>

        <section className="mb-12 text-white">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.
          </p>
        </section>

        <section className="mb-12 text-white">
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p>
            Depending on your location, you may have rights to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Object to processing</li>
            <li>Request data portability</li>
            <li>Withdraw consent</li>
          </ul>
        </section>

        <section className="mb-12 text-white">
          <h2 className="text-2xl font-semibold mb-4">6. International Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your own, which may have different data protection laws.
          </p>
        </section>

        <section className="mb-12 text-white">
          <h2 className="text-2xl font-semibold mb-4">7. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under 13. We do not knowingly collect personal information from children.
          </p>
        </section>

        <div className="mt-16 text-center  text-white">
          <p>For privacy-related inquiries, contact our Data Protection Officer at <Link href="mailto:info@myfincom.com" className="text-indigo-600 hover:underline">info@myfincom.com</Link>.</p>
        </div>
      </div>
    </div>
  );
}