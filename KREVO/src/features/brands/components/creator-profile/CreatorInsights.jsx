
const insights = [
  { label: "Instagram Followers", value: "Not available" },
  { label: "YouTube Subscribers", value: "Not available" },
  { label: "Average Reel Views", value: "Not available" },
  { label: "Engagement Rate", value: "Not available" },
];

export default function CreatorInsights({ creator }) {
  return (
    <section className="mt-6 rounded-2xl border border-[#DAD7CB] bg-[#ECEAE2] p-5 sm:p-7">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Social Media & Audience Insights
        </h2>
        <p className="mt-1 text-xs text-[#77746C]">
          Overview of the creator&apos;s social media performance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {insights.map((item) => (
          <div
            key={item.label}
            className="rounded-xl bg-[#E6E3D6] p-4"
          >
            <p className="text-xs text-[#77746C]">{item.label}</p>
            <p className="mt-3 text-xl font-semibold">
              {item.label === "Instagram Followers" &&
              creator.platform?.toLowerCase() === "instagram"
                ? creator.followersDisplay
                : item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        {["Audience Location", "Age Distribution", "Gender Distribution"].map(
          (item) => (
            <div
              key={item}
              className="rounded-xl bg-[#E6E3D6] p-5"
            >
              <p className="text-sm font-medium">{item}</p>
              <p className="mt-3 text-xs text-[#77746C]">
                Audience data not available yet.
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
