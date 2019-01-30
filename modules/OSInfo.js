var os = require('os');
var colors = require('colors');

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
    console.log('Uptime: ~', convertTime(uptime).green);
    console.log('User name:', userInfo.username.yellow);
    console.log('Home dir:', userInfo.homedir.bgWhite.black);
}

function convertTime(time) {
    time = Number(time);
    var day = Math.floor(time / (86400));
    var hour = Math.floor((time % 86400) / 3600);
    var minute = Math.floor((time % 3600) / 60);
    var second = Math.floor((time % 360) % 60);

    var displayDay = day > 0 ? day + 'd. ' : '';
    var displayHour = hour > 0 ? hour + 'h. ' : '';
    var displayMinute = minute > 0 ? minute + 'min. ' : '';
    var displaySecond = second > 0 ? second + 'sec.' : '';

    return displayDay + displayHour + displayMinute + displaySecond;

}

exports.print = getOSInfo;