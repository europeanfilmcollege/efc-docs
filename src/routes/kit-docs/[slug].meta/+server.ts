import { createMetaRequestHandler } from '@svelteness/kit-docs/node';

export const GET = createMetaRequestHandler({
  // map slug to absolute or relative file path to `routes` directory.
  // returning `null` or `undefined` will fallback to default resolver.
  // `resolve` helper will return default value.
  resolve: (slug, { resolve }) => resolve(slug)
});