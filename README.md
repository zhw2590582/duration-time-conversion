# duration-time-conversion

> Duration and time format conversion

## Install

Install with `npm`

```bash
$ npm install duration-time-conversion
```

Or install with `yarn`

```bash
$ yarn add duration-time-conversion
```

```js
import DT from "duration-time-conversion.js";
```

Or umd builds are also available

```html
<script src="path/to/duration-time-conversion.js"></script>
```

Will expose the global variable to `window.DT`.

## Usage

```js
// Duration to time
DT.d2t(3661.111) === "01:01:01.111";

// Time to Duration
DT.d2t("01:01:01.111") === 3661.111;
```

## License

MIT © [Harvey Zack](https://sleepy.im/)
