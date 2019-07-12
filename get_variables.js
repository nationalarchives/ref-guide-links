const is_legacy_sub_class_series = require('./is_legacy_sub_class_series');
const extract_vars_from_standard_series = require('./extract_vars_from_standard_reference');
const extract_vars_from_legacy_subclass_series = require('./extract_vars_from_legacy_subclass_series');

module.exports = get_variables = (reference) => {

    if (is_legacy_sub_class_series(reference)) {
        console.log(`${reference} is a legacy sub-class series`);
        return extract_vars_from_legacy_subclass_series(reference);
    }

    console.log(`${reference} is a standard series`);
    return extract_vars_from_standard_series(reference);
};
