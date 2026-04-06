import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

export default function DropDown({ formData, setFormData }: { formData: any; setFormData: (data: any) => void }) {
    const [open, setOpen] = useState(false);

    const options = ["A01", "A02", "B01", "B02"];

    return (
        <div className="relative">
            {/* Label */}
            <label className="text-xs font-medium text-gray-600 mb-1 flex items-center gap-1">
                Bàn liên kết
            </label>

            {/* Button */}
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg flex items-center justify-between shadow-sm hover:border-gray-300"
            >
                <span className={formData.targetTable ? "text-slate-800" : "text-gray-400"}>
                    {formData.targetTable || "Chọn bàn..."}
                </span>
                <ChevronDown size={16} className="text-gray-400" />
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden animate-in fade-in zoom-in-95">

                    {options.map((item) => (
                        <div
                            key={item}
                            onClick={() => {
                                setFormData({ ...formData, targetTable: item });
                                setOpen(false);
                            }}
                            className="flex items-center justify-between px-3 py-2 text-sm cursor-pointer hover:bg-blue-50"
                        >
                            <span>{item}</span>

                            {formData.targetTable === item && (
                                <Check size={14} className="text-blue-600" />
                            )}
                        </div>
                    ))}

                </div>
            )}
        </div>
    );
}