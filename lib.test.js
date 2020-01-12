const lib= require("./lib.js");

describe("strip function", () => { 
    test("strip not empty string \" Hello world! JS   is the best \"", () => { 
        expect(lib.strip(" Hello world! JS   is the best ")).toBe("Hello world! JS is the best"); 
    })

    test("strip empty string", () => { 
        expect(lib.strip("")).toBe(""); 
    }) 

    test("strip non string value", () => { 
        expect(lib.strip(1)).toBe(""); 
    }) 
})

describe("sort function", () => {
    test("sort not empty string \"one two three four five six\"", () => {
        expect(lib.sort("one two three four five six")).toBe("three four five one two six")
    })

    test("sort empty string", () => { 
        expect(lib.sort("")).toBe(""); 
    }) 

    test("sort non string value", () => { 
        expect(lib.sort(1)).toBe(""); 
    }) 
})

describe("reverse function", () => {
    test("reverse non sempty string \"I am master Yoda\"", () => {
        expect(lib.reverse("I am master Yoda")).toBe("Yoda master am I")
    })

    test("reverse empty string", () => { 
        expect(lib.reverse("")).toBe(""); 
    }) 

    test("reverse non string value", () => { 
        expect(lib.reverse(1)).toBe(""); 
    })
})