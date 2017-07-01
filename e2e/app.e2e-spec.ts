import { WattodoPage } from './app.po';

describe('wattodo App', function() {
  let page: WattodoPage;

  beforeEach(() => {
    page = new WattodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
