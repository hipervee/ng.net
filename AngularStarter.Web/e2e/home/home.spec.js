"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Home page', function () {
    beforeAll(function (done) {
        protractor_1.browser.get('/')
            .then(done);
    });
    it('should have image', function () {
        protractor_1.browser.sleep(1000);
        var ng2Img = protractor_1.element(protractor_1.by.css('img'));
        expect(ng2Img.isDisplayed()).toBeTruthy();
    });
});
//# sourceMappingURL=home.spec.js.map