// app/training/page.tsx
'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Img } from '@react-email/components';

export default function TrainingPage() {
  const [email, setEmail] = useState('');
  const [completedModules, setCompletedModules] = useState<Record<string, boolean>>({});
  const [claimedBadges, setClaimedBadges] = useState<Record<string, boolean>>({});

  const trainingModules = [
    {
      id: 'module1',
      title: 'Introduction to Cybersecurity',
      description: 'Learn the fundamentals of keeping your data secure.',
      badge: {
        name: 'Cyber Guardian',
        image: '/images/cyber-badge.png',
      },
    },
    {
      id: 'module2',
      title: 'Advanced React Patterns',
      description: 'Master advanced React concepts and patterns.',
      badge: {
        name: 'React Wizard',
        image: '/images/react-badge.png',
      },
    },
    {
      id: 'module3',
      title: 'Cloud Architecture',
      description: 'Design scalable cloud infrastructure.',
      badge: {
        name: 'Cloud Architect',
        image: '/images/cloud-badge.png',
      },
    },
  ];

  const completeModule = (moduleId: string) => {
    setCompletedModules(prev => ({ ...prev, [moduleId]: true }));
    toast.success('Module completed! Claim your badge.');
  };

  const claimBadge = async (badgeName: string, badgeImage: string) => {
    if (!email) {
      toast.error('Please enter your email to claim the badge');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch('/api/send-badge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          userName: 'Learner', // You can customize this
          badgeName,
          badgeImage,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setClaimedBadges(prev => ({ ...prev, [badgeName]: true }));
        toast.success('Badge sent to your email! Check your inbox.');
      } else {
        toast.error(data.error || 'Failed to send badge');
      }
    } catch {
      toast.error('Failed to send badge. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Training Academy
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Complete modules to earn badges and showcase your achievements!
          </p>
        </div>

        <div className="mb-8 bg-white p-6 rounded-lg shadow">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Enter your email to claim badges:
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="email"
              id="email"
              className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300 p-2 border"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-6">
          {trainingModules.map((module) => (
            <div key={module.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {module.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {module.description}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {completedModules[module.id] ? (
                      claimedBadges[module.badge.name] ? (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          Badge Claimed
                        </span>
                      ) : (
                        <button
                          onClick={() => claimBadge(module.badge.name, module.badge.image)}
                          className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Claim Badge
                        </button>
                      )
                    ) : (
                      <button
                        onClick={() => completeModule(module.id)}
                        className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Complete Module
                      </button>
                    )}
                  </div>
                </div>

                {completedModules[module.id] && (
                  <div className="mt-4 flex items-center">
                    <div className="flex-shrink-0">
                      <Img
                        className="h-12 w-12"
                        src={module.badge.image}
                        alt={module.badge.name}
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {module.badge.name} Badge Unlocked!
                      </p>
                      <p className="text-sm text-gray-500">
                        {claimedBadges[module.badge.name]
                          ? 'Sent to your email'
                          : 'Available to claim'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}