import { URL_BACKEND } from "../enviroments/enviroment"

export const getServices = async (token) => {
    try {
        const response = await fetch(`${URL_BACKEND}/api/services`,{
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'authorization': token
            }
        })
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        return error
    }
}

export const postService = async (token, data) => {
    try {
        const response = await fetch(`${URL_BACKEND}/api/services`,{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'authorization': token
            },
            body: JSON.stringify(data)
        })
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        return error
    }
}

export const putService = async (token,id, data) => {
    try {
        const response = await fetch(`${URL_BACKEND}/api/services/${id}`,{
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
                'authorization': token
            },
            body: JSON.stringify(data)
        })
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        return error
    }
}

export const deleteService = async (token,id) => {
    try {
        const response = await fetch(`${URL_BACKEND}/api/services/${id}`,{
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
                'authorization': token
            }
        })
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        return error
    }
}




