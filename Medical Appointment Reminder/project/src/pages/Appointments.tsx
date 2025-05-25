import React, { useState } from 'react';
import { Calendar, Plus, Filter, Search, MoreHorizontal, Check, X, Clock } from 'lucide-react';

// Mock data for appointments
const mockAppointments = [
  {
    id: '1',
    patientName: 'James Wilson',
    patientId: '101',
    time: '10:00 AM',
    date: new Date(2025, 4, 15), // May 15, 2025
    doctor: 'Dr. Sarah Johnson',
    status: 'confirmed',
    type: 'Follow-up',
    duration: 30,
    notes: 'Patient coming in for follow-up after surgery',
    reminderStatus: 'sent',
  },
  {
    id: '2',
    patientName: 'Emily Davis',
    patientId: '102',
    time: '11:30 AM',
    date: new Date(2025, 4, 15), // May 15, 2025
    doctor: 'Dr. Sarah Johnson',
    status: 'confirmed',
    type: 'Consultation',
    duration: 45,
    notes: 'New patient consultation regarding chronic back pain',
    reminderStatus: 'confirmed',
  },
  {
    id: '3',
    patientName: 'Robert Johnson',
    patientId: '103',
    time: '2:15 PM',
    date: new Date(2025, 4, 15), // May 15, 2025
    doctor: 'Dr. Sarah Johnson',
    status: 'pending',
    type: 'New Patient',
    duration: 60,
    notes: 'First appointment with our clinic',
    reminderStatus: 'failed',
  },
  {
    id: '4',
    patientName: 'Maria Garcia',
    patientId: '104',
    time: '9:00 AM',
    date: new Date(2025, 4, 16), // May 16, 2025
    doctor: 'Dr. Sarah Johnson',
    status: 'confirmed',
    type: 'Annual Check-up',
    duration: 45,
    notes: 'Annual physical examination',
    reminderStatus: 'pending',
  },
  {
    id: '5',
    patientName: 'Thomas Smith',
    patientId: '105',
    time: '10:30 AM',
    date: new Date(2025, 4, 16), // May 16, 2025
    doctor: 'Dr. Sarah Johnson',
    status: 'confirmed',
    type: 'Follow-up',
    duration: 30,
    notes: 'Post-treatment follow-up',
    reminderStatus: 'scheduled',
  },
];

const Appointments: React.FC = () => {
  const [appointments] = useState(mockAppointments);
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 4, 15)); // May 15, 2025
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const filteredAppointments = appointments.filter(
    appointment => 
      appointment.date.getDate() === selectedDate.getDate() && 
      appointment.date.getMonth() === selectedDate.getMonth() &&
      appointment.date.getFullYear() === selectedDate.getFullYear()
  );

  const getReminderStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Check className="h-4 w-4 text-green-500" />;
      case 'failed':
        return <X className="h-4 w-4 text-red-500" />;
      case 'sent':
        return <Check className="h-4 w-4 text-blue-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'scheduled':
        return <Calendar className="h-4 w-4 text-gray-500" />;
      default:
        return null;
    }
  };

  const getReminderStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmed';
      case 'failed':
        return 'Failed';
      case 'sent':
        return 'Sent';
      case 'pending':
        return 'Pending';
      case 'scheduled':
        return 'Scheduled';
      default:
        return status;
    }
  };

  const getReminderStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-600';
      case 'failed':
        return 'text-red-600';
      case 'sent':
        return 'text-blue-600';
      case 'pending':
        return 'text-yellow-600';
      case 'scheduled':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Appointments</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage and schedule your patient appointments
          </p>
        </div>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Appointment
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-5 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-medium text-gray-900">
              {formatDate(selectedDate)}
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search appointments..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Patient
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Reminder
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAppointments.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                        {appointment.patientName.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {appointment.patientName}
                        </div>
                        <div className="text-sm text-gray-500">
                          ID: {appointment.patientId}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{appointment.time}</div>
                    <div className="text-sm text-gray-500">{appointment.duration} min</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{appointment.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        appointment.status === 'confirmed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`flex items-center text-sm ${getReminderStatusColor(appointment.reminderStatus)}`}>
                      {getReminderStatusIcon(appointment.reminderStatus)}
                      <span className="ml-1.5">{getReminderStatusText(appointment.reminderStatus)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredAppointments.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                    <div className="flex flex-col items-center">
                      <Calendar className="h-8 w-8 text-gray-400 mb-3" />
                      <p>No appointments scheduled for this day</p>
                      <button 
                        onClick={() => setIsCreateModalOpen(true)}
                        className="mt-3 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <Plus className="h-3.5 w-3.5 mr-1" />
                        Add Appointment
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Appointments;