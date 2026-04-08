import { X } from "lucide-react";
interface ReservationListProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function ReservationList({
  isOpen,
  onClose,
}: ReservationListProps) {
  const data = [
    {
      name: "Eva",
      date: "Sat, 4 Mar",
      time: "10.00 - 11.00",
      customerName: "Eva",
      people: 2,
    },
    {
      name: "Alexander",
      date: "Sat, 4 Mar",
      time: "14.00 - 15.00",
      customerName: "Alexander",
      people: 4,
    },
    {
      name: "Huston",
      date: "Sun, 5 Mar",
      time: "12.00 - 14.00",
      customerName: "Huston",
      people: 3,
    },
    {
      name: "Bruno",
      date: "Sun, 5 Mar",
      time: "13.00 - 16.00",
      customerName: "Bruno",
      people: 2,
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="w-[700px] bg-white rounded-xl shadow-md border">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2 font-semibold">
            📅 <span>Reservation List</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400"
          >
            <X size={18} />
          </button>
        </div>

        {/* Table */}
        <div className="p-4">
          {/* Header */}
          <div className="grid grid-cols-6 text-sm font-semibold text-gray-500 mb-2">
            <div>Cust Name</div>
            <div>Date</div>
            <div>Time</div>
            <div>Customer Name</div>
            <div>People</div>
            <div>Action</div>
          </div>

          {/* Body */}
          {data.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-6 items-center py-2 border-t text-sm"
            >
              <div>{item.name}</div>
              <div>{item.date}</div>
              <div>{item.time}</div>
              <div>{item.customerName}</div>
              <div>{item.people}</div>
              <div>
                <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100">
                  Change Table
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
