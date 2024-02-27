import { UserStateType } from "./types";

export const initialUserState: UserStateType = {
  user: {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
  },
  loading: false,
  error: false,
  errorMessage: "",
};
