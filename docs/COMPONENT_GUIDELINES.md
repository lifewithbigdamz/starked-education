# Component Guidelines

This guide provides detailed instructions for using and extending the Starked Education design system components.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Button Component](#button-component)
- [Input Component](#input-component)
- [Card Component](#card-component)
- [Modal Component](#modal-component)
- [Table Component](#table-component)
- [Badge Component](#badge-component)
- [Grid System](#grid-system)
- [Navigation Components](#navigation-components)
- [Best Practices](#best-practices)

## 🚀 Getting Started

### Installation

```bash
npm install starked-design-system
```

### Basic Setup

```tsx
import { Button, Card, Input } from 'starked-design-system';
import 'starked-design-system/styles.css';

function App() {
  return (
    <div className="p-8">
      <Button variant="primary">Click me</Button>
    </div>
  );
}
```

### Theme Setup

```tsx
// Set theme
document.documentElement.setAttribute('data-theme', 'dark');

// Or use a theme provider
import { ThemeProvider } from 'starked-design-system';

<ThemeProvider theme="dark">
  <App />
</ThemeProvider>
```

## 🔘 Button Component

### Basic Usage

```tsx
import { Button } from 'starked-design-system';

<Button variant="primary" onClick={() => console.log('clicked')}>
  Click me
</Button>
```

### Variants

```tsx
// Primary button
<Button variant="primary">Primary Action</Button>

// Secondary button
<Button variant="secondary">Secondary Action</Button>

// Outline button
<Button variant="outline">Outline Action</Button>

// Ghost button
<Button variant="ghost">Ghost Action</Button>

// Link button
<Button variant="link">Link Action</Button>

// Destructive button
<Button variant="destructive">Delete</Button>

// Success button
<Button variant="success">Success</Button>

// Warning button
<Button variant="warning">Warning</Button>
```

### Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

### With Icons

```tsx
import { Plus, Download, Trash2 } from 'lucide-react';

// Left icon
<Button variant="primary" leftIcon={<Plus className="h-4 w-4" />}>
  Add Item
</Button>

// Right icon
<Button variant="secondary" rightIcon={<Download className="h-4 w-4" />}>
  Download
</Button>

// Both icons
<Button variant="outline" leftIcon={<Trash2 className="h-4 w-4" />} rightIcon={<Download className="h-4 w-4" />}>
  Export
</Button>
```

### States

```tsx
// Loading state
<Button variant="primary" loading>
  Processing...
</Button>

// Disabled state
<Button variant="primary" disabled>
  Disabled
</Button>

// Full width
<Button variant="primary" fullWidth>
  Full Width Button
</Button>
```

### Accessibility

```tsx
// With ARIA label
<Button 
  variant="primary"
  aria-label="Add new item to list"
  leftIcon={<Plus className="h-4 w-4" />}
>
  Add
</Button>

// With description
<Button
  variant="primary"
  aria-describedby="add-button-description"
>
  Add Item
</Button>
<div id="add-button-description">
  Adds a new item to your shopping list
</div>
```

## 📝 Input Component

### Basic Usage

```tsx
import { Input } from 'starked-design-system';

<Input placeholder="Enter text..." />
```

### With Label

```tsx
<Input 
  label="Email Address"
  type="email"
  placeholder="Enter your email"
/>
```

### Variants

```tsx
// Default input
<Input variant="default" placeholder="Default input" />

// Filled input
<Input variant="filled" placeholder="Filled input" />

// Flushed input
<Input variant="flushed" placeholder="Flushed input" />

// Unstyled input
<Input variant="unstyled" placeholder="Unstyled input" />
```

### Sizes

```tsx
<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />
<Input size="xl" placeholder="Extra large input" />
```

### With Icons

```tsx
import { Search, User, Lock, Eye } from 'lucide-react';

// Left icon
<Input
  label="Search"
  placeholder="Search..."
  leftElement={<Search className="h-4 w-4 text-neutral-400" />}
/>

// Right icon
<Input
  label="Password"
  type="password"
  placeholder="Enter password"
  leftElement={<Lock className="h-4 w-4 text-neutral-400" />}
  rightElement={<Eye className="h-4 w-4 text-neutral-400" />}
/>
```

### Validation States

```tsx
// Error state
<Input
  label="Password"
  type="password"
  error
  helperText="Password must be at least 8 characters"
/>

// Success state (custom)
<Input
  label="Email"
  type="email"
  helperText="Email address is valid"
  className="border-semantic-success-500 focus:border-semantic-success-500"
/>
```

### Required Fields

```tsx
<Input
  label="Full Name"
  placeholder="Enter your full name"
  required
  helperText="This field is required"
/>
```

### Accessibility

```tsx
<Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  aria-describedby="email-help"
  aria-invalid={hasError}
  required
/>
<div id="email-help">
  We'll never share your email with anyone else
</div>
```

## 🃏 Card Component

### Basic Usage

```tsx
import { Card } from 'starked-design-system';

<Card>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>
```

### Variants

```tsx
// Default card
<Card variant="default">
  <p>Default card with border</p>
</Card>

// Elevated card
<Card variant="elevated">
  <p>Card with shadow</p>
</Card>

// Outlined card
<Card variant="outlined">
  <p>Card with thick border</p>
</Card>

// Ghost card
<Card variant="ghost">
  <p>Card with no background</p>
</Card>
```

### Padding Options

```tsx
<Card padding="sm">Small padding</Card>
<Card padding="md">Medium padding</Card>
<Card padding="lg">Large padding</Card>
<Card padding="xl">Extra large padding</Card>
<Card padding="none">No padding</Card>
```

### Interactive Cards

```tsx
// Hoverable card
<Card variant="elevated" hoverable>
  <h3>Hover me</h3>
  <p>This card has hover effects</p>
</Card>

// Clickable card
<Card variant="elevated" interactive onClick={() => console.log('clicked')}>
  <h3>Click me</h3>
  <p>This card is clickable</p>
</Card>
```

### Card Examples

```tsx
// Profile card
<Card variant="elevated" className="max-w-sm">
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center text-white">
      JD
    </div>
    <div>
      <h3 className="font-semibold">John Doe</h3>
      <p className="text-sm text-neutral-600">Software Engineer</p>
    </div>
  </div>
</Card>

// Product card
<Card variant="elevated" className="max-w-sm">
  <div className="aspect-video bg-neutral-200 rounded-lg mb-4"></div>
  <h3 className="font-semibold mb-2">Product Name</h3>
  <p className="text-neutral-600 text-sm mb-4">Product description</p>
  <Button variant="primary" className="w-full">Buy Now</Button>
</Card>
```

## 🪟 Modal Component

### Basic Usage

```tsx
import { Modal, Button } from 'starked-design-system';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal Title"
      >
        <p>Modal content goes here.</p>
      </Modal>
    </>
  );
}
```

### Sizes

```tsx
<Modal isOpen={isOpen} onClose={handleClose} size="sm">
  Small modal
</Modal>

<Modal isOpen={isOpen} onClose={handleClose} size="md">
  Medium modal
</Modal>

<Modal isOpen={isOpen} onClose={handleClose} size="lg">
  Large modal
</Modal>

<Modal isOpen={isOpen} onClose={handleClose} size="xl">
  Extra large modal
</Modal>

<Modal isOpen={isOpen} onClose={handleClose} size="full">
  Full screen modal
</Modal>
```

### Custom Close Behavior

```tsx
// Don't close on backdrop click
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  closeOnBackdropClick={false}
>
  Content
</Modal>

// Don't close on escape
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  closeOnEscape={false}
>
  Content
</Modal>

// Hide close button
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  showCloseButton={false}
>
  Content
</Modal>
```

### Modal Examples

```tsx
// Confirmation modal
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Confirm Deletion"
  description="This action cannot be undone."
>
  <p className="mb-4">Are you sure you want to delete this item?</p>
  <div className="flex justify-end space-x-2">
    <Button variant="outline" onClick={handleClose}>
      Cancel
    </Button>
    <Button variant="destructive" onClick={handleConfirm}>
      Delete
    </Button>
  </div>
</Modal>

// Form modal
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Add New User"
  size="lg"
>
  <form onSubmit={handleSubmit}>
    <div className="space-y-4">
      <Input label="Name" placeholder="Enter name" />
      <Input label="Email" type="email" placeholder="Enter email" />
      <Input label="Role" placeholder="Enter role" />
    </div>
    <div className="flex justify-end space-x-2 mt-6">
      <Button variant="outline" type="button" onClick={handleClose}>
        Cancel
      </Button>
      <Button type="submit">Add User</Button>
    </div>
  </form>
</Modal>
```

### Accessibility

```tsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Modal Title"
  aria-describedby="modal-description"
>
  <p id="modal-description">
    Modal content with proper description
  </p>
</Modal>
```

## 📊 Table Component

### Basic Usage

```tsx
import { Table } from 'starked-design-system';

const columns = [
  { key: 'name', title: 'Name' },
  { key: 'email', title: 'Email' },
  { key: 'role', title: 'Role' },
];

const data = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
];

<Table columns={columns} data={data} />
```

### Custom Rendering

```tsx
const columns = [
  { 
    key: 'name', 
    title: 'Name',
    render: (value, record) => (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white text-sm">
          {value.split(' ').map(n => n[0]).join('')}
        </div>
        <span>{value}</span>
      </div>
    )
  },
  { 
    key: 'email', 
    title: 'Email',
    render: (value) => (
      <a href={`mailto:${value}`} className="text-brand-500 hover:underline">
        {value}
      </a>
    )
  },
  { key: 'role', title: 'Role' },
];

<Table columns={columns} data={data} />
```

### Table Variants

```tsx
// Striped rows
<Table columns={columns} data={data} striped />

// Bordered table
<Table columns={columns} data={data} bordered />

// Hoverable rows
<Table columns={columns} data={data} hoverable />

// Compact table
<Table columns={columns} data={data} compact />

// Combined options
<Table 
  columns={columns} 
  data={data} 
  striped 
  bordered 
  hoverable 
  compact 
/>
```

### Interactive Tables

```tsx
// Clickable rows
<Table 
  columns={columns} 
  data={data} 
  onRowClick={(record, index) => console.log('Row clicked:', record)}
/>

// Loading state
<Table 
  columns={columns} 
  data={[]} 
  loading={true}
/>

// Empty state
<Table 
  columns={columns} 
  data={[]} 
  emptyMessage="No users found"
/>
```

### Advanced Column Configuration

```tsx
const columns = [
  { 
    key: 'name', 
    title: 'Name',
    width: '200px',
    align: 'left'
  },
  { 
    key: 'status', 
    title: 'Status',
    width: '100px',
    align: 'center',
    render: (value) => (
      <Badge variant={value === 'active' ? 'success' : 'warning'}>
        {value}
      </Badge>
    )
  },
  { 
    key: 'actions', 
    title: 'Actions',
    width: '150px',
    align: 'right',
    render: (_, record) => (
      <div className="flex justify-end space-x-2">
        <Button size="sm" variant="outline">Edit</Button>
        <Button size="sm" variant="destructive">Delete</Button>
      </div>
    )
  },
];
```

## 🏷️ Badge Component

### Basic Usage

```tsx
import { Badge } from 'starked-design-system';

<Badge>Default Badge</Badge>
```

### Variants

```tsx
<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>
```

### Sizes

```tsx
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
<Badge size="xl">Extra Large</Badge>
```

### Dot Badge

```tsx
<Badge dot variant="success" />
<Badge dot variant="error" />
<Badge dot variant="warning" />
```

### Rounded Badge

```tsx
<Badge rounded variant="primary">Rounded</Badge>
```

### Badge Examples

```tsx
// Status indicators
<div className="flex items-center space-x-2">
  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
  <Badge variant="success">Active</Badge>
</div>

// Tags
<div className="flex flex-wrap gap-2">
  <Badge variant="primary">React</Badge>
  <Badge variant="secondary">TypeScript</Badge>
  <Badge variant="outline">Design System</Badge>
</div>

// Notifications
<div className="relative">
  <Button variant="ghost">Messages</Button>
  <Badge variant="error" size="sm" className="absolute -top-2 -right-2 rounded-full">
    3
  </Badge>
</div>
```

## 📐 Grid System

### Basic Grid

```tsx
import { Grid } from 'starked-design-system';

<Grid cols={3} gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

### Responsive Grid

```tsx
<Grid 
  cols={{ xs: 1, sm: 2, md: 3, lg: 4 }} 
  gap={{ xs: 2, md: 4 }}
>
  {items.map(item => (
    <div key={item.id}>{item.content}</div>
  ))}
</Grid>
```

### Auto-fit Grid

```tsx
<Grid autoFit minItemWidth="250px" gap={4}>
  {products.map(product => (
    <Card key={product.id}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </Card>
  ))}
</Grid>
```

### Grid Examples

```tsx
// Photo gallery
<Grid autoFill minItemWidth="200px" gap={2}>
  {images.map(image => (
    <div key={image.id} className="aspect-square bg-neutral-200 rounded-lg">
      <img src={image.url} alt={image.alt} className="w-full h-full object-cover rounded-lg" />
    </div>
  ))}
</Grid>

// Dashboard widgets
<Grid cols={{ xs: 1, md: 2, lg: 3 }} gap={6}>
  <Card variant="elevated">
    <h3>Total Users</h3>
    <p className="text-2xl font-bold">1,234</p>
  </Card>
  <Card variant="elevated">
    <h3>Revenue</h3>
    <p className="text-2xl font-bold">$12,345</p>
  </Card>
  <Card variant="elevated">
    <h3>Growth</h3>
    <p className="text-2xl font-bold">+23%</p>
  </Card>
</Grid>
```

## 🧭 Navigation Components

### Navigation Menu

```tsx
import { Navigation, NavigationItem } from 'starked-design-system';

<Navigation variant="horizontal" spacing="md">
  <NavigationItem active>Home</NavigationItem>
  <NavigationItem>About</NavigationItem>
  <NavigationItem>Services</NavigationItem>
  <NavigationItem>Contact</NavigationItem>
</Navigation>
```

### Vertical Navigation

```tsx
<Navigation variant="vertical" spacing="sm">
  <NavigationItem active icon={<Home className="h-4 w-4" />}>
    Dashboard
  </NavigationItem>
  <NavigationItem icon={<Users className="h-4 w-4" />}>
    Users
  </NavigationItem>
  <NavigationItem icon={<Settings className="h-4 w-4" />}>
    Settings
  </NavigationItem>
</Navigation>
```

### Navigation Examples

```tsx
// Header navigation
<header className="border-b">
  <div className="container mx-auto px-4">
    <Navigation variant="horizontal" align="space-between">
      <div className="flex items-center space-x-6">
        <div className="font-bold text-xl">Logo</div>
        <NavigationItem>Products</NavigationItem>
        <NavigationItem>Solutions</NavigationItem>
        <NavigationItem>Pricing</NavigationItem>
      </div>
      <div className="flex items-center space-x-4">
        <NavigationItem>Sign In</NavigationItem>
        <Button size="sm">Get Started</Button>
      </div>
    </Navigation>
  </div>
</header>

// Sidebar navigation
<aside className="w-64 bg-neutral-50 dark:bg-neutral-900 p-4">
  <Navigation variant="vertical" spacing="xs">
    <NavigationItem active icon={<Home className="h-4 w-4" />}>
      Dashboard
    </NavigationItem>
    <NavigationItem icon={<FileText className="h-4 w-4" />}>
      Documents
    </NavigationItem>
    <NavigationItem icon={<Users className="h-4 w-4" />}>
      Team
    </NavigationItem>
    <NavigationItem icon={<Settings className="h-4 w-4" />}>
      Settings
    </NavigationItem>
  </Navigation>
</aside>
```

## 🎯 Best Practices

### Component Composition

```tsx
// Good: Compose components for flexibility
<Card variant="elevated">
  <div className="p-6">
    <h3 className="text-lg font-semibold mb-4">User Profile</h3>
    <div className="space-y-4">
      <Input label="Name" placeholder="Enter name" />
      <Input label="Email" type="email" placeholder="Enter email" />
      <Button variant="primary" className="w-full">Save</Button>
    </div>
  </div>
</Card>

// Avoid: Over-customization
<Button className="custom-blue-bg custom-border custom-text">
  Custom Button
</Button>
```

### Accessibility Best Practices

```tsx
// Good: Proper semantic HTML and ARIA
<button
  aria-label="Close modal"
  aria-expanded={isOpen}
  aria-controls="modal-content"
  onClick={handleClose}
>
  <X className="h-4 w-4" />
</button>

// Good: Focus management
const focusTrapRef = useFocusTrap(isModalOpen);

<Modal ref={focusTrapRef}>
  <div tabIndex={-1}>Modal content</div>
</Modal>

// Good: Keyboard navigation
useKeyboardNavigation({
  onEnter: handleSubmit,
  onEscape: handleCancel,
  onArrowUp: handlePrevious,
  onArrowDown: handleNext,
});
```

### Performance Best Practices

```tsx
// Good: Memoize expensive operations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

// Good: Use React.memo for pure components
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{renderExpensiveContent(data)}</div>;
});

// Good: Lazy load heavy components
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

// Use with Suspense
<Suspense fallback={<div>Loading...</div>}>
  <HeavyComponent />
</Suspense>
```

### Error Handling

```tsx
// Good: Error boundaries for component trees
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Card variant="outlined" className="border-semantic-error-500">
          <div className="text-center p-4">
            <h3 className="text-semantic-error-600">Something went wrong</h3>
            <p className="text-neutral-600">Please try refreshing the page</p>
          </div>
        </Card>
      );
    }

    return this.props.children;
  }
}
```

### Testing Best Practices

```tsx
// Good: Test component behavior
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from 'starked-design-system';

test('Button calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  const button = screen.getByRole('button', { name: 'Click me' });
  fireEvent.click(button);
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});

// Good: Test accessibility
test('Button is accessible', () => {
  render(<Button aria-label="Close dialog">×</button>);
  
  const button = screen.getByRole('button', { name: 'Close dialog' });
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute('aria-label', 'Close dialog');
});

// Good: Test component states
test('Button shows loading state', () => {
  render(<Button loading>Loading</Button>);
  
  const button = screen.getByRole('button');
  expect(button).toBeDisabled();
  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});
```

---

These guidelines ensure consistent and effective use of the Starked Education design system components across all applications.
