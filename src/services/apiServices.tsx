import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie'

interface RequestParams {
    [key: string]: string | number | boolean;
}

export const BASE_URL = "https://quizobackend.onrender.com/api";

export const logout = () => {
    Cookies.remove("authToken")
    window.location.href = '/auth'
}

export const getAuthToken = () => {
    return Cookies.get("authToken");
}

const handleAuthError = (error: AxiosError) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
        logout();
    }
};

export const postData = async <T,>(
    endpoint: string,
    data?: T,
    params: RequestParams = {},
    requiresAuth: boolean = true
) => {
    try {
        const headers: Record<string, string> = {};

        if (requiresAuth) {
            const token = getAuthToken();
            if (!token) {
                throw new Error("Authentication required");
            }
            headers.Authorization = `Bearer ${token}`;
        }

        const response = await axios.post(
            `${BASE_URL}/${endpoint}`,
            data,
            {
                params,
                headers,
            }
        );
        return response;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            handleAuthError(error);
        }
        throw error;
    }
};

export const getData = async (endpoint: string, params: RequestParams = {}) => {
    try {
        const headers: Record<string, string> = {};

        const token = getAuthToken();
        if (!token) {
            throw new Error("Authentication required");
        }
        headers.Authorization = `Bearer ${token}`;

        const response = await axios.get(`${BASE_URL}/${endpoint}`, {
            headers,
            params,
        });

        return response;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            handleAuthError(error);
        }
        throw error;
    }

};
