import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import popSound from "../assets/pop.mp4";

export default function OrderConfirmation({ show, onClose }) {
  useEffect(() => {
    if (show) {
      const audio = new Audio(popSound);
      audio.play();

      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-green-600 bg-opacity-90 flex items-center justify-center text-white text-3xl font-bold"
        >
          ✅ Order Confirmed!
        </motion.div>
      )}
    </AnimatePresence>
  );
}
