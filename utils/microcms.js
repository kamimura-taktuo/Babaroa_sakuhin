const { createClient } = require('microcms-js-sdk');
require('dotenv').config();
const {
  Hwlkh7zsv3NQTyceA44qLqRecQ1ocae1NRGi,
  test1024
} = process.env;
export const client = createClient({
  serviceDomain: test1024,
  apiKey: Hwlkh7zsv3NQTyceA44qLqRecQ1ocae1NRGi,
});