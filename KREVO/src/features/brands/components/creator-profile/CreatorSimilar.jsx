
import Link from "next/link";
import { creators } from "../../data/creatorsData";

export default function CreatorSimilar({ creator }) {
  const similarCreators = creators
    .filter(
      (item) =>
        item.slug !== creator.slug &&
        item.category === creator.category
    )
    .slice(0, 3);

  return (
    <section className="mt-6 rounded-2xl border border-[#DAD7CB] bg-[#ECEAE2] p-5 sm:p-7">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Similar Creators</h2>
        <p className="mt-1 text-xs text-[#77746C]">
          Discover more creators from the same category.
        </p>
      </div>

      {similarCreators.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {similarCreators.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex items-center gap-4 rounded-xl bg-[#E6E3D6] p-4 transition-colors hover:bg-[#DAD7CB]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 rounded-xl object-cover"
              />

              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-[#77746C]">
                  {item.category}
                </p>
                <p className="mt-2 text-xs font-medium">
                  {item.followersDisplay}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="rounded-xl bg-[#E6E3D6] p-5 text-center text-xs text-[#77746C]">
          No similar creators found yet.
        </p>
      )}
    </section>
  );
}
