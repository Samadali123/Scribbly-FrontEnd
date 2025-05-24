// import React from 'react';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// const SkeletonNote = () => {
//   return (
//     <div
//       className="bg-zinc-900 border border-red-700 rounded-xl p-5 space-y-4 shadow-lg hover:shadow-red-600/50"
//       style={{ minHeight: '180px' }}
//     >
//       {/* Title */}
//       <Skeleton
//         height={28}
//         width="70%"
//         baseColor="#b91c1c"
//         highlightColor="#f87171"
//       />

//       {/* Content */}
//       <Skeleton
//         count={2}
//         baseColor="#7f1d1d"
//         highlightColor="#fca5a5"
//       />

//       {/* Category pill */}
//       <Skeleton
//         height={24}
//         width={96}
//         borderRadius={9999}
//         baseColor="#991b1b"
//         highlightColor="#fca5a5"
//       />

//       {/* Actions buttons placeholders */}
//       <div className="flex gap-3 mt-4">
//         <Skeleton
//           height={30}
//           width={30}
//           circle
//           baseColor="#7f1d1d"
//           highlightColor="#f87171"
//         />
//         <Skeleton
//           height={30}
//           width={30}
//           circle
//           baseColor="#7f1d1d"
//           highlightColor="#f87171"
//         />
//       </div>
//     </div>
//   );
// };

// export default SkeletonNote;



import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonNote = () => {
  return (
    <div
      className="bg-zinc-900 border border-red-700 rounded-xl p-5 space-y-4 shadow-lg hover:shadow-red-600/50 
      transition-all duration-500 ease-in-out animate-pulse"
      style={{ minHeight: '180px' }}
    >
      {/* Title */}
      <Skeleton
        height={28}
        width="70%"
        baseColor="#b91c1c"
        highlightColor="#f87171"
        className="transition-all duration-500 ease-in-out"
      />

      {/* Content */}
      <Skeleton
        count={2}
        baseColor="#7f1d1d"
        highlightColor="#fca5a5"
        className="transition-all duration-500 ease-in-out"
      />

      {/* Category pill */}
      <Skeleton
        height={24}
        width={96}
        borderRadius={9999}
        baseColor="#991b1b"
        highlightColor="#fca5a5"
        className="transition-all duration-500 ease-in-out"
      />

      {/* Action buttons */}
      <div className="flex gap-3 mt-4">
        <Skeleton
          height={30}
          width={30}
          circle
          baseColor="#7f1d1d"
          highlightColor="#f87171"
          className="transition-all duration-500 ease-in-out"
        />
        <Skeleton
          height={30}
          width={30}
          circle
          baseColor="#7f1d1d"
          highlightColor="#f87171"
          className="transition-all duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default SkeletonNote;
