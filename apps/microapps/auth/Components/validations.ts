import * as yup from 'yup';

export interface OperatorLoginContext {
  code: string;
  username: string;
  password: string;
}

export interface AdminLoginContext {
  username: string;
  password: string;
}

export const OperatorLoginSchema = yup
  .object<OperatorLoginContext>()
  .shape({
    code: yup.string().required('Code is required.'),
    username: yup.string().required('Username is required.'),
    password: yup.string().required('Password is required.'),
  })
  .required();

export const AdminLoginSchema = yup.object<AdminLoginContext>().shape({
  username: yup.string().required('Username is required.'),
  password: yup.string().required('Password is required.'),
});
