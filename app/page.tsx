export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-50 to-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient mb-4">
            Starked Education Design System
          </h1>
          <p className="text-lg text-neutral-600">
            Comprehensive component library and design tokens for consistent UI/UX
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl card-shadow">
            <h2 className="text-xl font-semibold mb-3">Design Tokens</h2>
            <p className="text-neutral-600 mb-4">
              Centralized design system values including colors, typography, spacing, and more.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm">Colors</span>
              <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm">Typography</span>
              <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm">Spacing</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl card-shadow">
            <h2 className="text-xl font-semibold mb-3">Component Library</h2>
            <p className="text-neutral-600 mb-4">
              Reusable React components built with TypeScript and Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm">Buttons</span>
              <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm">Forms</span>
              <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm">Cards</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl card-shadow">
            <h2 className="text-xl font-semibold mb-3">Accessibility</h2>
            <p className="text-neutral-600 mb-4">
              WCAG 2.1 compliant components with proper ARIA labels and keyboard navigation.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-semantic-success-100 text-semantic-success-700 rounded-full text-sm">WCAG 2.1</span>
              <span className="px-3 py-1 bg-semantic-success-100 text-semantic-success-700 rounded-full text-sm">ARIA</span>
              <span className="px-3 py-1 bg-semantic-success-100 text-semantic-success-700 rounded-full text-sm">Keyboard</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl card-shadow">
            <h2 className="text-xl font-semibold mb-3">Responsive Design</h2>
            <p className="text-neutral-600 mb-4">
              Mobile-first approach with flexible grid system and responsive typography.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm">Mobile-First</span>
              <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm">Grid</span>
              <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm">Touch</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl card-shadow">
            <h2 className="text-xl font-semibold mb-3">Documentation</h2>
            <p className="text-neutral-600 mb-4">
              Comprehensive usage guidelines, examples, and interactive component playground.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm">Storybook</span>
              <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm">Examples</span>
              <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm">Guides</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl card-shadow">
            <h2 className="text-xl font-semibold mb-3">Testing</h2>
            <p className="text-neutral-600 mb-4">
              Comprehensive testing strategy including unit tests, accessibility tests, and visual regression.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm">Unit Tests</span>
              <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm">A11y Tests</span>
              <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm">Visual</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-neutral-500">
            Design System v1.0.0 • Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  )
}
