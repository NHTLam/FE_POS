import { useState } from "react";
import OrderPopup from "./SelectMenuModal";
import { NavTable } from "../../components/tables/NavTable";
import { ListTable } from "../../components/tables/ListTable";

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

        <NavTable
          floors={floors}
          activeFloor={activeFloor}
          setActiveFloor={setActiveFloor}
        />

        <ListTable />

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
