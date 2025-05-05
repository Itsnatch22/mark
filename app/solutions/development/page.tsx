// This file is part of Fincom, a financial technology platform.
import SolutionLayout from '@/components/SolutionLayout';
import { Code2, Server, DatabaseZap } from 'lucide-react';

export default function DevelopmentSolutions() {
  return (
    <SolutionLayout
      title="Enterprise Development Solutions"
      subtitle="Robust tech stacks powering the future of digital transformation"
      heroImage="/solutions/development-hero.jpg"
      awardBadge={true}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: <Code2 className="h-8 w-8 text-rose-600" />,
            title: "Frontend Development",
            description: "React, Vue, Angular — pixel-perfect UIs with fluid UX and blazing speed"
          },
          {
            icon: <Server className="h-8 w-8 text-indigo-600" />,
            title: "Backend & Server-side",
            description: "Node.js, Django, Spring Boot — scalable APIs and logic built to handle millions"
          },
          {
            icon: <DatabaseZap className="h-8 w-8 text-yellow-600" />,
            title: "Data Query & Management",
            description: "SQL, GraphQL, Prisma — efficient data flow and seamless integrations"
          }
        ].map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-rose-50 to-indigo-50 rounded-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Tech Stacks in Use</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-6">
              {[
                "React, Vue, Svelte (Frontend)",
                "Node.js, Express, Django, Laravel (Backend)",
                "Next.js, Nuxt (Full-Stack)",
                "GraphQL, SQL, NoSQL, Prisma (Data Query)",
                "Docker, NGINX, PM2 (Server-side Deployment)"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 bg-rose-600 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Development KPIs</h3>
            <div className="space-y-4">
              {[
                { metric: "Deployment Time", value: "Under 10 min", color: "bg-green-500" },
                { metric: "Code Quality Score", value: "A+", color: "bg-blue-500" },
                { metric: "Bug Resolution Rate", value: "98%", color: "bg-purple-500" }
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
