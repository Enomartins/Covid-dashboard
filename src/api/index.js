import axios from 'axios'

const url = 'https://covidnigeria.herokuapp.com/api'

export const fetchData = () => axios.get(url)