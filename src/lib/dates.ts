export function formatDate(date: Date) {
	const month = date.getMonth() + 1;

	return `${date.getDate()}/${month < 10 ? `0${month}` : month}/${date.getFullYear()}`;
}
