import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Package, ShoppingCart, Calendar, Mail, LogOut, Settings, Bell, TrendingUp, MapPin, Heart, CreditCard, Clock, CheckCircle, Truck, XCircle } from "lucide-react";

export default function UserDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        
        if (!token) {
          navigate("/login");
          return;
        }

        const res = await fetch("http://localhost:4000/api/auth/me", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          credentials: "include",
        });
        
        if (!res.ok) {
          localStorage.removeItem("accessToken");
          navigate("/login");
          return;
        }
        
        const data = await res.json();
        setUser(data.user);
        
        // Fetch user orders (you'll need to implement this endpoint)
        fetchOrders(token);
      } catch (err) {
        console.error(err);
        localStorage.removeItem("accessToken");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  const fetchOrders = async (token) => {
    try {
      const res = await fetch("http://localhost:4000/api/orders/user", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        credentials: "include",
      });
      
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders || []);
      }
    } catch (err) {
      console.log("Orders not yet implemented");
      // Mock orders for demo
      setOrders([
        {
          _id: "1",
          orderNumber: "ORD-2025-001",
          date: new Date().toISOString(),
          status: "delivered",
          total: 2499,
          items: [
            { name: "24 Karat Gold Paint", quantity: 2, price: 1599 }
          ]
        },
        {
          _id: "2",
          orderNumber: "ORD-2025-002",
          date: new Date(Date.now() - 86400000).toISOString(),
          status: "processing",
          total: 3999,
          items: [
            { name: "Silver Chrome Spray", quantity: 1, price: 899 },
            { name: "Blue Dream Pearl", quantity: 2, price: 1550 }
          ]
        }
      ]);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:4000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      
      localStorage.removeItem("accessToken");
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
      localStorage.removeItem("accessToken");
      navigate("/login");
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "delivered": return "text-green-400 bg-green-400/10";
      case "shipped": return "text-blue-400 bg-blue-400/10";
      case "processing": return "text-yellow-400 bg-yellow-400/10";
      case "cancelled": return "text-red-400 bg-red-400/10";
      default: return "text-gray-400 bg-gray-400/10";
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case "delivered": return <CheckCircle size={16} />;
      case "shipped": return <Truck size={16} />;
      case "processing": return <Clock size={16} />;
      case "cancelled": return <XCircle size={16} />;
      default: return <Package size={16} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-opacity-75 mx-auto mb-4"></div>
          <p className="text-white text-xl font-semibold">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Header */}
      <nav className="bg-white bg-opacity-10 backdrop-blur-lg border-b border-white border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <User className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">My Account</h1>
                <p className="text-purple-200 text-sm">Welcome back, {user.name || user.email.split('@')[0]}!</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/shop')}
                className="hidden md:flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full transition"
              >
                <ShoppingCart size={18} />
                <span>Continue Shopping</span>
              </button>
              <button className="p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition text-white">
                <Bell size={20} />
              </button>
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-2 mb-8 border border-white border-opacity-20">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition ${
                activeTab === "overview"
                  ? "bg-white text-purple-900"
                  : "text-white hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <TrendingUp size={18} />
              <span>Overview</span>
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition ${
                activeTab === "orders"
                  ? "bg-white text-purple-900"
                  : "text-white hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <Package size={18} />
              <span>Orders</span>
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition ${
                activeTab === "profile"
                  ? "bg-white text-purple-900"
                  : "text-white hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <User size={18} />
              <span>Profile</span>
            </button>
            <button
              onClick={() => setActiveTab("addresses")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition ${
                activeTab === "addresses"
                  ? "bg-white text-purple-900"
                  : "text-white hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <MapPin size={18} />
              <span>Addresses</span>
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition">
                <div className="flex items-center justify-between mb-4">
                  <Package className="text-white" size={32} />
                  <span className="text-blue-100 text-sm font-semibold">TOTAL ORDERS</span>
                </div>
                <h3 className="text-white text-4xl font-bold mb-2">{orders.length}</h3>
                <p className="text-blue-100">All time orders</p>
              </div>

              <div className="bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition">
                <div className="flex items-center justify-between mb-4">
                  <ShoppingCart className="text-white" size={32} />
                  <span className="text-pink-100 text-sm font-semibold">TOTAL SPENT</span>
                </div>
                <h3 className="text-white text-4xl font-bold mb-2">
                  ₹{orders.reduce((sum, order) => sum + order.total, 0).toLocaleString()}
                </h3>
                <p className="text-pink-100">All time purchases</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition">
                <div className="flex items-center justify-between mb-4">
                  <Calendar className="text-white" size={32} />
                  <span className="text-purple-100 text-sm font-semibold">MEMBER SINCE</span>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  {user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Recently'}
                </h3>
                <p className="text-purple-100">
                  {user.createdAt ? Math.floor((new Date() - new Date(user.createdAt)) / (1000 * 60 * 60 * 24)) : 0} days
                </p>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
              <h2 className="text-2xl font-bold text-white mb-6">Recent Orders</h2>
              {orders.length === 0 ? (
                <div className="text-center py-12">
                  <Package className="text-white opacity-50 mx-auto mb-4" size={64} />
                  <p className="text-white text-lg mb-4">No orders yet</p>
                  <button
                    onClick={() => navigate('/shop')}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-semibold transition"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.slice(0, 3).map((order) => (
                    <div key={order._id} className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-white font-semibold text-lg">Order #{order.orderNumber}</p>
                          <p className="text-purple-200 text-sm">
                            {new Date(order.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`flex items-center space-x-2 px-4 py-2 rounded-full font-semibold text-sm ${getStatusColor(order.status)}`}>
                            {getStatusIcon(order.status)}
                            <span className="capitalize">{order.status}</span>
                          </span>
                        </div>
                      </div>
                      <div className="border-t border-white border-opacity-10 pt-4">
                        <div className="flex justify-between items-center">
                          <div className="text-purple-200">
                            {order.items.length} item{order.items.length > 1 ? 's' : ''}
                          </div>
                          <div className="text-white font-bold text-xl">₹{order.total.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <h2 className="text-2xl font-bold text-white mb-6">Order History</h2>
            {orders.length === 0 ? (
              <div className="text-center py-12">
                <Package className="text-white opacity-50 mx-auto mb-4" size={64} />
                <p className="text-white text-lg mb-4">You haven't placed any orders yet</p>
                <button
                  onClick={() => navigate('/shop')}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-semibold transition"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {orders.map((order) => (
                  <div key={order._id} className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 pb-4 border-b border-white border-opacity-10">
                      <div>
                        <p className="text-white font-bold text-xl mb-1">Order #{order.orderNumber}</p>
                        <p className="text-purple-200">
                          {new Date(order.date).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric', 
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                      <span className={`flex items-center space-x-2 px-4 py-2 rounded-full font-semibold ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="capitalize">{order.status}</span>
                      </span>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center text-purple-100">
                          <span>{item.name} × {item.quantity}</span>
                          <span className="font-semibold">₹{(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-white border-opacity-10">
                      <button className="text-purple-300 hover:text-white transition font-semibold">
                        View Details
                      </button>
                      <div className="text-white font-bold text-2xl">₹{order.total.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <h2 className="text-2xl font-bold text-white mb-6">Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
                <label className="flex items-center text-purple-300 text-sm font-semibold uppercase tracking-wide mb-3">
                  <User className="mr-2" size={16} />
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue={user.name || ""}
                  placeholder="Enter your name"
                  className="w-full bg-white bg-opacity-10 text-white px-4 py-3 rounded-lg border border-white border-opacity-20 focus:border-purple-400 focus:outline-none"
                />
              </div>

              <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
                <label className="flex items-center text-purple-300 text-sm font-semibold uppercase tracking-wide mb-3">
                  <Mail className="mr-2" size={16} />
                  Email Address
                </label>
                <input
                  type="email"
                  value={user.email}
                  disabled
                  className="w-full bg-white bg-opacity-5 text-purple-200 px-4 py-3 rounded-lg border border-white border-opacity-10 cursor-not-allowed"
                />
              </div>

              <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
                <label className="flex items-center text-purple-300 text-sm font-semibold uppercase tracking-wide mb-3">
                  <Calendar className="mr-2" size={16} />
                  Member Since
                </label>
                <input
                  type="text"
                  value={user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  }) : 'N/A'}
                  disabled
                  className="w-full bg-white bg-opacity-5 text-purple-200 px-4 py-3 rounded-lg border border-white border-opacity-10 cursor-not-allowed"
                />
              </div>

              <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10">
                <label className="flex items-center text-purple-300 text-sm font-semibold uppercase tracking-wide mb-3">
                  <User className="mr-2" size={16} />
                  Account Status
                </label>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-green-400 font-semibold">Active</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                Save Changes
              </button>
              <button className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-6 py-3 rounded-lg font-semibold transition">
                Change Password
              </button>
            </div>
          </div>
        )}

        {/* Addresses Tab */}
        {activeTab === "addresses" && (
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Saved Addresses</h2>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                + Add New Address
              </button>
            </div>
            
            <div className="text-center py-12">
              <MapPin className="text-white opacity-50 mx-auto mb-4" size={64} />
              <p className="text-white text-lg mb-2">No saved addresses</p>
              <p className="text-purple-200 mb-4">Add your delivery address for faster checkout</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}