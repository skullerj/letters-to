import type {
	BlockObjectResponse,
	PageObjectResponse,
	PartialBlockObjectResponse
} from '@notionhq/client/build/src/api-endpoints';
import type { SimplifiedBlock } from '$lib/api/api.d';

export function simplifyBlocks(
	blocks: (BlockObjectResponse | PartialBlockObjectResponse)[]
): SimplifiedBlock[] {
	return blocks
		.map((block) => {
			if (!('type' in block)) {
				return null;
			}
			switch (block.type) {
				case 'paragraph':
					return { type: 'paragraph', content: block.paragraph.rich_text[0]?.plain_text };
				default:
					return null;
			}
		})
		.filter((block): block is SimplifiedBlock => block !== null && block !== undefined);
}

export function getPageName(page: PageObjectResponse) {
	if (page.properties.Name.type === 'title') {
		return page.properties.Name.title[0].plain_text;
	}
	return 'Otra nueva carta';
}

export function getPageDate(page: PageObjectResponse) {
	if (page.properties.PublishedAt.type === 'date') {
		if (page.properties.PublishedAt.date?.start) {
			return new Date(page.properties.PublishedAt.date.start);
		}
	}
	return new Date(page.created_time);
}
