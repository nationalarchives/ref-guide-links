const assert = require('assert');
const is_legacy_sub_class_series = require('../is_legacy_sub_class_series');


describe('Identifying legacy sub-classes', function () {

    describe('Legacy sub-classes should be identified correctly', function () {

        const legacy_sub_class_series = ['CP 25/', 'IR 130/', 'CP 25/2/6/8'];

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
