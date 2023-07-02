import type { PageServerLoad } from './$types';
import { getPages } from '$lib/notion';

export const load = (async () => ({
	letters: await getPages()
})) satisfies PageServerLoad;
