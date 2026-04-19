import React, { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
};

const SITE_NAME = '微晖医疗';
const SITE_URL = 'https://www.weihuiyiliao.com';
const DEFAULT_IMAGE = `${SITE_URL}/assets/logo.png`;

function buildHashRouteUrl(path: string) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const hashPath = cleanPath === '/' ? '/' : cleanPath;
  return `${SITE_URL}/#${hashPath}`;
}

function upsertMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  const selector = `meta[${attr}="${name}"]`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertCanonical(url: string) {
  let element = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', url);
}

const Seo: React.FC<SeoProps> = ({ title, description, keywords, path = '/' }) => {
  useEffect(() => {
    const fullUrl = buildHashRouteUrl(path);
    const fullTitle = `${title} | ${SITE_NAME}`;

    document.title = fullTitle;

    upsertMeta('description', description);

    if (keywords) {
      upsertMeta('keywords', keywords);
    }

    upsertMeta('og:type', 'website', 'property');
    upsertMeta('og:site_name', SITE_NAME, 'property');
    upsertMeta('og:title', fullTitle, 'property');
    upsertMeta('og:description', description, 'property');
    upsertMeta('og:url', fullUrl, 'property');
    upsertMeta('og:image', DEFAULT_IMAGE, 'property');
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', fullTitle);
    upsertMeta('twitter:description', description);
    upsertMeta('twitter:image', DEFAULT_IMAGE);
    upsertCanonical(fullUrl);
  }, [description, keywords, path, title]);

  return null;
};

export default Seo;
