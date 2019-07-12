const is_legacy_sub_class_series = require('./is_legacy_sub_class_series');
const extract_vars_from_standard_series = require('./extract_vars_from_standard_reference');
const extract_vars_from_legacy_subclass_series = require('./extract_vars_from_legacy_subclass_series');

module.exports = get_variables = (reference) => {

    if (is_legacy_sub_class_series(reference)) {
        const result = extract_vars_from_legacy_subclass_series(reference);
    }

    return extract_vars_from_standard_series(reference);
};
