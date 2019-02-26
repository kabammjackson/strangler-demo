'use strict';

function strangle (witness, victim) {
    const victimProps = Object.getPrototypeOf(victim);

    for (const prop of Object.keys(victimProps)) {
        if (typeof victimProps[prop] === 'function' && typeof witness.prototype[prop] === 'undefined') {
            witness.prototype[prop] = victimProps[prop];
        }
    }
}

module.exports = {
    strangle
};