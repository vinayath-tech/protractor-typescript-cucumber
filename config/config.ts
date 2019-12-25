import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";
const host = process.env.HUB_HOST;

export const config: Config = {

    //directConnect: true,
    //SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "http://automationpractice.com/index.php",
    seleniumAddress: "http://"+host+":4444/wd/hub",
    multiCapabilities: [{
        // chromeOptions: {
        //     args: ["--headless", "--window-size=1920,1080", "--no-sandbox"]
        // },
        browserName: "chrome",
        chromeOptions: {
            w3c: false
        }
       // driver: "../../drivers/chromedriver.exe"
     }
    // {
    //     browserName: "firefox",
    //     // 'moz:firefoxOptions': {
    //     //     'args': ['--safe-mode']
    //     //   },
    //     // maxInstances: 1,
    //     //driver: "../../drivers/geckodriver"
    // }
    ],

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature",
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
