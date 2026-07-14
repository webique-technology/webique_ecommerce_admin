export const AUTH = {
    SUPER_ADMIN: "super_admin",
    STORE_ADMIN: "store_admin",

    ROUTES: {
        SUPER_ADMIN_LOGIN: "/super-admin/login",
        STORE_ADMIN_LOGIN: "/store-admin/login",
        DASHBOARD: "/dashboard",
    },

    API: {
        super_admin: {
            login: "/admin/login",
            logout: "/admin/logout",
            profile: "/admin/profile",
        },

        store_admin: {
            login: "/store/login",
            logout: "/store/logout",
            profile: "/store/profile",
        },
    },
};