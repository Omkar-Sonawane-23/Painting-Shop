// File: Frontend/src/pages/AdminLogin.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx'; // FIX: Added .jsx extension
import { useNavigate } from 'react-router-dom';
import { Lock, LogIn } from 'lucide-react';

const AdminLogin = () => {
  const { adminLogin, isAdmin } = useAuth();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Redirect if already logged in
  if (isAdmin) {
    navigate('/admin/dashboard');
    return null;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    // Hardcoded secret code for simulation (This would normally be sent to the API)
    const SECRET_ADMIN_CODE = 'xtreme2025';

    try {
        setLoading(true);
        // Simulates calling the backend API with credentials
        await adminLogin(code); 
        navigate('/admin/dashboard');
    } catch (err) {
        setError(err.message || "Login failed. Invalid access code.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-[calc(100vh-80px)] flex items-center justify-center py-12">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md border border-gray-200">
        <div className="text-center mb-8">
          <Lock className="h-10 w-10 text-black mx-auto mb-3" />
          <h1 className="text-3xl font-black text-black italic uppercase">Admin Access</h1>
          <p className="text-gray-500 text-sm mt-1">Enter Secret Code to Access Dashboard</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="code" className="block text-sm font-bold text-gray-700 uppercase mb-2">Access Code</label>
            <input
              id="code"
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500 text-black"
              placeholder="Enter code..."
            />
          </div>
          
          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white font-black py-3 uppercase tracking-widest hover:bg-sky-500 transition-colors rounded-lg flex items-center justify-center disabled:opacity-50"
          >
            {loading ? 'Logging in...' : (
                <>
                    <LogIn className="h-5 w-5 mr-2" /> Login
                </>
            )}
          </button>
        </form>
        
        <p className="text-xs text-gray-500 mt-6 text-center">
            Demo Code: xtreme2025 (API is simulated with a hardcoded check)
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;