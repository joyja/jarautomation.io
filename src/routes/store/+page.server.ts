import type { PageServerLoad } from './$types'
import { slugFromPath } from '$lib/slugFromPath'
import { redirect } from '@sveltejs/kit';
import { inventory } from '$lib/inventory';

const MAX_LISTINGS = 10

export const load: PageServerLoad = async ({ url }) => {
	/** @type {import('./$types').PageLoad} */
	return { computers: inventory.computers };
};
