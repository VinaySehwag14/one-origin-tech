import { MetadataRoute } from 'next';

const NEXT_PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://oneorigintech.com';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/private/'],
        },
        sitemap: `${NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
    };
}
