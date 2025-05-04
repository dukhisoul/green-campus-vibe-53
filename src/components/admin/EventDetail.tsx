
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
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileDown, Save, Trash2, ArrowLeft, Plus, Calendar, Clock, MapPin, Users } from 'lucide-react';
import { eventsData } from '@/data/events';
import { useToast } from '@/hooks/use-toast';

const AdminEventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const existingEvent = id && id !== 'new' 
    ? eventsData.find(e => e.id.toString() === id)
    : null;
  
  const [formData, setFormData] = useState({
    title: existingEvent?.title || '',
    category: existingEvent?.category || 'Campus Life',
    date: existingEvent?.date || new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    }),
    time: existingEvent?.time || '',
    location: existingEvent?.location || '',
    description: existingEvent?.description || '',
    detailedDescription: existingEvent?.detailedDescription || '',
    organizer: existingEvent?.organizer || '',
    fileAttachment: existingEvent?.fileAttachment || '',
    image: existingEvent?.image || '',
    // More fields can be added as needed
  });
  
  const [schedule, setSchedule] = useState(
    existingEvent?.schedule || [
      { time: '', activity: '' }
    ]
  );
  
  const [speakers, setSpeakers] = useState(
    existingEvent?.speakers || [
      { name: '', title: '', image: '' }
    ]
  );
  
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleScheduleChange = (index: number, field: string, value: string) => {
    const newSchedule = [...schedule];
    newSchedule[index] = { ...newSchedule[index], [field]: value };
    setSchedule(newSchedule);
  };
  
  const handleAddScheduleItem = () => {
    setSchedule([...schedule, { time: '', activity: '' }]);
  };
  
  const handleRemoveScheduleItem = (index: number) => {
    setSchedule(schedule.filter((_, i) => i !== index));
  };
  
  const handleSpeakerChange = (index: number, field: string, value: string) => {
    const newSpeakers = [...speakers];
    newSpeakers[index] = { ...newSpeakers[index], [field]: value };
    setSpeakers(newSpeakers);
  };
  
  const handleAddSpeaker = () => {
    setSpeakers([...speakers, { name: '', title: '', image: '' }]);
  };
  
  const handleRemoveSpeaker = (index: number) => {
    setSpeakers(speakers.filter((_, i) => i !== index));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically save to a database
    toast({
      title: "Event Saved",
      description: `The event "${formData.title}" has been saved successfully.`,
    });
    navigate('/admin/events');
  };
  
  const handleDelete = () => {
    // Here we would typically delete from a database
    toast({
      title: "Event Deleted",
      description: `The event has been deleted successfully.`,
      variant: "destructive"
    });
    navigate('/admin/events');
  };
  
  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {id === 'new' ? 'Create New Event' : 'Edit Event'}
          </h1>
          <p className="text-muted-foreground">
            {id === 'new' 
              ? 'Fill in the details to create a new event' 
              : 'Make changes to the event details'}
          </p>
        </div>
        <Button variant="outline" onClick={() => navigate('/admin/events')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
        </Button>
      </div>
      
      <Separator />
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Event Title</Label>
              <Input 
                id="title"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="Enter event title"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <div className="relative">
                  <Input 
                    id="date"
                    value={formData.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    placeholder="e.g., May 15, 2025"
                    className="pl-9"
                    required
                  />
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <div className="relative">
                  <Input 
                    id="time"
                    value={formData.time}
                    onChange={(e) => handleChange('time', e.target.value)}
                    placeholder="e.g., 10:00 AM - 4:00 PM"
                    className="pl-9"
                  />
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <Input 
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    placeholder="e.g., Main Campus Quad"
                    className="pl-9"
                  />
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Short Description</Label>
              <Textarea 
                id="description"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                placeholder="Enter a brief description of the event"
                rows={3}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="detailedDescription">Detailed Description</Label>
              <Textarea 
                id="detailedDescription"
                value={formData.detailedDescription}
                onChange={(e) => handleChange('detailedDescription', e.target.value)}
                placeholder="Enter a comprehensive description of the event"
                rows={8}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="image">Featured Image</Label>
              <div className="flex items-center gap-2">
                <Input 
                  id="image"
                  value={formData.image}
                  onChange={(e) => handleChange('image', e.target.value)}
                  placeholder="Image URL"
                  className="flex-grow"
                />
                <Button type="button" variant="outline" className="whitespace-nowrap">
                  <FileDown className="mr-2 h-4 w-4" /> Upload Image
                </Button>
              </div>
              {formData.image && (
                <div className="mt-3 border rounded-md overflow-hidden h-40 flex items-center justify-center bg-muted">
                  <img 
                    src={formData.image} 
                    alt="Event preview" 
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
              )}
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Event Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="flex-grow space-y-2">
                        <div className="flex gap-3">
                          <Input
                            placeholder="Time (e.g., 10:00 AM)"
                            value={item.time}
                            onChange={(e) => handleScheduleChange(index, 'time', e.target.value)}
                            className="w-1/3"
                          />
                          <Input
                            placeholder="Activity description"
                            value={item.activity}
                            onChange={(e) => handleScheduleChange(index, 'activity', e.target.value)}
                            className="flex-grow"
                          />
                        </div>
                      </div>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleRemoveScheduleItem(index)}
                        disabled={schedule.length <= 1}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={handleAddScheduleItem}
                    className="w-full"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Schedule Item
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Event Speakers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {speakers.map((speaker, index) => (
                    <div key={index} className="border rounded-md p-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">Speaker {index + 1}</h4>
                        <Button 
                          type="button" 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleRemoveSpeaker(index)}
                          disabled={speakers.length <= 1}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <Label htmlFor={`speaker-name-${index}`}>Name</Label>
                          <Input
                            id={`speaker-name-${index}`}
                            placeholder="Speaker name"
                            value={speaker.name}
                            onChange={(e) => handleSpeakerChange(index, 'name', e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`speaker-title-${index}`}>Title</Label>
                          <Input
                            id={`speaker-title-${index}`}
                            placeholder="Speaker title/position"
                            value={speaker.title}
                            onChange={(e) => handleSpeakerChange(index, 'title', e.target.value)}
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor={`speaker-image-${index}`}>Image URL</Label>
                          <Input
                            id={`speaker-image-${index}`}
                            placeholder="Speaker image URL"
                            value={speaker.image}
                            onChange={(e) => handleSpeakerChange(index, 'image', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={handleAddSpeaker}
                    className="w-full"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Speaker
                  </Button>
                </div>
              </CardContent>
            </Card>
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
                  <SelectItem value="Campus Life">Campus Life</SelectItem>
                  <SelectItem value="Academic">Academic</SelectItem>
                  <SelectItem value="Arts & Culture">Arts & Culture</SelectItem>
                  <SelectItem value="Sports">Sports</SelectItem>
                  <SelectItem value="Community">Community</SelectItem>
                  <SelectItem value="Career">Career</SelectItem>
                  <SelectItem value="International">International</SelectItem>
                  <SelectItem value="Facilities">Facilities</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="organizer">Organizer</Label>
              <div className="relative">
                <Input 
                  id="organizer"
                  value={formData.organizer}
                  onChange={(e) => handleChange('organizer', e.target.value)}
                  placeholder="e.g., Student Affairs Office"
                  className="pl-9"
                />
                <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fileAttachment">Attachment</Label>
              <div className="flex items-center gap-2">
                <Input 
                  id="fileAttachment"
                  value={formData.fileAttachment}
                  onChange={(e) => handleChange('fileAttachment', e.target.value)}
                  placeholder="File name (e.g., event_details.pdf)"
                />
                <Button type="button" variant="outline" className="whitespace-nowrap">
                  <FileDown className="mr-2 h-4 w-4" /> Upload
                </Button>
              </div>
              {formData.fileAttachment && (
                <div className="mt-2 text-sm">
                  <span className="text-muted-foreground">Current file: </span>
                  <span className="font-medium">{formData.fileAttachment}</span>
                </div>
              )}
            </div>

            <Separator className="my-4" />
            
            <div className="space-y-2">
              <Label>Publishing Options</Label>
              <Card className="bg-secondary/40">
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="registrationRequired">Enable Event Registration</Label>
                    <input type="checkbox" id="registrationRequired" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="featuredEvent">Featured Event</Label>
                    <input type="checkbox" id="featuredEvent" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sendNotification">Send Notification</Label>
                    <input type="checkbox" id="sendNotification" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-2">
              <Label>Status</Label>
              <div className="rounded-md bg-secondary p-3">
                <div className="text-sm">
                  <span className="font-medium">Created: </span>
                  <span className="text-muted-foreground">{existingEvent ? 'April 10, 2025' : 'Not yet created'}</span>
                </div>
                <div className="text-sm">
                  <span className="font-medium">Last modified: </span>
                  <span className="text-muted-foreground">{existingEvent ? 'April 12, 2025' : 'N/A'}</span>
                </div>
                <div className="text-sm">
                  <span className="font-medium">Created by: </span>
                  <span className="text-muted-foreground">{existingEvent ? 'Admin User' : 'N/A'}</span>
                </div>
              </div>
            </div>

            <Separator className="my-4" />
            
            <div className="flex flex-col gap-2">
              <Button type="submit" className="w-full">
                <Save className="mr-2 h-4 w-4" /> Save Event
              </Button>
              {id !== 'new' && (
                <Button 
                  type="button" 
                  variant="destructive" 
                  onClick={handleDelete}
                  className="w-full"
                >
                  <Trash2 className="mr-2 h-4 w-4" /> Delete Event
                </Button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminEventDetail;
