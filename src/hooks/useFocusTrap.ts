import { useEffect, useRef } from 'react';
import { trapFocus } from '@/utils/accessibility';

export function useFocusTrap(isActive: boolean = true): React.RefObject<HTMLElement> {
  const elementRef = useRef<HTMLElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (isActive && elementRef.current) {
      // Clean up previous trap if exists
      if (cleanupRef.current) {
        cleanupRef.current();
      }
      
      // Set up new focus trap
      cleanupRef.current = trapFocus(elementRef.current);
    }

    // Cleanup on unmount or when inactive
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [isActive]);

  return elementRef;
}
