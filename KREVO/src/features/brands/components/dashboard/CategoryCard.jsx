import Link from "next/link";

export default function CategoryCard({ category }) {
  const href = `/discover-creators?category=${encodeURIComponent(category.name)}`;
  return (
    <Link href={href} className="group flex flex-col gap-2 rounded-xl bg-[#F7F6F0] p-2.5">
      <div className="aspect-[5/3] overflow-hidden rounded-lg bg-[#ECEAE2]"><img src={category.image} alt={category.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>
      <p className="px-1 pb-0.5 text-xs font-medium text-[#22201E]">{category.name}</p>
    </Link>
  );
}
