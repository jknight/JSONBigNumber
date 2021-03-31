
describe("Test JSONBigNumbers", function () {
    "use strict";

    var bigInt = "1234567890123456789";
    var smallInt = "654";
    var intObjJSON = '{"big":' + bigInt + ',"small":' + smallInt + "}";
    var bigDecimal = "1234567890.123456789";
    var smallDecimal = "789.012";
    var decimalObjJSON = '{"big":' + bigDecimal + ',"small":' + smallDecimal + "}";
    var booleanTrue = "true";
    var booleanFalse = "false";
    var nullString = "null";
    var letterString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberString = "1234567890";
    var allTheThingsJSON = '{"array":[' + intObjJSON + "," + decimalObjJSON  + '],"boolTrue":' + booleanTrue +
        ',"boolFalse":' + booleanFalse + ',"nullStr":' + nullString +
        ',"letterStr":"' + letterString + '","numberStr":"' + numberString + '"}';

    describe("when passed JSON with " + bigInt + " and " + smallInt, function () {

        it("0x/BigNumber does not convert to exponents at 20+ digits", function () { 
            var obj = JSONBigNumber.parse('{"big": 10000000000.00000000001}');
            expect(obj.big.toString()).toEqual("10000000000.00000000001");
        });

        it("JSONBigNumbers can parse to javascript object with BigNumber and back to the same JSON", function () {
            var obj = JSONBigNumber.parse(intObjJSON);

            expect(obj.big.toString()).toEqual(bigInt);
            expect(obj.small.toString()).toEqual(smallInt);
            expect(BigNumber.isBigNumber(obj.big)).toBeTruthy();
            expect(BigNumber.isBigNumber(obj.small)).toBeTruthy();

            var json = JSONBigNumber.stringify(obj);

            expect(json).toEqual(intObjJSON);
        });

        it("default JSON can't parse to javascript object and back to the same JSON", function () {
            var obj = JSON.parse(intObjJSON);

            expect(obj.big.toString()).not.toEqual(bigInt);
            expect(obj.small.toString()).toEqual(smallInt);
            expect(typeof obj.big).toEqual("number");
            expect(typeof obj.small).toEqual("number");

            var json = JSON.stringify(obj);

            expect(json).not.toEqual(intObjJSON);
        });

    });

    describe("when passed JSON with " + bigDecimal + " and " + smallDecimal, function () {

        it("JSONBigNumbers can parse to javascript object with BigNumber and back to the same JSON", function () {
            var obj = JSONBigNumber.parse(decimalObjJSON);

            expect(obj.big.toString()).toEqual(bigDecimal);
            expect(obj.small.toString()).toEqual(smallDecimal);
            expect(BigNumber.isBigNumber(obj.big)).toBeTruthy();
            expect(BigNumber.isBigNumber(obj.small)).toBeTruthy();

            var json = JSONBigNumber.stringify(obj);

            expect(json).toEqual(decimalObjJSON);
        });

        it("default JSON can't parse to javascript object and back to the same JSON", function () {
            var obj = JSON.parse(decimalObjJSON);

            expect(obj.big.toString()).not.toEqual(bigDecimal);
            expect(obj.small.toString()).toEqual(smallDecimal);
            expect(typeof obj.big).toEqual("number");
            expect(typeof obj.small).toEqual("number");

            var json = JSON.stringify(obj);

            expect(json).not.toEqual(decimalObjJSON);
        });

    });

    describe("when passed JSON with all DataTypes", function () {

        it("JSONBigNumbers can parse to javascript object with BigNumber and back to the same JSON", function () {
            var obj = JSONBigNumber.parse(allTheThingsJSON);

            expect(obj.array[0].big.toString()).toEqual(bigInt);
            expect(obj.array[0].small.toString()).toEqual(smallInt);
            expect(obj.array[1].big.toString()).toEqual(bigDecimal);
            expect(obj.array[1].small.toString()).toEqual(smallDecimal);
            expect(obj.boolTrue).toBeTruthy();
            expect(obj.boolFalse).toBeFalsy();
            expect(obj.nullStr).toBeNull();
            expect(obj.letterStr).toEqual(letterString);
            expect(obj.numberStr).toEqual(numberString);

            var json = JSONBigNumber.stringify(obj);

            expect(json).toEqual(allTheThingsJSON);
        });
    });

    describe("when passed JSON with a badly formed number", function () {
        var badlyFormedNumber = "12345t6";
        var input = '{"badNumber":' + badlyFormedNumber + "}";

        it("JSONBigNumber will throw an error", function () {
            expect(function () {
                JSONBigNumber.parse(input);
            }).toThrow();
        });
    });

    it("when JSONBigNumber stringify a NaN BigNumber the JSON string is null", function () {
        var bigNumberNaN = new BigNumber(NaN);

        var json = JSONBigNumber.stringify(bigNumberNaN);

        expect(json).toEqual(nullString);
    });

    it("when JSONBigNumber stringify a Infinite BigNumber the JSON string is null", function () {
        var bigNumberInfinity = new BigNumber(Infinity);

        var json = JSONBigNumber.stringify(bigNumberInfinity);

        expect(json).toEqual(nullString);
    });

    it("when JSONBigNumber stringify a -Infinite BigNumber the JSON string is null", function () {
        var bigNumberNegInfinity = new BigNumber(-Infinity);

        var json = JSONBigNumber.stringify(bigNumberNegInfinity);

        expect(json).toEqual(nullString);
    });
});