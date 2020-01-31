const child = require('child_process');
const chalk = require('chalk');

const scpSync = require('../lib/scp');
const sshSync = require('../lib/ssh');

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

    console.log(chalk.greenBright('Installing configuration server!'));

    console.log(chalk.blue('Provisioning configuration server...'));
    let result = child.spawnSync(`bakerx`, `run ansible-srv bionic --ip 192.168.33.10`.split(' '), {stdio: 'inherit'} );
    if( result.error ) { process.exit( result.status ); }

    console.log(chalk.blue('Copying init script...'));
    result = scpSync ('cm/server-init.sh', 'vagrant@192.168.33.10:server-init.sh');
    if( result.error ) { process.exit( result.status ); }

    console.log(chalk.blue('Running init script...'));
    result = sshSync('./server-init.sh', 'vagrant@192.168.33.10');
    if( result.error ) { process.exit( result.status ); }

}
