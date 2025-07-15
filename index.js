require('dotenv').config();
const axios = require('axios');

const token = process.env.MONOBANK_TOKEN;

const takeClientInfo = (response) => {console.log(response.data); return};
const takeBalanceInfo = (response, bankAccountPath) => {console.log(response.data.jars.filter(jar => jar.title === bankAccountPath)); return};

const BuisnesPath = "На бізнес"

async function getClientInfo(bankAccountPath) {
  try {
    const response = await axios.get('https://api.monobank.ua/personal/client-info', {
      headers: {
        'X-Token': token
      }
    });

    if (bankAccountPath) {takeBalanceInfo(response, bankAccountPath)}
    else {takeClientInfo(response)}

  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

getClientInfo(BuisnesPath)