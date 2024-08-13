(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : ((global = global || self), (global.DT = factory()));
})(this, function () {
  function checkTime(time) {
    return /^(\d+:)?([0-5][0-9]:)?([0-5][0-9])(\.\d{1,3})?$/.test(time);
  }

  function checkDuration(duration) {
    duration = String(duration);
    return /^(\d+)(\.\d{1,3})?$/.test(duration);
  }

  function padEnd(str, targetLength, padString) {
    if (str.length > targetLength) {
      return String(str);
    } else {
      targetLength = targetLength - str.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length);
      }
      return String(str) + padString.slice(0, targetLength);
    }
  }

  return {
    d2t: function (duration) {
      duration = parseFloat(Number(duration).toFixed(3));
      if (checkDuration(duration)) {
        var date = new Date(null);
        var arr = String(duration).split(".");
        var s = arr[0];
        var ms = arr[1] ? padEnd(arr[1], 3, "0") : 0;
        date.setSeconds(Number(s));
        date.setMilliseconds(Number(ms));
        return date.toISOString().substring(11, 23);
      } else {
        throw new Error("The format of the duration is incorrect: " + duration);
      }
    },
    t2d: function (time) {
      if (checkTime(time)) {
        var arr = time.split(".");
        var left = arr[0].split(":") || [];
        var right = padEnd(arr[1] || "0", 3, "0");
        var ms = Number(right) / 1000;

        var h = Number(left[left.length - 3] || 0) * 3600;
        var m = Number(left[left.length - 2] || 0) * 60;
        var s = Number(left[left.length - 1] || 0);
        return h + m + s + ms;
      } else {
        throw new Error("The format of the time is incorrect: " + time);
      }
    },
  };
});
