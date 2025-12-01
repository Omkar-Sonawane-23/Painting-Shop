// File: Frontend/src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// --- Mock API Setup (Simulates communication with a Node/Express/MongoDB Backend) ---

// Simulated user data storage (replaces Firebase's token/claims system)
let currentSessionToken = null; 

const mockLoginAPI = async (code) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500)); 

  // Hardcoded secret code check (This would normally happen on the server)
  const SECRET_ADMIN_CODE = 'xtreme2025';

  if (code === SECRET_ADMIN_CODE) {
    // Simulate successful MongoDB authentication and return a token
    const token = 'mock-mongodb-admin-token-' + Math.random().toString(36).substring(2, 9);
    currentSessionToken = token;
    return { token, isAdmin: true, username: 'admin' };
  } else {
    throw new Error('Invalid access code.');
  }
};

const mockLogoutAPI = async () => {
  // Simulate clearing the session token on the server
  await new Promise(resolve => setTimeout(resolve, 100));
  currentSessionToken = null;
  return { success: true };
};

// --- Auth Provider Component ---

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if a session token exists (simulated persistence)
    if (currentSessionToken) {
        setIsAdmin(true);
    }
    setLoading(false);
  }, []);

  const adminLogin = async (code) => {
    try {
      const response = await mockLoginAPI(code);
      if (response.isAdmin) {
        setIsAdmin(true);
      }
      return response;
    } catch (error) {
      setIsAdmin(false);
      throw error;
    }
  };
  
  const adminLogout = async () => {
    await mockLogoutAPI();
    setIsAdmin(false);
  };
  
  const value = {
    isAdmin,
    loading,
    adminLogin,
    adminLogout,
    // Note: 'db' and 'auth' were removed as part of MongoDB migration
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;