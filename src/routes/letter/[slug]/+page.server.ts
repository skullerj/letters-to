import type { PageServerLoad } from './$types';
import { getPage } from '$lib/api/notion';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	const page = await getPage(params.slug);
	if (!page) {
		throw error(404, 'No se encontró la carta');
	}

	return {
		page
	};
}) satisfies PageServerLoad;
