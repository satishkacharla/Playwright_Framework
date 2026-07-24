import dotenv from 'dotenv';

const testEnv = process.env.TEST_ENV || "qa";

console.log("Before loading");
console.log("TEST_ENV =", process.env.TEST_ENV);
console.log("ENV =", process.env.ENV);

const result = dotenv.config({
    path: `.env.${testEnv}`,
    override: true
})

if (result.error) {
    throw result.error;
}

console.log("After loading");
console.log("TEST_ENV =", process.env.TEST_ENV);
console.log("ENV =", process.env.ENV);

export class Env {
    static readonly environment = testEnv;
    static readonly baseUrl = process.env.BASE_URL!;

    static readonly adminEmail = process.env.ADMIN_EMAIL!;
    static readonly adminPassword = process.env.ADMIN_PASSWORD!;

    static readonly customerEmail = process.env.CUSTOMER_EMAIL!;
    static readonly customerPassword = process.env.CUSTOMER_PASSWORD!;

}