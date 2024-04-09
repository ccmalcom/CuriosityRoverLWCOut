const appName = 'c:marsRoverSearchWrapper';
const componentName = 'c:missionControl';
const lightningEndpoint = 'https://nasaroverimages-lwc-dev-ed.develop.my.site.com';
const targetElement = document.querySelector("[data-lightning-out]");
const componentAttributes = {};

$Lightning.use(appName, () => {
    $Lightning.createComponent(componentName, componentAttributes, targetElement, (cmp) => {
        console.log('Component created');
    });
}, lightningEndpoint);