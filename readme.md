<img src="docs/tracie.svg" height="60" alt="Node Fetch"/>

# Tracie (client)

<a href="https://packagephobia.now.sh/result?p=tracie"><img src="https://badgen.net/packagephobia/install/tracie" alt="Current version"></a> <a href="https://www.npmjs.com/package/tracie"><img src="https://img.shields.io/npm/v/tracie" alt="Install size"></a>

Tracie is a self-hosted event tracking service written in NodeJS. This is a client library, used to create events and send them to your hosted server. Supported on either **NodeJS** and **browser** enviroment. _Note: Usage on NodeJS and browser are slightly different_

<!-- TOC -->
- [Install and Usage on Browser](#install-and-usage-on-browser)
- [Install and Usage on Webpack (ES6, ...)](#install-and-usage-on-webpack-es5-es6-)
<!-- /TOC -->

## Install and Usage on Browser

On browser, embed the `tracie` distribution script, and use

### 1. Embed distribution script

```js
// Add tracie client
<script src="path/dist/index.min.js" />

// Or using jsdelivr (you can replace `latest` with a version)
<script src="https://cdn.jsdelivr.net/npm/tracie@latest/dist/index.min.js" />
```
### 2. Usage

```js

// Initate connection
tc.initiate({ server: "{serverpath}" });

// send event
tc("event_name");

document.onload = function() {
    tc("hits")
}
```

## Install and Usage on Webpack (es5, es6, ...)


You'll need to install `tracie` and [node-fetch](https://www.npmjs.com/package/node-fetch)

### 1. Install

```sh
# using yarn
$ yarn add tracie node-fetch

# using npm
$ npm install tracie node-fetch --save
```

### 2. Usage
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