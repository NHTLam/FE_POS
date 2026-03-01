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
    <div className="bg-gray-100 min-h-screen p-6">
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
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
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
        <button className="flex-1 border rounded-lg py-2 text-sm hover:bg-gray-50">
          See Details
        </button>
        <button className="flex-1 bg-gray-200 text-gray-400 rounded-lg py-2 text-sm cursor-not-allowed">
          Pay Bills
        </button>
      </div>
    </div>
  );
}