import React from "react";

const useDebounce = (searchTerm, timeout = 500) => {
  const [debouncedValue, setDebouncedValue] = React.useState("");

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchTerm);
    }, timeout);
    return () => clearTimeout(handler);
  }, [searchTerm]);
  return { debouncedValue };
};

export default useDebounce;
