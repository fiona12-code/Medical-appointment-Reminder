import React from 'react';
import { Calendar, Clock, Users, Activity, ArrowUpRight, Bell, MessageCircle, Mail } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNotification } from '../contexts/NotificationContext';
import StatsCard from '../components/dashboard/StatsCard';
import UpcomingAppointments from '../components/dashboard/UpcomingAppointments';
import RecentReminders from '../components/dashboard/RecentReminders';
import ChannelDistribution from '../components/dashboard/ChannelDistribution';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { getReminderStats } = useNotification();
  const stats = getReminderStats();

  // Fake data for demo
  const todayAppointments = 8;
  const totalPatients = 1248;
  const reminderSentToday = 16;
  const confirmationRate = 92;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          {new Date().getHours() < 12
            ? 'Good morning'
            : new Date().getHours() < 18
            ? 'Good afternoon'
            : 'Good evening'}, {user?.name.split(' ')[0]}
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Here's what's happening with your appointments today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Today's Appointments"
          value={todayAppointments}
          icon={<Calendar className="h-6 w-6 text-blue-600" />}
          change={+2}
          changeText="from yesterday"
        />
        <StatsCard 
          title="Total Patients"
          value={totalPatients}
          icon={<Users className="h-6 w-6 text-indigo-600" />}
          change={+5}
          changeText="new this week"
        />
        <StatsCard 
          title="Reminders Sent Today"
          value={reminderSentToday}
          icon={<Bell className="h-6 w-6 text-orange-600" />}
          change={+4}
          changeText="from yesterday"
        />
        <StatsCard 
          title="Confirmation Rate"
          value={`${confirmationRate}%`}
          icon={<Activity className="h-6 w-6 text-green-600" />}
          change={+2.5}
          changeText="from last week"
          isPercentage
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Upcoming Appointments
              </h3>
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center">
                View all <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
          <UpcomingAppointments />
        </div>
        
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Recent Reminders
              </h3>
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center">
                View all <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
          <RecentReminders />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg lg:col-span-2">
          <div className="p-5 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Reminder Activity
              </h3>
              <div className="flex space-x-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Last 7 days
                </span>
              </div>
            </div>
          </div>
          <div className="p-5">
            <div className="h-64 flex items-center justify-center">
              <p className="text-gray-500 text-sm">Line chart showing reminder activity would go here</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Channel Distribution
            </h3>
          </div>
          <ChannelDistribution />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;