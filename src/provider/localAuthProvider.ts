import { AuthProvider } from "react-admin";

export const localAuthProvider: AuthProvider = {
  // called when the user attempts to log in
  login: ({ username }) => {
    localStorage.setItem("username", username);

    // accept all username/password combination
    return Promise.resolve();
  },

  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("username");

    return Promise.resolve();
  },

  // called when API returns an error
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");

      return Promise.reject();
    }
  },

  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("username") ? Promise.resolve(): Promise.reject();
  },

  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),

  // getting the user identity
  getIdentity: () => 
    Promise.resolve({
      id: 'user',
      fullName: localStorage.getItem('username'),
    })
}
