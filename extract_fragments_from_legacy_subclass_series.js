module.exports = extract_fragments_from_legacy_sub_class_series = (reference) => {

    let letter_code_match = reference.match(/^(\w*)(\s)?/);
    let series_match = reference.match(/(\w+\s\d+\/\d+)/);

    return {
        letter_code: (Array.isArray(letter_code_match)) ? letter_code_match[1] : false,
        series: (Array.isArray(series_match)) ? series_match[1] : false,
        reference: reference
    }
}
