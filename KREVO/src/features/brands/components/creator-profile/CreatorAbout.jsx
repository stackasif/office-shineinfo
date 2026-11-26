
const creatorDetails = [
  { label: "Experience", value: "Not provided" },
  { label: "Languages", value: "Not provided" },
  { label: "Location", value: "Not provided" },
  { label: "Delivery Time", value: "Not provided" },
  { label: "Content Personality", value: "Not provided" },
];

export default function CreatorAbout({ creator }) {
  return (
    <section className="mt-6 rounded-2xl border border-[#DAD7CB] bg-[#ECEAE2] p-5 sm:p-7">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">About the Creator</h2>
        <p className="mt-1 text-xs text-[#77746C]">
          Learn more about this creator and their working style.
        </p>
      </div>

      <p className="mb-6 max-w-3xl text-sm leading-7 text-[#77746C]">
        {creator.bio || "No creator description has been added yet."}
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {creatorDetails.map((detail) => {
          const value =
            detail.label === "Location"
              ? creator.location || detail.value
              : detail.value;

          return (
            <div
              key={detail.label}
              className="rounded-xl bg-[#E6E3D6] p-4"
            >
              <p className="text-xs text-[#77746C]">{detail.label}</p>
              <p className="mt-2 text-sm font-medium">{value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
