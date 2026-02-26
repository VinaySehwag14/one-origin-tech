import { MetadataRoute } from 'next';

const NEXT_PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://oneorigintech.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/about',
        '/contact',
        '/services',
        '/services/api-systems',
        '/services/cloud-native-ai',
        '/services/web-architecture',
        '/work',
        '/work/ai-workspace',
        '/work/saheeba',
        '/work/vaanra',
    ].map((route) => ({
        url: `${NEXT_PUBLIC_SITE_URL}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Legal pages with lower priority
    const legalRoutes = [
        '/legal/privacy',
        '/legal/terms',
    ].map((route) => ({
        url: `${NEXT_PUBLIC_SITE_URL}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'yearly' as const,
        priority: 0.3,
    }));

    return [...routes, ...legalRoutes];
}
