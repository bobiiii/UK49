
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface PageMetaDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  page: {
    path: string;
    label: string;
  } | null;
}

const PageMetaDialog = ({ open, onOpenChange, page }: PageMetaDialogProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (page && open) {
      // Load existing meta data from localStorage
      const savedMeta = localStorage.getItem(`page_meta_${page.path}`);
      if (savedMeta) {
        try {
          const metaData = JSON.parse(savedMeta);
          setTitle(metaData.title || `${page.label} | UK49s Results`);
          setDescription(metaData.description || `${page.label} page for UK49s lottery results and information.`);
          setKeywords(metaData.keywords || `UK49s, ${page.label.toLowerCase()}, lottery, results`);
        } catch (error) {
          console.error('Error loading meta data:', error);
          handleReset();
        }
      } else {
        // Set default values
        handleReset();
      }
    }
  }, [page, open]);

  const handleSave = async () => {
    if (!page) return;

    setIsLoading(true);
    
    try {
      const metaData = {
        title: title.trim(),
        description: description.trim(),
        keywords: keywords.trim(),
        updatedAt: new Date().toISOString()
      };

      localStorage.setItem(`page_meta_${page.path}`, JSON.stringify(metaData));
      
      // Force a page reload to apply the new meta tags
      if (window.location.pathname === page.path) {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
      
      toast({
        title: 'Meta Data Saved',
        description: `Meta information for ${page.label} has been updated successfully. ${window.location.pathname === page.path ? 'Page will reload to apply changes.' : ''}`,
      });

      onOpenChange(false);
    } catch (error) {
      console.error('Error saving meta data:', error);
      toast({
        title: 'Error',
        description: 'Failed to save meta information. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    if (!page) return;
    setTitle(`${page.label} | UK49s Results`);
    setDescription(`${page.label} page for UK49s lottery results and information.`);
    setKeywords(`UK49s, ${page.label.toLowerCase()}, lottery, results`);
  };

  const handleClear = () => {
    if (!page) return;
    
    localStorage.removeItem(`page_meta_${page.path}`);
    handleReset();
    
    toast({
      title: 'Meta Data Cleared',
      description: `Custom meta information for ${page.label} has been removed.`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Meta Information</DialogTitle>
          <DialogDescription>
            Update the meta title, description, and keywords for: <strong>{page?.label}</strong> ({page?.path})
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="meta-title">Meta Title</Label>
            <Input
              id="meta-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter meta title..."
              maxLength={60}
            />
            <p className="text-xs text-gray-500">{title.length}/60 characters (recommended)</p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="meta-description">Meta Description</Label>
            <Textarea
              id="meta-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter meta description..."
              rows={3}
              maxLength={160}
            />
            <p className="text-xs text-gray-500">{description.length}/160 characters (recommended)</p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="meta-keywords">Meta Keywords</Label>
            <Input
              id="meta-keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="keyword1, keyword2, keyword3..."
            />
            <p className="text-xs text-gray-500">Separate keywords with commas</p>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={handleClear}>
            Clear Custom
          </Button>
          <Button variant="outline" onClick={handleReset}>
            Reset to Default
          </Button>
          <Button onClick={handleSave} disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save Changes'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PageMetaDialog;
