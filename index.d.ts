/**
A simplified interface for the HySky API.
@param method The [API method](https://github.com/Mlotov/HyskyAPI#working-with-the-api) to use.
@param options The options to pass to the API.
@example
```
const hysky = require("hysky");

(async () => {
	const topAuctions = await hysky("top");

	console.log(topAuctions);
})();
```
*/
declare function hysky<ReturnData = object | object[]>(method: string, options?: Record<string, string | number | boolean>): Promise<ReturnData>

export = hysky
