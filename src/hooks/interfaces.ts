export interface User {
  username: string;
  role: string;
  id: string;
  email: string;
  class: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  // Add any other properties you expect in the user object
}
export interface Student {
  id: any;
  name: string;
  date: string;
  city: string;
  profile: string;
  contact: string;
  parentName: string;
  grade: string;
}
// Define the store's state interface
export interface AppState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  register: (
    username: string,
    email: string,
    password: string
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  fetchCurrentUser: () => Promise<void>;
  logout: () => void;
}
