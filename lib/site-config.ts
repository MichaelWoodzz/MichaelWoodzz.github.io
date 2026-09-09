const defaultSiteUrl = 'https://vantage.upgradevillage.chatgpt.site';

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl).replace(/\/$/, '');
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const googleAnalyticsId = 'G-0M2T6CT2BN';

export function publicAsset(path: string) {
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
