import React from 'react';
import { MessageCircle, Mail, Clock, Check, X, Smartphone } from 'lucide-react';

// Mock data for recent reminders
const reminders = [
  {
    id: '1',
    patientName: 'James Wilson',
    channel: 'sms',
    time: '10 minutes ago',
    status: 'sent',
    appointmentDate: 'Today, 10:00 AM',
  },
  {
    id: '2',
    patientName: 'Emily Davis',
    channel: 'email',
    time: '30 minutes ago',
    status: 'confirmed',
    appointmentDate: 'Today, 11:30 AM',
  },
  {
    id: '3',
    patientName: 'Robert Johnson',
    channel: 'whatsapp',
    time: '1 hour ago',
    status: 'failed',
    appointmentDate: 'Today, 2:15 PM',
  },
  {
    id: '4',
    patientName: 'Maria Garcia',
    channel: 'sms',
    time: '2 hours ago',
    status: 'sent',
    appointmentDate: 'Tomorrow, 9:00 AM',
  },
];

const RecentReminders: React.FC = () => {
  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'sms':
        return <Smartphone className="h-4 w-4 text-gray-500" />;
      case 'email':
        return <Mail className="h-4 w-4 text-gray-500" />;
      case 'whatsapp':
        return <MessageCircle className="h-4 w-4 text-gray-500" />;
      default:
        return <MessageCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Check className="h-4 w-4 text-green-500" />;
      case 'failed':
        return <X className="h-4 w-4 text-red-500" />;
      case 'sent':
        return <Check className="h-4 w-4 text-blue-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmed';
      case 'failed':
        return 'Failed';
      case 'sent':
        return 'Sent';
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600';
      case 'failed':
        return 'text-red-600';
      case 'sent':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {reminders.map((reminder) => (
          <li key={reminder.id}>
            <div className="px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                    {getChannelIcon(reminder.channel)}
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{reminder.patientName}</p>
                  <div className="flex items-center mt-1">
                    <Clock className="h-3 w-3 text-gray-500" />
                    <span className="ml-1 text-xs text-gray-500">{reminder.appointmentDate}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4">
                  <span className={`flex items-center text-xs font-medium ${getStatusColor(reminder.status)}`}>
                    {getStatusIcon(reminder.status)}
                    <span className="ml-1">{getStatusText(reminder.status)}</span>
                  </span>
                  <span className="text-xs text-gray-500 block text-right">{reminder.time}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentReminders;