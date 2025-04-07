
import React, { useState } from 'react';
import { Clock, AlertTriangle, Check, X, ChevronDown, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface Task {
  id: string;
  title: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in-progress' | 'completed';
  assignee?: string;
  description?: string;
  category?: 'risk' | 'compliance' | 'audit' | 'policy' | 'incident';
}

interface TaskListProps {
  tasks: readonly Task[] | Task[]; // Accept both readonly and mutable arrays
  title?: string;
  showCategory?: boolean;
  onTaskUpdate?: (taskId: string, status: Task['status']) => void;
  onTaskAssign?: (taskId: string, assignee: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ 
  tasks, 
  title = "Tasks & Action Items", 
  showCategory = false,
  onTaskUpdate,
  onTaskAssign
}) => {
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);

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
          <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
            Pending
          </Badge>
        );
      case 'in-progress':
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            In Progress
          </Badge>
        );
      case 'completed':
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
            Completed
          </Badge>
        );
      default:
        return null;
    }
  };

  const getCategoryBadge = (category?: Task['category']) => {
    if (!category || !showCategory) return null;
    
    switch (category) {
      case 'risk':
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            Risk
          </Badge>
        );
      case 'compliance':
        return (
          <Badge variant="outline" className="bg-purple-100 text-purple-800 hover:bg-purple-100">
            Compliance
          </Badge>
        );
      case 'audit':
        return (
          <Badge variant="outline" className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100">
            Audit
          </Badge>
        );
      case 'policy':
        return (
          <Badge variant="outline" className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">
            Policy
          </Badge>
        );
      case 'incident':
        return (
          <Badge variant="outline" className="bg-orange-100 text-orange-800 hover:bg-orange-100">
            Incident
          </Badge>
        );
      default:
        return null;
    }
  };

  const handleStatusChange = (taskId: string, status: Task['status']) => {
    if (onTaskUpdate) {
      onTaskUpdate(taskId, status);
    } else {
      toast.success(`Task status updated to ${status}`);
    }
  };

  const handleAssign = (taskId: string) => {
    // In a real app, this would show a user selection UI
    const assignee = "John Doe";
    if (onTaskAssign) {
      onTaskAssign(taskId, assignee);
    } else {
      toast.success(`Task assigned to ${assignee}`);
    }
  };

  const toggleTaskExpansion = (taskId: string) => {
    setExpandedTaskId(expandedTaskId === taskId ? null : taskId);
  };
  
  return (
    <div className="grc-card h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="grc-header">{title}</h3>
        <Button variant="outline" size="sm">View All</Button>
      </div>
      
      <div className="space-y-3">
        {tasks.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            <p>No tasks found</p>
          </div>
        ) : (
          tasks.map((task) => (
            <div 
              key={task.id}
              className="border rounded-md overflow-hidden"
            >
              <div 
                className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleTaskExpansion(task.id)}
              >
                <div className="flex-grow">
                  <div className="flex items-start gap-2">
                    <AlertTriangle 
                      size={18} 
                      className={cn("mt-0.5", getPriorityColor(task.priority))} 
                    />
                    <div className="flex-grow">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-gray-900">{task.title}</h4>
                        <ChevronDown size={16} className={cn("transition-transform", expandedTaskId === task.id ? "rotate-180" : "")} />
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock size={14} className="mr-1" />
                          <span>Due: {task.dueDate}</span>
                        </div>
                        {getStatusBadge(task.status)}
                        {getCategoryBadge(task.category)}
                        {task.assignee && (
                          <div className="flex items-center text-xs text-gray-500">
                            <User size={14} className="mr-1" />
                            <span>{task.assignee}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" variant="outline">Status</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => handleStatusChange(task.id, 'pending')}>
                        <span className="text-red-600 mr-2">•</span> Pending
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleStatusChange(task.id, 'in-progress')}>
                        <span className="text-yellow-600 mr-2">•</span> In Progress
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleStatusChange(task.id, 'completed')}>
                        <span className="text-green-600 mr-2">•</span> Completed
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {onTaskAssign && (
                    <Button size="sm" variant="outline" onClick={() => handleAssign(task.id)}>
                      Assign
                    </Button>
                  )}
                  <Button size="sm">Details</Button>
                </div>
              </div>
              
              {expandedTaskId === task.id && task.description && (
                <div className="p-3 border-t bg-gray-50">
                  <p className="text-sm text-gray-700">{task.description}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;
