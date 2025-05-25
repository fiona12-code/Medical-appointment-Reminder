import React, { useState } from 'react';
import { Save, Check, X, BellRing, Clock, Settings as SettingsIcon, MessageSquare, Smartphone, Mail, Calendar } from 'lucide-react';

const Settings: React.FC = () => {
  const [generalSettings, setGeneralSettings] = useState({
    clinicName: 'HealthCare Medical Clinic',
    clinicPhone: '(555) 123-4567',
    clinicEmail: 'info@healthcaremedical.com',
    timezone: 'America/New_York',
  });

  const [reminderSettings, setReminderSettings] = useState({
    enableSMS: true,
    enableEmail: true,
    enableWhatsApp: false,
    defaultReminderTimes: [24, 2], // hours before appointment
    maxReminderAttempts: 2,
    enableConfirmations: true,
    confirmationCutoffTime: 1, // hours before appointment
  });

  const [integrationSettings, setIntegrationSettings] = useState({
    enableCalendarSync: true,
    calendarProvider: 'google',
    enableEHRIntegration: false,
    ehrProvider: '',
  });

  const handleGeneralSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setGeneralSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleReminderToggle = (setting: string) => {
    setReminderSettings(prev => ({ ...prev, [setting]: !prev[setting as keyof typeof prev] }));
  };

  const handleIntegrationToggle = (setting: string) => {
    setIntegrationSettings(prev => ({ ...prev, [setting]: !prev[setting as keyof typeof prev] }));
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-600">
          Configure your application and reminder preferences
        </p>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">General Settings</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Basic information about your medical practice
            </p>
          </div>
          <div>
            <SettingsIcon className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="clinicName" className="block text-sm font-medium text-gray-700">
                Clinic Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="clinicName"
                  id="clinicName"
                  value={generalSettings.clinicName}
                  onChange={handleGeneralSettingsChange}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
                Timezone
              </label>
              <div className="mt-1">
                <select
                  id="timezone"
                  name="timezone"
                  value={generalSettings.timezone}
                  onChange={handleGeneralSettingsChange}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="clinicPhone" className="block text-sm font-medium text-gray-700">
                Clinic Phone
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="clinicPhone"
                  id="clinicPhone"
                  value={generalSettings.clinicPhone}
                  onChange={handleGeneralSettingsChange}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="clinicEmail" className="block text-sm font-medium text-gray-700">
                Clinic Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="clinicEmail"
                  id="clinicEmail"
                  value={generalSettings.clinicEmail}
                  onChange={handleGeneralSettingsChange}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-4 sm:px-6 flex justify-end">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Reminder Settings</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Configure how and when reminders are sent
            </p>
          </div>
          <div>
            <BellRing className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-900">Communication Channels</h4>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="enableSMS"
                      name="enableSMS"
                      type="checkbox"
                      checked={reminderSettings.enableSMS}
                      onChange={() => handleReminderToggle('enableSMS')}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="enableSMS" className="font-medium text-gray-700 flex items-center">
                      <Smartphone className="h-4 w-4 mr-2 text-blue-500" /> SMS Reminders
                    </label>
                    <p className="text-gray-500">Send appointment reminders via text message</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="enableEmail"
                      name="enableEmail"
                      type="checkbox"
                      checked={reminderSettings.enableEmail}
                      onChange={() => handleReminderToggle('enableEmail')}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="enableEmail" className="font-medium text-gray-700 flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-green-500" /> Email Reminders
                    </label>
                    <p className="text-gray-500">Send appointment reminders via email</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="enableWhatsApp"
                      name="enableWhatsApp"
                      type="checkbox"
                      checked={reminderSettings.enableWhatsApp}
                      onChange={() => handleReminderToggle('enableWhatsApp')}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="enableWhatsApp" className="font-medium text-gray-700 flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2 text-teal-500" /> WhatsApp Reminders
                    </label>
                    <p className="text-gray-500">Send appointment reminders via WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900">Reminder Timing</h4>
              <p className="text-xs text-gray-500 mt-1 mb-3">When to send reminder messages before appointments</p>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center px-3 py-2 rounded-full bg-blue-100 text-blue-800 text-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  24 hours before
                  <button className="ml-2 text-blue-500 hover:text-blue-700">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center px-3 py-2 rounded-full bg-blue-100 text-blue-800 text-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  2 hours before
                  <button className="ml-2 text-blue-500 hover:text-blue-700">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <button className="flex items-center px-3 py-2 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-gray-200">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Time
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900">Confirmation Settings</h4>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="enableConfirmations"
                      name="enableConfirmations"
                      type="checkbox"
                      checked={reminderSettings.enableConfirmations}
                      onChange={() => handleReminderToggle('enableConfirmations')}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="enableConfirmations" className="font-medium text-gray-700">
                      Allow patients to confirm appointments via reply
                    </label>
                    <p className="text-gray-500">Patients can reply with "Y" or "Yes" to confirm their appointment</p>
                  </div>
                </div>

                <div className="sm:col-span-3 max-w-xs">
                  <label htmlFor="confirmationCutoffTime" className="block text-sm font-medium text-gray-700">
                    Confirmation cutoff time (hours before appointment)
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="confirmationCutoffTime"
                      id="confirmationCutoffTime"
                      min="0"
                      max="72"
                      value={reminderSettings.confirmationCutoffTime}
                      onChange={(e) => setReminderSettings({...reminderSettings, confirmationCutoffTime: parseInt(e.target.value) || 0})}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-4 sm:px-6 flex justify-end">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Integrations</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Connect to your calendars and other systems
            </p>
          </div>
          <div>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="enableCalendarSync"
                  name="enableCalendarSync"
                  type="checkbox"
                  checked={integrationSettings.enableCalendarSync}
                  onChange={() => handleIntegrationToggle('enableCalendarSync')}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="enableCalendarSync" className="font-medium text-gray-700">
                  Calendar Sync
                </label>
                <p className="text-gray-500">Sync appointments with an external calendar service</p>
                {integrationSettings.enableCalendarSync && (
                  <div className="mt-3">
                    <select
                      id="calendarProvider"
                      name="calendarProvider"
                      value={integrationSettings.calendarProvider}
                      onChange={(e) => setIntegrationSettings({...integrationSettings, calendarProvider: e.target.value})}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="google">Google Calendar</option>
                      <option value="outlook">Microsoft Outlook</option>
                      <option value="apple">Apple Calendar</option>
                    </select>
                    <button
                      type="button"
                      className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Connect Account
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="enableEHRIntegration"
                  name="enableEHRIntegration"
                  type="checkbox"
                  checked={integrationSettings.enableEHRIntegration}
                  onChange={() => handleIntegrationToggle('enableEHRIntegration')}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="enableEHRIntegration" className="font-medium text-gray-700">
                  EHR Integration
                </label>
                <p className="text-gray-500">Connect to your Electronic Health Record system</p>
                {integrationSettings.enableEHRIntegration && (
                  <div className="mt-3">
                    <select
                      id="ehrProvider"
                      name="ehrProvider"
                      value={integrationSettings.ehrProvider}
                      onChange={(e) => setIntegrationSettings({...integrationSettings, ehrProvider: e.target.value})}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="">Select EHR Provider</option>
                      <option value="epic">Epic</option>
                      <option value="cerner">Cerner</option>
                      <option value="allscripts">Allscripts</option>
                      <option value="athenahealth">Athenahealth</option>
                    </select>
                    <button
                      type="button"
                      className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Configure Connection
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-4 sm:px-6 flex justify-end">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;