// "use client";

// import axios from "axios";
// import MuxPlayer from "@mux/mux-player-react";
// import { toast } from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import { Loader2, Lock } from "lucide-react";
// import { useState } from "react";

// import { cn } from "@/lib/utils";
// import { useConfettiStore } from "@/hooks/use-confetti-store";
// import { db } from "@/lib/db";
// import ReactPlayer from "react-player";

// interface VideoPlayerProps {
//   playbackId: string;
//   courseId: string;
//   chapterId: string;
//   nextChapterId?: string;
//   isLocked: boolean;
//   completeOnEnd: boolean;
//   title: string;
//   videoUrl?: string; // added
// }

// export const VideoPlayer = ({
//   playbackId,
//   courseId,
//   chapterId,
//   nextChapterId,
//   isLocked,
//   completeOnEnd,
//   title,
//   videoUrl,
// }: VideoPlayerProps) => {
//   const [isReady, setIsReady] = useState(false);

//   return (
//     <div className="relative aspect-video">
//       {/*  */}
//       {!isReady && !isLocked && (
//         <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
//           <Loader2 className="h-8 w-8 animate-spin text-secondary" />
//         </div>
//       )}
//       {isLocked && (
//         <div className="absolute inset-0 flex items-center justify-center bg-slate-800 flex-col gap-y-2 text-secondary">
//           <Lock className="h-8 w-8" />
//           <p className="text-sm">This chapter is locked</p>
//         </div>
//       )}
//       {!isLocked && (
//         <ReactPlayer
//           className={cn(!isReady && "hidden")}
//           url={videoUrl}
//           controls
//           width="100%"
//           height="100%"
//         />
//       )}
//     </div>
//   );
// };

"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Loader2, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  playbackId: string;
  courseId: string;
  chapterId: string;
  nextChapterId?: string;
  isLocked: boolean;
  completeOnEnd: boolean;
  title: string;
  videoUrl?: string; // added
}

export const VideoPlayer = ({
  playbackId,
  courseId,
  chapterId,
  nextChapterId,
  isLocked,
  completeOnEnd,
  title,
  videoUrl,
}: VideoPlayerProps) => {
  const [isReady, setIsReady] = useState(false);

  // Ensure that isReady is only modified on the client side
  useEffect(() => {
    if (!isLocked) {
      setIsReady(true);
    }
  }, [isLocked]);

  return (
    <div className="relative aspect-video">
      {!isReady && !isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
          <Loader2 className="h-8 w-8 animate-spin text-secondary" />
        </div>
      )}
      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 flex-col gap-y-2 text-secondary">
          <Lock className="h-8 w-8" />
          <p className="text-sm">This chapter is locked</p>
        </div>
      )}
      {!isLocked && isReady && (
        <ReactPlayer
          className={cn(!isReady && "hidden")}
          url={videoUrl}
          controls
          width="100%"
          height="100%"
        />
      )}
      <div></div>
    </div>
  );
};
