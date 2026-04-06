import { useState } from "react";
import { Legend } from "./Legend";
import OrderPopup from "./SelectMenuModal";

export function OrderModal({ onClose }: { onClose: () => void; }) {
  const [open, setOpen] = useState(false);
  const [activeFloor, setActiveFloor] = useState("1st Floor");
  const floors = ["1st Floor", "2nd Floor", "3rd Floor"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      {/* Content */}
      <div className="relative bg-white w-[90%] max-w-5xl rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Select Table</h2>
          <button onClick={onClose} className="text-gray-500">
            ✕
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-100 px-3 py-2 rounded-2xl w-full sm:w-fit shadow-sm gap-2">
          {/* Legend */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-600">
            <Legend color="bg-gray-300" label="Available" />
            <Legend color="bg-yellow-400" label="Not Available" />
            <Legend color="bg-gray-800" label="Reserved" />
            <Legend color="bg-gray-400" label="Can’t Select" />
          </div>

          {/* Tabs */}
          <div className="flex bg-white rounded-full p-1 shadow-inner w-full sm:w-auto overflow-x-auto">
            {floors.map((floor) => (
              <button
                key={floor}
                onClick={() => setActiveFloor(floor)}
                className={`whitespace-nowrap px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm transition
                ${activeFloor === floor
                    ? "bg-gray-200 text-black font-medium"
                    : "text-gray-400"
                  }`}
              >
                {floor}
              </button>
            ))}
          </div>
        </div>

        {/* Layout giống ảnh (grid bàn) */}
        <div className="grid grid-cols-4 gap-4 mb-6 mt-4">
          {["A4", "A5", "A8", "A9", "A10", "A11", "A12", "A13"].map(
            (table, index) => (
              <div
                key={index}
                className="border rounded-xl h-20 flex items-center justify-center hover:bg-blue-100 cursor-pointer"
              >
                {table}
              </div>
            )
          )}
        </div>

        {/* Bottom action bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2">
          <span className="bg-white px-3 py-2 border rounded-full text-center sm:text-left">
            Table A8
          </span>
          <button className="bg-white px-3 py-2 border rounded-full w-full sm:w-auto">
            Info Reservation
          </button>
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-500 text-white px-3 py-2 rounded-full w-full sm:w-auto"
          >
            Continue →
          </button>
        </div>
      </div>
      {open && <OrderPopup onClose={() => setOpen(false)} />}
    </div>
  );
}
