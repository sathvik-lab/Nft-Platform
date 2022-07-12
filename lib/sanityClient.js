import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '3xd7vgjn',
  dataset: 'production',
  apiVersion: '2022-07-10',
  token:
    'skCbued43XvRy0BGL41HFAjIWVzv58qhvsJqx4FUZMjqRDLA3otkQf3Er2PAgX18H619uIyReZBUqsnyDaAEagKAJaeGOdmriBXXS9kkv09L8p0YdIuTeBN7mYULk5fpN0ikzT5P34na26cF5fhgnfNjPc84AuCdlVjF1jqEGf4lKg33ltWP',
  useCdn: false,
})
