const assert = require('assert');
const get_fragments = require('../get_fragments');


describe('The fragments should be extracted correctly from', function () {
    describe('simple references', function () {

        const simple_references = [
            { reference: "ADM 104/140", expected_letter_code: "ADM", expected_series: "ADM 104" }
        ];

        simple_references.forEach(i => {
            it(`${i.reference} should be extracted correctly`, function () {

                const { letter_code, series, reference } = get_fragments(i.reference);

                assert.equal(letter_code, i.expected_letter_code, `Found a problem with ${i.reference}`);
                assert.equal(series, i.expected_series, `Found a problem with ${i.reference}`);

            });

        });
    });
});
