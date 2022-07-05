import { URL_BACKEND } from "../enviroments/enviroment"

export const getAllServices = async () => {
    try {
        const response = await fetch(`${URL_BACKEND}/api/services`)
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const getAServicesFiltered = async (category) => {
    try {
        const response = await fetch(`${URL_BACKEND}/api/services/${category}`)
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        throw error
    }
}


export const postService = async (token, data) => {

    try {
        const response = await fetch(`${URL_BACKEND}/api/services`,{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(data)
        })
        const json = await response.json()
        return json

    } catch (error) {
        console.error(error)
        throw error
    }
}

export const putService = async (token,id, data) => {
    try {
        const response = await fetch(`${URL_BACKEND}/api/services/${id}`,{
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(data)
        })

        const json = await response.json()
        return json

    } catch (error) {
        console.error(error)
        throw error
    }
}

export const deleteService = async (token,id) => {

    try {
        const response = await fetch(`${URL_BACKEND}/api/services/${id}`,{
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        throw error
    }
}




