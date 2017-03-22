import { Ng2FormPage } from './app.po';

describe('ng2-form App', () => {
  let page: Ng2FormPage;

  beforeEach(() => {
    page = new Ng2FormPage();
  });

  it('should have a title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Ng2Form');
  });

  it('should display message saying app works', () => {
    expect(page.getParagraphText()).toEqual('app works!');
  });

  it('should to fill a form with valid values', () => {
    expect(page.toFillaForm()).toEqual('app works!');

    // page.toFillInputName();
    // return true;
  });

});
