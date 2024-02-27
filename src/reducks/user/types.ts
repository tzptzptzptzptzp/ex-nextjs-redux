type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
};

export type UserStateType = {
  user: UserType;
  loading: boolean;
  error: boolean;
  errorMessage: string;
};
