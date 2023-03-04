export interface Homework {
  user: user[];
}

export interface user {
  name: String;
  lastName: String;
  cel: String;
  email: String;
  password: String;
  dependency: any;
  state: Boolean;
  rol: String;
}
