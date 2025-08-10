
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import uiAutomation from '../PageObject/UIAutomation';
test = new uiAutomation
Given('i visit homepage', () => {
    cy.visit('/');
});

Then('i validate client side delay', ()=>{
    test.ClientSideDelayTest()

});

Then('i validate dynamic table', ()=>{
    test.DynamicTableTest()

});


Then('i validate sample app', ()=>{
    test.SampleAppTest()

});

Then('i validate shadow dom', ()=>{
    test.ShadowDom()

});

Then('i validate alert texts', ()=>{
    test.AlertsTest()

});

Then('i validate file upload', ()=>{
    test.fileUpload()
});
