import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookies Policy | Fincom Africa',
  description: 'Learn about how we use cookies and similar technologies',
};

export default function CookiesPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
          Cookies Policy
        </h1>
        <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-lg prose-indigo max-w-none">
        <section className="mb-12 text-white">
          <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit websites. They help the site remember information about your visit.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Cookies</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">Essential</td>
                  <td className="px-6 py-4">Necessary for site functionality</td>
                  <td className="px-6 py-4">Authentication, security</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">Performance</td>
                  <td className="px-6 py-4">Improve user experience</td>
                  <td className="px-6 py-4">Analytics, error tracking</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">Functional</td>
                  <td className="px-6 py-4">Remember preferences</td>
                  <td className="px-6 py-4">Language settings, themes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">Marketing</td>
                  <td className="px-6 py-4">Personalized advertising</td>
                  <td className="px-6 py-4">Tracking across sites</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12 text-white">
          <h2 className="text-2xl font-semibold mb-4">3. Third-Party Cookies</h2>
          <p>
            We may use services like Google Analytics that set their own cookies to help us analyze site usage.
          </p>
        </section>

        <section className="mb-12 text-white">
          <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
          <p>
            Most browsers allow you to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>See what cookies are set</li>
            <li>Delete individual cookies</li>
            <li>Block cookies from specific sites</li>
            <li>Block all cookies</li>
          </ul>
          <p className="mt-4">
            Note that blocking essential cookies may affect site functionality.
          </p>
        </section>

        <section className="mb-12 text-white">
          <h2 className="text-2xl font-semibold mb-4">5. Changes to This Policy</h2>
          <p>
            We may update this policy as our practices or regulations change. We encourage you to periodically review this page.
          </p>
        </section>

        <div className="mt-16 text-center text-gray-600">
          <p>For questions about our use of cookies, contact us at <Link href="mailto:info@myfincom.com" className="text-indigo-600 hover:underline">info@myfincom.com</Link>.</p>
        </div>
      </div>
    </div>
  );
}