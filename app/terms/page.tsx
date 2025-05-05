import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Fincom Africa',
  description: 'Read our terms and conditions for using Natchverse services',
};

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
          Terms and Conditions
        </h1>
        <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-lg prose-indigo max-w-none">
        <section className="mb-12 text-white">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to Fincom Africa. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
          </p>
        </section>

        <section className="mb-12 text-white">
          <h2 className="text-2xl font-semibold mb-4">2. Account Registration</h2>
          <p>
            You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.
          </p>
        </section>

        <section className="mb-12 text-white">
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          <p>
            You agree not to use our services for any unlawful purpose or in any way that might harm, damage, or disparage any other party.
          </p>
        </section>

        <section className="mb-12 text-white">
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p>
            All content on our platform, including text, graphics, logos, and software, is our property or the property of our licensors and is protected by copyright laws.
          </p>
        </section>

        <section className="mb-12 text-white">
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p>
            We shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of or inability to use our services.
          </p>
        </section>

        <section className="mb-12 text-white">
          <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Your continued use of our services after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section className="mb-12 text-white">
          <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the jurisdiction where our company is registered.
          </p>
        </section>

        <div className="mt-16 text-center text-gray-600">
          <p>If you have any questions about these Terms, please contact us at <Link href="mailto:info@myfincom.com" className="text-indigo-600 hover:underline">info@myfincom.com</Link>.</p>
        </div>
      </div>
    </div>
  );
}