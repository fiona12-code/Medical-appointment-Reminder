import React, { useState } from 'react';
import { MessageCircle, Mail, Smartphone, Plus, Check, Pencil, Trash2, Copy } from 'lucide-react';

// Mock data for templates
const mockTemplates = [
  {
    id: '1',
    name: 'Appointment Reminder - 24 Hours',
    content: 'Hello {{patientName}}, this is a reminder that you have an appointment with {{doctorName}} tomorrow at {{appointmentTime}}. Please reply Y to confirm or call us at {{clinicPhone}} to reschedule.',
    channel: 'sms',
    lastModified: '2025-04-01',
    active: true,
    timeBeforeAppointment: 24,
  },
  {
    id: '2',
    name: 'Appointment Reminder - 1 Week',
    content: 'Dear {{patientName}}, this is a reminder that you have an upcoming appointment with {{doctorName}} on {{appointmentDate}} at {{appointmentTime}}. Please call us at {{clinicPhone}} if you need to reschedule.',
    channel: 'email',
    lastModified: '2025-04-05',
    active: true,
    timeBeforeAppointment: 168,
  },
  {
    id: '3',
    name: 'Appointment Confirmation',
    content: 'Thank you for scheduling an appointment with {{doctorName}} on {{appointmentDate}} at {{appointmentTime}}. Please arrive 15 minutes early to complete any necessary paperwork.',
    channel: 'whatsapp',
    lastModified: '2025-03-28',
    active: true,
    timeBeforeAppointment: 0,
  },
  {
    id: '4',
    name: 'Appointment Follow-up',
    content: 'Hello {{patientName}}, thank you for visiting {{clinicName}}. We hope your appointment with {{doctorName}} went well. If you have any questions, please don\'t hesitate to contact us.',
    channel: 'sms',
    lastModified: '2025-03-15',
    active: false,
    timeBeforeAppointment: -24,
  },
  {
    id: '5',
    name: 'Missed Appointment',
    content: 'Hello {{patientName}}, we noticed you missed your appointment with {{doctorName}} today. Please call us at {{clinicPhone}} to reschedule at your earliest convenience.',
    channel: 'email',
    lastModified: '2025-04-10',
    active: true,
    timeBeforeAppointment: -2,
  },
];

const Templates: React.FC = () => {
  const [templates] = useState(mockTemplates);
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'sms':
        return <Smartphone className="h-5 w-5" />;
      case 'email':
        return <Mail className="h-5 w-5" />;
      case 'whatsapp':
        return <MessageCircle className="h-5 w-5" />;
      default:
        return <MessageCircle className="h-5 w-5" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTimeBeforeAppointment = (hours: number) => {
    if (hours === 0) {
      return 'At booking';
    } else if (hours < 0) {
      const absHours = Math.abs(hours);
      return `${absHours} hour${absHours !== 1 ? 's' : ''} after`;
    } else if (hours < 24) {
      return `${hours} hour${hours !== 1 ? 's' : ''} before`;
    } else {
      const days = Math.floor(hours / 24);
      return `${days} day${days !== 1 ? 's' : ''} before`;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Message Templates</h1>
          <p className="mt-1 text-sm text-gray-600">
            Create and manage your reminder message templates
          </p>
        </div>
        <button
          onClick={() => setIsTemplateModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Template
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`bg-white shadow overflow-hidden rounded-lg border-l-4 ${
              template.active
                ? 'border-green-500'
                : 'border-gray-300'
            }`}
          >
            <div className="px-6 py-5 flex justify-between items-start">
              <div>
                <div className="flex items-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {template.name}
                  </h3>
                  {template.active && (
                    <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <Check className="h-3 w-3 mr-1" />
                      Active
                    </span>
                  )}
                </div>
                <div className="mt-1 flex items-center text-sm text-gray-500">
                  <div className={`flex-shrink-0 ${
                    template.channel === 'sms' 
                      ? 'text-blue-500' 
                      : template.channel === 'email' 
                      ? 'text-green-500' 
                      : 'text-teal-500'
                  }`}>
                    {getChannelIcon(template.channel)}
                  </div>
                  <span className="ml-1.5 capitalize">{template.channel}</span>
                  <span className="mx-2">•</span>
                  <span>Sends {formatTimeBeforeAppointment(template.timeBeforeAppointment)}</span>
                  <span className="mx-2">•</span>
                  <span>Modified {formatDate(template.lastModified)}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  className="p-1.5 text-gray-400 hover:text-gray-500"
                  title="Duplicate"
                >
                  <Copy className="h-5 w-5" />
                </button>
                <button
                  className="p-1.5 text-gray-400 hover:text-blue-500"
                  title="Edit"
                >
                  <Pencil className="h-5 w-5" />
                </button>
                <button
                  className="p-1.5 text-gray-400 hover:text-red-500"
                  title="Delete"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="border-t border-gray-200 px-6 py-4">
              <div className="text-sm text-gray-700 whitespace-pre-line">
                {template.content}
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-3">
              <div className="text-xs text-gray-500">
                Available variables: patientName, doctorName, appointmentDate, appointmentTime, clinicName, clinicPhone
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;