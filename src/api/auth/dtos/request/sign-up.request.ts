export interface ISignUpDTO {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const SignUpDTO = (request: any): ISignUpDTO => {
  if (!request) {
    return null;
  }

  // eslint-disable-next-line
  const { email, password, firstName, lastName } = request;

  return {
    email,
    password,
    firstName,
    lastName,
  };
};
