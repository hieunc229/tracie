# Tracie (client)

Tracie is an event tracking library.

## 1. Install

```sh
$ yarn add tracie
```

```js

// Browser
<script src="path/tracie.min.js" />

// ES6 import
import Tracie from "tracie";

Tracie.init({
    server: "/endpoint"
})

// Add an event
Tracie.add("signup", { params });

```