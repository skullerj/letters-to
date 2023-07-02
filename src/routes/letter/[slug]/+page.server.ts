import type { PageServerLoad } from './$types';
import { getPage } from '$lib/notion';

export const load = (async ({ params }) => ({
	page: getPage(params.slug)
})) satisfies PageServerLoad;
