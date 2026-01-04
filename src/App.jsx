import Signup from "./components/Signup/Signup";
import "./App.css";
import { motion } from 'motion/react';

function App() {
  return (
    <>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{duration:.8}}>
        <Signup />
      </motion.div>
    </>
  );
}

export default App;
