"use strict"

const ky = require("ky-universal")

module.exports = async (method, options) => {
	const request = await ky("https://hyskyapi.cc/apihandle.php", {
		searchParams: {
			req: method,
			...options
		}
	})

	let data
	try {
		data = await request.json()
	} catch (_) {
		console.log(_)
		throw new Error("Invalid data returned by the API.")
	}

	if (data === false) {
		throw new Error("Invalid data passed to the API.")
	}

	if (data.success === false) {
		throw new Error("An API error occurred.")
	}

	if (data.success) {
		data = Object.values(data)[1]
	}

	return data
}
