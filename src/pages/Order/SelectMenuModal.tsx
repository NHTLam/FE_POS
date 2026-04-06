import { useState } from "react";
import { X } from "lucide-react";
import CartItem from "./CardItem";

export default function SelectMenuModal({ onClose }: { onClose: () => void }) {
    const [activeTab, setActiveTab] = useState("All");

    const tabs = ["All", "Chef Recommendation", "Soup", "Noodle", "Rice", "Dessert"];

    const cartData = [
        { id: 1, name: "Lemon Butter Dory", price: 50.50, note: "Don't use onion", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398" },
        { id: 2, name: "Grilled Salmon", price: 65.00, note: "Extra spicy", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141" },
        { id: 3, name: "Grilled Salmon", price: 65.00, note: "Extra spicy", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141" },
        { id: 4, name: "Grilled Salmon", price: 65.00, note: "Extra spicy", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141" },
        { id: 5, name: "Grilled Salmon", price: 65.00, note: "Extra spicy", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141" },
        { id: 6, name: "Grilled Salmon", price: 65.00, note: "Extra spicy", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141" }
    ];

    const items = [
        {
            name: "Butter Chicken",
            price: 12.64,
            status: "Available",
            img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
        },
        {
            name: "Wagyu Steak",
            price: 31.17,
            status: "Available",
            img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
        },
        {
            name: "Pasta Bolognese",
            price: 23.5,
            status: "Available",
            img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
        },
        {
            name: "Spicy Tuna Nachos",
            price: 18.2,
            status: "Not Available",
            img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
        },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>

            {/* Container */}
            <div className="relative w-full h-[95%] sm:h-auto sm:max-w-6xl bg-white sm:rounded-2xl shadow-xl overflow-hidden">

                {/* HEADER */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b bg-gray-50">
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                        <span className="font-medium">Select Menu</span>
                        <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-xs">
                            Select Menu
                        </span>
                        <span className="text-gray-400 hidden sm:block">Order Summary</span>
                    </div>

                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200">
                        <X size={18} />
                    </button>
                </div>

                {/* BODY */}
                <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">

                    {/* LEFT */}
                    <div className="w-full lg:w-2/3 border-b lg:border-b-0 lg:border-r p-3 sm:p-4 overflow-y-auto">

                        {/* Search */}
                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="Search Item Name"
                                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none"
                            />
                        </div>

                        {/* Tabs */}
                        <div className="flex gap-2 mb-3 overflow-x-auto no-scrollbar">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`whitespace-nowrap px-3 py-1 rounded-full text-xs sm:text-sm border
                    ${activeTab === tab
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-100 text-gray-600"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Grid items */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {items.map((item, i) => (
                                <div key={i} className="border rounded-xl p-2">

                                    <div className="relative">
                                        <img
                                            src={item.img}
                                            alt=""
                                            className="h-24 sm:h-28 w-full object-cover rounded-lg"
                                        />
                                        <span
                                            className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-full text-white
                        ${item.status === "Available"
                                                    ? "bg-green-500"
                                                    : "bg-red-500"
                                                }`}
                                        >
                                            {item.status}
                                        </span>
                                    </div>

                                    <div className="mt-2">
                                        <h3 className="text-sm font-medium">{item.name}</h3>
                                        <p className="text-blue-600 font-semibold text-sm">
                                            ${item.price}
                                        </p>
                                    </div>

                                    <button className="mt-2 w-full border rounded-lg py-1 text-sm hover:bg-gray-100">
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-full lg:w-1/3 p-3 sm:p-4 flex flex-col justify-between">

                        {cartData && cartData.length > 0 ? (
                            <div className="flex flex-col gap-2 max-h-[50vh] lg:max-h-[60vh] overflow-y-auto pr-1 no-scrollbar">
                                {cartData.map(item => (
                                    <CartItem
                                        key={item.id}
                                        name={item.name}
                                        price={item.price}
                                        note={item.note}
                                        image={item.image}
                                    />
                                ))}
                            </div>
                        ) : (
                            // Nếu cartData là null hoặc rỗng: Hiển thị thông báo Trống
                            <div className="flex flex-col items-center justify-center min-h-[200px] lg:h-full text-gray-400 text-sm">
                                <div className="text-3xl mb-2">🛒</div>
                                <p>No order found</p>
                                <p className="text-xs text-center">
                                    Select menu and Add to Cart
                                </p>
                            </div>
                        )}

                        {/* Summary */}
                        <div className="border-t pt-3 text-sm">
                            <div className="flex justify-between mb-1">
                                <span>Sub Total</span>
                                <span>US$0</span>
                            </div>
                            <div className="flex justify-between mb-1">
                                <span>Tax 12%</span>
                                <span>US$0</span>
                            </div>
                            <div className="flex justify-between font-semibold mb-3">
                                <span>Total Payment</span>
                                <span>US$0</span>
                            </div>

                            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}