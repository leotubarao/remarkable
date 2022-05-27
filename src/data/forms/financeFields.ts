import { IFieldProps } from '~/types';

export const financeFields: IFieldProps[] = [
  {
    name: 'name',
    placeholder: 'Full name',
  },
  {
    name: 'gender',
    placeholder: 'Gender?',
  },
  {
    name: 'bday',
    placeholder: 'Date of Brith: 00/00/0000',
  },
  {
    name: 'dependents',
    placeholder: 'No. of Dependents',
  },
  {
    name: 'maritalStatus',
    placeholder: 'Marital Status?',
  },
  {
    name: 'residentialStatus',
    placeholder: 'Residential Status?',
  },
  {
    name: 'streetAddress',
    placeholder: 'Full Address?',
    fullRow: true,
    as: 'textarea',
  },
  {
    name: 'weekRent',
    placeholder: 'How much per week is rent/mortgage?',
  },
  {
    name: 'longLived',
    placeholder: 'How long have you lived there?',
  },
  {
    name: 'previousAddress',
    placeholder: 'How long at previous address?',
  },
  {
    name: 'workPhone',
    placeholder: 'Work phone',
  },
  {
    name: 'mobile',
    placeholder: 'Mobile',
  },
  {
    name: 'email',
    placeholder: 'E-mail Address',
  },
  {
    name: 'occupationIndustry',
    placeholder: 'Occupation industry',
  },
  {
    name: 'permanence',
    placeholder: 'Permanence?',
  },
  {
    name: 'employer',
    placeholder: 'Employer',
  },
  {
    name: 'jobTime',
    placeholder: 'How long have you been at your job?',
  },
  {
    name: 'homePay',
    placeholder: 'Take home pay (After tax)',
  },
  {
    name: 'otherIncome',
    placeholder: 'Any Other income (Winx, boarders in yoour)',
  },
  {
    name: 'muchIncome',
    placeholder: 'How much p/w from this income?',
  },
  {
    name: 'previousJob',
    placeholder: 'How long at previous job?',
  },
  {
    name: 'licenseType',
    placeholder: 'Are you in a full, restricted or learners license',
  },
  {
    name: 'licenseNumber',
    placeholder: 'License Number (5a)',
  },
  {
    name: 'licenseExpiry',
    placeholder: 'License Expiry date: 00/00/0000',
  },
  {
    name: 'versionNumber',
    placeholder: 'Version Number (5b)',
  },
  {
    name: 'vehicleInterested',
    placeholder: 'Vehicle interested in?',
  },
  {
    name: 'nzResident',
    placeholder: 'Are you a NZ Resident?',
  },
  {
    id: 'credicCheck',
    name: 'credicCheck',
    label: '*I agree to a Credit Check',
    as: 'check',
    value: false,
  },
  {
    id: 'test1',
    name: 'test1',
    label:
      "by submitting an expres application we will not complete a credit check, one of our consultants will review your information and contact you with the best option's available for you. We will get back to you within 1 hour during business hours.",
    as: 'check',
    value: false,
  },
];
