const execSync = require('child_process').execSync;

exports.command = 'provision';
exports.desc = 'Provision VM';
exports.builder = yargs => {
    yargs.options({
        ip: {
            describe: 'create host-only network and assign static ip address in NIC2 of VM',
            type: 'string'
        },
    });
};


exports.handler = async argv => {
    const {ip} = argv;

    (async () => {

        await run(ip);

    })();

};

async function run(ip) {

    console.log('Hi there!'); // delete this...

    // create web-srv vm
    // write to inventory file.

}
