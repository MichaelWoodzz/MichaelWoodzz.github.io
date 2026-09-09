'use client';

import { useEffect, useRef, useSyncExternalStore } from 'react';
import { Button } from '@/components/ui/button';
import { CONSENT_KEY, createAnalytics } from '@/lib/analytics.mjs';

type Choice = 'granted' | 'denied';
type ConsentSnapshot = Choice | 'unset' | 'loading';
const CONSENT_EVENT = 'vantage-consent-change';

function readConsent(): ConsentSnapshot {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === 'granted' || value === 'denied' ? value : 'unset';
  } catch {
    return 'unset';
  }
}

function subscribeConsent(onChange: () => void) {
  window.addEventListener('storage', onChange);
  window.addEventListener(CONSENT_EVENT, onChange);
  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener(CONSENT_EVENT, onChange);
  };
}

export function AnalyticsConsent({ measurementId }: { measurementId: string }) {
  const analytics = useRef<ReturnType<typeof createAnalytics> | null>(null);
  const consent = useSyncExternalStore(subscribeConsent, readConsent, () => 'loading');

  useEffect(() => {
    const tracker = analytics.current ?? createAnalytics(window, document, measurementId);
    analytics.current = tracker;
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest('a') : null;
      if (!target) return;
      const placement = target.classList.contains('floating-apply') ? 'floating' : target.closest('.hero') ? 'hero' : 'navigation';
      tracker.trackSection(target.getAttribute('href'), placement);
    };
    const onSubmit = (event: Event) => {
      if (event.target instanceof HTMLFormElement && event.target.classList.contains('inquiry')) tracker.trackApplication();
    };
    document.addEventListener('click', onClick);
    document.addEventListener('submit', onSubmit);
    return () => { document.removeEventListener('click', onClick); document.removeEventListener('submit', onSubmit); };
  }, [measurementId]);

  useEffect(() => {
    if (consent === 'granted') analytics.current?.grant();
    if (consent === 'denied') analytics.current?.deny();
  }, [consent]);

  function choose(choice: Choice) {
    try { localStorage.setItem(CONSENT_KEY, choice); } catch { /* Choice still applies to this page. */ }
    if (choice === 'granted') analytics.current?.grant();
    else analytics.current?.deny();
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }
  if (consent === 'loading') return null;
  return <>
    <div className="analytics-preferences"><Button variant="link" onClick={() => { try { localStorage.removeItem(CONSENT_KEY); } catch { /* Show the controls for this page. */ } window.dispatchEvent(new Event(CONSENT_EVENT)); }}>Cookie preferences</Button></div>
    {consent === 'unset' && <section className="analytics-notice" aria-label="Analytics cookie preferences">
      <div><h2>A little insight helps us improve.</h2><p>With your permission, we use Google Analytics cookies to understand visits and which parts of Vantage interest people. You can change your choice in Cookie preferences. <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google’s privacy policy</a></p></div>
      <div className="analytics-actions"><Button variant="outline" onClick={() => choose('denied')}>Decline analytics</Button><Button onClick={() => choose('granted')}>Allow analytics</Button></div>
    </section>}
  </>;
}
