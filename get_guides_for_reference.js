module.exports = get_guides_for_reference = (letter_code, series, reference, data) => {

    let reference_found;

    const letter_code_found = data[letter_code] || false;

    if (letter_code_found) {

        const records_found = data[letter_code]['records'] || false;

        if (records_found) {

            const series_found = records_found[series] || false;

            if (series_found) {
                if (series_found['records']) {
                    reference_found = series_found['records'][reference] || false;
                }
            }

            if (reference_found) {
                return reference_found.guides || {};
            }
        }
    }

    return {};

};
