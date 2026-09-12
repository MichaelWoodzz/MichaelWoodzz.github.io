import type { AnchorHTMLAttributes } from 'react';

type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

/** A normal document link for the static GitHub Pages build. */
export function SiteLink({ href, children, ...props }: SiteLinkProps) {
  return <a href={href} {...props}>{children}</a>;
}
