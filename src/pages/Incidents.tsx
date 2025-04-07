
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
import { Badge } from '@/components/ui/badge';
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
  BarChart3,
  AlertTriangle, 
  Search, 
  Plus, 
  MoreHorizontal,
  FileText,
  CheckCircle2,
  Clock,
  Filter,
  Calendar,
  Shield,
  ExternalLink
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Incidents = () => {
  const [activeTab, setActiveTab] = useState('active');

  // Sample incident data
  const incidents = [
    {
      id: '1',
      title: 'Phishing Campaign Targeting Finance Department',
      type: 'Social Engineering',
      severity: 'high',
      status: 'active',
      reported: '2025-04-02',
      discoveredBy: 'Security Operations',
      affectedSystems: 'Email System',
      description: 'Sophisticated phishing campaign targeting finance department employees with fake invoice emails containing malicious attachments.',
    },
    {
      id: '2',
      title: 'Ransomware Attack on File Server',
      type: 'Malware',
      severity: 'critical',
      status: 'active',
      reported: '2025-04-05',
      discoveredBy: 'IT Support',
      affectedSystems: 'File Server, Backup System',
      description: 'Ransomware detected on file server with encryption of multiple shared folders. Incident response team engaged.',
    },
    {
      id: '3',
      title: 'Unauthorized Access to HR Database',
      type: 'Unauthorized Access',
      severity: 'high',
      status: 'investigating',
      reported: '2025-04-03',
      discoveredBy: 'Security Monitoring',
      affectedSystems: 'HR Management System',
      description: 'Unusual access patterns detected for HR database containing employee personal information. Investigation in progress.',
    },
    {
      id: '4',
      title: 'DDoS Attack on Corporate Website',
      type: 'Availability',
      severity: 'medium',
      status: 'resolved',
      reported: '2025-03-28',
      discoveredBy: 'Website Monitoring',
      affectedSystems: 'Web Servers, CDN',
      description: 'Distributed denial of service attack targeting corporate website. Mitigated through CDN protections and traffic filtering.',
    },
    {
      id: '5',
      title: 'Exposed API Credentials in Public Repository',
      type: 'Data Exposure',
      severity: 'high',
      status: 'resolved',
      reported: '2025-03-25',
      discoveredBy: 'External Security Researcher',
      affectedSystems: 'Payment Processing API',
      description: 'API credentials accidentally committed to public GitHub repository. Credentials revoked and rotated.',
    },
  ];

  // Sample metrics for dashboard
  const incidentMetrics = {
    total: 18,
    active: 5,
    resolved: 13,
    byType: [
      { name: 'Malware', value: 5 },
      { name: 'Social Engineering', value: 4 },
      { name: 'Unauthorized Access', value: 3 },
      { name: 'Data Exposure', value: 3 },
      { name: 'Availability', value: 2 },
      { name: 'Other', value: 1 },
    ],
    bySeverity: [
      { name: 'Critical', value: 2 },
      { name: 'High', value: 7 },
      { name: 'Medium', value: 6 },
      { name: 'Low', value: 3 },
    ],
    timeToResolve: {
      average: '3.2 days',
      byMonth: [
        { month: 'Jan', days: 4.1 },
        { month: 'Feb', days: 3.8 },
        { month: 'Mar', days: 3.5 },
        { month: 'Apr', days: 2.9 },
      ]
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical':
        return (
          <Badge variant="danger" className="font-medium">
            Critical
          </Badge>
        );
      case 'high':
        return (
          <Badge variant="warning" className="font-medium">
            High
          </Badge>
        );
      case 'medium':
        return (
          <Badge variant="info" className="font-medium">
            Medium
          </Badge>
        );
      case 'low':
        return (
          <Badge variant="success" className="font-medium">
            Low
          </Badge>
        );
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <div className="flex items-center gap-1">
            <AlertTriangle size={14} className="text-amber-600" />
            <span className="text-amber-600 text-xs font-medium">Active</span>
          </div>
        );
      case 'investigating':
        return (
          <div className="flex items-center gap-1">
            <Search size={14} className="text-blue-600" />
            <span className="text-blue-600 text-xs font-medium">Investigating</span>
          </div>
        );
      case 'resolved':
        return (
          <div className="flex items-center gap-1">
            <CheckCircle2 size={14} className="text-green-600" />
            <span className="text-green-600 text-xs font-medium">Resolved</span>
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
          <h1 className="text-2xl font-bold">Security Incidents</h1>
          <p className="text-gray-500 mt-1">Track, manage, and respond to security incidents</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus size={16} className="mr-2" />
              Report Incident
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Report New Security Incident</DialogTitle>
              <DialogDescription>
                Complete the form to report a new security incident. Provide as much detail as possible.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="incident-title" className="text-sm font-medium">
                  Incident Title
                </label>
                <Input id="incident-title" placeholder="Brief description of the incident" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="incident-type" className="text-sm font-medium">
                    Incident Type
                  </label>
                  <Select>
                    <SelectTrigger id="incident-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="malware">Malware</SelectItem>
                      <SelectItem value="social">Social Engineering</SelectItem>
                      <SelectItem value="unauthorized">Unauthorized Access</SelectItem>
                      <SelectItem value="data-exposure">Data Exposure</SelectItem>
                      <SelectItem value="availability">Availability</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="severity" className="text-sm font-medium">
                    Severity
                  </label>
                  <Select>
                    <SelectTrigger id="severity">
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="reported-date" className="text-sm font-medium">
                    Date Discovered
                  </label>
                  <Input id="reported-date" type="date" />
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="discovered-by" className="text-sm font-medium">
                    Discovered By
                  </label>
                  <Input id="discovered-by" placeholder="Person or system that discovered the incident" />
                </div>
              </div>
              
              <div className="grid gap-2">
                <label htmlFor="affected-systems" className="text-sm font-medium">
                  Affected Systems
                </label>
                <Input id="affected-systems" placeholder="Systems, applications, or data affected" />
              </div>
              
              <div className="grid gap-2">
                <label htmlFor="description" className="text-sm font-medium">
                  Detailed Description
                </label>
                <textarea 
                  id="description" 
                  className="min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                  placeholder="Detailed description of what happened, how it was discovered, and current status" 
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Submit Report</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Tabs defaultValue="dashboard" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="active">Active Incidents</TabsTrigger>
          <TabsTrigger value="all">All Incidents</TabsTrigger>
          <TabsTrigger value="playbooks">Response Playbooks</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Total Incidents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{incidentMetrics.total}</div>
                <p className="text-muted-foreground text-sm">Last 12 months</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Active</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-600">{incidentMetrics.active}</div>
                <p className="text-muted-foreground text-sm">Requiring attention</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Resolved</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">{incidentMetrics.resolved}</div>
                <p className="text-muted-foreground text-sm">Successfully mitigated</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Avg. Time to Resolve</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{incidentMetrics.timeToResolve.average}</div>
                <p className="text-muted-foreground text-sm">Trending downward</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Incidents by Type</CardTitle>
                <CardDescription>Distribution of incidents by category</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p>Chart visualization will be displayed here</p>
                  <p className="text-sm mt-2">Showing incident distribution by type</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Incidents by Severity</CardTitle>
                <CardDescription>Breakdown by impact level</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p>Chart visualization will be displayed here</p>
                  <p className="text-sm mt-2">Showing incidents by severity level</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Time to Resolution Trend</CardTitle>
              <CardDescription>Average time to resolve incidents over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <p>Chart visualization will be displayed here</p>
                <p className="text-sm mt-2">Showing resolution time trends over the last 12 months</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="active">
          <div className="flex flex-col md:flex-row gap-4 my-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search active incidents..."
                className="pl-9"
              />
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter size={16} className="mr-2" />
                Filter
              </Button>
              
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Severities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severities</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[350px]">Incident</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Reported</TableHead>
                  <TableHead>Affected Systems</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {incidents.filter(incident => incident.status !== 'resolved').map((incident) => (
                  <TableRow key={incident.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle size={16} className={
                          incident.severity === 'critical' ? "text-red-500" : 
                          incident.severity === 'high' ? "text-amber-500" : 
                          "text-blue-500"
                        } />
                        <span>{incident.title}</span>
                      </div>
                    </TableCell>
                    <TableCell>{incident.type}</TableCell>
                    <TableCell>{getSeverityBadge(incident.severity)}</TableCell>
                    <TableCell>{getStatusBadge(incident.status)}</TableCell>
                    <TableCell>{incident.reported}</TableCell>
                    <TableCell>{incident.affectedSystems}</TableCell>
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
                            <Shield size={16} className="mr-2" />
                            Update Status
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CheckCircle2 size={16} className="mr-2" />
                            Mark as Resolved
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
        
        <TabsContent value="all">
          <div className="flex flex-col md:flex-row gap-4 my-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search all incidents..."
                className="pl-9"
              />
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter size={16} className="mr-2" />
                Filter
              </Button>
              
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="investigating">Investigating</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[350px]">Incident</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Reported</TableHead>
                  <TableHead>Affected Systems</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {incidents.map((incident) => (
                  <TableRow key={incident.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle size={16} className={
                          incident.severity === 'critical' ? "text-red-500" : 
                          incident.severity === 'high' ? "text-amber-500" : 
                          "text-blue-500"
                        } />
                        <span>{incident.title}</span>
                      </div>
                    </TableCell>
                    <TableCell>{incident.type}</TableCell>
                    <TableCell>{getSeverityBadge(incident.severity)}</TableCell>
                    <TableCell>{getStatusBadge(incident.status)}</TableCell>
                    <TableCell>{incident.reported}</TableCell>
                    <TableCell>{incident.affectedSystems}</TableCell>
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
                            <Shield size={16} className="mr-2" />
                            Update Status
                          </DropdownMenuItem>
                          {incident.status !== 'resolved' && (
                            <DropdownMenuItem>
                              <CheckCircle2 size={16} className="mr-2" />
                              Mark as Resolved
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        <TabsContent value="playbooks">
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Ransomware Response</CardTitle>
                <CardDescription>Steps to contain and mitigate ransomware attacks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                    <span>Isolate affected systems from network</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                    <span>Identify ransomware variant and infection vector</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                    <span>Assess data impact and recovery options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                    <span>Initiate recovery from clean backups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">5</span>
                    <span>Report to legal and regulatory authorities</span>
                  </li>
                </ul>
              </CardContent>
              <div className="px-6 pb-4">
                <Button variant="outline" className="w-full">
                  <FileText size={16} className="mr-2" />
                  View Full Playbook
                </Button>
              </div>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Phishing Incident</CardTitle>
                <CardDescription>Response process for phishing attacks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                    <span>Preserve original phishing email as evidence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                    <span>Analyze email headers and payload</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                    <span>Block sender and malicious URLs/domains</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                    <span>Search for similar messages across email system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">5</span>
                    <span>Send alert notification to all employees</span>
                  </li>
                </ul>
              </CardContent>
              <div className="px-6 pb-4">
                <Button variant="outline" className="w-full">
                  <FileText size={16} className="mr-2" />
                  View Full Playbook
                </Button>
              </div>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Data Breach</CardTitle>
                <CardDescription>Steps for handling confirmed data breaches</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                    <span>Contain the breach and preserve evidence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                    <span>Identify scope of compromised data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                    <span>Engage legal team for compliance requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                    <span>Prepare notification for affected individuals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">5</span>
                    <span>Document lessons learned and remediation plan</span>
                  </li>
                </ul>
              </CardContent>
              <div className="px-6 pb-4">
                <Button variant="outline" className="w-full">
                  <FileText size={16} className="mr-2" />
                  View Full Playbook
                </Button>
              </div>
            </Card>
            
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle>New Playbook</CardTitle>
                <CardDescription>Create a new incident response playbook</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center py-6">
                <Button variant="outline" className="border-dashed">
                  <Plus size={16} className="mr-2" />
                  Create New Playbook
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>External Resources</CardTitle>
                <CardDescription>Reference materials and frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="#" className="flex items-center text-blue-600 hover:underline">
                      <ExternalLink size={14} className="mr-2" />
                      NIST Incident Response Framework
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-blue-600 hover:underline">
                      <ExternalLink size={14} className="mr-2" />
                      SANS Incident Handler's Handbook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-blue-600 hover:underline">
                      <ExternalLink size={14} className="mr-2" />
                      US-CERT Incident Response Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-blue-600 hover:underline">
                      <ExternalLink size={14} className="mr-2" />
                      ISO/IEC 27035 Incident Management
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Incidents;

