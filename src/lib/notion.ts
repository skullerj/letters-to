import { Client } from '@notionhq/client';
import { NOTION_API_KEY, NOTION_DATABSE_ID } from '$env/static/private';
import type {
	BlockObjectResponse,
	PageObjectResponse,
	PartialBlockObjectResponse,
	PartialPageObjectResponse
} from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({ auth: NOTION_API_KEY });

function getPageName(page: PageObjectResponse) {
	if (page.properties.Name.type === 'title') {
		return page.properties.Name.title[0].plain_text;
	}
	return 'Otra nueva carta';
}

export async function getPages() {
	const database = await notion.databases.query({
		database_id: NOTION_DATABSE_ID
	});
	const pages = (database.results as PageObjectResponse[]).filter((page) => 'parent' in page);
	return pages.map((page) => ({
		date: new Date(page.created_time),
		id: page.id,
		title: getPageName(page)
	}));
}
type SimplifiedBlock = {
	type: 'paragraph';
	content: string;
};

function simplifyBlock(
	block: BlockObjectResponse | PartialBlockObjectResponse
): SimplifiedBlock | null {
	if (!('type' in block)) {
		return null;
	}
	switch (block.type) {
		case 'paragraph':
			return { type: 'paragraph', content: block.paragraph.rich_text[0]?.plain_text };
		default:
			return null;
	}
}

export async function getPage(id: string) {
	const page = await notion.pages.retrieve({ page_id: id });
	if (!('parent' in page)) {
		return null;
	}
	const blocks: SimplifiedBlock[] = (
		await notion.blocks.children.list({ block_id: id, page_size: 50 })
	).results
		.map(simplifyBlock)
		.filter((block): block is SimplifiedBlock => block !== null && block !== undefined);

	return {
		date: new Date(page.created_time),
		id: page.id,
		title: getPageName(page),
		blocks
	};
}
