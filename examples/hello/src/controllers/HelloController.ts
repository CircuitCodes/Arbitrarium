import { Controller, Methods } from "../../../../src";
import {Request, Response} from "express";

export class HelloController extends Controller {
    path = "/";
    method = "get";

    async execute(req: Request, res: Response) {
        res.send("Hello, user")
    }
}