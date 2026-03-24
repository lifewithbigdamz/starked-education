import { useEffect } from 'react';
import { handleKeyboardNavigation } from '@/utils/accessibility';

export interface KeyboardNavigationActions {
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

export function useKeyboardNavigation(
  actions: KeyboardNavigationActions,
  isActive: boolean = true
): void {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      handleKeyboardNavigation(event, actions);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [actions, isActive]);
}
