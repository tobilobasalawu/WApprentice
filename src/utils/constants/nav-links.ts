import {
	BookCheck,
	BookCheckIcon,
	HelpCircleIcon,
	LineChartIcon,
	Link2Icon,
	LockIcon,
	NewspaperIcon,
	QrCodeIcon,
} from "lucide-react";

export const NAV_LINKS = [
	{
		title: "Find Apprenticeships",
		href: "/find-apprenticeships",
		menu: [
			{
				title: "Application Tracker",
				tagline: "Monitor all your submitted applications in one place and stay updated on their status",
				href: "/tracker",
				icon: LineChartIcon,
			},
		],
	},
	{
		title: "Reviews & Ratings",
		href: "/reviews",
	},
	{
		title: "Salary Insight",
		href: "/salaries",
	},
	{
		title: "Resources",
		href: "/resources",
		menu: [
			{
				title: "CV Builder",
				tagline: "Craft the perfect CV with our intuitive builder designed to showcase your skills and experience",
				href: "/resources/cv-builder",
				icon: NewspaperIcon,
			},
			{
				title: "Assessment Practice",
				tagline: "Prepare for aptitude tests and interviews with practice materials that boost your confidence",
				href: "/resources/assessments",
				icon: BookCheckIcon,
			},
			{
				title: "Interview Tips",
				tagline: "Master your interviews with expert advice, sample questions, and proven techniques",
				href: "/resources/interview-tips",
				icon: HelpCircleIcon,
			},
			{
				title: "Focus Time Scheduler",
				tagline: "Stay productive by scheduling dedicated blocks of time to work on your applications",
				href: "/resources/focus-time",
				icon: LockIcon,
			},
		],
	},
	{
		title: "Events & Networking",
		href: "/events",
	},
];