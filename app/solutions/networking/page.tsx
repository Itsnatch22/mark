import SolutionLayout from '@/components/SolutionLayout';
import { Wifi, Router, ShieldCheck } from 'lucide-react';

export default function NetworkingSolutions() {
  return (
    <SolutionLayout
      title="Next-Gen Networking Infrastructure"
      subtitle="Reliable, high-performance networks for modern enterprises"
      heroImage="/solutions/networking-hero.jpg"
      awardBadge={true}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: <Wifi className="h-8 w-8 text-blue-600" />,
            title: "Wireless Networking",
            description: "Secure enterprise Wi-Fi with seamless roaming and performance monitoring"
          },
          {
            icon: <Router className="h-8 w-8 text-purple-600" />,
            title: "Wired Infrastructure",
            description: "High-speed LAN, switching, and structured cabling solutions"
          },
          {
            icon: <ShieldCheck className="h-8 w-8 text-green-600" />,
            title: "Network Security",
            description: "Firewall, intrusion prevention, and network segmentation architecture"
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Fincom Africa Networking?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-6">
              {[
                "Enterprise-grade Wi-Fi deployment",
                "24/7 network monitoring and analytics",
                "Optimised QoS for voice and video",
                "Zero-trust network segmentation",
                "Remote branch connectivity solutions"
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
            <h3 className="font-semibold text-gray-900 mb-4">Performance Metrics</h3>
            <div className="space-y-4">
              {[
                { metric: "Latency Reduction", value: "↓ 40%", color: "bg-green-500" },
                { metric: "Wi-Fi Coverage", value: "100%", color: "bg-blue-500" },
                { metric: "Downtime", value: "< 0.01%", color: "bg-purple-500" }
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
