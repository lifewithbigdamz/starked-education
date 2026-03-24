# Starked Education Design System

A comprehensive design system for the Starked Education platform, built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Design Tokens**: Centralized design values including colors, typography, spacing, and more
- **Component Library**: Reusable React components with TypeScript support
- **Responsive Design**: Mobile-first approach with flexible grid system
- **Accessibility**: WCAG 2.1 compliant components with proper ARIA labels
- **Documentation**: Interactive Storybook with comprehensive examples
- **Testing**: Comprehensive testing strategy with Jest and React Testing Library

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

### Start the development server

```bash
npm run dev
```

### Run Storybook

```bash
npm run storybook
```

### Build Storybook

```bash
npm run build-storybook
```

### Run tests

```bash
npm run test
```

### Run tests in watch mode

```bash
npm run test:watch
```

### Type checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## 🎨 Design Tokens

The design system is built on a foundation of design tokens that ensure consistency across all components.

### Colors

- **Brand Colors**: Primary brand identity colors
- **Semantic Colors**: Success, warning, error, and information colors
- **Neutral Colors**: Grayscale palette for text and backgrounds

### Typography

- **Font Families**: Inter (sans-serif), Georgia (serif), JetBrains Mono (monospace)
- **Font Sizes**: Responsive scale from xs (12px) to 9xl (128px)
- **Font Weights**: From thin (100) to black (900)
- **Line Heights**: Various line height options for optimal readability

### Spacing

- **Scale**: Consistent spacing scale from 0 to 96 (24rem)
- **Usage**: Applied consistently across all components

### Breakpoints

- **xs**: 475px
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px
- **3xl**: 1600px

## 🧩 Components

### Button

Versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" size="md" loading={false}>
  Click me
</Button>
```

**Variants**: primary, secondary, outline, ghost, link, destructive, success
**Sizes**: sm, md, lg, xl, icon

### Input

Flexible input component with support for labels, error states, and icons.

```tsx
import { Input } from '@/components/ui/Input';

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  error="Invalid email address"
  helperText="We'll never share your email"
/>
```

### Card

Flexible card component with header, content, and footer sections.

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>
```

## 📖 Documentation

Interactive documentation is available through Storybook. Run `npm run storybook` to start the documentation server.

### Storybook Features

- **Component Playground**: Interactive component testing
- **Design Tokens Documentation**: Visual reference for all design tokens
- **Usage Examples**: Real-world component examples
- **Accessibility Testing**: Built-in accessibility checks
- **Responsive Testing**: View components across different screen sizes

## ♿ Accessibility

All components are built with accessibility in mind:

- **WCAG 2.1 Compliance**: Meets accessibility standards
- **ARIA Labels**: Proper ARIA attributes for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Clear focus indicators
- **Color Contrast**: Sufficient contrast ratios for text and backgrounds

## 🧪 Testing

### Component Testing

Components are tested with Jest and React Testing Library:

```bash
npm run test
```

### Accessibility Testing

Automated accessibility testing with axe-core:

```bash
npm run test:a11y
```

### Visual Regression Testing

Visual testing with Chromatic (integrated with Storybook):

```bash
npm run test:visual
```

## 🎯 Usage Guidelines

### 1. Import Components

```tsx
import { Button, Input, Card } from '@/components/ui';
```

### 2. Use Design Tokens

```tsx
import { colors, spacing, typography } from '@/tokens/design-tokens';
```

### 3. Follow Naming Conventions

- Use PascalCase for component names
- Use camelCase for props and variables
- Use kebab-case for CSS classes

### 4. Maintain Consistency

- Use design tokens instead of hard-coded values
- Follow established patterns for similar components
- Ensure responsive behavior across all screen sizes

## 🔄 Versioning

This design system follows semantic versioning:

- **Major**: Breaking changes
- **Minor**: New features, backward compatible
- **Patch**: Bug fixes, documentation updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new components
5. Update documentation
6. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Related Issues

- #150 - Implement Accessibility Features
- #137 - Build Course Content Delivery System

## 📞 Support

For questions and support:

- Create an issue in the repository
- Check the Storybook documentation
- Review the component examples

---

Built with ❤️ for the Starked Education platform
