import React from 'react';

const SkeletonLoader: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center space-x-4">
        {/* Image skeleton */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>

        {/* Content skeleton */}
        <div className="flex-1 min-w-0">
          <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
        </div>

        {/* Button skeleton */}
        <div className="flex-shrink-0">
          <div className="w-20 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
