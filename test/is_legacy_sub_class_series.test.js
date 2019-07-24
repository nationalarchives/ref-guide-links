const assert = require('assert');
const is_legacy_sub_class_series = require('../is_legacy_sub_class_series');


describe('In order to correctly parse reference types', function () {

    describe('"legacy sub-classes" should be identified correctly', function () {

        const legacy_sub_class_series = [
            'CP 25/',
            'IR 130/',
            'CP 25/2/6/8',
            'CP 25/2',
            'CP 25/1/284/18',
            'IR 121/1',
            'PRO 31/8/140B'
        ];

        legacy_sub_class_series.forEach(i => {

            it(`${i} should be identified as a 'legacy sub class series'`, function () {

                const result = is_legacy_sub_class_series(i);

                assert.equal(result, true, `Found a problem with ${i}`);

            });
        });

    });

    describe('"normal" references should not be identified as legacy sub-classes', function () {

        const legacy_sub_class_series = ['ADM 140/'];

        legacy_sub_class_series.forEach(i => {

            it(`${i} should NOT be identified as a 'legacy sub class series'`, function () {

                const result = is_legacy_sub_class_series(i);

                assert.equal(result, false, `Found a problem with ${i}`);

            });
        });

    });
});
