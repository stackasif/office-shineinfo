
export default function CreatorPortfolio({ portfolio = [] }) {
  return (
    <section className="mt-6 rounded-2xl border border-[#DAD7CB] bg-[#ECEAE2] p-5 sm:p-7">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Creator Portfolio</h2>
        <p className="mt-1 text-xs text-[#77746C]">
          Explore videos and content created by this creator.
        </p>
      </div>

      {portfolio.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {portfolio.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl border border-[#DAD7CB] bg-[#E6E3D6]"
            >
              <video
                src={item.video}
                poster={item.thumbnail}
                controls
                className="aspect-[9/16] w-full object-cover"
              />
              <p className="p-3 text-xs font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed border-[#C9C5B8] px-4 text-center">
          <p className="text-sm font-medium">Portfolio coming soon</p>
          <p className="mt-2 max-w-sm text-xs leading-5 text-[#77746C]">
            This creator hasn&apos;t added any portfolio videos yet.
          </p>
        </div>
      )}
    </section>
  );
}
