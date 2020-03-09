import Axios from 'axios'

const URL = 'https://9ltuksinxi.execute-api.us-east-1.amazonaws.com/beta/aws';
const AUTH = {
    headers: {
        'x-api-key': 'qz73Zqjgza9ygdotoNpDn4HtbzzmLnOt3V5EbrqT',
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // crossDomain: true
    }
}

export default {
    textToAudio(data) {
        console.log(AUTH)
        return Axios.post(`${URL}/text-to-audio-with-polly`, data, AUTH);
    }
}