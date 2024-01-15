const { createClient } = require('microcms-js-sdk');
require('dotenv').config();
const {
  API_KEY,
  SERVICE_DOMAIN
} = process.env;
export const client = createClient({
  serviceDomain: test1024,
  apiKey: Hwlkh7zsv3NQTyceA44qLqRecQ1ocae1NRGi,
});