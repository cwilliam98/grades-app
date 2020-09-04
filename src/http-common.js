import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://grades-api-cwilliam.herokuapp.com:35652',
  headers: {
    'Content-type': 'application/json',
  },
});
