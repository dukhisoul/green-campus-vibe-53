
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { FileDown, Save, Trash2, ArrowLeft, Plus } from 'lucide-react';
import { announcementsData } from '@/data/announcements';
import { useToast } from '@/hooks/use-toast';

const AdminAnnouncementDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const existingAnnouncement = id && id !== 'new' 
    ? announcementsData.find(a => a.id.toString() === id)
    : null;
  
  const [formData, setFormData] = useState({
    title: existingAnnouncement?.title || '',
    category: existingAnnouncement?.category || 'Academic',
    date: existingAnnouncement?.date || new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    }),
    description: existingAnnouncement?.description || '',
    important: existingAnnouncement?.important || false,
    fileAttachment: existingAnnouncement?.fileAttachment || '',
    // More fields can be added as needed
  });
  
  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically save to a database
    toast({
      title: "Announcement Saved",
      description: `The announcement "${formData.title}" has been saved successfully.`,
    });
    navigate('/admin/announcements');
  };
  
  const handleDelete = () => {
    // Here we would typically delete from a database
    toast({
      title: "Announcement Deleted",
      description: `The announcement has been deleted successfully.`,
      variant: "destructive"
    });
    navigate('/admin/announcements');
  };
  
  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {id === 'new' ? 'Create New Announcement' : 'Edit Announcement'}
          </h1>
          <p className="text-muted-foreground">
            {id === 'new' 
              ? 'Fill in the details to create a new announcement' 
              : 'Make changes to the announcement details'}
          </p>
        </div>
        <Button variant="outline" onClick={() => navigate('/admin/announcements')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Announcements
        </Button>
      </div>
      
      <Separator />
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Announcement Title</Label>
              <Input 
                id="title"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="Enter announcement title"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                placeholder="Enter announcement description"
                rows={8}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fileAttachment">File Attachment</Label>
              <div className="flex items-center gap-2">
                <Input 
                  id="fileAttachment"
                  value={formData.fileAttachment}
                  onChange={(e) => handleChange('fileAttachment', e.target.value)}
                  placeholder="File name (e.g., document.pdf)"
                />
                <Button type="button" variant="outline" className="whitespace-nowrap">
                  <FileDown className="mr-2 h-4 w-4" /> Upload File
                </Button>
              </div>
              {formData.fileAttachment && (
                <div className="mt-2 text-sm">
                  <span className="text-muted-foreground">Current file: </span>
                  <span className="font-medium">{formData.fileAttachment}</span>
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label>Related Events</Label>
              <Card>
                <CardContent className="p-4">
                  {existingAnnouncement?.relatedEvents?.map((event, index) => (
                    <div key={index} className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    <Plus className="mr-2 h-4 w-4" /> Add Related Event
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select 
                defaultValue={formData.category}
                onValueChange={(value) => handleChange('category', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Academic">Academic</SelectItem>
                  <SelectItem value="Facilities">Facilities</SelectItem>
                  <SelectItem value="Research">Research</SelectItem>
                  <SelectItem value="Health">Health</SelectItem>
                  <SelectItem value="Financial">Financial</SelectItem>
                  <SelectItem value="Campus">Campus</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="date">Publication Date</Label>
              <Input 
                id="date"
                type="text"
                value={formData.date}
                onChange={(e) => handleChange('date', e.target.value)}
                placeholder="Enter date (e.g., May 1, 2025)"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="important">Mark as Important</Label>
                <Switch 
                  id="important"
                  checked={formData.important}
                  onCheckedChange={(checked) => handleChange('important', checked)}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Important announcements are highlighted and displayed prominently.
              </p>
            </div>

            <Separator className="my-4" />
            
            <div className="space-y-2">
              <Label>Status</Label>
              <div className="rounded-md bg-secondary p-3">
                <div className="text-sm">
                  <span className="font-medium">Created: </span>
                  <span className="text-muted-foreground">{existingAnnouncement ? 'April 12, 2025' : 'Not yet created'}</span>
                </div>
                <div className="text-sm">
                  <span className="font-medium">Last modified: </span>
                  <span className="text-muted-foreground">{existingAnnouncement ? 'April 14, 2025' : 'N/A'}</span>
                </div>
                <div className="text-sm">
                  <span className="font-medium">Created by: </span>
                  <span className="text-muted-foreground">{existingAnnouncement ? 'Admin User' : 'N/A'}</span>
                </div>
              </div>
            </div>

            <Separator className="my-4" />
            
            <div className="flex flex-col gap-2">
              <Button type="submit" className="w-full">
                <Save className="mr-2 h-4 w-4" /> Save Announcement
              </Button>
              {id !== 'new' && (
                <Button 
                  type="button" 
                  variant="destructive" 
                  onClick={handleDelete}
                  className="w-full"
                >
                  <Trash2 className="mr-2 h-4 w-4" /> Delete Announcement
                </Button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminAnnouncementDetail;
