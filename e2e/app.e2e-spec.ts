import { InquisivPage } from './app.po';

describe('inquisiv App', function() {
  let page: InquisivPage;

  beforeEach(() => {
    page = new InquisivPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
