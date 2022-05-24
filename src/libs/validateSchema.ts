import * as Yup from 'yup';

const required = 'O campo é obrigatório.';
const terms = 'Os termos e condições precisam ser aceitos.';

export const validateFinance = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(required),
  gender: Yup.string().required(required),
  bday: Yup.string().required(required),
  dependents: Yup.string(),
  maritalStatus: Yup.string(),
  residentialStatus: Yup.string(),
  streetAddress: Yup.string(),
  weekRent: Yup.string(),
  longLived: Yup.string(),
  previousAddress: Yup.string(),
  workPhone: Yup.string(),
  mobile: Yup.string(),
  email: Yup.string().email('E-mail invalido.').required(required),
  occupationIndustry: Yup.string(),
  permanence: Yup.string(),
  employer: Yup.string(),
  jobTime: Yup.string(),
  homePay: Yup.string(),
  otherIncome: Yup.string(),
  muchIncome: Yup.string(),
  previousJob: Yup.string(),
  licenseType: Yup.string(),
  licenseNumber: Yup.string(),
  licenseExpiry: Yup.string(),
  versionNumber: Yup.string(),
  vehicleInterested: Yup.string(),
  nzResident: Yup.string(),
  credicCheck: Yup.boolean().required(terms).oneOf([true], terms),
  test1: Yup.boolean().required(terms).oneOf([true], terms),
});
