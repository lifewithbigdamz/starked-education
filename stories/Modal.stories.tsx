import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '../src/components/Modal/Modal';
import { Button } from '../src/components/Button/Button';
import { Input } from '../src/components/Input/Input';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible modal component with multiple sizes and customizable features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the modal is open',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'The size of the modal',
    },
    closeOnBackdropClick: {
      control: 'boolean',
      description: 'Whether clicking the backdrop closes the modal',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Whether pressing Escape closes the modal',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button',
    },
    title: {
      control: 'text',
      description: 'The modal title',
    },
    description: {
      control: 'text',
      description: 'The modal description',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Default Modal"
          description="This is a default modal with title and description."
        >
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            This is the content of the modal. You can put any content here, including forms, images, or other components.
          </p>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};

export const Small: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Small Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="sm"
          title="Small Modal"
          description="A smaller modal for simple content."
        >
          <p className="text-neutral-600 dark:text-neutral-400">
            This is a small modal with minimal content.
          </p>
        </Modal>
      </>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Large Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="lg"
          title="Large Modal"
          description="A larger modal for more complex content."
        >
          <div className="space-y-4">
            <p className="text-neutral-600 dark:text-neutral-400">
              This is a large modal that can accommodate more content. You can use it for forms, detailed information, or complex interactions.
            </p>
            <Input label="Name" placeholder="Enter your name" />
            <Input label="Email" type="email" placeholder="Enter your email" />
            <Input label="Message" placeholder="Enter your message" />
          </div>
        </Modal>
      </>
    );
  },
};

export const FullScreen: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Full Screen Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="full"
          title="Full Screen Modal"
          description="A full-screen modal for maximum content space."
        >
          <div className="space-y-6">
            <p className="text-neutral-600 dark:text-neutral-400">
              This modal takes up the full screen (with some padding). It's useful for complex forms, detailed content, or when you need maximum space.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="First Name" placeholder="Enter first name" />
              <Input label="Last Name" placeholder="Enter last name" />
              <Input label="Email" type="email" placeholder="Enter email" />
              <Input label="Phone" placeholder="Enter phone number" />
            </div>
          </div>
        </Modal>
      </>
    );
  },
};

export const WithoutTitle: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal Without Title</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          showCloseButton={false}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-semantic-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-semantic-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Success!</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Your action has been completed successfully.
            </p>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>
        </Modal>
      </>
    );
  },
};

export const FormModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Form Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="User Registration"
          description="Please fill out the form below to register."
        >
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="First Name" placeholder="Enter first name" required />
              <Input label="Last Name" placeholder="Enter last name" required />
            </div>
            <Input label="Email Address" type="email" placeholder="Enter email" required />
            <Input label="Password" type="password" placeholder="Enter password" required />
            <Input label="Confirm Password" type="password" placeholder="Confirm password" required />
            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>
                Register
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  },
};

export const NoBackdropClose: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal (No Backdrop Close)</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          closeOnBackdropClick={false}
          title="Confirmation Required"
          description="You must explicitly close this modal."
        >
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            This modal cannot be closed by clicking the backdrop. You must use the close button or the escape key.
          </p>
          <Button onClick={() => setIsOpen(false)}>Close Modal</Button>
        </Modal>
      </>
    );
  },
};
