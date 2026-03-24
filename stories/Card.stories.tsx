import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../src/components/Card/Card';
import { Button } from '../src/components/Button/Button';
import { Badge } from '../src/components/Badge/Badge';
import { User, Calendar, MapPin } from 'lucide-react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile card component with multiple variants and padding options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined', 'ghost'],
      description: 'The visual style variant of the card',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'The padding size of the card',
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether the card has hover effects',
    },
    interactive: {
      control: 'boolean',
      description: 'Whether the card is interactive (clickable)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-neutral-600 dark:text-neutral-400">
          This is a default card with some content inside.
        </p>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Elevated Card</h3>
        <p className="text-neutral-600 dark:text-neutral-400">
          This card has an elevated shadow effect.
        </p>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Outlined Card</h3>
        <p className="text-neutral-600 dark:text-neutral-400">
          This card has a prominent border outline.
        </p>
      </div>
    ),
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Ghost Card</h3>
        <p className="text-neutral-600 dark:text-neutral-400">
          This card has no background or border.
        </p>
      </div>
    ),
  },
};

export const WithPadding: Story = {
  render: () => (
    <div className="space-y-4">
      <Card padding="sm" variant="outlined">
        <h3 className="text-lg font-semibold">Small Padding</h3>
        <p className="text-neutral-600 dark:text-neutral-400">This card has small padding.</p>
      </Card>
      <Card padding="md" variant="outlined">
        <h3 className="text-lg font-semibold">Medium Padding</h3>
        <p className="text-neutral-600 dark:text-neutral-400">This card has medium padding.</p>
      </Card>
      <Card padding="lg" variant="outlined">
        <h3 className="text-lg font-semibold">Large Padding</h3>
        <p className="text-neutral-600 dark:text-neutral-400">This card has large padding.</p>
      </Card>
      <Card padding="xl" variant="outlined">
        <h3 className="text-lg font-semibold">Extra Large Padding</h3>
        <p className="text-neutral-600 dark:text-neutral-400">This card has extra large padding.</p>
      </Card>
    </div>
  ),
};

export const Hoverable: Story = {
  args: {
    variant: 'elevated',
    hoverable: true,
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Hoverable Card</h3>
        <p className="text-neutral-600 dark:text-neutral-400">
          Hover over this card to see the effect.
        </p>
      </div>
    ),
  },
};

export const Interactive: Story = {
  args: {
    variant: 'elevated',
    interactive: true,
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Interactive Card</h3>
        <p className="text-neutral-600 dark:text-neutral-400">
          Click this card to see the interaction effect.
        </p>
      </div>
    ),
  },
};

export const ProfileCard: Story = {
  args: {
    variant: 'elevated',
    className: "max-w-sm",
    children: (
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center text-white font-semibold">
            JD
          </div>
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Software Engineer</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
            <User className="h-4 w-4 mr-2" />
            john.doe@example.com
          </div>
          <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
            <MapPin className="h-4 w-4 mr-2" />
            San Francisco, CA
          </div>
          <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
            <Calendar className="h-4 w-4 mr-2" />
            Joined January 2024
          </div>
        </div>
        <div className="flex space-x-2">
          <Badge variant="primary">Active</Badge>
          <Badge variant="secondary">Developer</Badge>
        </div>
        <Button variant="outline" className="w-full">
          View Profile
        </Button>
      </div>
    ),
  },
};

export const ProductCard: Story = {
  args: {
    variant: 'elevated',
    className: "max-w-sm",
    children: (
      <div className="space-y-4">
        <div className="aspect-video bg-neutral-200 dark:bg-neutral-700 rounded-lg"></div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Premium Widget</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
            A high-quality widget that solves all your problems with amazing features.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Badge variant="success">$29.99</Badge>
              <Badge variant="outline" size="sm">Popular</Badge>
            </div>
            <Button size="sm">Buy Now</Button>
          </div>
        </div>
      </div>
    ),
  },
};

export const StatsCard: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
      <Card variant="elevated">
        <div className="text-center">
          <div className="text-3xl font-bold text-brand-600 mb-2">1,234</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Total Users</div>
        </div>
      </Card>
      <Card variant="elevated">
        <div className="text-center">
          <div className="text-3xl font-bold text-semantic-success-600 mb-2">89%</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Satisfaction Rate</div>
        </div>
      </Card>
      <Card variant="elevated">
        <div className="text-center">
          <div className="text-3xl font-bold text-semantic-warning-600 mb-2">456</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Active Projects</div>
        </div>
      </Card>
    </div>
  ),
};
