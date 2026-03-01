interface OrderItemProps {
  orderId: string;
  type: string;
  time: string;
  name: string;
  percent: number;
  items: number;
  avatar: string;
}

const OrderItem = ({
  orderId,
  type,
  time,
  name,
  percent,
  items,
  avatar,
}: OrderItemProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <div>
          <span className="font-medium text-gray-700 dark:text-gray-200">
            Order# {orderId}
          </span>{" "}
          / {type}
        </div>
        <div>{time}</div>
      </div>

      {/* Body */}
      <div className="flex items-center gap-3 mt-3">
        {/* Avatar */}
        <div className="flex items-center justify-center w-10 h-10 text-sm font-semibold text-white bg-blue-500 rounded-xl">
          {avatar}
        </div>

        <div>
          <p className="text-xs text-gray-400 dark:text-gray-500">Customer Name</p>
          <p className="font-semibold text-gray-800 dark:text-gray-100">{name}</p>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-medium text-orange-500">
            {percent}% In Progress
          </span>
          <span className="text-gray-500 dark:text-gray-400">{items} Items →</span>
        </div>

        <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-orange-400 rounded-full"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default function OrdersCard() {
  return (
    <div>
      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 dark:border-gray-800">
        <OrderItem
          orderId="DI008"
          type="Dine In"
          time="Mon, 17 Feb 03:43 PM"
          name="Daniel"
          percent={10}
          items={6}
          avatar="A1"
        />

        <OrderItem
          orderId="TA001"
          type="Take Away"
          time="Mon, 17 Feb 02:56 PM"
          name="Ylona"
          percent={60}
          items={3}
          avatar="B2"
        />
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-gray-200 text-center">
        <button className="text-sm font-medium text-gray-700 hover:text-black transition">
          See All Order →
        </button>
      </div>
    </div>
  );
}