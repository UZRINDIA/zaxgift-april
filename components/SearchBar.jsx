import React from "react";
import { useAppContext } from "@/context/AppContext";

const SearchBar = ({ isOpen, onClose }) => {
    const { searchQuery, setSearchQuery, searchResults, router } = useAppContext();

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };
    const handleProdcutClick = (productId) => {
        router.push(`/product/${productId}`);
        onClose();
    };
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset -0 bg-gray bg-opacity -50 z -50 flex items-start justify-center pt-10">
            <div className="bg-white w-full max-w-2xl mx-4 rounded-lg shadow-lg">
                <div className="p-4 ">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder="Search prdoucts...."
                        className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:border-orange-500"
                        autoFocus />
                </div>
                {searchResults.length > 0 && (
                    <div className="max-h-96 overflow-y-auto border-t">
                        {searchResults.map((product) => (
                            <div key={product.id}
                                onClick={() => handleProdcutClick(product._id)}
                                className="p-4 hover:bg-gray-100 cursor-pointer flex items-center gap-4">
                                <img src={product.images[0]}
                                    alt={product.name}
                                    className="w-12 h-12 rounded object-cover"
                                />
                                <div >
                                    <h3 className="font-medium">{product.name}</h3>
                                    <p className="text-sm text-gray-600">${product.offerPrice}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="p-4 border-t">
                    <button onClick={onClose}
                        className="w-full py-2 bg-orange-500 text-gray-600 hover:text-gray-900"
                    >Close</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;