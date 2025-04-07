
import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Task {
  id: string;
  title: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in-progress' | 'completed';
}

interface TaskListProps {
  tasks: readonly Task[] | Task[]; // Accept both readonly and mutable arrays
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-grc-danger';
      case 'medium':
        return 'text-grc-warning';
      case 'low':
        return 'text-grc-success';
      default:
        return 'text-gray-500';
    }
  };
  
  const getStatusBadge = (status: Task['status']) => {
    switch (status) {
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Pending
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            In Progress
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Completed
          </span>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="grc-card h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="grc-header">Tasks & Action Items</h3>
        <Button variant="outline" size="sm">View All</Button>
      </div>
      
      <div className="space-y-3">
        {tasks.map((task) => (
          <div 
            key={task.id}
            className="p-3 border rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-2"
          >
            <div>
              <div className="flex items-start gap-2">
                <AlertTriangle 
                  size={18} 
                  className={cn("mt-0.5", getPriorityColor(task.priority))} 
                />
                <div>
                  <h4 className="font-medium text-gray-900">{task.title}</h4>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock size={14} className="mr-1" />
                      <span>Due: {task.dueDate}</span>
                    </div>
                    {getStatusBadge(task.status)}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button size="sm" variant="outline">Details</Button>
              <Button size="sm">Complete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
