/*

import axios from 'axios'
const URL_API = 'http://localhost:5555/api/prompt'

post e retorno 

export const makeRequest = async (message) =>{
    const {data} await axios.post(URL_API, message) 
    return data 
}

*/



/*

import axios from 'axios';

const URL_API = 'http://localhost:5000/api/prompt';

export const makeRequest = async (message) => {
    try {
        const { data } = await axios.post(URL_API, message);
        return data;
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
};
*/




// Arquivo: makeRequest.js

import axios from 'axios';

const URL_API = "http://localhost:5000/api/prompt";

export const makeRequest = async (message) => {
    console.log(message);
    try {
        const { data } = await axios.post(URL_API, message);
        return data;
    } catch (error) {
        console.error("Error making request:", error);
        throw error; // Re-throw the error to handle it at a higher level if necessary
    }
};

