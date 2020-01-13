import { useEffect } from 'react';

// This is a very dumb hook for logging a value whenever it changes
// I got tired of writing this everywhere
export const useLogOnChange = (label, logged) => {
  useEffect(() => {
    console.log(label, logged);
  }, [label, logged]);
}