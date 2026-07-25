import fs from "fs";
import dotenv from "dotenv";

const testEnv = process.env.TEST_ENV || "qa";
const envFile = `.env.${testEnv}`;

console.log("Before loading");
console.log("TEST_ENV =", process.env.TEST_ENV);

if (fs.existsSync(envFile)) {
    console.log(`Loading ${envFile}`);

    dotenv.config({
        path: envFile,
        override: false,
    });
} else {
    console.log(`${envFile} not found. Using Jenkins environment variables.`);
}

console.log("After loading");
console.log("BASE_URL =", process.env.BASE_URL);

export class Env {

    static readonly environment = testEnv;

    static readonly baseUrl = process.env.BASE_URL!;

    static readonly adminEmail = process.env.ADMIN_EMAIL!;
    static readonly adminPassword = process.env.ADMIN_PASSWORD!;

    static readonly customerEmail = process.env.CUSTOMER_EMAIL!;
    static readonly customerPassword = process.env.CUSTOMER_PASSWORD!;
}