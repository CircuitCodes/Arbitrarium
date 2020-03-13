# Arbitrarium
An asynchronous and lightweight controller framework for TypeScript. Currently only supports [Express.js](https://expressjs.com/).

## Installation
```
npm install arbitrarium
```
or `yarn install arbitrarium`.

## How to use
### Quickstart
```ts
import Arbitrarium from "arbitrarium";
import express from "express";
import {Router} from "express";

const router = new Router();
const arbitrarium = new Arbitrarium(router, express);

arbitrarium.loadControllers([HelloController]).start(8080);
```

```ts
import {Controller, Methods} from "arbitrarium";
import {Request, Response} from "express";

export class HelloController extends Controller {
    path: "/";
    methods: Methods.GET;

    async execute(req: Request, res: Response) {
        res.send("Hello world");
    }
}
```

## License
Arbitrarium is released under the permissive [MIT license](https://github.com/CircuitCodes/Arbitrarium/blob/master/LICENSE.md).