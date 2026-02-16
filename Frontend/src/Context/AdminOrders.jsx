// File: Frontend/src/Context/AdminOrders.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { API_URL as BACKEND_URL } from '../config';
import { Package, Loader2, AlertCircle, Eye, CheckCircle, XCircle, Truck, Clock, ArrowRight, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const API_ORDERS_ENDPOINT = `${BACKEND_URL}/admin/orders`;

// Status badge component
const StatusBadge = ({ status }) => {
  const statusConfig = {
    PENDING: { color: 'bg-yellow-100 text-yellow-800', icon: Clock },
    PAID: { color: 'bg-blue-100 text-blue-800', icon: CheckCircle },
    SHIPPED: { color: 'bg-purple-100 text-purple-800', icon: Truck },
    COMPLETED: { color: 'bg-green-100 text-green-800', icon: CheckCircle },
    CANCELLED: { color: 'bg-red-100 text-red-800', icon: XCircle }
  };

  const config = statusConfig[status] || statusConfig.PENDING;
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${config.color}`}>
      <Icon className="h-3 w-3 mr-1" />
      {status}
    </span>
  );
};

// Order details modal
const OrderDetailsModal = ({ order, isOpen, onClose }) => {
  if (!isOpen || !order) return null;

  return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">

    <div className="bg-[#121821] text-white rounded-2xl w-full max-w-4xl border border-sky-500 shadow-2xl overflow-hidden">

      {/* HEADER */}
      <div className="flex justify-between items-center p-6 border-b border-gray-800">
        <h3 className="text-3xl font-black tracking-wide">
          ORDER <span className="text-sky-500">DETAILS</span>
        </h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition"
        >
          <XCircle className="h-7 w-7" />
        </button>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ORDER INFO */}
        <div>
          <h4 className="text-sm font-black uppercase text-gray-400 mb-3">Order Info</h4>
          <div className="space-y-2 text-sm">
            <p><span className="text-gray-400">ID:</span> {order._id || order.id}</p>
            <p><span className="text-gray-400">Status:</span> <StatusBadge status={order.status} /></p>
            <p><span className="text-gray-400">Date:</span> {new Date(order.createdAt).toLocaleDateString()}</p>
            <p><span className="text-gray-400">Payment:</span> {order.paymentMethod}</p>
          </div>
        </div>

        {/* CUSTOMER */}
        <div>
          <h4 className="text-sm font-black uppercase text-gray-400 mb-3">Customer</h4>
          {order.user ? (
            <div className="space-y-2 text-sm">
              <p>{order.user.name}</p>
              <p className="text-gray-400">{order.user.email}</p>
            </div>
          ) : (
            <p className="italic text-gray-400">Guest Order</p>
          )}
        </div>

        {/* ADDRESS */}
        <div className="md:col-span-2">
          <h4 className="text-sm font-black uppercase text-gray-400 mb-3">Shipping Address</h4>
          <div className="bg-[#0b0f14] border border-gray-800 rounded-xl p-4 text-sm">
            <p className="font-bold">{order.shippingAddress.fullName}</p>
            <p>{order.shippingAddress.addressLine1}</p>
            <p>
              {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
            </p>
            <p>{order.shippingAddress.country}</p>
            <p className="mt-2 text-gray-400">
              Phone: {order.shippingAddress.phone}
            </p>
            <p className="text-gray-400">
              Email: {order.shippingAddress.email}
            </p>
          </div>
        </div>

        {/* ITEMS */}
        <div className="md:col-span-2">
          <h4 className="text-sm font-black uppercase text-gray-400 mb-3">Order Items</h4>

          <div className="bg-[#0b0f14] border border-gray-800 rounded-xl overflow-hidden">

            <table className="min-w-full text-sm">
              <thead className="bg-black/40 text-gray-400 uppercase text-xs">
                <tr>
                  <th className="p-3 text-left">Product</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Qty</th>
                  <th className="p-3 text-left">Price</th>
                  <th className="p-3 text-right">Total</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-800">
                {order.items.map((item, i) => (
                  <tr key={i}>
                    <td className="p-3 font-semibold">{item.name}</td>
                    <td className="p-3 text-gray-400">{item.category}</td>
                    <td className="p-3">{item.quantity}</td>
                    <td className="p-3">₹{item.price}</td>
                    <td className="p-3 text-right font-bold">
                      ₹{item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>

              <tfoot className="bg-black/40">
                <tr>
                  <td colSpan="4" className="p-3 text-right text-gray-400">Subtotal</td>
                  <td className="p-3 text-right font-bold">₹{order.subtotal}</td>
                </tr>
                <tr>
                  <td colSpan="4" className="p-3 text-right text-gray-400">Shipping</td>
                  <td className="p-3 text-right font-bold">₹{order.shipping}</td>
                </tr>
                <tr>
                  <td colSpan="4" className="p-3 text-right text-lg font-black">Total</td>
                  <td className="p-3 text-right text-lg font-black text-sky-500">
                    ₹{order.total}
                  </td>
                </tr>
              </tfoot>
            </table>

          </div>
        </div>

      </div>
    </div>
  </div>
);

};

const AdminOrders = () => {
  const { isAdmin, accessToken } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState('ALL');

  const loadOrders = async () => {
    setLoading(true);
    setError('');
    try {
      const headers = {
        'Content-Type': 'application/json'
      };
      if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
      }

      const response = await fetch(API_ORDERS_ENDPOINT, { headers });

      if (!response.ok) {
        throw new Error(`Failed to fetch orders: ${response.status}`);
      }

      const data = await response.json();
      setOrders(data);
    } catch (err) {
      console.error('Error fetching orders:', err);
      setError(err.message || 'Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isAdmin) {
      setLoading(false);
      return;
    }
    loadOrders();
  }, [isAdmin, accessToken]);

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const filteredOrders = statusFilter === 'ALL' 
    ? orders 
    : orders.filter(order => order.status === statusFilter);

  if (!isAdmin) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-black text-red-500 mb-2">Access Denied</h2>
          <p className="text-gray-600 mb-4">Admin privileges required.</p>
          <Link to="/login" className="text-sky-500 hover:text-sky-600 font-bold">
            Go to Login →
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-sky-500 mx-auto mb-4" />
          <p className="text-gray-600">Loading Orders...</p>
        </div>
      </div>
    );
  }

  return (
  <div className="bg-[#0b0f14] min-h-screen py-16 text-white">
    <div className="max-w-7xl mx-auto px-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-14">
        <div>
          <h1 className="text-5xl font-black tracking-wide">
            ORDER <span className="text-sky-500">MANAGEMENT</span>
          </h1>
          <p className="text-gray-400 mt-2 flex items-center">
            <ArrowRight className="h-4 w-4 mr-2" />
            Total Orders: <span className="font-bold ml-2">{orders.length}</span>
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            to="/admin/dashboard"
            className="bg-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/products"
            className="bg-sky-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-sky-400 transition"
          >
            Products
          </Link>

          <button
            onClick={loadOrders}
            disabled={loading}
            className="bg-emerald-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-emerald-400 transition disabled:opacity-50 flex items-center"
          >
            <RefreshCw className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </div>

      {/* ERROR */}
      {error && (
        <div className="mb-6 bg-red-900/40 border border-red-500 p-4 rounded-xl">
          {error}
        </div>
      )}

      {/* FILTERS */}
      <div className="mb-8 flex flex-wrap gap-3">
        {['ALL', 'PENDING', 'PAID', 'SHIPPED', 'COMPLETED', 'CANCELLED'].map(status => {
          const count =
            status === 'ALL'
              ? orders.length
              : orders.filter(o => o.status === status).length;

          return (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-5 py-2 rounded-xl font-bold transition ${
                statusFilter === status
                  ? 'bg-sky-500 text-black'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {status} ({count})
            </button>
          );
        })}
      </div>

      {/* DARK TABLE */}
      <div className="bg-[#121821] border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">

          <table className="min-w-full">
            <thead className="bg-black/40 text-gray-400 uppercase text-sm">
              <tr>
                <th className="p-4 text-left">Order</th>
                <th className="p-4 text-left">Customer</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Items</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Total</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-800">

              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-16 text-gray-400">
                    No orders found
                  </td>
                </tr>
              ) : (
                filteredOrders.map(order => (
                  <tr key={order._id || order.id} className="hover:bg-white/5 transition">

                    <td className="p-4 font-mono text-sky-400">
                      #{String(order._id || order.id).slice(-8).toUpperCase()}
                    </td>

                    <td className="p-4">
                      {order.user ? (
                        <>
                          <div className="font-semibold">{order.user.name || 'N/A'}</div>
                          <div className="text-gray-400 text-sm">{order.user.email || 'N/A'}</div>
                        </>
                      ) : (
                        <span className="text-gray-400 italic">Guest</span>
                      )}
                    </td>

                    <td className="p-4 text-gray-400">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>

                    <td className="p-4 text-gray-400">
                      {order.items.length}
                    </td>

                    <td className="p-4">
                      <StatusBadge status={order.status} />
                    </td>

                    <td className="p-4 font-black text-sky-400">
                      ₹{order.total}
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() => handleViewOrder(order)}
                        className="bg-white/10 hover:bg-sky-500/20 p-2 rounded-lg"
                      >
                        <Eye size={18} />
                      </button>
                    </td>

                  </tr>
                ))
              )}

            </tbody>
          </table>

        </div>
      </div>

      {/* MODAL */}
      <OrderDetailsModal
        order={selectedOrder}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedOrder(null);
        }}
      />
    </div>
  </div>
);

};

export default AdminOrders;