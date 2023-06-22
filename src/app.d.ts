// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}

	interface MdsvexFile {
					default: import('svelte/internal').SvelteComponent;
					metadata: Record<string, string>;
	}

	type MdsvexResolver = () => Promise<MdsvexFile>;

	interface BlogPost {
		slug: string;
		title: string;
		author: string;
		description: string;
		date: string;
		published: boolean;
		image: string;
		imageColor: string;
	}
	interface Computer {
		slug:string;
		make:string;
		model:string;
		img:string;
		base:number;
		description:string;
		processor:string;
		options: {
			ram: {
				name:string;
				price:number;
			}[]
		}
	}
}