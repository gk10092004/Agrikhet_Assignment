export default function LoadingSkeleton() {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="h-60 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    )
  }
  