import { env } from 'cloudflare:workers';
import { AnalyticsConsent } from '@/components/analytics-consent';
import { validMeasurementId } from '@/lib/analytics.mjs';

export function GoogleAnalytics() {
  const id = (env as { GA_MEASUREMENT_ID?: string }).GA_MEASUREMENT_ID;
  if (!id || !validMeasurementId(id)) return null;
  return <AnalyticsConsent measurementId={id} />;
}
