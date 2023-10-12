export type ButtonGradientProps = {
	btnText: string;
};

export type ClientProps = {
	id?: number;
	imgSrc: string;
};

export type FeatureProps = {
	id?: number;
	title: string;
	svg: JSX.Element;
	description: string;
};

export type TestimonialProps = {
	id?: number;
	quote: string;
	imgSrc: string;
	author: string;
	designation: string;
};

export type PodcastProps = {
	id?: number;
	title: string;
	list1: string;
	list2: string;
	list3: string;
	episode: string;
	screen1: string;
	screen2: string;
	btnText: string;
	subtitle: string;
	podclass?: string;
	description: string;
};
