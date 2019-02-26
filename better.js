'user strict';

const strangler = require('./strangler');
const cbHell = require('./old_callback_hell');

const cbHellInstance = new cbHell();

function Better(options) {
    const self = this;
}

Better.prototype.statement = function() {
    console.log('A better way');
};

strangler.strangle(Better, cbHellInstance);

module.exports = Better;