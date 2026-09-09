export const CONSENT_KEY = 'vantage-analytics-consent';
export const validMeasurementId = (value) => typeof value === 'string' && /^G-[A-Z0-9]+$/.test(value);

export function createAnalytics(win, doc, id) {
  let started = false;
  let allowed = false;
  const disabledKey = `ga-disable-${id}`;
  function gtag() { win.dataLayer.push(arguments); }
  function grant() {
    if (!validMeasurementId(id)) return;
    allowed = true;
    win[disabledKey] = false;
    if (started) return;
    started = true;
    win.dataLayer = win.dataLayer || [];
    win.gtag = gtag;
    gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    gtag('js', new Date());
    gtag('config', id, { allow_google_signals: false, allow_ad_personalization_signals: false, cookie_flags: 'SameSite=Lax;Secure' });
    const script = doc.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    script.id = 'vantage-google-tag';
    doc.head.appendChild(script);
  }
  function deny() {
    allowed = false;
    win[disabledKey] = true;
    // Removing the loaded script does not stop its timers. Reload after revocation.
    if (started) {
      for (const item of doc.cookie.split(';')) {
        const name = item.split('=')[0].trim();
        if (name !== '_ga' && !name.startsWith('_ga_')) continue;
        const expired = `${name}=; Max-Age=0; Path=/; SameSite=Lax; Secure`;
        doc.cookie = expired;
        const parts = win.location.hostname.split('.');
        for (let i = 0; i < parts.length - 1; i++) doc.cookie = `${expired}; Domain=.${parts.slice(i).join('.')}`;
      }
      win.location.reload();
    }
  }
  function trackSection(href, placement) {
    const sections = { '#approach': 'approach', '#consulting': 'offer', '#los-angeles': 'los_angeles' };
    if (!allowed || !sections[href]) return;
    gtag('event', 'select_content', { content_type: 'site_section', item_id: sections[href], link_placement: placement === 'hero' ? 'hero' : 'navigation' });
  }
  return { grant, deny, trackSection };
}
