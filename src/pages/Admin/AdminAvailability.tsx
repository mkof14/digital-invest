import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { useUserRole } from '@/hooks/useUserRole';

interface AvailabilityWindow {
  id: string;
  day_of_week: number;
  start_time: string;
  end_time: string;
  is_active: boolean;
}

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const AdminAvailability = () => {
  const [windows, setWindows] = useState<AvailabilityWindow[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingWindow, setEditingWindow] = useState<AvailabilityWindow | null>(null);
  const [formData, setFormData] = useState({
    day_of_week: 1,
    start_time: '09:00',
    end_time: '17:00',
    is_active: true
  });
  const { hasRole } = useUserRole();
  const canEdit = hasRole('ADMIN');

  useEffect(() => {
    loadWindows();
  }, []);

  const loadWindows = async () => {
    const { data, error } = await supabase
      .from('availability_windows')
      .select('*')
      .order('day_of_week', { ascending: true })
      .order('start_time', { ascending: true });

    if (error) {
      toast.error('Failed to load availability');
      return;
    }

    setWindows(data || []);
  };

  const handleSubmit = async () => {
    if (!canEdit) {
      toast.error('You do not have permission to manage availability');
      return;
    }

    if (editingWindow) {
      const { error } = await supabase
        .from('availability_windows')
        .update(formData)
        .eq('id', editingWindow.id);

      if (error) {
        toast.error('Failed to update window');
        return;
      }

      toast.success('Availability window updated');
    } else {
      const { error } = await supabase
        .from('availability_windows')
        .insert(formData);

      if (error) {
        toast.error('Failed to create window');
        return;
      }

      toast.success('Availability window created');
    }

    setDialogOpen(false);
    setEditingWindow(null);
    loadWindows();
  };

  const handleDelete = async (id: string) => {
    if (!canEdit) {
      toast.error('You do not have permission to manage availability');
      return;
    }

    if (!confirm('Are you sure you want to delete this availability window?')) {
      return;
    }

    const { error } = await supabase
      .from('availability_windows')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error('Failed to delete window');
      return;
    }

    toast.success('Availability window deleted');
    loadWindows();
  };

  const openCreateDialog = () => {
    setEditingWindow(null);
    setFormData({
      day_of_week: 1,
      start_time: '09:00',
      end_time: '17:00',
      is_active: true
    });
    setDialogOpen(true);
  };

  const openEditDialog = (window: AvailabilityWindow) => {
    setEditingWindow(window);
    setFormData({
      day_of_week: window.day_of_week,
      start_time: window.start_time,
      end_time: window.end_time,
      is_active: window.is_active
    });
    setDialogOpen(true);
  };

  const generatePreviewSlots = () => {
    const slots: { day: string; time: string }[] = [];
    windows.filter(w => w.is_active).forEach(window => {
      const [startHour, startMin] = window.start_time.split(':').map(Number);
      const [endHour, endMin] = window.end_time.split(':').map(Number);
      
      let current = startHour * 60 + startMin;
      const end = endHour * 60 + endMin;
      
      while (current + 30 <= end) {
        const slotStart = `${String(Math.floor(current / 60)).padStart(2, '0')}:${String(current % 60).padStart(2, '0')}`;
        const slotEnd = `${String(Math.floor((current + 30) / 60)).padStart(2, '0')}:${String((current + 30) % 60).padStart(2, '0')}`;
        slots.push({ day: DAYS[window.day_of_week], time: `${slotStart} - ${slotEnd}` });
        current += 30;
      }
    });
    return slots;
  };

  const previewSlots = generatePreviewSlots();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Availability Management</h1>
          <p className="text-muted-foreground">Configure your consultation availability windows</p>
        </div>
        {canEdit && (
          <Button onClick={openCreateDialog}>
            <Plus className="w-4 h-4 mr-2" />
            Add Availability Window
          </Button>
        )}
      </div>

      <div className="space-y-8">
        <div className="border border-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-4 font-semibold">Day</th>
                <th className="text-left p-4 font-semibold">Start Time</th>
                <th className="text-left p-4 font-semibold">End Time</th>
                <th className="text-left p-4 font-semibold">Active</th>
                <th className="text-left p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {windows.map((window) => (
                <tr key={window.id} className="border-t border-border">
                  <td className="p-4">{DAYS[window.day_of_week]}</td>
                  <td className="p-4">{window.start_time}</td>
                  <td className="p-4">{window.end_time}</td>
                  <td className="p-4">
                    <span className={`text-xs px-2 py-1 rounded ${window.is_active ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'}`}>
                      {window.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => openEditDialog(window)} disabled={!canEdit}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleDelete(window.id)} disabled={!canEdit}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {windows.length === 0 && (
            <div className="p-8 text-center text-muted-foreground">
              No availability windows configured
            </div>
          )}
        </div>

        <div className="border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Preview: Generated Time Slots</h2>
          <p className="text-sm text-muted-foreground mb-4">
            These are the 30-minute slots that will be available for booking based on your current configuration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {previewSlots.slice(0, 21).map((slot, idx) => (
              <div key={idx} className="text-sm bg-muted/50 p-2 rounded">
                <span className="font-medium">{slot.day}</span>: {slot.time}
              </div>
            ))}
          </div>
          {previewSlots.length > 21 && (
            <p className="text-sm text-muted-foreground mt-4">
              ... and {previewSlots.length - 21} more slots
            </p>
          )}
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingWindow ? 'Edit' : 'Add'} Availability Window</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label>Day of Week</Label>
              <Select 
                value={String(formData.day_of_week)} 
                onValueChange={(value) => setFormData({ ...formData, day_of_week: Number(value) })}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {DAYS.map((day, idx) => (
                    <SelectItem key={idx} value={String(idx)}>{day}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Start Time</Label>
              <Input
                type="time"
                value={formData.start_time}
                onChange={(e) => setFormData({ ...formData, start_time: e.target.value })}
                className="mt-1"
              />
            </div>

            <div>
              <Label>End Time</Label>
              <Input
                type="time"
                value={formData.end_time}
                onChange={(e) => setFormData({ ...formData, end_time: e.target.value })}
                className="mt-1"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label>Active</Label>
              <Switch
                checked={formData.is_active}
                onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
              />
            </div>

            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleSubmit}>
                {editingWindow ? 'Update' : 'Create'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminAvailability;