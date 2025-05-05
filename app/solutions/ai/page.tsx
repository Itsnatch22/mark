import SolutionLayout from '@/components/SolutionLayout';
import { BrainCircuit, Bot, BarChart } from 'lucide-react';

export default function AISolutions() {
  return (
    <SolutionLayout
      title="AI-Powered Business Transformation"
      subtitle="Harness the power of artificial intelligence to revolutionize your operations"
      heroImage="/solutions/ai-hero.jpg"
      awardBadge={true}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our AI Capabilities</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Fincom Africa AI solutions leverage cutting-edge machine learning algorithms to deliver 
            unprecedented business insights and automation. Our award-winning platform has been 
            recognized by Gartner and Forrester for innovation in enterprise AI applications.
          </p>
          
          <div className="space-y-8">
            {[
              {
                icon: <BrainCircuit className="h-8 w-8 text-blue-600" />,
                title: "Predictive Analytics",
                description: "Anticipate market trends and customer behavior with 92% accuracy"
              },
              {
                icon: <Bot className="h-8 w-8 text-purple-600" />,
                title: "Process Automation",
                description: "Reduce operational costs by up to 65% with intelligent automation"
              },
              {
                icon: <BarChart className="h-8 w-8 text-green-600" />,
                title: "Data Intelligence",
                description: "Transform raw data into actionable business strategies"
              }
            ].map((feature, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="bg-blue-50 p-3 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Case Study: Financial Services AI</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
              <p className="text-gray-600">
                A Fortune 500 bank needed to reduce fraud detection time while improving accuracy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
              <p className="text-gray-600">
                Implemented our AI-powered fraud detection system with real-time transaction analysis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>78% reduction in false positives</li>
                <li>Fraud detection time reduced from 48 hours to 8 seconds</li>
                <li>$12M annual savings in fraud prevention</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SolutionLayout>
  );
}