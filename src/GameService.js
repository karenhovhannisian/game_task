import axios from 'axios';
import {API_URL} from "./constants";

export default class GameService {
    static getGameData() {
        return axios.get(`${API_URL}/api/game`)
    }

    static move(value) {
        return axios.post(`${API_URL}/api/game/move`, {index: value})
    }

    static reset() {
        return axios.post(`${API_URL}/api/game/reset`)
    }

    static newGame() {
        return axios.get(`${API_URL}/api/game/next`)
    }

    static getScore() {
        return axios.get(`${API_URL}/api/score`)
    }

    static resetScore() {
        return axios.post(`${API_URL}/api/score/reset`)
    }
}