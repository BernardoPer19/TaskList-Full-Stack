export interface UserType {
  user_name: string;
  email: string;
  password: string;
  createAcc: string;
}

export type UserLoginType = Omit<UserType, "createAcc", user_name>;
