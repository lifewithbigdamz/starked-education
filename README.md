# Starked Education Design System

A comprehensive, accessible, and modern design system built for the Starked Education platform. This design system provides reusable components, design tokens, and guidelines to ensure consistency and efficiency in frontend development.

## 🚀 Features

- **🎨 Design Tokens**: Comprehensive color palette, typography scale, spacing system, and animations
- **🧩 Component Library**: 20+ reusable React components with TypeScript support
- **📱 Responsive Design**: Mobile-first approach with flexible grid system
- **♿ Accessibility**: WCAG 2.1 compliant components with built-in accessibility features
- **🎭 Dark Mode**: Full dark mode support with theme switching
- **📚 Documentation**: Comprehensive Storybook documentation and usage guides
- **🧪 Testing**: Built-in testing suite with Vitest and React Testing Library
- **⚡ Performance**: Optimized components with Framer Motion animations

## 📦 Installation

```bash
npm install starked-design-system
# or
yarn add starked-design-system
# or
pnpm add starked-design-system
```

## 🛠️ Quick Start

```tsx
import { Button, Card, Input } from 'starked-design-system';
import 'starked-design-system/styles.css';

function App() {
  return (
    <div className="p-8">
      <Card className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <Input 
          label="Email" 
          type="email" 
          placeholder="Enter your email"
          className="mb-4"
        />
        <Button variant="primary" className="w-full">
          Get Started
        </Button>
      </Card>
    </div>
  );
}
```

## 🎨 Design Tokens

### Colors

```tsx
import { colors } from 'starked-design-system';

// Brand colors
colors.brand.500 // #0ea5e9

// Semantic colors
colors.semantic.success.500 // #22c55e
colors.semantic.error.500 // #ef4444

// Neutral colors
colors.neutral.900 // #171717
```

### Typography

```tsx
import { typography } from 'starked-design-system';

// Font families
typography.fontFamily.sans // ['Inter', 'system-ui', 'sans-serif']

// Font sizes
typography.fontSize.base // ['1rem', { lineHeight: '1.5rem' }]
```

### Spacing

```tsx
import { spacing } from 'starked-design-system';

spacing.md // '1.5rem'
spacing.lg // '2rem'
```

## 🧩 Components

### Button

A versatile button component with multiple variants and states.

```tsx
import { Button } from 'starked-design-system';

<Button variant="primary" size="md" loading={false}>
  Click me
</Button>

<Button variant="outline" leftIcon={<PlusIcon />}>
  Add Item
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive' | 'success' | 'warning'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `loading`: boolean
- `fullWidth`: boolean
- `leftIcon`: React.ReactNode
- `rightIcon`: React.ReactNode

### Input

A flexible input component with validation and helper text.

```tsx
import { Input } from 'starked-design-system';

<Input 
  label="Email"
  type="email"
  placeholder="Enter your email"
  error={hasError}
  helperText="Please enter a valid email"
  required
/>
```

**Props:**
- `variant`: 'default' | 'filled' | 'flushed' | 'unstyled'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `error`: boolean
- `helperText`: string
- `label`: string
- `required`: boolean
- `leftElement`: React.ReactNode
- `rightElement`: React.ReactNode

### Card

A versatile card component for organizing content.

```tsx
import { Card } from 'starked-design-system';

<Card variant="elevated" hoverable>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>
```

**Props:**
- `variant`: 'default' | 'elevated' | 'outlined' | 'ghost'
- `padding`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `hoverable`: boolean
- `interactive`: boolean

### Modal

A flexible modal component for overlays and dialogs.

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
        size="md"
      >
        <p>Modal content goes here.</p>
      </Modal>
    </>
  );
}
```

**Props:**
- `isOpen`: boolean
- `onClose`: () => void
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full'
- `title`: string
- `description`: string
- `closeOnBackdropClick`: boolean
- `closeOnEscape`: boolean
- `showCloseButton`: boolean

### Table

A data table component with sorting and customization options.

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

<Table 
  columns={columns}
  data={data}
  striped
  hoverable
  onRowClick={(record) => console.log(record)}
/>
```

## 📱 Responsive Grid System

```tsx
import { Grid } from 'starked-design-system';

// Responsive grid with auto-fit
<Grid cols={{ xs: 1, md: 2, lg: 3 }} gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>

// Auto-fit grid with minimum width
<Grid autoFit minItemWidth="250px" gap={4}>
  {items.map(item => <div key={item.id}>{item.content}</div>)}
</Grid>
```

## ♿ Accessibility

All components are built with accessibility in mind:

- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Reader Support**: ARIA attributes and semantic HTML
- **High Contrast**: Support for high contrast mode
- **Reduced Motion**: Respects user's motion preferences
- **WCAG Compliance**: Meets WCAG 2.1 AA standards

### Accessibility Hooks

```tsx
import { useFocusTrap, useKeyboardNavigation } from 'starked-design-system';

// Focus trap for modals
const focusTrapRef = useFocusTrap(isModalOpen);

// Keyboard navigation
useKeyboardNavigation({
  onEnter: () => handleSubmit(),
  onEscape: () => handleCancel(),
});
```

## 🎭 Theming

### Light/Dark Mode

```tsx
// Apply theme
document.documentElement.setAttribute('data-theme', 'dark');
document.documentElement.setAttribute('data-theme', 'light');

// Or use CSS variables
:root {
  --color-background: #ffffff;
  --color-foreground: #000000;
}

[data-theme='dark'] {
  --color-background: #0a0a0a;
  --color-foreground: #ffffff;
}
```

### Custom Theme

You can customize the design system by overriding CSS variables:

```css
:root {
  --color-brand-500: #your-brand-color;
  --font-family-sans: 'Your Font', sans-serif;
  --spacing-4: 1.25rem; /* Custom spacing */
}
```

## 📚 Documentation

Visit our Storybook documentation for interactive examples and API references:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view the documentation.

## 🧪 Testing

The design system includes a comprehensive test suite:

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Testing Components

```tsx
import { render, screen } from '@testing-library/react';
import { Button } from 'starked-design-system';

test('Button renders correctly', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
});
```

## 🔧 Development

### Setup

```bash
# Clone the repository
git clone https://github.com/lifewithbigdamz/starked-education.git
cd starked-education

# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook
```

### Building

```bash
# Build the library
npm run build

# Build Storybook
npm run build-storybook
```

### Project Structure

```
src/
├── components/          # React components
│   ├── Button/
│   ├── Input/
│   ├── Card/
│   ├── Modal/
│   └── ...
├── tokens/             # Design tokens
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   └── animations.ts
├── utils/              # Utility functions
│   ├── cn.ts
│   └── accessibility.ts
├── hooks/              # React hooks
│   ├── useFocusTrap.ts
│   └── useKeyboardNavigation.ts
├── types/              # TypeScript types
├── styles/             # Global styles
└── index.ts            # Main export file
```

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Guidelines

1. Follow the existing code style and patterns
2. Ensure all components are accessible
3. Add tests for new components
4. Update documentation
5. Use semantic HTML and proper ARIA attributes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📖 [Documentation](https://starked-education.design-system.docs)
- 🐛 [Report Issues](https://github.com/lifewithbigdamz/starked-education/issues)
- 💬 [Discussions](https://github.com/lifewithbigdamz/starked-education/discussions)

## 🗺️ Roadmap

- [ ] Additional components (DatePicker, Tabs, Accordion)
- [ ] Advanced theming system
- [ ] Component generator CLI
- [ ] Design-to-code Figma plugin
- [ ] Performance monitoring
- [ ] Internationalization support

---

Built with ❤️ for the Starked Education platform
