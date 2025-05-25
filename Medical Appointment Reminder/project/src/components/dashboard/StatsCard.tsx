import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  change: number;
  changeText: string;
  isPercentage?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  change,
  changeText,
  isPercentage = false,
}) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="bg-gray-50 rounded-md p-3">{icon}</div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd>
                <div className="text-lg font-medium text-gray-900">{value}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3">
        <div className="text-sm">
          <div className="flex items-center">
            {change > 0 ? (
              <TrendingUp className="flex-shrink-0 h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="flex-shrink-0 h-4 w-4 text-red-500" />
            )}
            <span
              className={`ml-1 font-medium ${
                change > 0 ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {change > 0 ? '+' : ''}
              {isPercentage ? `${change}%` : change}
            </span>
            <span className="ml-1 text-gray-500">{changeText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;