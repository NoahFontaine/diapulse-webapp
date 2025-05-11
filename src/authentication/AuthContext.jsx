import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =>
    onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    }), []);

  return (
    <AuthContext.Provider value={{ user }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
// This code creates an authentication context using React's Context API. It provides a way to manage user authentication state throughout the application. The `AuthProvider` component listens for changes in the authentication state and updates the context accordingly. The `useAuth` hook allows other components to access the authentication state easily.
// The `AuthProvider` wraps the application, ensuring that any component can access the authentication state through the `useAuth` hook. This is particularly useful for managing user sessions and protecting routes in a React application.