'use client';

import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailJs from '@emailjs/browser';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { LoaderCircleIcon } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    projectType: ''
  });

  const handleChange = (e: any, isProjectType?: boolean) => {
    if (!isProjectType) {
      const { target } = e;
      const { name, value } = target;
      setForm({
        ...form,
        [name]: value
      });
    } else {
      setForm({
        ...form,
        projectType: e
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailJs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: form.name,
          to_name: 'Software Engineer',
          from_email: form.email,
          to_email: 'shahriar.rizvi02@gmail.com',
          project_type: form.projectType,
          message: form.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )
      .then(
        () => {
          setLoading(false);

          toast({
            title: 'Thank you. I will get back to you as soon as possible.'
          });

          setForm({
            name: '',
            email: '',
            message: '',
            projectType: ''
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          toast({ title: 'Ahh, something went wrong. Please try again.' });
        }
      );
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-3">
          <Label
            htmlFor="name"
            className={cn(
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            )}
          >
            Name
          </Label>
          <Input
            id="name"
            name="name"
            value={form.name}
            placeholder="Jane Doe"
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid gap-3">
          <Label
            htmlFor="email"
            className={cn(
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            )}
          >
            Email
          </Label>
          <Input
            id="email"
            name="email"
            value={form.email}
            placeholder="jane@example.com"
            onChange={handleChange}
            required
            type="email"
          />
        </div>
        <div className="grid gap-3">
          <Label
            htmlFor="projectType"
            className={cn(
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            )}
          >
            Project Type
          </Label>
          <Select
            name="projectType"
            onValueChange={(e) => handleChange(e, true)}
            value={form.projectType}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Website">Website</SelectItem>
              <SelectItem value="WebApp">WebApp</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-3">
          <Label
            htmlFor="message"
            className={cn(
              'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            )}
          >
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={form.message}
            className="min-h-[140px]"
            placeholder={
              'Hello!\n\nThis is Jane Doe, from Example. Just wanted to say hi!'
            }
            required
          />
        </div>

        <button
          type="submit"
          className="flex flex-row content-center items-center justify-self-center rounded-md bg-secondary px-8 py-1 text-secondary-foreground hover:bg-secondary/80"
        >
          {loading && (
            <LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" />
          )}
          Submit
        </button>
      </form>
    </>
  );
}
