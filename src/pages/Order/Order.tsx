import { useState } from "react";
import { OrderCard } from "./OrderCard";
import { OrderModal } from "./OrderModal";

export const orders = [
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

export default function Order() {
  const [open, setOpen] = useState(false);

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
            onClick={() => setOpen(true)}
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

      {open && <OrderModal onClose={() => setOpen(false)} />}
    </div>
  );
}