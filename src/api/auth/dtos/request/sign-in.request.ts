export interface ISignInDTO {
  email: string;
  password: string;
}

export const SignInDTO = (request: any): ISignInDTO => {
  if (!request) {
    return null;
  }
  const { email, password } = request;

  return {
    email,
    password,
  };
};
