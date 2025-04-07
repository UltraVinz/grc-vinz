
import React, { useState } from 'react';
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
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  Calendar, 
  ClipboardList,
  Search, 
  Plus, 
  MoreHorizontal,
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock,
  Filter
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TaskList from '@/components/dashboard/TaskList';

const AuditManagement = () => {
  const [activeTab, setActiveTab] = useState('scheduled');

  // Sample audit data
  const audits = [
    {
      id: '1',
      name: 'Annual ISO 27001 Compliance Audit',
      type: 'External',
      standard: 'ISO 27001',
      status: 'scheduled',
      startDate: '2025-06-10',
      endDate: '2025-06-17',
      auditor: 'Deloitte',
      department: 'Information Security',
    },
    {
      id: '2',
      name: 'Q2 Internal Control Assessment',
      type: 'Internal',
      standard: 'SOX',
      status: 'in-progress',
      startDate: '2025-04-15',
      endDate: '2025-04-22',
      auditor: 'Internal Audit Team',
      department: 'Finance',
    },
    {
      id: '3',
      name: 'Data Protection Impact Assessment',
      type: 'Internal',
      standard: 'GDPR',
      status: 'completed',
      startDate: '2025-03-05',
      endDate: '2025-03-10',
      auditor: 'Privacy Team',
      department: 'Legal',
    },
    {
      id: '4',
      name: 'Vendor Security Assessment - CloudSecure',
      type: 'External',
      standard: 'NIST CSF',
      status: 'scheduled',
      startDate: '2025-05-20',
      endDate: '2025-05-25',
      auditor: 'Third Party Risk Team',
      department: 'Procurement',
    },
    {
      id: '5',
      name: 'PCI DSS Compliance Verification',
      type: 'External',
      standard: 'PCI DSS',
      status: 'scheduled',
      startDate: '2025-07-15',
      endDate: '2025-07-22',
      auditor: 'QSA Firm',
      department: 'IT',
    },
  ];

  // Sample audit findings
  const findings = [
    {
      id: '1',
      title: 'Missing Access Control Documentation',
      audit: 'Q2 Internal Control Assessment',
      severity: 'high',
      status: 'open',
      assignee: 'IT Director',
      dueDate: '2025-05-15',
    },
    {
      id: '2',
      title: 'Incomplete Data Retention Policy',
      audit: 'Data Protection Impact Assessment',
      severity: 'medium',
      status: 'in-progress',
      assignee: 'Legal Counsel',
      dueDate: '2025-04-30',
    },
    {
      id: '3',
      title: 'Insufficient Logging for Critical Systems',
      audit: 'Annual ISO 27001 Compliance Audit',
      severity: 'high',
      status: 'open',
      assignee: 'Security Lead',
      dueDate: '2025-07-15',
    },
    {
      id: '4',
      title: 'Missing Security Awareness Training Records',
      audit: 'Annual ISO 27001 Compliance Audit',
      severity: 'low',
      status: 'closed',
      assignee: 'HR Manager',
      dueDate: '2025-07-01',
    },
  ];

  const auditTasks = findings.map(finding => ({
    id: finding.id,
    title: `Remediate: ${finding.title}`,
    dueDate: finding.dueDate,
    priority: finding.severity as 'high' | 'medium' | 'low',
    status: finding.status as 'pending' | 'in-progress' | 'completed',
    category: 'audit' as const,
    description: `Address the finding from "${finding.audit}" audit. Requires documentation updates and process improvements.`,
    assignee: finding.assignee
  }));

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'scheduled':
        return (
          <div className="flex items-center gap-1">
            <Calendar size={14} className="text-blue-600" />
            <span className="text-blue-600 text-xs font-medium">Scheduled</span>
          </div>
        );
      case 'in-progress':
        return (
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-amber-600" />
            <span className="text-amber-600 text-xs font-medium">In Progress</span>
          </div>
        );
      case 'completed':
        return (
          <div className="flex items-center gap-1">
            <CheckCircle2 size={14} className="text-green-600" />
            <span className="text-green-600 text-xs font-medium">Completed</span>
          </div>
        );
      default:
        return null;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high':
        return (
          <div className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            High
          </div>
        );
      case 'medium':
        return (
          <div className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Medium
          </div>
        );
      case 'low':
        return (
          <div className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Low
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Audit Management</h1>
          <p className="text-gray-500 mt-1">Schedule, track, and manage internal and external audits</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus size={16} className="mr-2" />
              Schedule Audit
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Schedule New Audit</DialogTitle>
              <DialogDescription>
                Enter the details for the new audit you want to schedule.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="audit-name" className="text-sm font-medium">
                  Audit Name
                </label>
                <Input id="audit-name" placeholder="Enter audit name" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="audit-type" className="text-sm font-medium">
                    Audit Type
                  </label>
                  <Select>
                    <SelectTrigger id="audit-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="internal">Internal</SelectItem>
                      <SelectItem value="external">External</SelectItem>
                      <SelectItem value="regulatory">Regulatory</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="standard" className="text-sm font-medium">
                    Standard/Framework
                  </label>
                  <Select>
                    <SelectTrigger id="standard">
                      <SelectValue placeholder="Select standard" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="iso27001">ISO 27001</SelectItem>
                      <SelectItem value="gdpr">GDPR</SelectItem>
                      <SelectItem value="sox">SOX</SelectItem>
                      <SelectItem value="pci-dss">PCI DSS</SelectItem>
                      <SelectItem value="nist">NIST CSF</SelectItem>
                      <SelectItem value="hipaa">HIPAA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="start-date" className="text-sm font-medium">
                    Start Date
                  </label>
                  <Input id="start-date" type="date" />
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="end-date" className="text-sm font-medium">
                    End Date
                  </label>
                  <Input id="end-date" type="date" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="auditor" className="text-sm font-medium">
                    Auditor
                  </label>
                  <Input id="auditor" placeholder="Enter auditor name" />
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="department" className="text-sm font-medium">
                    Department
                  </label>
                  <Select>
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it">IT</SelectItem>
                      <SelectItem value="security">Information Security</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="legal">Legal</SelectItem>
                      <SelectItem value="hr">HR</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid gap-2">
                <label htmlFor="description" className="text-sm font-medium">
                  Description & Scope
                </label>
                <textarea 
                  id="description" 
                  className="min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                  placeholder="Enter audit description and scope details" 
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Schedule Audit</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Tabs defaultValue="scheduled" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="scheduled">Scheduled Audits</TabsTrigger>
          <TabsTrigger value="findings">Findings</TabsTrigger>
          <TabsTrigger value="remediation">Remediation</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <div className="flex flex-col md:flex-row gap-4 my-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder={activeTab === 'findings' ? "Search findings..." : "Search audits..."}
              className="pl-9"
            />
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter size={16} className="mr-2" />
              Filter
            </Button>
            
            {activeTab === 'scheduled' && (
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            )}
            
            {activeTab === 'findings' && (
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Severities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>
        </div>
        
        <TabsContent value="scheduled">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Audit Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Standard</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>End Date</TableHead>
                  <TableHead>Auditor</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {audits.map((audit) => (
                  <TableRow key={audit.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-2">
                        <ClipboardList size={16} className="text-gray-400" />
                        <span>{audit.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{audit.type}</TableCell>
                    <TableCell>{audit.standard}</TableCell>
                    <TableCell>{getStatusBadge(audit.status)}</TableCell>
                    <TableCell>{audit.startDate}</TableCell>
                    <TableCell>{audit.endDate}</TableCell>
                    <TableCell>{audit.auditor}</TableCell>
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
                            <AlertCircle size={16} className="mr-2" />
                            Add Finding
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CheckCircle2 size={16} className="mr-2" />
                            Complete Audit
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        <TabsContent value="findings">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Finding</TableHead>
                  <TableHead>Audit</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {findings.map((finding) => (
                  <TableRow key={finding.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-2">
                        <AlertCircle size={16} className={finding.severity === 'high' ? "text-red-500" : finding.severity === 'medium' ? "text-yellow-500" : "text-green-500"} />
                        <span>{finding.title}</span>
                      </div>
                    </TableCell>
                    <TableCell>{finding.audit}</TableCell>
                    <TableCell>{getSeverityBadge(finding.severity)}</TableCell>
                    <TableCell>{getStatusBadge(finding.status)}</TableCell>
                    <TableCell>{finding.assignee}</TableCell>
                    <TableCell>{finding.dueDate}</TableCell>
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
                            <Clock size={16} className="mr-2" />
                            Update Status
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CheckCircle2 size={16} className="mr-2" />
                            Mark as Remediated
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        <TabsContent value="remediation">
          <TaskList 
            tasks={auditTasks} 
            title="Audit Remediation Tasks"
            showCategory={true}
          />
        </TabsContent>
        
        <TabsContent value="reports">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Audit Status Summary</CardTitle>
                <CardDescription>Overview of audit completion status</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p>Chart visualization will be displayed here</p>
                  <p className="text-sm mt-2">Showing completion rates across all audits</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Findings by Severity</CardTitle>
                <CardDescription>Distribution of findings by severity level</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p>Chart visualization will be displayed here</p>
                  <p className="text-sm mt-2">Showing findings categorized by severity</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Remediation Progress</CardTitle>
                <CardDescription>Status of finding remediation efforts over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p>Chart visualization will be displayed here</p>
                  <p className="text-sm mt-2">Showing remediation progress over the last 12 months</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuditManagement;
