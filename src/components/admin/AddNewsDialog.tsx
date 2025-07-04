
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface AddNewsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (article: {
    title: string;
    excerpt: string;
    content: string;
    date: string;
    time: string;
    author: string;
    category: string;
    featured: boolean;
    status: 'published' | 'draft';
  }) => void;
}

const AddNewsDialog = ({ open, onOpenChange, onAdd }: AddNewsDialogProps) => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
    author: '',
    category: '',
    featured: false,
    status: 'published' as 'published' | 'draft'
  });
  const { toast } = useToast();

  const categories = [
    'Jackpot News',
    'Analysis',
    'Winner Stories',
    'Technology',
    'General News',
    'Statistics',
    'Tips & Tricks'
  ];

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const quillFormats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'color', 'background',
    'align', 'script'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.excerpt || !formData.content || !formData.author || !formData.category) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    onAdd(formData);
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
      author: '',
      category: '',
      featured: false,
      status: 'published'
    });
    onOpenChange(false);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      <style>
        {`
          .ql-editor {
            min-height: 300px !important;
            max-height: 300px !important;
            overflow-y: auto !important;
            line-height: 1.6 !important;
            font-family: inherit !important;
            word-wrap: break-word !important;
            white-space: normal !important;
            width: 100% !important;
          }
          .ql-container {
            font-family: inherit !important;
            width: 800px !important;
            max-width: none !important;
          }
          .ql-toolbar {
            border-top: 1px solid #ccc !important;
            border-left: 1px solid #ccc !important;
            border-right: 1px solid #ccc !important;
            width: 800px !important;
            max-width: none !important;
          }
          .ql-container {
            border-bottom: 1px solid #ccc !important;
            border-left: 1px solid #ccc !important;
            border-right: 1px solid #ccc !important;
          }
          .quill-container-wrapper {
            width: 800px !important;
            max-width: none !important;
            overflow-x: auto !important;
          }
        `}
      </style>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="w-[900px] max-w-none max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Article</DialogTitle>
            <DialogDescription>
              Create a new SEO-optimized news article for the UK49s website
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Enter SEO-optimized article title"
                required
              />
            </div>

            <div>
              <Label htmlFor="excerpt">Excerpt *</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => handleInputChange('excerpt', e.target.value)}
                placeholder="Enter a brief excerpt or meta description (150-160 characters recommended)"
                rows={3}
                required
              />
            </div>

            <div>
              <Label htmlFor="content">Content * (Rich Text Editor)</Label>
              <div className="quill-container-wrapper border rounded-md overflow-hidden">
                <ReactQuill
                  theme="snow"
                  value={formData.content}
                  onChange={(value) => handleInputChange('content', value)}
                  modules={quillModules}
                  formats={quillFormats}
                  placeholder="Write your SEO article content here. Use headings, bold text, lists, and formatting to create engaging content..."
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Use H1, H2, H3 headings for better SEO structure. Add bold/italic text for emphasis.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange('time', e.target.value)}
                  placeholder="14:30"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="author">Author *</Label>
                <Input
                  id="author"
                  value={formData.author}
                  onChange={(e) => handleInputChange('author', e.target.value)}
                  placeholder="Enter author name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="category">Category *</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={(value: 'published' | 'draft') => handleInputChange('status', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2 mt-6">
                <Checkbox
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => handleInputChange('featured', checked as boolean)}
                />
                <Label htmlFor="featured">Featured Article</Label>
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit">
                Add Article
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNewsDialog;
