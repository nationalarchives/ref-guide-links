const is_legacy_sub_class_series = require('./is_legacy_sub_class_series');
const extract_fragments_from_standard_series = require('./extract_fragments_from_standard_reference');
const extract_fragments_from_legacy_subclass_series = require('./extract_fragments_from_legacy_subclass_series');

module.exports = get_fragments = (reference) => {

    if (is_legacy_sub_class_series(reference)) {
        return extract_fragments_from_legacy_subclass_series(reference);
    }

    return extract_fragments_from_standard_series(reference);
};
