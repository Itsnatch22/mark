import SolutionLayout from '@/components/SolutionLayout';
import { ShieldCheck, Lock, Bug } from 'lucide-react';

export default function CyberSecuritySolutions() {
  return (
    <SolutionLayout
      title="Next-Level Cyber Defence"
      subtitle="Proactive security solutions for evolving digital threats"
      heroImage="/solutions/cybersecurity-hero.jpg"
      awardBadge={true}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
            title: "Threat Detection",
            description: "Real-time monitoring and AI-driven threat intelligence"
          },
          {
            icon: <Lock className="h-8 w-8 text-purple-600" />,
            title: "Data Encryption",
            description: "Advanced encryption protocols for data at rest and in transit"
          },
          {
            icon: <Bug className="h-8 w-8 text-green-600" />,
            title: "Vulnerability Management",
            description: "Regular audits, patching, and penetration testing"
          }
        ].map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Fincom Africa Security?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-6">
              {[
                "SOC-as-a-Service integration",
                "Zero trust architecture implementation",
                "24/7 incident response team",
                "Cyber risk assessments",
                "ISO/IEC 27001 compliance support"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Security Metrics</h3>
            <div className="space-y-4">
              {[
                { metric: "Threat Detection Accuracy", value: "98.5%", color: "bg-green-500" },
                { metric: "Response Time", value: "<5min", color: "bg-blue-500" },
                { metric: "Data Breaches Prevented", value: "100%", color: "bg-purple-500" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{stat.metric}</span>
                    <span className="text-sm font-medium text-gray-900">{stat.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className={`${stat.color} h-2.5 rounded-full`} style={{ width: stat.value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SolutionLayout>
  );
}
