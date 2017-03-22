import { browser, by, element } from 'protractor';
// To-Do move all  values to config file

export class Ng2FormPage {
  public navigateTo() {
    return browser.get('/');
  }

  public getTitle() {
    return browser.getTitle();
  }

  public getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  public toFillaForm (): void {
    element(by.id('name')).sendKeys('My awsome name');
    element(by.id('surname')).sendKeys('My awsome surname');
    element(by.id('email')).sendKeys('email@email');
    element(by.id('email')).sendKeys('1Aqwerty');
    element(by.id('confirm')).sendKeys('1Aqwerty');
    element(by.css('app-reactive md-select')).click();

    element(by.id('name')).sendKeys('name');
    element(by.id('surname')).sendKeys('surname');
    element(by.id('email')).sendKeys('email@email');
    element(by.id('email')).sendKeys('1Aqwerty');
    element(by.id('confirm')).sendKeys('1Aqwerty');
  }
}
