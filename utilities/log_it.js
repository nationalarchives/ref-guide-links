const { table } = require('table');
const chalk = require('chalk');


module.exports = log_it = (results, test_reference, variables) => {

    process.stdout.write('\033c');

    print_variable_extraction_table(test_reference, variables);

    print_results(results, variables)

};

const print_variable_extraction_table = (test_reference, variables) => {
    console.log(`\nGiven ${test_reference} reference, these ${chalk.blue.bold('variables')} were extracted:`);

    const variable_extraction = [
        ['Extracted letter code', 'Extracted series', 'Full reference'],
        [variables.letter_code, variables.series, variables.reference]
    ];

    const variable_extraction_table = table(variable_extraction, {});

    console.log(variable_extraction_table);
};

const print_results =  (results, variables) => {
    console.log(`For these variables, the ${chalk.blue.bold('results')} were:`);

    const variable_extraction = [
        [' ', 'Number of guides', 'Guides'],
        [variables.letter_code, Object.keys(results.guides_for_letter_code).length, Object.values(results.guides_for_letter_code).join(',\n')],
        [variables.series, Object.keys(results.guides_for_series).length, Object.values(results.guides_for_series).join(',\n')],
        [variables.reference, Object.keys(results.guides_for_reference).length, Object.values(results.guides_for_reference).join(',\n')],

    ];

    const variable_extraction_table = table(variable_extraction, {});

    console.log(variable_extraction_table, '\n');
};
