const fetch = require('node-fetch');
const fsLibrary = require('fs');
const { logging } = require("./utils");

const { env } = require('process');

require('dotenv').config();

const profile = process.env.SERRE_PROFILE_ID;

logging(profile);




// REAL TREATMENT STARTS HERE

(async () => {

	try {
		let response = await fetch(`https://serre.grainesdesol.fr/wp-json/buddypress/v1/members/?search=${profile}`, {
			method: 'GET'
		});

		logging(response);

		const profileInfo = await response.text();

		logging(profileInfo);

		
	}
	catch (error) {
		console.error(error);
	}

})();