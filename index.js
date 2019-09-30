(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : ((global = global || self), (global.DT = factory()));
})(this, function() {
  function checkTime(time) {
    return /^(\d+):([0-5][0-9]):([0-5][0-9])(\.\d{3})?$/.test(time);
  }

  function checkDuration(duration) {
    duration = String(duration);
    return /^(\d+)(\.\d{1,3})?$/.test(duration);
  }

  return {
    d2t: function(duration) {
      if (checkDuration(duration)) {
        var date = new Date(null);
        var arr = String(duration).split(".");
        var s = arr[0];
        var ms = arr[1] ? arr[1].padEnd(3, 0) : 0;
        date.setSeconds(Number(s));
        date.setMilliseconds(Number(ms));
        return date.toISOString().substr(11, 12);
      } else {
        throw new Error("The format of the duration is incorrect: " + duration);
      }
    },
    t2d: function(time) {
      if (checkTime(time)) {
        var arr = time.split(".")[0].split(":");
        var ms = Number(time.split(".")[1]) / 1000;
        var h = Number(arr[0]) * 3600;
        var m = Number(arr[1]) * 60;
        var s = Number(arr[2]);
        return h + m + s + ms;
      } else {
        throw new Error("The format of the time is incorrect: " + time);
      }
    }
  };
});
