import '../sample.component';
import { expect, fixture } from '@open-wc/testing';

describe('sample-component', () => {
  let el: Element;

  beforeEach(async () => {
    el = await fixture('<sample-component></sample-component>');
  });

  it('should create component', () => {
    expect(el).to.exist;
  });
});
