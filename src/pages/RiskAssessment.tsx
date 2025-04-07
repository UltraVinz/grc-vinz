
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  AlertTriangle, 
  Filter, 
  Plus, 
  Search, 
  ArrowUpDown, 
  MoreHorizontal,
  FileText,
  Edit,
  Trash2
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const RiskAssessment = () => {
  // Sample risk data
  const risks = [
    {
      id: '1',
      name: 'Unauthorized Data Access',
      category: 'Information Security',
      impact: 'high',
      likelihood: 'medium',
      level: 'high',
      owner: 'Security Team',
      status: 'open',
      created: '2025-01-15',
    },
    {
      id: '2',
      name: 'Non-compliance with GDPR',
      category: 'Compliance',
      impact: 'high',
      likelihood: 'low',
      level: 'medium',
      owner: 'Legal Team',
      status: 'in-progress',
      created: '2025-02-10',
    },
    {
      id: '3',
      name: 'System Downtime',
      category: 'Operational',
      impact: 'medium',
      likelihood: 'medium',
      level: 'medium',
      owner: 'IT Team',
      status: 'open',
      created: '2025-02-20',
    },
    {
      id: '4',
      name: 'Phishing Attacks',
      category: 'Information Security',
      impact: 'high',
      likelihood: 'high',
      level: 'high',
      owner: 'Security Team',
      status: 'in-progress',
      created: '2025-03-05',
    },
    {
      id: '5',
      name: 'Vendor Service Failure',
      category: 'Third Party',
      impact: 'medium',
      likelihood: 'low',
      level: 'low',
      owner: 'Procurement Team',
      status: 'closed',
      created: '2025-01-25',
    },
  ];

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-blue-100 text-blue-800';
      case 'in-progress':
        return 'bg-purple-100 text-purple-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Risk Assessment</h1>
          <p className="text-gray-500 mt-1">Manage and assess organizational risks</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus size={16} className="mr-2" />
              Add Risk
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Add New Risk</DialogTitle>
              <DialogDescription>
                Enter the details for the new risk you want to track.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="risk-name" className="text-sm font-medium">
                  Risk Name
                </label>
                <Input id="risk-name" placeholder="Enter risk name" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="category" className="text-sm font-medium">
                    Category
                  </label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="information-security">Information Security</SelectItem>
                      <SelectItem value="compliance">Compliance</SelectItem>
                      <SelectItem value="operational">Operational</SelectItem>
                      <SelectItem value="financial">Financial</SelectItem>
                      <SelectItem value="strategic">Strategic</SelectItem>
                      <SelectItem value="third-party">Third Party</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="owner" className="text-sm font-medium">
                    Owner
                  </label>
                  <Select>
                    <SelectTrigger id="owner">
                      <SelectValue placeholder="Select owner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="security-team">Security Team</SelectItem>
                      <SelectItem value="legal-team">Legal Team</SelectItem>
                      <SelectItem value="it-team">IT Team</SelectItem>
                      <SelectItem value="finance-team">Finance Team</SelectItem>
                      <SelectItem value="procurement-team">Procurement Team</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="impact" className="text-sm font-medium">
                    Impact
                  </label>
                  <Select>
                    <SelectTrigger id="impact">
                      <SelectValue placeholder="Select impact" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="likelihood" className="text-sm font-medium">
                    Likelihood
                  </label>
                  <Select>
                    <SelectTrigger id="likelihood">
                      <SelectValue placeholder="Select likelihood" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid gap-2">
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <textarea 
                  id="description" 
                  className="min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                  placeholder="Enter risk description" 
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Save Risk</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="p-4 bg-white rounded-lg border">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search risks..."
              className="pl-9"
            />
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Filter size={16} />
            </Button>
            <Select>
              <SelectTrigger id="risk-level" className="w-[130px]">
                <SelectValue placeholder="Risk Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger id="status" className="w-[130px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">
                  <div className="flex items-center space-x-1">
                    <span>Risk Name</span>
                    <ArrowUpDown size={14} />
                  </div>
                </TableHead>
                <TableHead>Category</TableHead>
                <TableHead>
                  <div className="flex items-center space-x-1">
                    <span>Level</span>
                    <ArrowUpDown size={14} />
                  </div>
                </TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {risks.map((risk) => (
                <TableRow key={risk.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-2">
                      {risk.level === 'high' && (
                        <AlertTriangle size={16} className="text-red-500" />
                      )}
                      <span>{risk.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{risk.category}</TableCell>
                  <TableCell>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskLevelColor(risk.level)}`}>
                      {risk.level.charAt(0).toUpperCase() + risk.level.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>{risk.owner}</TableCell>
                  <TableCell>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(risk.status)}`}>
                      {risk.status === 'in-progress' ? 'In Progress' : risk.status.charAt(0).toUpperCase() + risk.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>{risk.created}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <FileText size={16} className="mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit size={16} className="mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 size={16} className="mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500">
            Showing <strong>5</strong> of <strong>5</strong> risks
          </p>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;
