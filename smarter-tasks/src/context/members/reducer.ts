export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface UsersState {
  users: User[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type UsersActions =
  | { type: "FETCH_USERS_REQUEST" }
  | { type: "FETCH_USERS_SUCCESS"; payload: User[] }
  | { type: "FETCH_USERS_FAILURE"; payload: string }
  | { type: "ADD_USERS_SUCCESS"; payload: User }
  | { type: "DELETE_USER_SUCCESS"; payload: User };

export const initialState: UsersState = {
  users: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const reducer = (
  state: UsersState = initialState,
  action: UsersActions,
): UsersState => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case "ADD_USERS_SUCCESS":
      return { ...state, users: [...state.users, action.payload] };
    //   case "DELETE_USER_SUCCESS": {

    //     const userToDelete = action.payload;
    //     const updatedUsers = state.users.filter((user: User) => user.id !== userIdToDelete.id);

    //     return {
    //       ...state,
    //       users: updatedUsers,
    //     };

    // }
    default:
      return state;
  }
};
