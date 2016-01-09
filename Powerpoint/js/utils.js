(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    var Utils;
    (function (Utils_1) {
        var Utils = (function () {
            function Utils() {
            }
            // generates a new Universally unique identify (UUID) 
            // the UUID is used to identify each of the slides
            Utils.uuid = function () {
                /*jshint bitwise:false */
                var i, random;
                var uuid = '';
                for (i = 0; i < 32; i++) {
                    random = Math.random() * 16 | 0;
                    if (i === 8 || i === 12 || i === 16 || i === 20) {
                        uuid += '-';
                    }
                    uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
                        .toString(16);
                }
                return uuid;
            };
            // stores data using the localStorage API
            Utils.store = function (namespace, data) {
                if (data) {
                    return localStorage.setItem(namespace, JSON.stringify(data));
                }
                var store = localStorage.getItem(namespace);
                return (store && JSON.parse(store)) || [];
            };
            return Utils;
        })();
        Utils_1.Utils = Utils;
    })(Utils || (Utils = {}));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Utils;
});
//# sourceMappingURL=utils.js.map