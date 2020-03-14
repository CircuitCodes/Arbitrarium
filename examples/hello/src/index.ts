import Arbitrarium from "../../../src/index";
import express, {Router} from "express";
import {HelloController} from "./controllers/HelloController";

const router = Router();
const arbitrarium = new Arbitrarium(router, express());

arbitrarium.loadControllers([new HelloController]);
arbitrarium.start(8080);