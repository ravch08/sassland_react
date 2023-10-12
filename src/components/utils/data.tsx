import {
	Client1,
	Client2,
	Client3,
	Client4,
	Client5,
	Episode1,
	Episode2,
	Screen1,
	Screen2,
	Screen3,
	Testimonial1,
	Testimonial2,
	Testimonial3,
} from "./helper";

export const clientsItems = [
	{
		id: 1,
		imgSrc: Client1,
	},
	{
		id: 2,
		imgSrc: Client2,
	},
	{
		id: 3,
		imgSrc: Client3,
	},
	{
		id: 4,
		imgSrc: Client4,
	},
	{
		id: 5,
		imgSrc: Client5,
	},
];

export const featureItems = [
	{
		id: 1,
		title: "Millions of Content",
		description: "Shuffle through millions of awesome podcasts",
		svg: (
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
				<path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z" />
			</svg>
		),
	},
	{
		id: 2,
		title: "Powerful Equalizer",
		description: "Shuffle through millions of awesome podcasts",
		svg: (
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
				<path d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z" />
			</svg>
		),
	},
	{
		id: 3,
		title: "Organize Easily",
		description: "Shuffle through millions of awesome podcasts",
		svg: (
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 640 512">
				<path d="M128 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-24-80h192v48h48v-48h192v48h48v-57.59c0-21.17-17.23-38.41-38.41-38.41H344v-64h40c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h40v64H94.41C73.23 224 56 241.23 56 262.41V320h48v-48zm264 80h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm240 0h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z" />
			</svg>
		),
	},
];

export const podcastItems = [
	{
		id: 1,
		episode: Episode1,
		screen1: Screen1,
		screen2: Screen2,
		subtitle: "PODCAST",
		title: "Millions of Episodes",
		description: "Shuffle through millions of interesting stories, news, and discussions.",
		list1: " Millions of episodes",
		list2: "Playlists",
		list3: "Best Hosts",
		btnText: "Learn More",
	},
	{
		id: 2,
		episode: Episode2,
		screen1: Screen3,
		screen2: "",
		subtitle: "LIBRARY",
		title: "Favorite Collections in one place",
		description:
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		list1: "Sync to Cloud",
		list2: "Create your own Playlist",
		list3: " Share instantly",
		btnText: "Learn More",
	},
];

export const testimonialItems = [
	{
		id: 1,
		imgSrc: Testimonial1,
		author: "Justin M. Martinez",
		designation: "PHP Developer",
		quote:
			"Original, creative and with an innate understanding of their customer’s needs, the team at Saasland are always a pleasure to work with",
	},
	{
		id: 2,
		imgSrc: Testimonial2,
		author: "Justin M. Martinez",
		designation: "JAVA Developer",
		quote:
			"Original, creative and with an innate understanding of their customer’s needs, the team at Saasland are always a pleasure to work with",
	},
	{
		id: 3,
		imgSrc: Testimonial3,
		author: "Justin M. Martinez",
		designation: "Software Developer",
		quote:
			"Original, creative and with an innate understanding of their customer’s needs, the team at Saasland are always a pleasure to work with",
	},
];
