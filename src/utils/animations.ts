// Animation variants for Framer Motion

// Fade in from bottom
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Fade in from left
export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

// Fade in from right
export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

// Container for staggered children animations
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Scale up animation
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

// Pop animation
export const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: [0.8, 1.1, 1],
    transition: { duration: 0.5, times: [0, 0.7, 1] }
  }
};

// Progress bar animation
export const progressBar = (width: number) => ({
  hidden: { width: 0 },
  visible: { 
    width: `${width}%`,
    transition: { duration: 1, ease: "easeInOut" }
  }
});