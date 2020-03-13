import { Methods } from "../other/methodType";
import { Request, Response } from "express";

export abstract class Controller {
    public path: string;
    public method: Methods;

    /**
     * Executes the controller logic
     * @param req The Express {@link https://expressjs.com/en/5x/api.html#req|Request} object.
     * @param res The Express {@link https://expressjs.com/en/5x/api.html#res|Response} object.
     */
    public abstract async execute(req: Request, res: Response): Promise<void>;
}