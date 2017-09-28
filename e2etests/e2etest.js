const expect = require("chai").expect;

describe("Progress Bar App", () => {
  it("Should load with the right title", () => {
    browser.url("http://localhost:3000/");
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql("Progress Bar App");
  });

  it("Should allow me to update a Progress bar", () => {
    browser.url("http://localhost:3000/");

    browser.waitUntil(
      function() {
        return browser.elements(".bar__text").value.length > 0;
      },
      2000,
      "expected bars are rendered but not"
    );

    const initialValue = browser.getText(".bar__text")[0];
    browser.click(".Button");
    const actual = browser.getText(".bar__text")[0];

    expect(actual !== initialValue).to.be.true;
  });
});
