import { URL_BACKEND } from "../enviroments/enviroment"

export const getServices = async () => {
    try {
        const response = await fetch(URL_BACKEND)
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        return error
    }
}