import React from 'react';
import { Clock, Calendar, MoreHorizontal, User } from 'lucide-react';

// Mock data for upcoming appointments
const appointments = [
  {
    id: '1',
    patientName: 'James Wilson',
    time: '10:00 AM',
    date: 'Today',
    doctor: 'Dr. Sarah Johnson',
    status: 'confirmed',
    type: 'Follow-up',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: '2',
    patientName: 'Emily Davis',
    time: '11:30 AM',
    date: 'Today',
    doctor: 'Dr. Sarah Johnson',
    status: 'confirmed',
    type: 'Consultation',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: '3',
    patientName: 'Robert Johnson',
    time: '2:15 PM',
    date: 'Today',
    doctor: 'Dr. Sarah Johnson',
    status: 'pending',
    type: 'New Patient',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: '4',
    patientName: 'Maria Garcia',
    time: '9:00 AM',
    date: 'Tomorrow',
    doctor: 'Dr. Sarah Johnson',
    status: 'confirmed',
    type: 'Annual Check-up',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

const UpcomingAppointments: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <div className="px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                {appointment.avatar ? (
                  <img
                    src={appointment.avatar}
                    alt={appointment.patientName}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <User className="h-5 w-5" />
                  </div>
                )}
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{appointment.patientName}</p>
                  <div className="flex items-center mt-1">
                    <Clock className="h-3 w-3 text-gray-500" />
                    <span className="ml-1 text-xs text-gray-500">{appointment.time}</span>
                    <span className="mx-1 text-gray-300">•</span>
                    <Calendar className="h-3 w-3 text-gray-500" />
                    <span className="ml-1 text-xs text-gray-500">{appointment.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    appointment.status === 'confirmed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {appointment.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                </span>
                <div className="ml-2 flex-shrink-0">
                  <button className="text-gray-400 hover:text-gray-500 focus:outline-none">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingAppointments;