import { useEffect } from "react";

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-primary dark:bg-white text-white dark:text-black text-md px-5 py-3 rounded-full shadow-lg whitespace-nowrap">
        {message}
      </div>
    </div>
  );
}

export default Toast;
