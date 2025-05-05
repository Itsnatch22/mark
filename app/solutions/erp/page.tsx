import SolutionLayout from '@/components/SolutionLayout';
import { BarChart3, LayoutDashboard, Sliders } from 'lucide-react';

export default function ErpSolutions() {
  return (
    <SolutionLayout
      title="Enterprise Resource Planning"
      subtitle="Streamline operations across departments with one unified ERP solution"
      heroImage="/solutions/erp-hero.jpg"
      awardBadge={true}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: <LayoutDashboard className="h-8 w-8 text-blue-600" />,
            title: "Modular ERP",
            description: "Custom modules for HR, finance, supply chain and more"
          },
          {
            icon: <Sliders className="h-8 w-8 text-purple-600" />,
            title: "Process Automation",
            description: "Workflows that eliminate manual entry and delays"
          },
          {
            icon: <BarChart3 className="h-8 w-8 text-green-600" />,
            title: "Business Intelligence",
            description: "Analytics dashboards to make smarter decisions"
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Fincom ERP?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-6">
              {[
                "Custom ERP deployment",
                "Cloud-based access control",
                "Mobile ERP compatibility",
                "Third-party integrations",
                "AI-powered forecasting"
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
            <h3 className="font-semibold text-gray-900 mb-4">ERP Metrics</h3>
            <div className="space-y-4">
              {[
                { metric: "Deployment Time", value: "~3 weeks", color: "bg-green-500" },
                { metric: "Process Automation Rate", value: "90%", color: "bg-blue-500" },
                { metric: "User Adoption Rate", value: "98%", color: "bg-purple-500" }
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
