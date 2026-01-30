import React, { useState, useEffect } from 'react';
import { useAuth } from '../Context/AuthContext.jsx';
import { API_URL as BACKEND_URL } from '../config';
import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

const API_DASHBOARD_ENDPOINT = `${BACKEND_URL}/dashboard/kpis`;
const API_HISTORY_ENDPOINT = `${BACKEND_URL}/dashboard/history`;

const defaultHistory = [20, 35, 45, 60, 50, 75, 80, 95, 110, 100, 120, 140];

const SalesChart = ({ data }) => {
  const max = Math.max(...data);

  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Monthly Revenue</h3>
      <div className="flex items-end h-44 gap-3">
        {data.map((v, i) => (
          <div
            key={i}
            style={{ height: `${(v / max) * 100}%` }}
            className="w-5 bg-gradient-to-t from-sky-500 to-cyan-300 rounded-lg hover:opacity-80 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default function AdminDashboard() {
  const { isAdmin } = useAuth();
  const [history] = useState(defaultHistory);

  if (!isAdmin)
    return (
      <div className="text-center py-32 text-red-500 text-xl font-bold">
        Admin Access Only
      </div>
    );

  return (
    <div className="bg-[#0b0f14] min-h-screen text-white">

      {/* HERO */}
      <div className="relative overflow-hidden border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-black tracking-wide">
            ADMIN <span className="text-sky-500">CONTROL PANEL</span>
          </h1>
          <p className="text-gray-400 mt-3">
            Real-time business performance overview
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 space-y-14">

        {/* KPI GRID */}
        <div className="grid md:grid-cols-4 gap-6">

          {[
            { title: "Revenue", value: "₹1.2 Cr", icon: DollarSign, trend: 15 },
            { title: "Orders", value: "850", icon: ShoppingCart, trend: 8 },
            { title: "Customers", value: "120", icon: Users, trend: -5 },
            { title: "Inventory", value: "₹45 L", icon: Package, trend: 0 }
          ].map((k, i) => (
            <div
              key={i}
              className="bg-[#121821] border border-gray-800 rounded-2xl p-6 hover:border-sky-500 transition"
            >
              <div className="flex justify-between items-center mb-4">
                <k.icon className="text-sky-500 w-8 h-8" />

                <span
                  className={`flex items-center text-sm ${
                    k.trend > 0
                      ? 'text-emerald-400'
                      : k.trend < 0
                      ? 'text-red-400'
                      : 'text-gray-400'
                  }`}
                >
                  {k.trend > 0 && <TrendingUp size={16} />}
                  {k.trend < 0 && <TrendingDown size={16} />}
                  {Math.abs(k.trend)}%
                </span>
              </div>

              <p className="text-3xl font-black">{k.value}</p>
              <p className="text-gray-400 text-sm uppercase tracking-wider mt-1">
                {k.title}
              </p>
            </div>
          ))}
        </div>

        {/* CHART + ACTIVITY */}
        <div className="grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 bg-[#121821] rounded-2xl p-8 border border-gray-800">
            <SalesChart data={history} />
          </div>

          <div className="bg-[#121821] rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-bold mb-6">Recent Activity</h3>

            <ul className="space-y-4 text-gray-300 text-sm">
              <li>🛒 Order #890 placed</li>
              <li>📦 New Chroma Pigment added</li>
              <li>🚚 Order #889 shipped</li>
              <li>📩 New customer inquiry</li>
            </ul>

            <Link
              to="/admin/products"
              className="inline-block mt-8 text-sky-500 font-bold hover:text-white transition"
            >
              Manage Products →
            </Link>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div>
          <h3 className="text-2xl font-black mb-6">Quick Controls</h3>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/admin/products"
              className="bg-sky-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-sky-400 transition"
            >
              Product Management
            </Link>

            <Link
              to="/admin/orders"
              className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition"
            >
              Order Management
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
