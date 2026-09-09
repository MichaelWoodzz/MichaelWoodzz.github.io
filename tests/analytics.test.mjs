import test from 'node:test';
import assert from 'node:assert/strict';
import { createAnalytics, validMeasurementId } from '../lib/analytics.mjs';

function setup(id = 'G-TEST123') {
  const scripts = [];
  let reloads = 0;
  const win = { location: { hostname: 'vantage.example.com', reload: () => reloads++ } };
  const doc = { cookie: '', createElement: () => ({}), head: { appendChild: s => scripts.push(s) } };
  return { tracker: createAnalytics(win, doc, id), win, scripts, reloads: () => reloads };
}
test('does not load Google or record events before permission', () => {
  const s = setup(); s.tracker.trackSection('#services', 'hero'); s.tracker.deny();
  assert.equal(s.scripts.length, 0); assert.equal(s.win.dataLayer, undefined);
});
test('one tag and one automatic page-view configuration after repeated grants', () => {
  const s = setup(); s.tracker.grant(); s.tracker.grant();
  assert.equal(s.scripts.length, 1);
  const commands = s.win.dataLayer.map(v => [...v]);
  assert.equal(commands.filter(v => v[0] === 'config').length, 1);
  assert.equal(commands[0][2].ad_storage, 'denied');
  assert.equal(commands[2][2].allow_google_signals, false);
});
test('tracks only known section links and stops immediately on withdrawal', () => {
  const s = setup(); s.tracker.grant();
  s.tracker.trackSection('#services', 'hero');
  s.tracker.trackSection('mailto:private@example.com', 'navigation');
  const event = [...s.win.dataLayer.at(-1)];
  assert.equal(event[1], 'select_content'); assert.equal(event[2].item_id, 'services');
  const count = s.win.dataLayer.length;
  s.tracker.deny(); s.tracker.trackSection('#locations', 'navigation');
  assert.equal(s.win.dataLayer.length, count); assert.equal(s.win['ga-disable-G-TEST123'], true); assert.equal(s.reloads(), 1);
});
test('missing and invalid IDs never load a tag', () => {
  for (const id of ['', undefined, 'G-ABC<script>', 'UA-123']) {
    assert.equal(validMeasurementId(id), false);
    const s = setup(id === undefined ? '' : id); s.tracker.grant(); assert.equal(s.scripts.length, 0);
  }
});
