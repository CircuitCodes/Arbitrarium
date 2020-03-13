import { Controller } from "../interface/controller";
import { Router } from "express";
import fs from "fs";

/**
 * Loads controllers from an array of controllers
 * @param controllers Array of controllers
 * @param router The Express {@link https://expressjs.com/en/4x/api.html#router|router}.
 */
export function loadFromArray(controllers: Controller[], router: Router) {
    for(const controller of controllers) {
        (router as any)[controller.method](controller.path, controller.execute)
    }
}