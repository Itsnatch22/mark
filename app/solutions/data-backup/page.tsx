import SolutionLayout from '@/components/SolutionLayout';
import { ShieldCheck, RefreshCw, ArchiveRestore } from 'lucide-react';

export default function BackupSolutions() {
  return (
    <SolutionLayout
      title="Data Backup & Continuity"
      subtitle="Your data, always safe, always recoverable"
      heroImage="/solutions/backup-hero.jpg"
      awardBadge={true}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
            title: "Automated Backups",
            description: "Schedule-driven data protection with zero disruption"
          },
          {
            icon: <RefreshCw className="h-8 w-8 text-purple-600" />,
            title: "Disaster Recovery",
            description: "Failover strategies for any data center emergency"
          },
          {
            icon: <ArchiveRestore className="h-8 w-8 text-green-600" />,
            title: "Data Archival",
            description: "Cold storage and versioning for long-term compliance"
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Fincom Data Backup?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-6">
              {[
                "Cross-region backup systems",
                "Recovery Time Objective: <1hr",
                "AES-256 encrypted storage",
                "Version-controlled file history",
                "On-demand recovery services"
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
            <h3 className="font-semibold text-gray-900 mb-4">Backup Metrics</h3>
            <div className="space-y-4">
              {[
                { metric: "Data Retention", value: "10+ years", color: "bg-green-500" },
                { metric: "Encryption Strength", value: "AES-256", color: "bg-blue-500" },
                { metric: "Recovery Time", value: "<1hr", color: "bg-purple-500" }
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
