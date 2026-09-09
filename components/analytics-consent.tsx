'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { CONSENT_KEY, createAnalytics } from '@/lib/analytics.mjs';

type Choice = 'granted' | 'denied';
export function AnalyticsConsent({ measurementId }: { measurementId: string }) {
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const analytics = useRef<ReturnType<typeof createAnalytics> | null>(null);
  useEffect(() => {
    const tracker = analytics.current ?? createAnalytics(window, document, measurementId);
    analytics.current = tracker;
    let saved: string | null = null;
    try { saved = localStorage.getItem(CONSENT_KEY); } catch { /* Ask again when preferences cannot be stored. */ }
    if (saved === 'granted') tracker.grant();
    setVisible(saved !== 'granted' && saved !== 'denied');
    setReady(true);
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest('a') : null;
      if (!target) return;
      tracker.trackSection(target.getAttribute('href'), target.classList.contains('primary-link') ? 'hero' : 'navigation');
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key !== CONSENT_KEY) return;
      if (event.newValue === 'granted') tracker.grant();
      else tracker.deny();
      setVisible(event.newValue !== 'granted' && event.newValue !== 'denied');
    };
    document.addEventListener('click', onClick);
    window.addEventListener('storage', onStorage);
    return () => { document.removeEventListener('click', onClick); window.removeEventListener('storage', onStorage); };
  }, [measurementId]);

  function choose(choice: Choice) {
    try { localStorage.setItem(CONSENT_KEY, choice); } catch { /* Choice still applies to this page. */ }
    setVisible(false);
    if (choice === 'granted') analytics.current?.grant();
    else analytics.current?.deny();
  }
  if (!ready) return null;
  return <>
    <div className="analytics-preferences"><Button variant="link" onClick={() => setVisible(true)}>Cookie preferences</Button></div>
    {visible && <section className="analytics-notice" aria-label="Analytics cookie preferences">
      <div><h2>A little insight helps us improve.</h2><p>With your permission, we use Google Analytics cookies to understand visits and which parts of Vantage interest people. You can change your choice in Cookie preferences. <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google’s privacy policy</a></p></div>
      <div className="analytics-actions"><Button variant="outline" onClick={() => choose('denied')}>Decline analytics</Button><Button onClick={() => choose('granted')}>Allow analytics</Button></div>
    </section>}
  </>;
}
