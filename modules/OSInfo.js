var os = require('os');
var colors = require('colors');
var convertTime = require('../modules/convertTime')

function getOSInfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:', type .grey);
    console.log('Release:', release .red);
    console.log('CPU model:', cpu .blue);
    console.log('Uptime: ~', convertTime.convert(uptime).green);
    console.log('User name:', userInfo.username.yellow);
    console.log('Home dir:', userInfo.homedir.bgWhite.black);
}

exports.print = getOSInfo;