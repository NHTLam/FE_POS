import { useState } from "react";

const orders = [
  {
    id: "DI104",
    type: "Dine In",
    time: "Mon, 17 Feb 12:24 PM",
    table: "B3",
    customer: "Eve",
    progress: 10,
    items: [
      { name: "Belgian Waffles", qty: 2, price: 32 },
      { name: "Classic Lemonade", qty: 3, price: 36 },
      { name: "Creamy Garlic Chicken", qty: 4, price: 60 },
      { name: "Spicy Tuna Tartare", qty: 1, price: 28 },
    ],
  },
  {
    id: "TA001",
    type: "Take Away",
    time: "Mon, 17 Feb 10:20 PM",
    table: "A1",
    customer: "Vlona",
    progress: 10,
    items: [
      { name: "Belgian Waffles", qty: 2, price: 32 },
      { name: "Classic Lemonade", qty: 3, price: 36 },
      { name: "Creamy Garlic Chicken", qty: 4, price: 60 },
      { name: "Spicy Tuna Tartare", qty: 1, price: 28 },
    ],
  },
  {
    id: "DI103",
    type: "Dine In",
    time: "Mon, 17 Feb 11:41 PM",
    table: "A10",
    customer: "Nielson",
    progress: 40,
    items: [
      { name: "Belgian Waffles", qty: 2, price: 32 },
      { name: "Classic Lemonade", qty: 3, price: 36 },
      { name: "Creamy Garlic Chicken", qty: 4, price: 60 },
      { name: "Spicy Tuna Tartare", qty: 1, price: 28 },
    ],
  },
];

export default function OrderDashboard() {

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <h1 className="text-2xl font-semibold">Order</h1>

          <div className="flex gap-2 flex-wrap">
            <button className="px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">
              All 20
            </button>
            <button className="px-4 py-1 rounded-full bg-white border text-gray-600 text-sm">
              In Progress 20
            </button>
            <button className="px-4 py-1 rounded-full bg-white border text-gray-600 text-sm">
              Ready to Served 20
            </button>
            <button className="px-4 py-1 rounded-full bg-white border text-gray-600 text-sm">
              Waiting for Payment 20
            </button>
          </div>
        </div>

        <div className="flex gap-3 flex-wrap">
          <input
            type="text"
            placeholder="Search Order ID or Customer Name"
            className="px-4 py-2 border rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button 
            
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            + Create New Order
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

function OrderCard({ order }: { order: typeof orders[0] }) {
  const [open, setOpen] = useState(false);
  const total = order.items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 hover:shadow-md transition">
      {/* Top */}
      <div className="flex justify-between text-sm text-gray-500 mb-3">
        <span>
          Order# {order.id} / {order.type}
        </span>
        <span>{order.time}</span>
      </div>

      {/* Customer */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center font-semibold">
          {order.table}
        </div>
        <div>
          <p className="text-xs text-gray-400">Customer Name</p>
          <p className="font-semibold">{order.customer}</p>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-3">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>In Progress</span>
          <span>{order.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-yellow-400 h-2 rounded-full"
            style={{ width: `${order.progress}%` }}
          ></div>
        </div>
      </div>

      {/* Items */}
      <div className="border rounded-lg p-3 mb-3 max-h-40 overflow-y-auto">
        {order.items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between text-sm py-1 text-gray-600"
          >
            <span>
              {item.name} x{item.qty}
            </span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex justify-between font-semibold text-gray-700 mb-4">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button 
          onClick={() => setOpen(true)}
          className="flex-1 border rounded-lg py-2 text-sm hover:bg-gray-50">
          See Details
        </button>
        <button className="flex-1 bg-gray-200 text-gray-400 rounded-lg py-2 text-sm cursor-not-allowed">
          Pay Bills
        </button>
      </div>
      {open && <DetailModal onClose={() => setOpen(false)} />}
    </div>
  );
}

function DetailModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <div className="relative bg-white w-[480px] max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-6 animate-fadeIn">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Detail Order</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-800 text-white rounded-full"
          >
            ✕
          </button>
        </div>

        {/* Order Info */}
        <div className="text-sm text-gray-500 flex justify-between mb-4">
          <span>Order# DI104 / Dine In</span>
          <span>Mon, 17 Feb 12:24 PM</span>
        </div>

        {/* Customer */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-semibold">
            B3
          </div>
          <div>
            <p className="text-xs text-gray-400">Customer Name</p>
            <p className="font-semibold">Eve</p>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-yellow-50 text-yellow-600 px-4 py-2 rounded-xl flex justify-between items-center mb-6">
          <span>10% In Progress</span>
          <span>6 Items →</span>
        </div>

        {/* Section - Waiting to cooked */}
        <div className="bg-gray-100 rounded-xl p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <p className="font-semibold text-gray-700">
              ⏱ Waiting to cooked
            </p>
            <button className="text-red-500 border border-red-200 px-3 py-1 rounded-lg text-sm">
              Cancel order
            </button>
          </div>

          <div className="bg-white rounded-xl p-3 shadow-sm">
            <p className="font-semibold">Lemon Butter Dory</p>
            <p className="text-xs text-gray-400">
              Addition: Add on 1, Add on 2
            </p>
            <p className="text-xs text-gray-400 mb-2">
              Note: Don't use onion
            </p>

            <div className="flex justify-between items-center">
              <span className="font-semibold">$50.50</span>
              <span className="border px-2 py-1 rounded-md text-sm">x1</span>
            </div>
          </div>
        </div>

        {/* Section - Served */}
        <div className="bg-green-50 rounded-xl p-4 mb-6">
          <p className="font-semibold text-green-600 mb-3">
            ✔ Served
          </p>

          <div className="bg-white rounded-xl p-3 shadow-sm">
            <p className="font-semibold">Fried Rice with Green Chili</p>
            <p className="text-xs text-gray-400">
              Addition: Add on 1, Add on 2
            </p>

            <div className="flex justify-between items-center mt-2">
              <span className="font-semibold">$40.00</span>
              <span className="border px-2 py-1 rounded-md text-sm">x1</span>
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between font-semibold text-lg mb-6">
          <span>Total Payment</span>
          <span>US$274.42</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 border rounded-xl py-3 hover:bg-gray-50">
            + New Order
          </button>
          <button className="flex-1 bg-blue-600 text-white rounded-xl py-3 hover:bg-blue-700">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}