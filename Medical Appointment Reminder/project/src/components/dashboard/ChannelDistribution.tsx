import React from 'react';
import { MessageCircle, Mail, Smartphone } from 'lucide-react';

const ChannelDistribution: React.FC = () => {
  // Mock data for channel distribution
  const channels = [
    { name: 'SMS', count: 120, percentage: 60, icon: <Smartphone className="h-4 w-4" />, color: 'blue' },
    { name: 'Email', count: 50, percentage: 25, icon: <Mail className="h-4 w-4" />, color: 'green' },
    { name: 'WhatsApp', count: 30, percentage: 15, icon: <MessageCircle className="h-4 w-4" />, color: 'teal' },
  ];

  return (
    <div className="p-5">
      <div className="space-y-6">
        {channels.map((channel) => (
          <div key={channel.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`p-1 rounded-md bg-${channel.color}-100 text-${channel.color}-600`}>
                  {channel.icon}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">{channel.name}</span>
              </div>
              <div className="text-sm font-medium text-gray-900">{channel.count} reminders</div>
            </div>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                <div
                  style={{ width: `${channel.percentage}%` }}
                  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${channel.color}-500`}
                ></div>
              </div>
            </div>
            <div className="text-right text-xs text-gray-500">{channel.percentage}% of all reminders</div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Total reminders sent</span>
          <span className="text-lg font-semibold text-gray-900">200</span>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Confirmation rate</span>
          <span className="text-lg font-semibold text-green-600">92%</span>
        </div>
      </div>
    </div>
  );
};

export default ChannelDistribution;