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
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-1/4 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg text-xl font-semibold"
        >
          ✅ Order Confirmed!
        </motion.div>
      )}
    </AnimatePresence>
  );
}
