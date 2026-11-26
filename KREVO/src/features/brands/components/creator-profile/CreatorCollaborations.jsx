
export default function CreatorCollaborations({ creator }) {
  const collaborations = creator.collaborations || [];

  return (
    <section className="mt-6 rounded-2xl border border-[#DAD7CB] bg-[#ECEAE2] p-5 sm:p-7">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Previous Collaborations</h2>
        <p className="mt-1 text-xs text-[#77746C]">
          Brands this creator has previously worked with.
        </p>
      </div>

      {collaborations.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collaborations.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-[#E6E3D6] p-5"
            >
              <div className="flex items-center gap-3">
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={item.brand}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#DAD7CB] text-sm font-semibold">
                    {item.brand?.charAt(0)}
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-semibold">{item.brand}</h3>
                  <p className="mt-1 text-xs text-[#77746C]">
                    {item.category}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-[#77746C]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex min-h-36 items-center justify-center rounded-xl border border-dashed border-[#C9C5B8] px-4 text-center">
          <p className="text-xs text-[#77746C]">
            No previous collaborations have been added yet.
          </p>
        </div>
      )}
    </section>
  );
}
