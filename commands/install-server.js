const execSync = require('child_process').execSync;

exports.command = 'install-server';
exports.desc = 'Provision and configure the configuration server';
exports.builder = yargs => {
    yargs.options({

    });
};


exports.handler = async argv => {
    const { } = argv;

    (async () => {

        await run();

    })();

};

async function run() {

    console.log('Hi there!'); // delete this...

    // create ansible server vm (192.168.44.76): `bakerx run ansible ...`
    // enable shared folder in the vm so you can access the files in this repo from inside the vm.
    // install ansible on the vm
}
