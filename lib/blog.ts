export const blogPosts = [
  {
    slug: 'how-to-build-a-social-circle-in-los-angeles',
    title: 'How to Build a Social Circle in Los Angeles From Scratch',
    description: 'A practical guide for men who want better friends, a fuller calendar, and a social life that creates natural opportunities to meet people in Los Angeles.',
    category: 'Social life',
    readingTime: '8 min read',
    published: 'September 11, 2026',
    publishedIso: '2026-09-11',
  },
  {
    slug: 'how-to-meet-people-in-los-angeles-without-dating-apps',
    title: 'How to Meet People in Los Angeles Without Dating Apps',
    description: 'How to choose the right environments, become a familiar face, start natural conversations, and build an offline dating life in Los Angeles.',
    category: 'Dating in Los Angeles',
    readingTime: '9 min read',
    published: 'September 11, 2026',
    publishedIso: '2026-09-11',
  },
  {
    slug: 'dating-profile-photo-guide-for-men',
    title: 'Dating Profile Photos for Men: A Complete, Honest Guide',
    description: 'Build a dating-profile photo set that looks current, confident, social, and unmistakably like you—without staged clichés or misleading edits.',
    category: 'Dating profiles',
    readingTime: '8 min read',
    published: 'September 11, 2026',
    publishedIso: '2026-09-11',
  },
  {
    slug: 'how-to-improve-your-appearance-for-dating',
    title: 'How to Improve Your Appearance for Dating Without Becoming Someone Else',
    description: 'A practical order of operations for improving hair, skin, physique, grooming, clothes, and presentation without chasing trends.',
    category: 'Appearance',
    readingTime: '9 min read',
    published: 'September 11, 2026',
    publishedIso: '2026-09-11',
  },
] as const;

export type BlogPostSummary = (typeof blogPosts)[number];
