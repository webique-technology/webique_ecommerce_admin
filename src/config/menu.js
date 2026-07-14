import {
    MdOutlineDashboard,
    MdOutlineShoppingCart,
} from "react-icons/md";

import {
    FiGrid,
    FiBox,
    FiUsers,
    FiSettings,
    FiTag,
} from "react-icons/fi";

import { BsGraphUpArrow, BsShop } from "react-icons/bs";

export const SIDEBAR_MENU = {
    super_admin: [
        {
            name: "Dashboard",
            icon: MdOutlineDashboard,
            path: "/dashboard",
        },
        {
            name: "Stores",
            icon: BsShop,
            path: "/stores",
        },
        {
            name: "Store Admins",
            icon: FiUsers,
            path: "/store-admins",
        },
        {
            name: "Categories",
            icon: FiGrid,
            path: "/categories",
        },
        {
            name: "Attributes",
            icon: FiTag,
            path: "/attributes",
        },
        {
            name: "Products",
            icon: FiBox,
            path: "/products",
        },
        {
            name: "Orders",
            icon: MdOutlineShoppingCart,
            path: "/orders",
        },
        {
            name: "Customers",
            icon: FiUsers,
            path: "/customers",
        },
        {
            name: "Reports",
            icon: BsGraphUpArrow,
            path: "/reports",
        },
        {
            name: "Settings",
            icon: FiSettings,
            path: "/settings",
        },
    ],

    store_admin: [
        {
            name: "Dashboard",
            icon: MdOutlineDashboard,
            path: "/dashboard",
        },
        // {
        //     name: "Categories",
        //     icon: FiGrid,
        //     path: "/categories",
        // },
        // {
        //     name: "Attributes",
        //     icon: FiTag,
        //     path: "/attributes",
        // },
        {
            name: "Products",
            icon: FiBox,
            path: "/products",
        },
        {
            name: "Orders",
            icon: MdOutlineShoppingCart,
            path: "/orders",
        },
        {
            name: "Customers",
            icon: FiUsers,
            path: "/customers",
        },
        {
            name: "Reports",
            icon: BsGraphUpArrow,
            path: "/reports",
        },
        {
            name: "Settings",
            icon: FiSettings,
            path: "/settings",
        },
    ],
};

// export default menu;