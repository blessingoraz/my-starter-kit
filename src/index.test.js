import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('First test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('Index.js', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h2 = window.document.getElementsByTagName('h2')[0];
      expect(h2.innerHTML).to.equal('Hello world');
      done();
      window.close();
    });
  });
})
