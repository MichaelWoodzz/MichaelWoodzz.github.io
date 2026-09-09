import { AnalyticsConsent } from '@/components/analytics-consent';
import { validMeasurementId } from '@/lib/analytics.mjs';
import { googleAnalyticsId } from '@/lib/site-config';

export function GoogleAnalytics() {
  const id = googleAnalyticsId;
  if (!id || !validMeasurementId(id)) return null;
  return <AnalyticsConsent measurementId={id} />;
}
