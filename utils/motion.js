const easing = [0.6, -0.05, 0.01, 0.99];
export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
export const fadeInUp = {
  hidden: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
export const imgSlide = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const baseFadeDown = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};
export const fadeDownOrders = (idx) => ({
  custom: { idx },
  ...baseFadeDown,
  hidden: { ...baseFadeDown.hidden, y: -50 * idx },
  visible: {
    ...baseFadeDown.visible,
    transition: {
      ...baseFadeDown.visible.transition,
      duration: 0.2,
    },
  },
});
export const fadeDownCart = (idx) => ({
  custom: { idx },
  ...baseFadeDown,
  hidden: { ...baseFadeDown.hidden, y: -100 * idx },
});
