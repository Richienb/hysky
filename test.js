const test = require("ava")
const hysky = require(".")

test("main", async t => {
	const data = await hysky("top")
	t.true(Array.isArray(data))
})
