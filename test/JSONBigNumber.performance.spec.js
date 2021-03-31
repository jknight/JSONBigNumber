describe("Performance of JSONBigNumber", function() {

    var iterations = 1000;
    var nonBigNumberJSONInput = '{"array":[{"big":123456789012345,"small":654},{"big":1234567890.12345,"small":789.012}],"boolTrue":true,"boolFalse":false,"nullStr":null,"letterStr":"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ","numberStr":"1234567890"}';
    var bigNumberJSONInput = '{"array":[{"big":1234567890123456789,"small":654},{"big":1234567890.123456789,"small":789.012}],"boolTrue":true,"boolFalse":false,"nullStr":null,"letterStr":"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ","numberStr":"1234567890"}';
    var reallyBigJSON = '{"id":"f5044932-bb67-4fbe-955e-9b6684048ba3","name":"LOAN SHIT","version":14,"timestamp":1486997547000,"who":"LoanAdminUser","description":"c50c4a06-1abe-4e2e-a322-b2b8c7792595","state":"DRAFT","singleFacility":true,"defaultFlag":false,"watchFlag":false,"applicableLaw":null,"initialDrawdownDate":"2017-02-08","firstIPDDate":"2017-02-14","forwardBump":true,"ipdDateRepeat":{"timeSpan":"Month","frequency":2},"initialDrawdownAmount":null,"dayCountBasisName":"Actual365Fixed","cashSweepFlag":false,"jurisdictionCode":null,"amortised":false,"facilityAmount":43210123456789876.54,"currencyCode":"CAD","maturityDate":"2019-02-01","debtFacilityId":"b79c6434-f5f3-4afe-b65c-c3a3f3569388","debtFacilityName":null,"terminationDate":null,"goodBusinessDayLocation":[{"id":"australia/sydney"}],"reportingDateOffset":{"id":"7d0beddc-5fc9-48d3-8558-a92ac52b6ceb","type":"OFFSET","fixedDaySameMonth":0,"ipdOffsetUnits":1,"ipdOffsetTimespan":"Day","ipdOffsetType":"BUSINESSDAYCONVENTION","loanScheduleEventType":"REPN","manualDates":[],"goodWorkingDay":false},"interestAccrualDateOffset":{"id":"fa6fb3a6-e3e1-40e0-b884-78072dc0a178","type":"OFFSET","fixedDaySameMonth":0,"ipdOffsetUnits":-2,"ipdOffsetTimespan":"Day","ipdOffsetType":"FIXED","loanScheduleEventType":"IACCD","manualDates":[],"goodWorkingDay":false},"customDateOffsets":[],"fxRateSetDateOffsets":[],"note":[],"extensionDateList":[],"sponsorContactList":[],"clientContact":null,"assetManagerContact":null,"loanAdminContact":null,"thirdParty":[{"company":[{"id":"c2bc3850-c2ba-5002-4703-c28cc286252e","person":[{"id":"04157561-c2a0-c39c-4ec3-b0c2a0c3b0c2","name":"Broadfield Court Team","role":"Loan Administrator"}],"name":"Broadfield Court LLP","role":"Asset Manager"}]}],"signingDate":"2017-02-01","loanLevelAccount":[],"propertyLoanAllocations":[{"id":"e1f76479-e9dc-45dc-ac39-de4bda8a75fe","propertyId":"c2bbc3a3-5273-c2b6-c299-45c39ac2b552","nsp":null,"nspReleasePricePercentage":null,"alaReleasePricePercentage":12,"availableSurplus":null,"allocatedLoanAmount":123123,"loanId":"f5044932-bb67-4fbe-955e-9b6684048ba3","currency":"AUD","dateAllocated":null}],"agencyLoanId":{"id":null,"date":null},"agencyRoles":[],"agencyDepartments":[],"agencyEntity":{"companyId":null,"name":"","date":null},"payInterestInAdvance":false,"tranche":[{"id":"0be8150d-2236-44b8-8762-712ee60ade3f","name":"Tranches","version":null,"rateSetDateOffsets":[],"lender":[{"id":"7f0cf56c-e9c0-40c4-8d2b-2bd5be582ad8","scheduleId":"103d6e19-cc61-4f52-98a2-58c3405bfe8c","accountId":[],"baseRateAccrualFrequency":0,"baseRateAccrualPeriod":0,"baseRateAccrualThreshold":null,"baseRateAccrualTimespan":null,"baseRateAccrualType":null,"baseRateIndexType":null,"contactId":"c3b613c3-9508-c290-1c4a-c389c284c396","defaultMargin":null,"defaultRateAccrualFrequency":0,"defaultRateAccrualPeriod":0,"defaultRateAccrualThreshold":0,"defaultRateAccrualTimespan":null,"defaultRateAccrualType":null,"defaultRateIndexType":null,"defaultFirstPeriodInterpolatedRate":null,"defaultWaterfallId":null,"deferredBalanceMargin":null,"deferredBalanceRateIndexType":null,"deferredBalanceRateIndexValue":null,"finalWaterfallId":null,"firstPeriodInterpolatedRate":null,"groupId":null,"lastPeriodInterpolatedRate":null,"loanAllocationAmount":null,"loanAllocationCurrencyCode":null,"principalBalance":123123,"margin":null,"name":"Europa Mezzanine Finance SARL","normalWaterfallId":null,"pikAccrualFrequency":0,"pikAccrualPeriod":0,"pikAccrualThreshold":null,"pikAccrualTimespan":null,"pikAccrualType":null,"pikIndexType":null,"pikFirstPeriodInterpolatedRate":null,"pikMargin":null,"unpaidDefaultInterestRateAccrualFrequency":null,"unpaidDefaultInterestRateAccrualPeriod":null,"unpaidDefaultInterestRateAccrualTimespan":null,"unpaidDefaultInterestRateAccrualType":null,"unpaidDefaultInterestRateIndexType":null,"unpaidDefaultInterestRateIndexValue":null,"unpaidDefaultInterestRateMargin":null,"unpaidInterestRateAccrualFrequency":null,"unpaidInterestRateAccrualPeriod":null,"unpaidInterestRateAccrualTimespan":null,"unpaidInterestRateAccrualType":null,"unpaidInterestRateIndexType":null,"unpaidInterestRateIndexValue":null,"unpaidInterestRateMargin":null,"skim":[]}],"borrower":[{"id":"0154e058-aaae-4f09-a08c-4d298def38ef","scheduleId":"16dac7f7-6d87-4558-8944-7182aa978270","accountId":[],"baseRateAccrualFrequency":0,"baseRateAccrualPeriod":0,"baseRateAccrualThreshold":null,"baseRateAccrualTimespan":null,"baseRateAccrualType":null,"baseRateIndexType":null,"contactId":"c2bc3850-c2ba-5002-4703-c28cc286252e","defaultMargin":null,"defaultRateAccrualFrequency":0,"defaultRateAccrualPeriod":0,"defaultRateAccrualThreshold":0,"defaultRateAccrualTimespan":null,"defaultRateAccrualType":null,"defaultRateIndexType":null,"defaultFirstPeriodInterpolatedRate":null,"defaultWaterfallId":null,"deferredBalanceMargin":null,"deferredBalanceRateIndexType":null,"deferredBalanceRateIndexValue":null,"finalWaterfallId":null,"firstPeriodInterpolatedRate":null,"groupId":null,"lastPeriodInterpolatedRate":null,"loanAllocationAmount":null,"loanAllocationCurrencyCode":null,"principalBalance":123123,"margin":null,"name":"Broadfield Court LLP","normalWaterfallId":null,"pikAccrualFrequency":0,"pikAccrualPeriod":0,"pikAccrualThreshold":null,"pikAccrualTimespan":null,"pikAccrualType":null,"pikIndexType":null,"pikFirstPeriodInterpolatedRate":null,"pikMargin":null,"unpaidDefaultInterestRateAccrualFrequency":null,"unpaidDefaultInterestRateAccrualPeriod":null,"unpaidDefaultInterestRateAccrualTimespan":null,"unpaidDefaultInterestRateAccrualType":null,"unpaidDefaultInterestRateIndexType":null,"unpaidDefaultInterestRateIndexValue":null,"unpaidDefaultInterestRateMargin":null,"unpaidInterestRateAccrualFrequency":null,"unpaidInterestRateAccrualPeriod":null,"unpaidInterestRateAccrualTimespan":null,"unpaidInterestRateAccrualType":null,"unpaidInterestRateIndexType":null,"unpaidInterestRateIndexValue":null,"unpaidInterestRateMargin":null,"contractualInterestHedging":{"caps":[],"floors":[]},"defaultInterestHedging":{"caps":[],"floors":[]},"pikInterestHedging":{"caps":[],"floors":[]}}],"payMechanismName":null,"facilityAmount":null,"currencyCode":null,"interestRateSwapFlag":false,"fxRateSwapFlag":false,"additionalDrawdownsPermitted":false,"additionalDrawdownAvailabilityEnd":null,"firstDrawdownDate":null,"firstDrawdownDateUnknown":false,"commitmentFee":{"applicable":false,"feeCalculationMethod":null,"feeValue":null,"feeCurrencyCode":null,"feeAccrualMethod":null,"feeFirstAccrualDate":null,"feeFrequency":0,"feeTimespan":null},"arrangementFee":{"applicable":false,"feeCalculationMethod":null,"feeValue":null,"feeCurrencyCode":null,"feeAccrualMethod":null,"feeFirstAccrualDate":null,"feeFrequency":0,"feeTimespan":null}}],"fee":[],"productType":"Capital Expenditure Loan","firstDrawdownDateUnknown":false}';

    it("time JSON no big numbers", function() {
        var start = performance.now();
        for(var i = 0; i < iterations; i++) {
            var obj = JSON.parse(nonBigNumberJSONInput);
            var jsonOutput = JSON.stringify(obj);
        }
        var end = performance.now();
        console.log("JSON (No big numbers) Total Time", (end - start));
        expect(jsonOutput).toEqual(nonBigNumberJSONInput);
    });

    it("time JSONBigNumber no big numbers", function() {
        var start = performance.now();
        for(var i = 0; i < iterations; i++) {
            var obj = JSONBigNumber.parse(nonBigNumberJSONInput);
            var jsonOutput = JSONBigNumber.stringify(obj);
        }
        var end = performance.now();
        console.log("JSONBigNumber (No big numbers) Total Time", (end - start));
        expect(jsonOutput).toEqual(nonBigNumberJSONInput);
    });

    it("time JSON with big numbers", function() {
        var start = performance.now();
        for(var i = 0; i < iterations; i++) {
            var obj = JSON.parse(bigNumberJSONInput);
            var jsonOutput = JSON.stringify(obj);
        }
        var end = performance.now();
        console.log("JSON (With big numbers) Total Time", (end - start));
        expect(jsonOutput).not.toEqual(bigNumberJSONInput);
    });

    it("time JSONBigNumber with big numbers", function() {
        var start = performance.now();
        for(var i = 0; i < iterations; i++) {
            var obj = JSONBigNumber.parse(bigNumberJSONInput);
            var jsonOutput = JSONBigNumber.stringify(obj);
        }
        var end = performance.now();
        console.log("JSONBigNumber (With big numbers) Total Time", (end - start));
        expect(jsonOutput).toEqual(bigNumberJSONInput);
    });

    it("time JSON with really long json with big numbers", function() {
        var start = performance.now();
        for(var i = 0; i < iterations; i++) {
            var obj = JSON.parse(reallyBigJSON);
            var jsonOutput = JSON.stringify(obj);
        }
        var end = performance.now();
        console.log("JSON (really long with big numbers) Total Time", (end - start));
        expect(jsonOutput).not.toEqual(reallyBigJSON);
    });

    it("time JSONBigNumber with really long json with big numbers", function() {
        var start = performance.now();
        for(var i = 0; i < iterations; i++) {
            var obj = JSONBigNumber.parse(reallyBigJSON);
            var jsonOutput = JSONBigNumber.stringify(obj);
        }
        var end = performance.now();
        console.log("JSONBigNumber (really long with big numbers) Total Time", (end - start));
        expect(jsonOutput).toEqual(reallyBigJSON);
    });
});