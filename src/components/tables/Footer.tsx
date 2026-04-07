type FooterProps = {
  selectedTable: string | null;
  onInfoReservation?: () => void;
  onContinue: () => void;
};

export function Footer({
  selectedTable,
  onInfoReservation = () => {},
  onContinue,
}: FooterProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2">
      <span className="bg-white px-3 py-2 border rounded-full text-center sm:text-left">
        {selectedTable}
      </span>
      <button
        onClick={onInfoReservation}
        className="bg-white px-3 py-2 border rounded-full w-full sm:w-auto"
      >
        Info Reservation
      </button>
      <button
        onClick={onContinue}
        className="bg-blue-500 text-white px-3 py-2 rounded-full w-full sm:w-auto"
      >
        Continue →
      </button>
    </div>
  );
}
