import { useState, useEffect, useRef } from "react";

function useDebouncedValue(value, delay = 250) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timeoutRef = useRef(null);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeoutRef.current);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebouncedValue;
