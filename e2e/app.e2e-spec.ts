import { FbNgDeployPage } from './app.po';

describe('fb-ng-deploy App', function() {
  let page: FbNgDeployPage;

  beforeEach(() => {
    page = new FbNgDeployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
