// Accessibility utility functions

// Generate unique IDs for accessibility
export function generateId(prefix: string = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

// Announce messages to screen readers
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Focus management utilities
export function trapFocus(element: HTMLElement): () => void {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  };

  element.addEventListener('keydown', handleTabKey);
  firstElement?.focus();

  // Return cleanup function
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
}

// Check color contrast
export function getContrastRatio(color1: string, color2: string): number {
  // This is a simplified version - in production, you'd want a more robust implementation
  const luminance = (color: string): number => {
    const rgb = parseInt(color.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    
    const rsRGB = r / 255;
    const gsRGB = g / 255;
    const bsRGB = b / 255;
    
    const rLinear = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
    const gLinear = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
    const bLinear = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);
    
    return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
  };

  const lum1 = luminance(color1);
  const lum2 = luminance(color2);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

// WCAG compliance checks
export function meetsWCAG AA(contrastRatio: number): boolean {
  return contrastRatio >= 4.5;
}

export function meetsWCAG AAA(contrastRatio: number): boolean {
  return contrastRatio >= 7;
}

// Keyboard navigation helpers
export function handleKeyboardNavigation(
  event: KeyboardEvent,
  actions: {
    onEnter?: () => void;
    onSpace?: () => void;
    onEscape?: () => void;
    onArrowUp?: () => void;
    onArrowDown?: () => void;
    onArrowLeft?: () => void;
    onArrowRight?: () => void;
    onHome?: () => void;
    onEnd?: () => void;
  }
): void {
  switch (event.key) {
    case 'Enter':
      event.preventDefault();
      actions.onEnter?.();
      break;
    case ' ':
    case 'Space':
      event.preventDefault();
      actions.onSpace?.();
      break;
    case 'Escape':
      event.preventDefault();
      actions.onEscape?.();
      break;
    case 'ArrowUp':
      event.preventDefault();
      actions.onArrowUp?.();
      break;
    case 'ArrowDown':
      event.preventDefault();
      actions.onArrowDown?.();
      break;
    case 'ArrowLeft':
      event.preventDefault();
      actions.onArrowLeft?.();
      break;
    case 'ArrowRight':
      event.preventDefault();
      actions.onArrowRight?.();
      break;
    case 'Home':
      event.preventDefault();
      actions.onHome?.();
      break;
    case 'End':
      event.preventDefault();
      actions.onEnd?.();
      break;
  }
}

// Reduced motion detection
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// High contrast mode detection
export function prefersHighContrast(): boolean {
  return window.matchMedia('(prefers-contrast: high)').matches;
}

// Screen reader detection
export function isScreenReaderActive(): boolean {
  // This is not foolproof, but a common approach
  return window.navigator.userAgent.includes('NVDA') || 
         window.navigator.userAgent.includes('JAWS') ||
         window.navigator.userAgent.includes('VoiceOver');
}

// ARIA attribute helpers
export interface ARIAAttributes {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-pressed'?: boolean;
  'aria-selected'?: boolean;
  'aria-hidden'?: boolean;
  'aria-disabled'?: boolean;
  'aria-required'?: boolean;
  'aria-invalid'?: boolean;
  'aria-live'?: 'polite' | 'assertive' | 'off';
  'aria-atomic'?: boolean;
  'role'?: string;
  'tabIndex'?: number;
}

export function createAriaProps(attributes: Partial<ARIAAttributes>): ARIAAttributes {
  return attributes;
}
