const assert = require('assert');
const DT = require('./index');

assert.strictEqual(DT.d2t(0), '00:00:00.000');
assert.strictEqual(DT.d2t(0.1), '00:00:00.100');
assert.strictEqual(DT.d2t(0.01), '00:00:00.010');
assert.strictEqual(DT.d2t(0.001), '00:00:00.001');
assert.strictEqual(DT.d2t(0.0001), '00:00:00.000');
assert.strictEqual(DT.d2t(0.00001), '00:00:00.000');

assert.strictEqual(DT.d2t(0.011), '00:00:00.011');
assert.strictEqual(DT.d2t(0.111), '00:00:00.111');
assert.strictEqual(DT.d2t(0.100), '00:00:00.100');
assert.strictEqual(DT.d2t(0.110), '00:00:00.110');
assert.strictEqual(DT.d2t(0.000), '00:00:00.000');

assert.strictEqual(DT.d2t(1.000), '00:00:01.000');
assert.strictEqual(DT.d2t(1.100), '00:00:01.100');
assert.strictEqual(DT.d2t(1.110), '00:00:01.110');
assert.strictEqual(DT.d2t(1.111), '00:00:01.111');

assert.strictEqual(DT.d2t(61.000), '00:01:01.000');
assert.strictEqual(DT.d2t(61.100), '00:01:01.100');
assert.strictEqual(DT.d2t(61.110), '00:01:01.110');
assert.strictEqual(DT.d2t(61.111), '00:01:01.111');

assert.strictEqual(DT.d2t(3661.000), '01:01:01.000');
assert.strictEqual(DT.d2t(3661.100), '01:01:01.100');
assert.strictEqual(DT.d2t(3661.110), '01:01:01.110');
assert.strictEqual(DT.d2t(3661.111), '01:01:01.111');

assert.strictEqual(DT.t2d('00:00:00'), 0);
assert.strictEqual(DT.t2d('00:00:00.1'), 0.1);
assert.strictEqual(DT.t2d('00:00:00.01'), 0.01);
assert.strictEqual(DT.t2d('00:00:00.001'), 0.001);
assert.strictEqual(DT.t2d('00:00:00.001'), 0.001);
assert.strictEqual(DT.t2d('00:00:00.011'), 0.011);
assert.strictEqual(DT.t2d('00:00:00.111'), 0.111);
assert.strictEqual(DT.t2d('00:00:00.100'), 0.100);
assert.strictEqual(DT.t2d('00:00:00.110'), 0.110);
assert.strictEqual(DT.t2d('00:00:00.000'), 0.000);

assert.strictEqual(DT.t2d('00:00:01.000'), 1.000);
assert.strictEqual(DT.t2d('00:00:01.100'), 1.100);
assert.strictEqual(DT.t2d('00:00:01.110'), 1.110);
assert.strictEqual(DT.t2d('00:00:01.111'), 1.111);

assert.strictEqual(DT.t2d('00:01:01.000'), 61.000);
assert.strictEqual(DT.t2d('00:01:01.100'), 61.100);
assert.strictEqual(DT.t2d('00:01:01.110'), 61.110);
assert.strictEqual(DT.t2d('00:01:01.111'), 61.111);

assert.strictEqual(DT.t2d('01:01:01.000'), 3661.000);
assert.strictEqual(DT.t2d('01:01:01.100'), 3661.100);
assert.strictEqual(DT.t2d('01:01:01.110'), 3661.110);
assert.strictEqual(DT.t2d('01:01:01.111'), 3661.111);

assert.strictEqual(DT.d2t(3661), '01:01:01.000');
assert.strictEqual(DT.t2d('01:01:01'), 3661.000);

assert.strictEqual(DT.t2d('01'), 1.000);
assert.strictEqual(DT.t2d('01:01'), 61.000);
assert.strictEqual(DT.t2d('01:01:01'), 3661.000);