import { Ng2Tools.IoPage } from './app.po';

describe('ng2-tools.io App', () => {
  let page: Ng2Tools.IoPage;

  beforeEach(() => {
    page = new Ng2Tools.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
