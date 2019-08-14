/**
 * Timer
 * @param callback {function}
 * @constructor
 */
function Timer(callback) {
    this.callback = callback;
    this._timeoutRef = null;
    this.isActive = false;
}

Timer.prototype.start = function(ms) {
    if (typeof this.callback === 'function') {
        this.isActive = true;
        var self = this;
        this._timeoutRef = setTimeout(function () {
            self.isActive = false;
            self.callback();
        }, ms);
    }
};

Timer.prototype.interrupt = function() {
    clearInterval(this._timeoutRef);
    this.isActive = false;
};
