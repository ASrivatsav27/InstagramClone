import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000/auth',
    withCredentials: true
})



export async function register(username, email, password) {
    try { 
        const response = await api.post(
            '/register',
            {
                username,
                email,
                password
            })
        return response.data
    } catch (err) {
        throw err
    }
}

export async function login (username,password) {
    try {
        const response = await api.post(
            '/login',
            {
                username,
                password
            });
        return response.data
    } catch (err) {
        throw err
    }
}


export async function getMe() {
    try {
        const reponse = await api.get('get-me', {
            username,
            email,
            bio,
            profileImage
        })
        return response.data
    } catch (err) {
        throw err
    }
}


