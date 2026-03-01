import OrdersCard from "./OrderCard";

export default function InProgressOrder() {
  return (
    <div className=" rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            In Progress
          </h3>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <OrdersCard/>
      </div>
    </div>
  );
}
