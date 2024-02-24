import axios from "axios"

export default function useFetch() {
    function callApi(url, method) {
        return new Promise((resolve, reject) => {
            axios({ url: url, method: method }).then((resp) => {
                resolve(resp.data)
            }).catch((err) => {
                reject(err)
            })
        })
    }
    return [callApi]
}