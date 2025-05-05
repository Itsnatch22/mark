// app/ict/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import io, { Socket } from 'socket.io-client';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, ShieldAlert, Users, MessageSquare, FileText, Bell, Wifi, WifiOff, Activity } from 'lucide-react';

type ICTAlert = {
  id: string;
  title: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'active' | 'resolved';
  affectedSystems: string[];
  lastUpdated: Date;
  description?: string;
};

type TechTeamMember = {
  id: string;
  name: string;
  role: string;
  specialization: string;
  availability: 'online' | 'busy' | 'offline';
  lastPing: Date;
  currentTask?: string;
};

export default function ICTPage() {
  const [alerts, setAlerts] = useState<ICTAlert[]>([]);
  const [team, setTeam] = useState<TechTeamMember[]>([]);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<{ user: string; text: string; time: Date; isSystem?: boolean }[]>([]);
  const [activeTab, setActiveTab] = useState<'alerts' | 'team' | 'chat' | 'resources'>('alerts');
  const [newAlertForm, setNewAlertForm] = useState({ show: false, severity: 'medium' as ICTAlert['severity'], description: '' });
  const socketRef = useRef<Socket | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Initialize socket connection
  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER || 'http://192.168.0.100:3000');
    socketRef.current = socket;

    socket.on('ictAlertsUpdate', (data: ICTAlert[]) => setAlerts(data));
    socket.on('techTeamUpdate', (data: TechTeamMember[]) => setTeam(data));
    socket.on('ictChatMsg', (msg: { user: string; text: string; isSystem?: boolean }) => {
      setChatMessages(prev => [...prev, { ...msg, time: new Date() }]);
    });

    // Initial data fetch simulation
    socket.emit('getInitialData');

    return () => {
      socket.disconnect();
    };
  }, []);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const sendMessage = () => {
    if (message.trim() && socketRef.current) {
      socketRef.current.emit('sendICTChat', { text: message });
      setMessage('');
    }
  };

  const createAlert = () => {
    if (socketRef.current && newAlertForm.description) {
      socketRef.current.emit('triggerICTAlert', {
        title: `⚠️ ${newAlertForm.severity.toUpperCase()} - ${newAlertForm.description.substring(0, 30)}${newAlertForm.description.length > 30 ? '...' : ''}`,
        severity: newAlertForm.severity,
        affectedSystems: ['Main Server', 'Database', 'Network'],
        description: newAlertForm.description,
      });
      setNewAlertForm({ show: false, severity: 'medium', description: '' });
    }
  };

  const resolveAlert = (alertId: string) => {
    if (socketRef.current) {
      socketRef.current.emit('resolveICTAlert', alertId);
    }
  };

  const pingTeamMember = (memberId: string) => {
    if (socketRef.current) {
      socketRef.current.emit('pingTeamMember', memberId);
      addSystemMessage(`Ping sent to team member ${memberId}`);
    }
  };

  const addSystemMessage = (text: string) => {
    setChatMessages(prev => [...prev, { user: 'System', text, time: new Date(), isSystem: true }]);
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-5">
      {/* Navigation Header */}
      <header className="bg-indigo-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Server className="h-8 w-8" />
            <h1 className="text-2xl font-bold">ICT Command Centre</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 bg-indigo-700 px-3 py-1 rounded-md hover:bg-indigo-600">
              <Activity className="h-4 w-4" />
              <span>Live Metrics</span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span>Connected</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Alert Summary Banner */}
        {alerts.filter(a => a.status === 'active').length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-lg bg-red-50 border-l-4 border-red-600 flex justify-between items-center"
          >
            <div className="flex items-center space-x-3">
              <ShieldAlert className="h-5 w-5 text-red-600" />
              <span className="font-medium">
                {alerts.filter(a => a.status === 'active').length} active alert{alerts.filter(a => a.status === 'active').length !== 1 ? 's' : ''}
              </span>
            </div>
            <button 
              onClick={() => setActiveTab('alerts')}
              className="text-sm text-red-600 hover:underline"
            >
              View all alerts
            </button>
          </motion.div>
        )}

        {/* Mobile Tabs */}
        <div className="lg:hidden mb-6 bg-white rounded-lg shadow-sm p-1">
          <div className="flex justify-between">
            {[
              { id: 'alerts', icon: <ShieldAlert className="h-5 w-5" />, label: 'Alerts' },
              { id: 'team', icon: <Users className="h-5 w-5" />, label: 'Team' },
              { id: 'chat', icon: <MessageSquare className="h-5 w-5" />, label: 'Chat' },
              { id: 'resources', icon: <FileText className="h-5 w-5" />, label: 'Docs' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex flex-col items-center justify-center p-2 rounded-md flex-1 ${activeTab === tab.id ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {tab.icon}
                <span className="text-xs mt-1">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-4 sticky top-6">
              <nav className="space-y-1">
                {[
                  { id: 'alerts', icon: <ShieldAlert className="h-5 w-5" />, label: 'Alerts', count: alerts.filter(a => a.status === 'active').length },
                  { id: 'team', icon: <Users className="h-5 w-5" />, label: 'Team', count: team.filter(t => t.availability === 'online').length },
                  { id: 'chat', icon: <MessageSquare className="h-5 w-5" />, label: 'Command Chat' },
                  { id: 'resources', icon: <FileText className="h-5 w-5" />, label: 'Resources' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left ${activeTab === tab.id ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {tab.icon}
                    <span className="flex-1">{tab.label}</span>
                    {tab.count !== undefined && (
                      <span className={`text-xs px-2 py-1 rounded-full ${activeTab === tab.id ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800'}`}>
                        {tab.count}
                      </span>
                    )}
                  </button>
                ))}
              </nav>

              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-500 px-3 mb-2">Quick Actions</h3>
                <button
                  onClick={() => setNewAlertForm({ ...newAlertForm, show: true })}
                  className="w-full flex items-center space-x-2 p-3 rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
                >
                  <Bell className="h-5 w-5" />
                  <span>Create Alert</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Alerts Tab */}
            {activeTab === 'alerts' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                    <ShieldAlert className="h-6 w-6 text-indigo-600" />
                    <span>ICT System Alerts</span>
                  </h2>
                  <button
                    onClick={() => setNewAlertForm({ ...newAlertForm, show: true })}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm"
                  >
                    + New Alert
                  </button>
                </div>

                <div className="divide-y divide-gray-200">
                  {alerts.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      No active alerts. Systems are operating normally.
                    </div>
                  ) : (
                    alerts.map((alert) => (
                      <div
                        key={alert.id}
                        className={`p-5 ${alert.status === 'resolved' ? 'bg-gray-50' : ''}`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-start space-x-3">
                            <div className={`p-2 rounded-lg ${
                              alert.severity === 'critical' ? 'bg-red-100 text-red-600' :
                              alert.severity === 'high' ? 'bg-orange-100 text-orange-600' :
                              alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                              'bg-blue-100 text-blue-600'
                            }`}>
                              {alert.severity === 'critical' ? (
                                <ShieldAlert className="h-5 w-5" />
                              ) : (
                                <Bell className="h-5 w-5" />
                              )}
                            </div>
                            <div>
                              <h3 className="font-medium">{alert.title}</h3>
                              <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                              <div className="mt-2 flex flex-wrap gap-2">
                                {alert.affectedSystems.map(system => (
                                  <span key={system} className="text-xs px-2 py-1 bg-gray-100 rounded-md">
                                    {system}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-gray-500 block">
                              {new Date(alert.lastUpdated).toLocaleString()}
                            </span>
                            {alert.status === 'active' && (
                              <button
                                onClick={() => resolveAlert(alert.id)}
                                className="mt-2 text-xs px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200"
                              >
                                Mark Resolved
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            )}

            {/* Team Tab */}
            {activeTab === 'team' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                    <Users className="h-6 w-6 text-indigo-600" />
                    <span>Technical Team Status</span>
                  </h2>
                </div>

                <div className="divide-y divide-gray-200">
                  {team.map((member) => (
                    <div key={member.id} className="p-5 hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start space-x-4">
                          <div className={`p-2 rounded-lg ${
                            member.availability === 'online' ? 'bg-green-100 text-green-600' :
                            member.availability === 'busy' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            {member.availability === 'online' ? (
                              <Wifi className="h-5 w-5" />
                            ) : (
                              <WifiOff className="h-5 w-5" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium">{member.name}</h3>
                            <p className="text-sm text-gray-600">{member.role} • {member.specialization}</p>
                            {member.currentTask && (
                              <p className="text-xs text-gray-500 mt-1">
                                <span className="font-medium">Current task:</span> {member.currentTask}
                              </p>
                            )}
                            <p className="text-xs text-gray-500 mt-1">
                              Last active: {new Date(member.lastPing).toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => pingTeamMember(member.id)}
                          disabled={member.availability === 'offline'}
                          className={`px-3 py-1 rounded text-sm ${
                            member.availability === 'offline' 
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                              : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                          }`}
                        >
                          Ping
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Chat Tab */}
            {activeTab === 'chat' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
                style={{ height: '600px' }}
              >
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                    <MessageSquare className="h-6 w-6 text-indigo-600" />
                    <span>Command Chat</span>
                  </h2>
                </div>

                <div 
                  ref={chatContainerRef}
                  className="flex-1 overflow-y-auto p-4 space-y-4"
                >
                  {chatMessages.length === 0 ? (
                    <div className="h-full flex items-center justify-center text-gray-500">
                      No messages yet. Start the conversation!
                    </div>
                  ) : (
                    chatMessages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.user === 'System' ? 'justify-center' : msg.user.startsWith('You') ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                          msg.user === 'System' 
                            ? 'bg-gray-100 text-gray-700 text-sm' 
                            : msg.user.startsWith('You') 
                              ? 'bg-indigo-100 text-indigo-900' 
                              : 'bg-gray-200 text-gray-800'
                        }`}>
                          {msg.user !== 'System' && (
                            <div className="font-medium text-xs mb-1">
                              {msg.user}
                            </div>
                          )}
                          <p>{msg.text}</p>
                          <div className={`text-xs mt-1 ${
                            msg.user === 'System' 
                              ? 'text-gray-500' 
                              : msg.user.startsWith('You') 
                                ? 'text-indigo-500' 
                                : 'text-gray-500'
                          }`}>
                            {new Date(msg.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>

                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="Type a message..."
                      className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                      onClick={sendMessage}
                      disabled={!message.trim()}
                      className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Resources Tab */}
            {activeTab === 'resources' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                    <FileText className="h-6 w-6 text-indigo-600" />
                    <span>Technical Resources</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                  {[
                    { 
                      title: 'Network Troubleshooting Guide', 
                      category: 'Networking', 
                      description: 'Step-by-step guide for diagnosing and resolving common network issues',
                      icon: <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    },
                    { 
                      title: 'Server Maintenance Checklist', 
                      category: 'Servers', 
                      description: 'Comprehensive checklist for routine server maintenance tasks',
                      icon: <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    },
                    { 
                      title: 'Security Incident Response Protocol', 
                      category: 'Security', 
                      description: 'Detailed procedures for responding to security breaches',
                      icon: <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    },
                    { 
                      title: 'Database Recovery Procedures', 
                      category: 'Databases', 
                      description: 'Steps to recover from database failures and corruption',
                      icon: <svg className="h-6 w-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                    },
                  ].map((resource, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -2 }}
                      className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          {resource.icon}
                        </div>
                        <div>
                          <h3 className="font-medium">{resource.title}</h3>
                          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                            {resource.category}
                          </span>
                          <p className="text-sm text-gray-600 mt-2">{resource.description}</p>
                          <button className="mt-3 text-sm text-indigo-600 hover:underline flex items-center">
                            View Document
                            <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* New Alert Modal */}
      <AnimatePresence>
        {newAlertForm.show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-xl shadow-xl max-w-md w-full p-6"
            >
              <h3 className="text-lg font-bold mb-4">Create New ICT Alert</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Severity Level</label>
                  <div className="grid grid-cols-4 gap-2">
                    {['low', 'medium', 'high', 'critical'].map((level) => (
                      <button
                        key={level}
                        onClick={() => setNewAlertForm({ ...newAlertForm, severity: level as ICTAlert['severity'] })}
                        className={`p-2 rounded-lg text-sm ${
                          newAlertForm.severity === level
                            ? level === 'critical' ? 'bg-red-100 text-red-700' :
                              level === 'high' ? 'bg-orange-100 text-orange-700' :
                              level === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={newAlertForm.description}
                    onChange={(e) => setNewAlertForm({ ...newAlertForm, description: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Describe the issue..."
                    rows={4}
                  />
                </div>

                <div className="flex justify-end space-x-3 pt-2">
                  <button
                    onClick={() => setNewAlertForm({ ...newAlertForm, show: false })}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={createAlert}
                    disabled={!newAlertForm.description.trim()}
                    className={`px-4 py-2 rounded-lg text-white ${
                      newAlertForm.severity === 'critical' ? 'bg-red-600 hover:bg-red-700' :
                      newAlertForm.severity === 'high' ? 'bg-orange-600 hover:bg-orange-700' :
                      newAlertForm.severity === 'medium' ? 'bg-yellow-600 hover:bg-yellow-700' :
                      'bg-blue-600 hover:bg-blue-700'
                    } disabled:opacity-50`}
                  >
                    Create Alert
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}