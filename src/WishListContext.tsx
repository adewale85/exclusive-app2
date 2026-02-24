import { createContext, useContext, useEffect, useState } from "react";

// 1. Fixed Interface to include price
interface WishlistItem {
    id: number;
    title: string;
    thumbnail: string; // Changed from number to string for image URLs
    price: number;
}

interface WishlistContextType {
    wishList: WishlistItem[];
    addToWishList: (product: WishlistItem) => void;
    removeFromWishList: (id: number) => void;
}

const WishListContext = createContext<WishlistContextType | null>(null);

export const WishListProvider = ({ children }: { children: React.ReactNode }) => {
    const [wishList, setWishList] = useState<WishlistItem[]>(() => {
        // Changed key to "WishList" to match your useEffect
        const saveWishList = localStorage.getItem("WishList");
        return saveWishList ? JSON.parse(saveWishList) : [];
    });

    useEffect(() => {
        localStorage.setItem("WishList", JSON.stringify(wishList));
    }, [wishList]);

    const addToWishList = (product: WishlistItem) => {
        setWishList((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) return prev; // Don't add if already there

            return [...prev, {
                id: product.id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
            }];
        });
    };

    const removeFromWishList = (id: number) => {
        // Use .filter to actually remove the item
        setWishList((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishList }}>
            {children}
        </WishListContext.Provider>
    );
};

// Custom Hook (Renamed to useWishList for standard naming)
export const useWishList = () => {
    const context = useContext(WishListContext);
    if (!context) throw new Error("useWishList must be used within WishListProvider");
    return context;
};