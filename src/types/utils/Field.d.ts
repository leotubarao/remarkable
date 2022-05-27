export interface IFieldProps {
  name: string;
  id?: string;
  placeholder?: string;
  label?: string;
  fullRow?: boolean;
  as?: 'input' | 'select' | 'textarea' | 'check';
  value?: string | boolean;
}
