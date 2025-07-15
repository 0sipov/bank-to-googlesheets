require('dotenv').config();
const axios = require('axios');

const token = process.env.MONOBANK_TOKEN;

async function getClientInfo() {
  try {
    const response = await axios.get('https://api.monobank.ua/personal/client-info', {
      headers: {
        'X-Token': token
      }
    });

    console.log(response.data);
  } catch (error) {
    console.error('Помилка:', error.response?.data || error.message);
  }
}

getClientInfo();