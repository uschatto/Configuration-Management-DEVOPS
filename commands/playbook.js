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

    // Inside ansible vm, run:
    // $ ansible-playbook <file> -i inventory
    
    // you can find the root of this repository mounted in `/bakerx` in the VM.
    // So so path to the playbook.yml file in the vm will be `/bakerx/cm/playbook.yml`
}
