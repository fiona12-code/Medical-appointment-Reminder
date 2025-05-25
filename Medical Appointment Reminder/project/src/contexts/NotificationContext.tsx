import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types
type Channel = 'sms' | 'email' | 'whatsapp';

type Reminder = {
  id: string;
  appointmentId: string;
  patientId: string;
  channel: Channel;
  scheduledFor: Date;
  status: 'pending' | 'sent' | 'failed' | 'confirmed';
  message: string;
};

type NotificationContextType = {
  sendReminder: (appointmentId: string, patientId: string, channel: Channel, message: string) => Promise<void>;
  getReminders: (appointmentId?: string) => Reminder[];
  getReminderStats: () => { total: number; sent: number; failed: number; confirmed: number };
};

// Create context
const NotificationContext = createContext<NotificationContextType>({
  sendReminder: async () => {},
  getReminders: () => [],
  getReminderStats: () => ({ total: 0, sent: 0, failed: 0, confirmed: 0 }),
});

// Mock reminders for demo
const mockReminders: Reminder[] = [
  {
    id: '1',
    appointmentId: '101',
    patientId: '201',
    channel: 'sms',
    scheduledFor: new Date(Date.now() + 24 * 60 * 60 * 1000), // tomorrow
    status: 'pending',
    message: 'Reminder: You have an appointment with Dr. Johnson tomorrow at 10:00 AM',
  },
  {
    id: '2',
    appointmentId: '102',
    patientId: '202',
    channel: 'email',
    scheduledFor: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    status: 'sent',
    message: 'Reminder: You have an appointment with Dr. Smith today at 2:00 PM',
  },
  {
    id: '3',
    appointmentId: '103',
    patientId: '203',
    channel: 'whatsapp',
    scheduledFor: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
    status: 'confirmed',
    message: 'Reminder: You have an appointment with Dr. Johnson today at 3:00 PM',
  },
];

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [reminders, setReminders] = useState<Reminder[]>(mockReminders);

  const sendReminder = async (
    appointmentId: string,
    patientId: string,
    channel: Channel,
    message: string
  ) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newReminder: Reminder = {
      id: Math.random().toString(36).substring(2, 9),
      appointmentId,
      patientId,
      channel,
      scheduledFor: new Date(),
      status: 'pending',
      message,
    };
    
    setReminders(prev => [...prev, newReminder]);
  };

  const getReminders = (appointmentId?: string) => {
    if (appointmentId) {
      return reminders.filter(reminder => reminder.appointmentId === appointmentId);
    }
    return reminders;
  };

  const getReminderStats = () => {
    return {
      total: reminders.length,
      sent: reminders.filter(r => r.status === 'sent').length,
      failed: reminders.filter(r => r.status === 'failed').length,
      confirmed: reminders.filter(r => r.status === 'confirmed').length,
    };
  };

  return (
    <NotificationContext.Provider value={{ 
      sendReminder, 
      getReminders, 
      getReminderStats 
    }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);