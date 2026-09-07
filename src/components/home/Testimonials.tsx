import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
	{
		name: "Suman Rao",
		role: "Daughter of patient",
		quote:
			"CuroAid's team was compassionate and professional — my mother received excellent care at home and we felt supported every step of the way.",
	},
	{
		name: "Dr. Harish Patel",
		role: "Family Physician",
		quote:
			"The coordinated home visits and timely reports from CuroAid made follow-ups easier and improved patient compliance.",
	},
	{
		name: "Ayesha Khan",
		role: "Physiotherapy Patient",
		quote:
			"The physiotherapist was patient and customized exercises to my home setup — I regained mobility faster than I expected.",
	},
];

export default function Testimonials() {
	return (
		<section className="py-20 bg-light-blue">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading title="Testimonials" subtitle="Real experiences from patients and families" />
				<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((t) => (
						<div key={t.name} className="rounded-2xl bg-white p-6 shadow-sm">
							<p className="text-sm leading-relaxed text-muted">“{t.quote}”</p>
							<div className="mt-4">
								<p className="text-sm font-semibold text-navy">{t.name}</p>
								<p className="text-xs text-muted">{t.role}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
