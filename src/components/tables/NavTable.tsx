import { Legend } from "../common/Legend";

interface NavTableProps {
    floors: string[];
    activeFloor: string;
    setActiveFloor: (floor: string) => void;
}

export function NavTable({ floors, activeFloor, setActiveFloor }: NavTableProps) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-3 rounded-2xl w-full sm:w-fit gap-2">
            {/* Legend */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-600">
                <Legend color="bg-gray-300" label="Available" />
                <Legend color="bg-yellow-400" label="Not Available" />
                <Legend color="bg-gray-800" label="Reserved" />
                <Legend color="bg-gray-400" label="Can't Select" />
            </div>

            {/* Tabs */}
            <div className="flex bg-white rounded-full p-1 w-full sm:w-auto overflow-x-auto">
                {floors.map((floor) => (
                    <button
                        key={floor}
                        onClick={() => setActiveFloor(floor)}
                        className={`whitespace-nowrap px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm transition
                ${activeFloor === floor
                                ? "bg-gray-200 text-black font-medium"
                                : "text-gray-400"}`}
                    >
                        {floor}
                    </button>
                ))}
            </div>
        </div>
    );
}
