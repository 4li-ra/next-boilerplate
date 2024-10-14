export const API_ENDPOINTS = {
    user: {
        add: '/user/add',
        all: '/users',
        get: (id: number) => `/user/${id}`,
        edit: (id: number) => `/user/edit/${id}`,
    },
};
