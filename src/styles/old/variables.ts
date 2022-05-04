export const breakpoint = {
  xs: {
    max: '575.98px',
  },
  sm: {
    min: '576px',
    max: '767.98px',
  },
  md: {
    min: '768px',
    max: '991.98px',
  },
  lg: {
    min: '992px',
    max: '1199.98px',
  },
  xl: {
    min: '1200px',
  },
};

const { innerWidth } = window;
const { clientWidth } = document.body;

export const sizeScroll = innerWidth - clientWidth;
