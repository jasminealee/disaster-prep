import { DisasterPrepPage } from './app.po';

describe('disaster-prep App', () => {
  let page: DisasterPrepPage;

  beforeEach(() => {
    page = new DisasterPrepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
