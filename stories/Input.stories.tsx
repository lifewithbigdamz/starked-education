import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/ui/Input';
import { Search, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Input component with support for labels, error states, helper text, and icons.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
      description: 'Input type',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    label: {
      control: 'text',
      description: 'Input label',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable input',
    },
    required: {
      control: 'boolean',
      description: 'Mark input as required',
    },
  },
  args: {
    placeholder: 'Enter text...',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your name...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'john@example.com',
    helperText: 'We\'ll never share your email with anyone else.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    error: 'Password must be at least 8 characters long',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Search',
    type: 'search',
    placeholder: 'Search for anything...',
    leftIcon: <Search className="h-4 w-4" />,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    rightIcon: <User className="h-4 w-4" />,
  },
};

export const WithBothIcons: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    leftIcon: <Mail className="h-4 w-4" />,
    rightIcon: <User className="h-4 w-4" />,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
  },
};

export const NumberInput: Story = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: 'Enter your age',
    helperText: 'Must be between 18 and 100',
  },
};

export const TelInput: Story = {
  args: {
    label: 'Phone Number',
    type: 'tel',
    placeholder: '+1 (555) 123-4567',
    helperText: 'Include country code for international numbers',
  },
};

export const MultipleInputs: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <Input
        label="First Name"
        placeholder="Enter your first name"
        leftIcon={<User className="h-4 w-4" />}
      />
      <Input
        label="Email Address"
        type="email"
        placeholder="john@example.com"
        leftIcon={<Mail className="h-4 w-4" />}
        helperText="We'll never share your email with anyone else."
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        leftIcon={<Lock className="h-4 w-4" />}
        rightIcon={<Eye className="h-4 w-4" />}
        helperText="Must be at least 8 characters long"
      />
      <Input
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        leftIcon={<Lock className="h-4 w-4" />}
        rightIcon={<EyeOff className="h-4 w-4" />}
        error="Passwords do not match"
      />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Contact Form</h3>
        <p className="text-sm text-neutral-600">Fill out the form below to get in touch with us.</p>
      </div>
      
      <Input
        label="Full Name"
        placeholder="John Doe"
        leftIcon={<User className="h-4 w-4" />}
        required
      />
      
      <Input
        label="Email Address"
        type="email"
        placeholder="john@example.com"
        leftIcon={<Mail className="h-4 w-4" />}
        helperText="We'll never share your email with anyone else."
        required
      />
      
      <Input
        label="Phone Number"
        type="tel"
        placeholder="+1 (555) 123-4567"
        helperText="Optional: Include your phone number"
      />
      
      <Input
        label="Subject"
        placeholder="What's this about?"
        required
      />
      
      <div className="flex gap-4 pt-4">
        <button className="px-4 py-2 text-sm border border-neutral-300 rounded-md hover:bg-neutral-50">
          Cancel
        </button>
        <button className="px-4 py-2 text-sm bg-brand-500 text-white rounded-md hover:bg-brand-600">
          Send Message
        </button>
      </div>
    </div>
  ),
};
