import Link from 'next/link';

interface CategoryMiniCardProps {
  icon: string;
  name: string;
  description: string;
  providerCount: number;
  href: string;
}

export default function CategoryMiniCard({
  icon,
  name,
  description,
  providerCount,
  href,
}: CategoryMiniCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 hover:border-blue-400 hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-3">
        <span className="text-3xl">{icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-gray-500">{providerCount} providers</span>
        <span className="text-sm font-medium text-blue-600 group-hover:translate-x-0.5 transition-transform">
          Compare →
        </span>
      </div>
    </Link>
  );
}
