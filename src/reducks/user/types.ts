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

export type UserStateType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
};
