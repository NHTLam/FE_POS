import { useState } from "react";
import { NavTable } from "../../components/tables/NavTable";
import { ListTable } from "../../components/tables/ListTable";
import AddTableModal from "./AddTable";
import { Footer } from "../../components/tables/Footer";
import ReservationList from "../../components/reservation/ReservationList";

export default function Table() {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [showFooter, setShowFooter] = useState(false);
  const [showReservation, setshowReservation] = useState(false);
  const [activeFloor, setActiveFloor] = useState("1st Floor");
  const floors = ["1st Floor", "2nd Floor", "3rd Floor"];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSaveTable = (data: any) => {
    console.log("Dữ liệu bàn mới:", data);
    // Gửi data lên server ở đây
  };
  const handleSelectTable = (table: string) => {
    setSelectedTable(table);
    setShowFooter(true);
  };

  return (
    <div className="relative min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <h1 className="text-2xl font-semibold">Table</h1>
        </div>

        <div className="flex gap-3 flex-wrap">
          <NavTable
            floors={floors}
            activeFloor={activeFloor}
            setActiveFloor={setActiveFloor}
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            + Create New Table
          </button>

          <AddTableModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSaveTable}
          />
        </div>
      </div>

      <ListTable onSelectTable={handleSelectTable} />

      <div className="fixed bottom-10 right-6">
        {showFooter && 
          <Footer
            selectedTable={selectedTable}
            onInfoReservation={() => setshowReservation(true)}
            onContinue={() => {}}
          />}
      </div>

      { showReservation && <ReservationList 
        isOpen={showReservation}
        onClose={() => setshowReservation(false)}/> }
    </div>
  );
}