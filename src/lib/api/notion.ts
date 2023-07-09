import { Client } from '@notionhq/client';
import { NOTION_API_KEY, NOTION_DATABSE_ID } from '$env/static/private';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { getPageName, simplifyBlocks, getPageDate } from '$lib/api/utils';
const notion = new Client({ auth: NOTION_API_KEY });

export async function getPages() {
	const database = await notion.databases.query({
		database_id: NOTION_DATABSE_ID,
		filter: {
			property: 'Visible',
			checkbox: {
				equals: true
			}
		},
		sorts: [
			{
				property: 'Created',
				direction: 'descending'
			}
		]
	});
	const pages = (database.results as PageObjectResponse[]).filter((page) => 'parent' in page);
	return pages.map((page) => ({
		date: getPageDate(page),
		id: page.id,
		title: getPageName(page)
	}));
}

export async function getPage(id: string) {
	const page = await notion.pages.retrieve({ page_id: id });
	if (!('parent' in page)) {
		// page is not complete
		return null;
	}
	const blocks = simplifyBlocks(
		(await notion.blocks.children.list({ block_id: id, page_size: 50 })).results
	);

	return {
		date: getPageDate(page),
		id: page.id,
		title: getPageName(page),
		blocks
	};
}
