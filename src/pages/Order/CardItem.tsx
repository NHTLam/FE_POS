import { useState } from 'react';
import { Trash2, Pencil, Minus, Plus } from 'lucide-react';

interface CartItemProps {
    name: string;
    price: number;
    note: string;
    image: string;
}

const CartItem = ({ name, price, note, image }: CartItemProps) => {
    const [quantity, setQuantity] = useState(2);

    return (
        <div className="max-w-md p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
            {/* Top */}
            <div className="flex gap-3 relative">

                {/* Image */}
                <div className="w-16 h-16 flex-shrink-0">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Info */}
                <div className="flex-1 pr-8">
                    <h3 className="text-sm font-semibold text-slate-800 leading-tight">
                        {name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                        Note: {note}
                    </p>
                </div>

                {/* Delete */}
                <button className="absolute right-0 top-0 p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-md">
                    <Trash2 size={14} />
                </button>
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between mt-3">

                {/* Price */}
                <span className="text-base font-semibold text-slate-700">
                    ${price.toFixed(2)}
                </span>

                <div className="flex items-center gap-2">

                    {/* Edit note */}
                    <button className="p-1.5 border border-gray-200 rounded-md hover:bg-gray-50 text-slate-600">
                        <Pencil size={14} />
                    </button>

                    {/* Quantity */}
                    <div className="flex items-center bg-slate-50 rounded-lg border border-gray-100 px-1">
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="p-1 hover:bg-white rounded"
                        >
                            <Minus size={14} />
                        </button>

                        <span className="w-6 text-center text-sm font-medium">
                            {quantity}
                        </span>

                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="p-1 hover:bg-white rounded"
                        >
                            <Plus size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CartItem;