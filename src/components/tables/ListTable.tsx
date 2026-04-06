const tables = ["A4", "A5", "A8", "A9", "A10", "A11", "A12", "A13"];

export function ListTable() {
    return (
        <div className="grid grid-cols-4 gap-4 mb-6 mt-4">
            {tables.map(
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
    );
}
