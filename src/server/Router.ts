import * as express from "express";
import HttpError from "../error/HttpError";

export default abstract class Router {
    private _router: express.Router;

    constructor() {
        this._router = express.Router();
    }

    public get router() {
        return this._router;
    }

    abstract load();
}