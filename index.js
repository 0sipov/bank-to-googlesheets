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
    const balanceInfoForBuisnes = response.data.jars.filter(jar => jar.title === 'На бізнес')
    console.log(balanceInfoForBuisnes);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

getClientInfo()