const execSync = require('child_process').execSync;

exports.command = 'install-server';
exports.desc = 'Provision and configure the servers for hw2';
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

    // create webserver vm (192.168.44.77): `bakerx run webserver ...`
    // run ansible playbook: `ansible-playbook ../cm/playbook.yml -i ../cm/inventory.ini`


    // hint: 
    // console.log(execSync('bakerx run ....').toString());
}
