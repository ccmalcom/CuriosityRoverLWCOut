const appName = 'c:marsRoverSearchWrapper';
const componentName = 'c:missionControl';
const lightningEndpoint = 'https://nasaroverimages-lwc-dev-ed.develop.my.salesforce.com';
const targetElement = document.querySelector("[data-lightning-out]");
const componentAttributes = {};
const token = '00Daj000004YoDN!AQEAQBhIh.mipPISSRANk9leldQb3hBX8BRnxfHz085C5vJLvsy5PH17PqVS5ORyl1ATEZmvsaBT8Sck3s0h.EXiENlCz2DB';

$Lightning.use(appName, () => {
    $Lightning.createComponent(componentName, componentAttributes, targetElement, (cmp) => {
        console.log('Component created');
    });
}, lightningEndpoint,
    token);
