import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '../components/ui/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Card component with header, content, and footer sections. Perfect for displaying grouped information.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area where you can place any content you want.</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-80">
      <CardContent className="pt-6">
        <p>A simple card with just content.</p>
      </CardContent>
    </Card>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Project Overview</CardTitle>
        <CardDescription>
          Learn about the key features and benefits of our design system.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium">Feature 1</h4>
            <p className="text-sm text-neutral-600">Comprehensive component library</p>
          </div>
          <div>
            <h4 className="text-sm font-medium">Feature 2</h4>
            <p className="text-sm text-neutral-600">Responsive design system</p>
          </div>
          <div>
            <h4 className="text-sm font-medium">Feature 3</h4>
            <p className="text-sm text-neutral-600">Accessibility compliant</p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
        <CardDescription>Manage your account settings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <p className="text-sm text-neutral-600">user@example.com</p>
          </div>
          <div>
            <label className="text-sm font-medium">Role</label>
            <p className="text-sm text-neutral-600">Administrator</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <button className="text-sm text-neutral-600 hover:text-neutral-900">Cancel</button>
        <button className="px-4 py-2 text-sm bg-brand-500 text-white rounded-md hover:bg-brand-600">Save Changes</button>
      </CardFooter>
    </Card>
  ),
};

export const CustomStyled: Story = {
  render: () => (
    <Card className="w-96 border-2 border-brand-200 shadow-medium">
      <CardHeader className="bg-brand-50">
        <CardTitle className="text-brand-900">Premium Card</CardTitle>
        <CardDescription className="text-brand-700">Custom styled card example</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-neutral-50 rounded-md">
          <p className="text-sm">This card has custom styling with brand colors and enhanced shadows.</p>
        </div>
      </CardContent>
    </Card>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
      <Card>
        <CardHeader>
          <CardTitle>Design Tokens</CardTitle>
          <CardDescription>Centralized design values</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-600">Colors, typography, spacing, and more.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Components</CardTitle>
          <CardDescription>Reusable UI elements</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-600">Buttons, forms, cards, and navigation.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>WCAG 2.1 compliant</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-600">Built with accessibility in mind.</p>
        </CardContent>
      </Card>
    </div>
  ),
};
