import React from 'react';
import { X, ChevronLeft, User, Hash, Monitor, Baby } from 'lucide-react';

interface CartItem {
    id: string | number;
    name: string;
    price: number;
    quantity?: number;
    image: string;
    note?: string;
    addition?: string;
}

interface OrderSummaryModalProps {
    isOpen: boolean;
    onClose: () => void;
    cartData?: CartItem[];
}

// Component con để hiển thị từng dòng thông tin bên phải
interface InfoItemProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

const OrderSummaryModal = ({ isOpen, onClose, cartData = [] }: OrderSummaryModalProps) => {
    if (!isOpen) return null;

    const subTotal = cartData.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
    const tax = subTotal * 0.12;
    const total = subTotal + tax;

    return (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 p-2 sm:p-4">

            <div className="bg-white w-full max-w-5xl h-[95%] sm:h-auto sm:max-h-[90vh] rounded-2xl overflow-hidden shadow-xl flex flex-col">

                {/* Header */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b">
                    <div className="flex items-center gap-2">
                        <button onClick={onClose} className="p-1.5 bg-slate-900 text-white rounded-md">
                            <ChevronLeft size={16} />
                        </button>
                        <h2 className="text-sm sm:text-base font-semibold">Order Summary</h2>
                    </div>

                    <button onClick={onClose} className="p-1.5 bg-slate-900 text-white rounded-md">
                        <X size={16} />
                    </button>
                </div>

                {/* Body */}
                <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">

                    {/* LEFT */}
                    <div className="flex-1 p-3 sm:p-4 overflow-y-auto border-b lg:border-b-0 lg:border-r">

                        <div className="flex items-center gap-2 mb-3 text-slate-700 text-sm font-medium">
                            <User size={16} />
                            <span>Items</span>
                        </div>

                        {/* List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {cartData.map((item) => (
                                <div key={item.id} className="flex gap-2 p-2 border rounded-xl">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-14 h-14 object-cover rounded-lg"
                                    />

                                    <div className="flex-1">
                                        <h4 className="text-xs font-semibold line-clamp-1">{item.name}</h4>

                                        <p className="text-[10px] text-gray-400 line-clamp-1">
                                            {item.note || item.addition}
                                        </p>

                                        <div className="flex justify-between items-center mt-1">
                                            <span className="text-xs font-semibold">
                                                ${item.price.toFixed(2)}
                                            </span>

                                            <span className="text-[10px] px-1.5 py-0.5 border rounded">
                                                x{item.quantity || 1}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Total */}
                        <div className="mt-4 pt-3 border-t text-xs space-y-1">
                            <div className="flex justify-between">
                                <span>Sub Total</span>
                                <span>${subTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax 12%</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-semibold text-sm pt-1">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-full lg:w-72 p-3 sm:p-4 flex flex-col justify-between">

                        <div className="space-y-4">
                            <InfoItem icon={<Monitor size={14} />} label="Table" value="A8" />
                            <InfoItem icon={<Hash size={14} />} label="People" value="2" />
                            <InfoItem icon={<User size={14} />} label="Name" value="Zahir Mays" />
                            <InfoItem icon={<Baby size={14} />} label="Baby Chair" value="Yes" />
                        </div>

                        <button className="mt-4 w-full py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl">
                            Create Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InfoItem = ({ icon, label, value }: InfoItemProps) => (
    <div>
        <div className="flex items-center gap-2 text-gray-400 text-[10px] uppercase">
            {icon}
            {label}
        </div>
        <div className="text-sm font-semibold pl-5">{value}</div>
    </div>
);

export default OrderSummaryModal;