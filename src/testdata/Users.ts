import { Env } from "../config/env";
import { User } from "../models/user";


export class Users {
    static readonly admin = new User(Env.adminEmail, Env.adminPassword);
    static readonly customer = new User(Env.customerEmail, Env.customerPassword);
}