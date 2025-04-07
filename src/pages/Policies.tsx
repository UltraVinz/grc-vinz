
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
  FileText, 
  Plus, 
  Search, 
  Download, 
  Eye, 
  Edit, 
  MoreHorizontal,
  Trash2,
  Check,
  Clock,
  RefreshCw
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Policies = () => {
  // Sample policy data
  const policies = [
    {
      id: '1',
      name: 'Information Security Policy',
      category: 'Security',
      owner: 'CISO',
      status: 'active',
      lastReviewed: '2025-01-10',
      nextReview: '2026-01-10',
    },
    {
      id: '2',
      name: 'Data Protection Policy',
      category: 'Privacy',
      owner: 'Data Protection Officer',
      status: 'active',
      lastReviewed: '2025-02-15',
      nextReview: '2026-02-15',
    },
    {
      id: '3',
      name: 'Acceptable Use Policy',
      category: 'IT',
      owner: 'IT Director',
      status: 'under review',
      lastReviewed: '2024-08-22',
      nextReview: '2025-08-22',
    },
    {
      id: '4',
      name: 'Business Continuity Plan',
      category: 'Operations',
      owner: 'COO',
      status: 'active',
      lastReviewed: '2025-03-05',
      nextReview: '2026-03-05',
    },
    {
      id: '5',
      name: 'Password Policy',
      category: 'Security',
      owner: 'CISO',
      status: 'pending approval',
      lastReviewed: '2024-11-18',
      nextReview: '2025-11-18',
    },
    {
      id: '6',
      name: 'Third-Party Risk Management Policy',
      category: 'Vendor Management',
      owner: 'Procurement Director',
      status: 'active',
      lastReviewed: '2025-02-28',
      nextReview: '2026-02-28',
    },
  ];

  const procedures = [
    {
      id: '1',
      name: 'Incident Response Procedure',
      category: 'Security',
      owner: 'Security Team Lead',
      status: 'active',
      lastReviewed: '2025-01-15',
      nextReview: '2026-01-15',
    },
    {
      id: '2',
      name: 'Access Control Procedure',
      category: 'IT',
      owner: 'IT Manager',
      status: 'active',
      lastReviewed: '2025-02-10',
      nextReview: '2026-02-10',
    },
    {
      id: '3',
      name: 'Data Backup Procedure',
      category: 'IT',
      owner: 'Infrastructure Manager',
      status: 'under review',
      lastReviewed: '2024-09-12',
      nextReview: '2025-09-12',
    },
    {
      id: '4',
      name: 'Security Vulnerability Handling',
      category: 'Security',
      owner: 'Security Team Lead',
      status: 'active',
      lastReviewed: '2025-03-01',
      nextReview: '2026-03-01',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <div className="flex items-center gap-1">
            <Check size={14} className="text-green-600" />
            <span className="text-green-600 text-xs font-medium">Active</span>
          </div>
        );
      case 'under review':
        return (
          <div className="flex items-center gap-1">
            <RefreshCw size={14} className="text-amber-600" />
            <span className="text-amber-600 text-xs font-medium">Under Review</span>
          </div>
        );
      case 'pending approval':
        return (
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-blue-600" />
            <span className="text-blue-600 text-xs font-medium">Pending Approval</span>
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
          <h1 className="text-2xl font-bold">Policies & Procedures</h1>
          <p className="text-gray-500 mt-1">Manage organization policies and procedures</p>
        </div>
        
        <Button>
          <Plus size={16} className="mr-2" />
          Add Document
        </Button>
      </div>
      
      <div className="bg-white rounded-lg border">
        <Tabs defaultValue="policies" className="p-4">
          <TabsList>
            <TabsTrigger value="policies">Policies</TabsTrigger>
            <TabsTrigger value="procedures">Procedures</TabsTrigger>
            <TabsTrigger value="standards">Standards</TabsTrigger>
          </TabsList>
          
          <div className="flex flex-col md:flex-row gap-4 my-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search documents..."
                className="pl-9"
              />
            </div>
            
            <Button variant="outline">
              Filter
            </Button>
          </div>
          
          <TabsContent value="policies" className="pt-4">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[350px]">Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Reviewed</TableHead>
                    <TableHead>Next Review</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {policies.map((policy) => (
                    <TableRow key={policy.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center space-x-2">
                          <FileText size={16} className="text-gray-400" />
                          <span>{policy.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{policy.category}</TableCell>
                      <TableCell>{policy.owner}</TableCell>
                      <TableCell>{getStatusBadge(policy.status)}</TableCell>
                      <TableCell>{policy.lastReviewed}</TableCell>
                      <TableCell>{policy.nextReview}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-1">
                          <Button variant="ghost" size="icon" title="View">
                            <Eye size={16} />
                          </Button>
                          <Button variant="ghost" size="icon" title="Download">
                            <Download size={16} />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal size={16} />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Edit size={16} className="mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <RefreshCw size={16} className="mr-2" />
                                Request Review
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 size={16} className="mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="procedures" className="pt-4">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[350px]">Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Reviewed</TableHead>
                    <TableHead>Next Review</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {procedures.map((procedure) => (
                    <TableRow key={procedure.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center space-x-2">
                          <FileText size={16} className="text-gray-400" />
                          <span>{procedure.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{procedure.category}</TableCell>
                      <TableCell>{procedure.owner}</TableCell>
                      <TableCell>{getStatusBadge(procedure.status)}</TableCell>
                      <TableCell>{procedure.lastReviewed}</TableCell>
                      <TableCell>{procedure.nextReview}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-1">
                          <Button variant="ghost" size="icon" title="View">
                            <Eye size={16} />
                          </Button>
                          <Button variant="ghost" size="icon" title="Download">
                            <Download size={16} />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal size={16} />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Edit size={16} className="mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <RefreshCw size={16} className="mr-2" />
                                Request Review
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 size={16} className="mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="standards">
            <div className="flex items-center justify-center h-[200px] bg-muted/30 rounded-lg mt-4">
              <div className="text-center">
                <h3 className="font-medium text-lg">Standards</h3>
                <p className="text-muted-foreground">No standards have been added yet.</p>
                <Button variant="outline" className="mt-4">
                  <Plus size={16} className="mr-2" />
                  Add Standard
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Policies;
