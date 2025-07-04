
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const predictionSchema = z.object({
  date: z.date({
    required_error: 'Date is required',
  }),
  drawType: z.enum(['lunchtime', 'teatime'], {
    required_error: 'Draw type is required',
  }),
  numbers: z.array(z.number()).length(3, 'Exactly 3 numbers required'),
  confidence: z.number().min(1).max(100),
  status: z.enum(['active', 'completed']),
});

type PredictionForm = z.infer<typeof predictionSchema>;

interface AddPredictionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (prediction: {
    date: string;
    drawType: 'lunchtime' | 'teatime';
    numbers: number[];
    confidence: number;
    status: 'active' | 'completed';
  }) => void;
}

const AddPredictionDialog: React.FC<AddPredictionDialogProps> = ({ open, onOpenChange, onAdd }) => {
  const [numberInputs, setNumberInputs] = useState<string[]>(['', '', '']);

  const form = useForm<PredictionForm>({
    resolver: zodResolver(predictionSchema),
    defaultValues: {
      date: new Date(),
      drawType: 'lunchtime',
      numbers: [],
      confidence: 75,
      status: 'active',
    },
  });

  const handleNumberChange = (index: number, value: string) => {
    const newInputs = [...numberInputs];
    newInputs[index] = value;
    setNumberInputs(newInputs);

    // Convert to numbers and validate
    const numbers = newInputs
      .map(input => parseInt(input))
      .filter(num => !isNaN(num) && num >= 1 && num <= 49);

    form.setValue('numbers', numbers);
  };

  const onSubmit = (data: PredictionForm) => {
    const formattedData = {
      date: format(data.date, 'yyyy-MM-dd'),
      drawType: data.drawType,
      numbers: data.numbers,
      confidence: data.confidence,
      status: data.status,
    };

    onAdd(formattedData);
    onOpenChange(false);
    form.reset();
    setNumberInputs(['', '', '']);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Prediction</DialogTitle>
          <DialogDescription>
            Create a new prediction for UK49s lottery draws (3 numbers required)
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date('1900-01-01')}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="drawType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Draw Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select draw type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="lunchtime">Lunchtime</SelectItem>
                      <SelectItem value="teatime">Teatime</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <Label>Numbers (1-49) - All 3 required</Label>
              <div className="grid grid-cols-3 gap-2">
                {numberInputs.map((value, index) => (
                  <Input
                    key={index}
                    type="number"
                    min="1"
                    max="49"
                    value={value}
                    onChange={(e) => handleNumberChange(index, e.target.value)}
                    placeholder={`#${index + 1}`}
                    className="text-center"
                    required
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500">Enter exactly 3 numbers between 1 and 49</p>
            </div>

            <FormField
              control={form.control}
              name="confidence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confidence Level (%)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      max="100"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-2 pt-4">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit">Add Prediction</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPredictionDialog;
