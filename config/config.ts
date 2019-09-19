import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "http://automationpractice.com/index.php",

    capabilities: {
        chromeOptions: {
            args: ["--headless", "--window-size=1920,1080", "--no-sandbox"]
        },
        browserName: "chrome",
        driver: "../../drivers/chromedriver.exe"
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/checkout.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        strict: true,
        tags: "~@wip",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
