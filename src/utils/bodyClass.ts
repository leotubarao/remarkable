export const bodyClass = (values: string[]): void => {
  document.body.className = ['ltco', ...values].join(' ');
};
