
export default function CreatorExpertise({ creator }) {
  const expertise = creator.expertise || [];

  return (
    <section className="mt-6 rounded-2xl border border-[#DAD7CB] bg-[#ECEAE2] p-5 sm:p-7">
      <div className="mb-5">
        <h2 className="text-lg font-semibold">Content Expertise</h2>
        <p className="mt-1 text-xs text-[#77746C]">
          Content categories this creator specializes in.
        </p>
      </div>

      {expertise.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          {expertise.map((item) => (
            <span
              key={item}
              className="rounded-full bg-[#E6E3D6] px-4 py-2 text-xs font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <div className="flex min-h-20 items-center rounded-xl bg-[#E6E3D6] px-4">
          <span className="rounded-full border border-[#DAD7CB] px-4 py-2 text-xs font-medium">
            {creator.category}
          </span>
        </div>
      )}
    </section>
  );
}
