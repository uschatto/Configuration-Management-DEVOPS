const path = require('path');
const execSync = require('child_process').execSync;

exports.command = 'playbook <file> <inventory>';
exports.desc = 'Run provided playbook with given inventory';
exports.builder = yargs => {
    yargs.options({
    });
};


exports.handler = async argv => {
    const {file, inventory} = argv;

    (async () => {

        await run(file, inventory);

    })();

};

async function run(file, inventory) {

    // the paths should be from root of cm directory
    let inventoryPath = path.join('/bakerx/cm/', inventory); // transforming path of the files in host to the path in VM's shared folder
    let filePath = path.join('/bakerx/cm/', file);

    // Inside ansible vm, run:
    // $ ansible-playbook <file> -i inventory

}
