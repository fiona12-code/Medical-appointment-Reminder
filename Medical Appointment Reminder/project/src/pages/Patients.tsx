import React, { useState } from 'react';
import { Search, Plus, Filter, MoreHorizontal, UserPlus, Check } from 'lucide-react';

// Mock data for patients
const mockPatients = [
  {
    id: '101',
    name: 'James Wilson',
    email: 'james.wilson@example.com',
    phone: '(555) 123-4567',
    dateOfBirth: '1985-03-15',
    gender: 'Male',
    lastVisit: '2025-04-10',
    upcomingAppointment: '2025-05-15',
    preferredChannel: 'SMS',
    optedIn: true,
  },
  {
    id: '102',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '(555) 234-5678',
    dateOfBirth: '1990-07-22',
    gender: 'Female',
    lastVisit: '2025-04-05',
    upcomingAppointment: '2025-05-15',
    preferredChannel: 'Email',
    optedIn: true,
  },
  {
    id: '103',
    name: 'Robert Johnson',
    email: 'robert.johnson@example.com',
    phone: '(555) 345-6789',
    dateOfBirth: '1978-11-30',
    gender: 'Male',
    lastVisit: '2025-03-20',
    upcomingAppointment: '2025-05-15',
    preferredChannel: 'WhatsApp',
    optedIn: true,
  },
  {
    id: '104',
    name: 'Maria Garcia',
    email: 'maria.garcia@example.com',
    phone: '(555) 456-7890',
    dateOfBirth: '1992-05-12',
    gender: 'Female',
    lastVisit: '2025-04-12',
    upcomingAppointment: '2025-05-16',
    preferredChannel: 'SMS',
    optedIn: false,
  },
  {
    id: '105',
    name: 'Thomas Smith',
    email: 'thomas.smith@example.com',
    phone: '(555) 567-8901',
    dateOfBirth: '1980-09-08',
    gender: 'Male',
    lastVisit: '2025-03-15',
    upcomingAppointment: '2025-05-16',
    preferredChannel: 'Email',
    optedIn: true,
  },
];

const Patients: React.FC = () => {
  const [patients] = useState(mockPatients);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddPatientModalOpen, setIsAddPatientModalOpen] = useState(false);

  const filteredPatients = patients.filter(patient => {
    const searchLower = searchTerm.toLowerCase();
    return (
      patient.name.toLowerCase().includes(searchLower) ||
      patient.email.toLowerCase().includes(searchLower) ||
      patient.phone.includes(searchTerm)
    );
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Patients</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage your patient records and communication preferences
          </p>
        </div>
        <button
          onClick={() => setIsAddPatientModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <UserPlus className="h-4 w-4 mr-2" />
          Add Patient
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-5 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h2 className="text-lg font-medium text-gray-900">
              All Patients ({patients.length})
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search patients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                  Contact Information
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Last Visit
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Next Appointment
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Communication
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                        {patient.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {patient.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          ID: {patient.id} • {patient.gender} • {new Date().getFullYear() - new Date(patient.dateOfBirth).getFullYear()} yrs
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{patient.phone}</div>
                    <div className="text-sm text-gray-500">{patient.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {formatDate(patient.lastVisit)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {formatDate(patient.upcomingAppointment)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {patient.preferredChannel}
                      </span>
                      {patient.optedIn ? (
                        <span className="ml-2 flex items-center text-xs text-green-600">
                          <Check className="h-3.5 w-3.5 mr-0.5" />
                          Opted In
                        </span>
                      ) : (
                        <span className="ml-2 text-xs text-gray-500">
                          Not Opted In
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredPatients.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                    <div className="flex flex-col items-center">
                      <Search className="h-8 w-8 text-gray-400 mb-3" />
                      <p>No patients match your search criteria</p>
                      <button 
                        onClick={() => setSearchTerm('')}
                        className="mt-3 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Clear search
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

export default Patients;