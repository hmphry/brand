import { useEffect, useState } from 'react';

/** Resolve a CSS custom property against the document root for display. */
export function useTokenValue(token: string): string {
  const [value, setValue] = useState(token);

  useEffect(() => {
    const resolved = getComputedStyle(document.documentElement)
      .getPropertyValue(token)
      .trim();
    setValue(resolved || token);
  }, [token]);

  return value;
}
