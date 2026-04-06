
export function DetailModal({ onClose }: { onClose: () => void; }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

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
