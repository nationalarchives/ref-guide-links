const assert = require('assert');
const get_variables = require('../get_variables');


describe('The variables should be extracted correctly from', function () {
    describe('Simple references', function () {

        const simple_references = [
            { reference: "ADM 104/140", expected_letter_code: "ADM", expected_series: "ADM 104" }
        ];

        simple_references.forEach(i => {
            it(`${i.reference} should be extracted correctly`, function () {

                const { letter_code, series, reference } = get_variables(i.reference);

                assert.equal(letter_code, i.expected_letter_code, `Found a problem with ${i.reference}`);
                assert.equal(series, i.expected_series, `Found a problem with ${i.reference}`);

            });

        });
    });
});
