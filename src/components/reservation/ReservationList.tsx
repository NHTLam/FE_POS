export default function ReservationList() {
  const data = [
    { name: "Eva", date: "Sat, 4 Mar", time: "10.00 - 11.00" },
    { name: "Alexander", date: "Sat, 4 Mar", time: "14.00 - 15.00" },
    { name: "Huston", date: "Sun, 5 Mar", time: "12.00 - 14.00" },
    { name: "Bruno", date: "Sun, 5 Mar", time: "13.00 - 16.00" },
  ];

  return (
    <div className="w-[420px] bg-white rounded-xl shadow-md border">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-2 font-semibold">
          📅 <span>Reservation List</span>
        </div>
        <button className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white rounded-md">
          ✕
        </button>
      </div>

      {/* Table */}
      <div className="p-4">
        <div className="grid grid-cols-4 text-sm font-semibold text-gray-500 mb-2">
          <div>Cust Name</div>
          <div>Date</div>
          <div>Time</div>
          <div></div>
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center py-2 border-t text-sm"
          >
            <div>{item.name}</div>
            <div>{item.date}</div>
            <div>{item.time}</div>
            <div>
              <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100">
                Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}