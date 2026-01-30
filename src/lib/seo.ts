export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  noindex?: boolean;
  nofollow?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter?: string;
    github?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Burjasot Llars',
  description: 'Descripcion del sitio web de Burjasot Llars',
  url: 'https://burjasotllars.com',
  ogImage: '/og-image.png',
  links: {
    twitter: '',
    github: '',
  },
};

export function getPageTitle(pageTitle?: string): string {
  if (!pageTitle) return siteConfig.name;
  return `${pageTitle} | ${siteConfig.name}`;
}

export function getCanonicalUrl(path: string): string {
  const baseUrl = siteConfig.url.endsWith('/')
    ? siteConfig.url.slice(0, -1)
    : siteConfig.url;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
}
