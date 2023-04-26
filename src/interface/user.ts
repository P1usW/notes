interface User {
  id: number,
  username: string,
  password: string,
  mail: string,
  fname?: string,
  lname?: string,
  age?: Date;
}

export default User