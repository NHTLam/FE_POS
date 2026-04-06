import { useState } from 'react';
import { X, LayoutGrid, Users, MapPin, Save } from 'lucide-react';
import DropDown from '../../components/dropdown/dropdown';

interface AddTableModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (formData: any) => void;
}

const AddTableModal = ({ isOpen, onClose, onSave }: AddTableModalProps) => {
    const [formData, setFormData] = useState({
        code: '',
        capacity: '',
        position: 'Trên',
        targetTable: ''
    });

    if (!isOpen) return null;

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm">

            <div className="bg-white w-full sm:max-w-md h-[95%] sm:h-auto sm:max-h-[90vh] rounded-x-2xl sm:rounded-2xl shadow-xl flex flex-col animate-in slide-in-from-bottom duration-200">

                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md">
                            <LayoutGrid size={18} />
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold text-slate-800">Thêm bàn</h2>
                            <p className="text-[10px] text-gray-400">Cấu hình bàn</p>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Body */}
                <form
                    onSubmit={handleSubmit}
                    className="flex-1 overflow-visible px-4 py-3 space-y-4"
                >
                    {/* Mã bàn */}
                    <div>
                        <label className="text-xs font-medium text-gray-600 mb-1 flex items-center gap-1">
                            <LayoutGrid size={14} /> Mã bàn
                        </label>
                        <input
                            type="text"
                            name="code"
                            placeholder="A10, B05..."
                            className="w-full px-3 py-2 text-sm bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Số người */}
                    <div>
                        <label className="text-xs font-medium text-gray-600 mb-1 flex items-center gap-1">
                            <Users size={14} /> Số người
                        </label>
                        <input
                            type="number"
                            name="capacity"
                            placeholder="VD: 4"
                            className="w-full px-3 py-2 text-sm bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Vị trí */}
                    <div>
                        <label className="text-xs font-medium text-gray-600 mb-1 flex items-center gap-1">
                            <MapPin size={14} /> Vị trí
                        </label>

                        <div className="grid grid-cols-3 gap-2">
                            {['Trên', 'Dưới', 'Cạnh'].map((pos) => (
                                <button
                                    key={pos}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, position: pos })}
                                    className={`py-2 text-xs rounded-lg border transition ${formData.position === pos
                                        ? 'bg-blue-600 text-white border-blue-600'
                                        : 'bg-white text-gray-500 border-gray-200'
                                        }`}
                                >
                                    {pos}
                                </button>
                            ))}
                        </div>
                    </div>

                    <DropDown formData={formData} setFormData={setFormData} />
                </form>

                {/* Footer (sticky) */}
                <div className="p-3 border-t bg-white flex gap-2 rounded-b-2xl">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 py-2 text-sm border rounded-lg"
                    >
                        Hủy
                    </button>

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="flex-1 py-2 text-sm bg-blue-600 text-white rounded-lg flex items-center justify-center gap-1"
                    >
                        <Save size={14} />
                        Lưu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddTableModal;