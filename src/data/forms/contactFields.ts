import { IFieldProps } from '~/types';

export const contactFields: IFieldProps[] = [
  {
    name: 'name',
    placeholder: 'Name',
  },
  {
    name: 'email',
    placeholder: 'E-mail',
  },
  {
    name: 'telephoneNumber',
    placeholder: 'Telephone',
  },
  {
    name: 'cellphoneNumber',
    placeholder: 'Cell Phone',
  },
  {
    name: 'message',
    placeholder: 'Message',
    as: 'textarea',
  },
];
