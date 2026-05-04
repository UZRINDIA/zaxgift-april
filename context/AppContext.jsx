'use client'
import { productsDummyData, userDummyData } from "@/assets/assets";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppContextProvider = (props) => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY
    const router = useRouter()


    // const { user } = useUser()
    // const { getToken } = useAuth()

    const [products, setProducts] = useState([])
    // const [userData, setUserData] = useState(false)
    // const [isSeller, setIsSeller] = useState(true)
    // const [cartItems, setCartItems] = useState({})
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    //track-order
    // const [orderData, setOrderData] = useState(null);
    // const [isLoadingOrder, setIsLoadingOrder] = useState(false);
    // const [orderError, setOrderError] = useState("");

    //track-order function
    // const handleTrackOrder = async (orderId, checkoutEmail) => {
    //     if (!orderId || !checkoutEmail) {
    //         setOrderError("Please enter both Order ID and Email");
    //         return;
    //     }

    //     setIsLoadingOrder(true);
    //     setOrderError("");

    //     try {
    //         const res = await fetch(`/api/track-order?orderId=${orderId}&email=${encodeURIComponent(checkoutEmail)}`);
    //         const data = await res.json();

    //         if (!res.ok) {
    //             setOrderError(data.error || "Could not find your order. Please check your details.");
    //             setOrderData(null);
    //         } else {
    //             setOrderData(data);
    //             setOrderError("");
    //         }
    //     } catch (err) {
    //         setOrderError("Something went wrong. Please try again later.");
    //         setOrderData(null);
    //     } finally {
    //         setIsLoadingOrder(false);
    //     }
    // };


   const fetchProductData = async () => {
    try {
        const res = await fetch('/api/products')
        const data = await res.json()
        setProducts(data)
    } catch (error) {
        toast.error('Failed to load products')
    }
}
        // try {


        //     const { data } = await axios.get('/api/product/list')

        //     if (data.success) {
        //         setProducts(data.products)
        //     } else {
        //         toast.error(data.massage)
        //     }
        // } catch (error) {
        //     toast.error(error?.resposne?.data?.message || error.message)
        // }
      

    // const fetchUserData = async () => {
    //     try {
    //         if (!user) {
    //             return;
    //         }
    //         if (user.publicMetadata.role === 'seller') {
    //             setIsSeller(true)
    //         }

    //         const token = await getToken()

    //         // let call the api 
    //         const { data } = await axios.get('/api/user/data', { headers: { Authorization: `Bearer ${token}` } })

    //         if (data?.success) {
    //             setUserData(data.user || {})
    //             setCartItems(data.user?.cartItem || {})
    //         } else {
    //             toast.error(data?.message || 'Failed to fetch user data')
    //         }

    //     } catch (error) {
    //         console.error('Error fetching user data:', error)
    //         toast.error(error?.message || 'An error occurred while fetching user data')
    //     }
    // }

    // const addToCart = async (itemId) => {
    //     if (!itemId) return;
    //     let cartData = structuredClone(cartItems);
    //     if (cartData[itemId]) {
    //         cartData[itemId] += 1;
    //     }
    //     else {
    //         cartData[itemId] = 1;
    //     }
    //     setCartItems(cartData);
    //     // add the api call in front end to update the cart data to database

    //     if (user) {
    //         try {

    //             const token = await getToken()

    //             await axios.post('/api/cart/add', { cartData }, { headers: { Authorization: `Bearer ${token}` } })

    //             toast.success('item is added to cart')
    //         } catch (error) {
    //             toast.error(error.message)
    //         }
    //     }

    // }

    // const updateCartQuantity = async (itemId, quantity) => {

    //     let cartData = structuredClone(cartItems);
    //     if (quantity === 0) {
    //         delete cartData[itemId];
    //     } else {
    //         cartData[itemId] = quantity;
    //     }
    //     setCartItems(cartData);
    //     if (user) {
    //         try {

    //             const token = await getToken()

    //             // Current (incorrect) - using product/add endpoint for cart update:
    //             await axios.post('/api/cart/update', { cartData }, {
    //                 headers: { Authorization: `Bearer ${token}` }
    //             });

    //             // // Should be:
    //             // await axios.post('/api/cart/update', { cartData }, { 
    //             //   headers: { Authorization: `Bearer ${token}` } 
    //             // });

    //             toast.success('Cart Item Updated')
    //         } catch (error) {
    //             toast.error(error.message)
    //         }
    //     }

    //     toast.success('Item is Added to Your Cart')
    // }

    // const getCartCount = () => {
    //     let totalCount = 0;
    //     for (const items in cartItems) {
    //         if (cartItems[items] > 0) {
    //             totalCount += cartItems[items];
    //         }
    //     }
    //     return totalCount;
    // }

    // const getCartAmount = () => {
    //     let totalAmount = 0;
    //     for (const items in cartItems) {
    //         let itemInfo = products.find((product) => product._id === items);
    //         if (cartItems[items] > 0) {
    //             totalAmount += itemInfo.offerPrice * cartItems[items];
    //         }
    //     }
    //     return Math.floor(totalAmount * 100) / 100;
    // }

    useEffect(() => {
        fetchProductData()
    }, [])


    // useEffect(() => {
    //     if (user) {

    //         fetchUserData()
    //     }
    // }, [user])


const handleSearch = () => {
    if (!searchQuery.trim()) {
        setSearchResults([]);
        return;
    }
    // your search logic continues here...

        const results = products.filter(product =>
            product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description?.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setSearchResults(results);
    }

    useEffect(() => {
        handleSearch();
    }, [searchQuery, products]);

    const value = {

     //   user, getToken,
       currency, router,
        //isSeller, setIsSeller,
        //userData, fetchUserData,

        products, fetchProductData,
        //cartItems, setCartItems,
        //addToCart, updateCartQuantity,
        //getCartCount, getCartAmount,
        searchQuery, setSearchQuery,
        searchResults,
     //   handleTrackOrder, //added the values
       // orderData, isLoadingOrder, orderError,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

