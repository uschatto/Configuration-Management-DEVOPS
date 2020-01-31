const child = require('child_process');
const chalk = require('chalk');

const scpSync = require('../lib/scp');
const sshSync = require('../lib/ssh');

exports.command = 'setup';
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

    console.log(chalk.blueBright('Provisioning configuration server...'));
    let result = child.spawnSync(`bakerx`, `run ansible-srv bionic --ip 192.168.33.10 --sync`.split(' '), {stdio: 'inherit'} );
    if( result.error ) { process.exit( result.status ); }

    console.log(chalk.blueBright('Provisioning mattermost server...'));
    result = child.spawnSync(`bakerx`, `run mattermost-srv bionic --ip 192.168.33.80`.split(' '), {stdio: 'inherit'} );
    if( result.error ) { process.exit( result.status ); }

    // Enable this code if you are having trouble with sync folders. Don't forget to update the path used below.
    // console.log(chalk.blueBright('Copying init script...'));
    // result = scpSync ('cm/server-init.sh', 'vagrant@192.168.33.10:server-init.sh');
    // if( result.error ) { process.exit( result.status ); }

    console.log(chalk.blueBright('Running init script...'));
    result = sshSync('/bakerx/cm/server-init.sh', 'vagrant@192.168.33.10');
    if( result.error ) { process.exit( result.status ); }



}
