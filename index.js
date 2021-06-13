const fetch = require('node-fetch');
const fsLibrary = require('fs');
const { logging } = require("./utils");

const { env } = require('process');

require('dotenv').config();

const profile = process.env.SERRE_PROFILE_ID;

//logging(profile);


// REAL TREATMENT STARTS HERE

(async () => {

	try {
		let response = await fetch(`https://serre.grainesdesol.fr/wp-json/buddypress/v1/members/?search=${profile}`, {
			method: 'GET'
		});

		//logging(response);

		const profileInfoJSON = await response.text();

		//logging(profileInfoJSON);

		const profileInfo = JSON.parse(profileInfoJSON);

		logging(profileInfo[0].xprofile.groups[1].fields[151].value.rendered);
	}
	catch (error) {
		console.error(error);
	}

})();