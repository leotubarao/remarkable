import HeadNext from 'next/head';

interface HeadProps {
  title: string;
}

export const Head: React.FC<HeadProps> = ({ title, children }) => {
  return (
    <HeadNext>
      <title>{title} - Remarkable Cars</title>

      {children}
    </HeadNext>
  );
};
