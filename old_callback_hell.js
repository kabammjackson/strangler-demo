'use strict';

function CallbackHellController(options) {
    const self = this;

    self.options = options;
}

CallbackHellController.prototype.getAThing = function (callback) {
    return callback(null);
};


CallbackHellController.prototype.statement = function (callback) {
    console.log('From the dark past');
};

module.exports = CallbackHellController;