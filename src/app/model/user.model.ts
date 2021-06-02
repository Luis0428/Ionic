export interface User{
  id:number;
  email:String;
  first_name:String;
  last_name:String;
  avatar:String;
}

export interface UserResponse{
  data:[User];
}

export interface SingleUserResponse{
  data: User;
}
