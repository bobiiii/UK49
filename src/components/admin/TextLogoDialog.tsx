
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Type, Save, RotateCcw } from 'lucide-react';

interface TextLogoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TextLogoDialog = ({ open, onOpenChange }: TextLogoDialogProps) => {
  const [logoText, setLogoText] = useState(() => {
    return localStorage.getItem('siteLogoText') || 'Your Site Name';
  });
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('siteLogoFontSize') || '24';
  });
  const [color, setColor] = useState(() => {
    return localStorage.getItem('siteLogoColor') || '#000000';
  });
  const { toast } = useToast();

  const handleSave = () => {
    localStorage.setItem('siteLogoText', logoText);
    localStorage.setItem('siteLogoFontSize', fontSize);
    localStorage.setItem('siteLogoColor', color);
    
    toast({
      title: 'Text Logo Updated',
      description: 'Your text logo settings have been saved successfully.',
    });
    
    onOpenChange(false);
  };

  const handleReset = () => {
    setLogoText('Your Site Name');
    setFontSize('24');
    setColor('#000000');
    
    toast({
      title: 'Settings Reset',
      description: 'Text logo settings have been reset to defaults.',
    });
  };

  const handleDelete = () => {
    localStorage.removeItem('siteLogoText');
    localStorage.removeItem('siteLogoFontSize');
    localStorage.removeItem('siteLogoColor');
    
    setLogoText('Your Site Name');
    setFontSize('24');
    setColor('#000000');
    
    toast({
      title: 'Text Logo Deleted',
      description: 'Text logo settings have been removed.',
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Type className="h-5 w-5" />
            Manage Text Logo
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Preview */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <Label className="text-sm font-medium text-gray-600 mb-2 block">Preview</Label>
            <div 
              style={{ 
                fontSize: `${fontSize}px`, 
                color: color,
                fontWeight: 'bold'
              }}
              className="text-center"
            >
              {logoText}
            </div>
          </div>

          {/* Logo Text */}
          <div className="space-y-2">
            <Label htmlFor="logoText">Logo Text</Label>
            <Input
              id="logoText"
              value={logoText}
              onChange={(e) => setLogoText(e.target.value)}
              placeholder="Enter your site name"
            />
          </div>

          {/* Font Size */}
          <div className="space-y-2">
            <Label htmlFor="fontSize">Font Size (px)</Label>
            <Input
              id="fontSize"
              type="number"
              min="12"
              max="72"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            />
          </div>

          {/* Color */}
          <div className="space-y-2">
            <Label htmlFor="color">Color</Label>
            <div className="flex gap-2">
              <Input
                id="color"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-16 h-10 p-1"
              />
              <Input
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="#000000"
                className="flex-1"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2">
            <Button onClick={handleSave} className="flex-1">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
            <Button onClick={handleReset} variant="outline" className="flex-1">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button onClick={handleDelete} variant="destructive" className="flex-1">
              Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TextLogoDialog;
