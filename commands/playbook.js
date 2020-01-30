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

    let inventoryPath = '/host' + path.resolve(process.cwd(), inventory); // transforming path of the files in host to the path in VM's shared folder
    let filePath = '/host' + path.resolve(process.cwd(), file);

    // Inside ansible vm, run:
    // $ ansible-playbook <file> -i inventory

}
