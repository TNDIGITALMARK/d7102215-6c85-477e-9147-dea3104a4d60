'use client';

interface TestimonialCardProps {
  name: string;
  rating: number;
  comment: string;
  avatarUrl?: string;
}

export function TestimonialCard({ name, rating, comment, avatarUrl }: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] p-0.5 mb-4">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <span className="text-2xl font-bold text-[hsl(var(--primary))]">
              {name.charAt(0)}
            </span>
          )}
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Comment */}
      <p className="text-sm text-[hsl(var(--muted-foreground))] italic mb-2 leading-relaxed">
        &ldquo;{comment}&rdquo;
      </p>

      {/* Name */}
      <p className="text-sm font-semibold text-[hsl(var(--foreground))]">
        {name}
      </p>
    </div>
  );
}
