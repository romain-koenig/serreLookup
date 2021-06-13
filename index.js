const fetch = require('node-fetch');
const fsLibrary = require('fs');
const { logging } = require("./utils");

const { env } = require('process');

require('dotenv').config();

const profile = process.env.SERRE_PROFILE_ID;

logging(profile);