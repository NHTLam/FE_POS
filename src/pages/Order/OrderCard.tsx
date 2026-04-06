import { useState } from "react";
import { orders } from "./Order";
import { DetailModal } from "./DetailModal";

export function OrderCard({ order }: { order: (typeof orders)[0]; }) {
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
