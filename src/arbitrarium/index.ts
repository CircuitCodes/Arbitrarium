import { Controller } from "../interface/controller";
import {loadFromArray} from "./loader"
import { Router } from "express";
import {Application} from "express-serve-static-core";

export default class Arbitrarium {
    private router: Router;
    private app: Application;

    /**
     * The entry point of Arbitrarium.
     * @param app The Express application
     * @param router The Express {@link https://expressjs.com/en/guide/routing.html|router}.
     */
    constructor(router: Router, app: Application) {
        this.router = router;
        this.app = app;

        this.app.use(this.router);
    }

    /**
     * Loads the controllers from an array.
     * @param controllers Array of controllers.
     */
    public loadControllers(controllers: Controller[]) {
        loadFromArray(controllers, this.router)
    }

    public start(port: number) {
        this.app.listen(port);
    }
}