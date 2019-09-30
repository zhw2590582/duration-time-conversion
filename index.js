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

  function fixMs(ms) {
    ms = String(ms);
    if (ms.length === 1) {
      return Number(ms + "00");
    } else if (ms.length === 2) {
      return Number(ms + "0");
    } else {
      return Number(ms);
    }
  }

  return {
    d2t: function(duration) {
      if (checkDuration(duration)) {
        const date = new Date(null);
        const s = Number(String(duration).split(".")[0]) || 0;
        const ms = Number(String(duration).split(".")[1]) || 0;
        date.setSeconds(s);
        date.setMilliseconds(ms.padEnd(3, 0));
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
