'use strict';

const Better = require('./better');

const ctrl = new Better();

ctrl.statement();
ctrl.getAThing(() => {
    console.log('but I can still use the old parts that have not yet been re-implemented')
});

