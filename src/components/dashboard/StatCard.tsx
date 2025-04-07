
import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  change?: number;
  icon: React.ReactNode;
  iconColor: string;
  borderColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  icon, 
  iconColor,
  borderColor = "border-gray-200"
}) => {
  return (
    <div className={cn("grc-stat-card bg-white", borderColor)}>
      <div className="flex justify-between items-start mb-4">
        <div className={cn("p-2 rounded-md", iconColor)}>{icon}</div>
        
        {change !== undefined && (
          <div className={cn(
            "flex items-center text-sm font-medium",
            change >= 0 ? "text-grc-success" : "text-grc-danger"
          )}>
            {change >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
            <span>{Math.abs(change)}%</span>
          </div>
        )}
      </div>
      
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
};

export default StatCard;
