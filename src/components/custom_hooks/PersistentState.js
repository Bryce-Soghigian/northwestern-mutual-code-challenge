import { useState, useEffect } from "react";

export default function usePersistentState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const PersistentState = window.localStorage.getItem(key);
    return PersistentState !== null
      ? JSON.parse(PersistentState)
      : defaultValue;
  });
  //Keeping out data in sync
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}