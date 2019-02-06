import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | con', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:con');
    assert.ok(route);
  });
});
