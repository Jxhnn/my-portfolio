
export default interface ParcoursItem {
	type: 'experience' | 'formation';
	period: string;
	title: string;
	company: {
		name: string;
		logo: string;
		link?: string;
	};
	details: {
		status: string;
		missions: string[];
		vision?: string;
		relatedProjects: { id: string; label: string }[];
		relatedSkills: { id: string; label: string }[];
	};
}