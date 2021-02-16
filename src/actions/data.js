import * as api from '../api'

export const getData = () => async (dispatch) => {
    try {
        const {data} = await api.fetchData()

        dispatch({
            type: 'GET_DATA',
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}