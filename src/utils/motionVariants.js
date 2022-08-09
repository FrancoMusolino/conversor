export const opacityVariants = {
    hidden: {
      opacity: 0,
    },
    visible: ({ delay }) => ({
      opacity: 1,
      transition: {
        delay,
        duration: 0.75,
      },
    }),
  };