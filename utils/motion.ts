export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromBottom(delay: number) {
  return {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function Lift() {
  return {
    initial: {
      rotateY: 0,
      transformOrigin: "left", // Adjust as needed, e.g., 'center', 'left'
      transition: { duration: 0.5 }, // Adjust timing as needed
    },
    animate: {
      rotateY: 90, // Rotate the image 90 degrees along the Y-axis
      transformOrigin: "left", // Should match the initial state
      transition: { duration: 0.5 }, // Adjust timing as needed
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const slideBracketRight = {
  hidden: {
    x: 0,
    opacity: 0,
  },
  hover: {
    x: 5,
    opacity: 1,
    transition: {
      x: { duration: 0.5, ease: "easeOut" },
      opacity: { duration: 0.2 },
    },
  },
};

export const slideBracketLeft = {
  hidden: {
    x: 0,
    opacity: 0,
  },
  hover: {
    x: -10,
    opacity: 1,
    transition: {
      x: { duration: 0.5, ease: "easeOut" },
      opacity: { duration: 0.2 },
    },
  },
};
