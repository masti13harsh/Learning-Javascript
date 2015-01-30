describe("Hello World", function() {
	it("says hello", function() {
		expect(helloWorld()).toEqual("Hello world!");
	});
});

describe("Hello World", function() {
	it("says world", function() {
		expect(helloWorld()).toContain("world");
	});
});
