# Tracie (client)

Tracie is an event tracking library.

## Install and Usage

### Via Browser

```js

// Add tracie client
<script src="path/dist/index.min.js" />

// Or using jsdelivr, replace 0.0.3 with current version
<script src="https://cdn.jsdelivr.net/npm/tracie@latest" />

tc.initiate({ server: "{serverpath}" });
tc("event_name");
```

### Via Webpack (es5, es6, ...)

1. Install `tracie` using `yarn` or `npm`

```sh
# using yarn
$ yarn add tracie

# using npm
$ npm install tracie --save
```

2. Usage

```js

// Import using require
const Tracie = require("tracie");

// Or import in ES6
import Tracie from "tracie";

const tc = new Tracie({
    server: "{serverpath}"
})

// Add an event
tc.add("event_name");
```