import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"

class HousesService {

    async getHouses() {
        const res = await api.get('api/houses')
        console.log('here is le house', res.data)
        const newHouses = res.data.map(housePOJO => new House(housePOJO))
        AppState.houses = newHouses
        // console.log(AppState.houses)
    }

    async createHouse(houseFormData) {
        const res = await api.post('api/houses', houseFormData)
        console.log('Created House', res.data)
        const newHouse = new House(res.data)
        AppState.houses.push(newHouse)
        AppState.emit('houses')

    }

    async removeHouse(houseId) {
        const res = await api.delete(`api/houses/${houseId}`)
        console.log('deleting house')
        const houseIndex = AppState.houses.findIndex(house => house.id == houseId)
        if (houseIndex == -1) {
            return
        }
        AppState.houses.splice(houseIndex, 1)
        AppState.emit('houses')

    }

}

export const housesService = new HousesService()
