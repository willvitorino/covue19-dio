import Axios from 'axios'

export const getInfos = (country) => {
    return new Promise((resolve, reject) => {
        Axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${country}`).then((res) => {
            resolve(res.data)
        }).catch(err => {
        console.error(err)
        reject(err)
    })
})
}