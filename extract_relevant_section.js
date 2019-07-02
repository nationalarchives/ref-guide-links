const log_it = require('./log_it');

module.exports = extract_relevant_section = (key, data) => {

    const result = data.records[key] || false;

    log_it(key, result);

    return result;
};
