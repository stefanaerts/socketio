import { SocketioPage } from './app.po';

describe('socketio App', function() {
  let page: SocketioPage;

  beforeEach(() => {
    page = new SocketioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
