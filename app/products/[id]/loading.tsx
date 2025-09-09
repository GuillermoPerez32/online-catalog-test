import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingProduct() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <Skeleton className="h-80 w-full md:h-[28rem] rounded-md" />
      </div>
      <div>
        <div className="space-y-2">
          <Skeleton className="h-7 w-3/4" />
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-5 w-40" />
        </div>
        <Skeleton className="mt-4 h-8 w-32" />
        <div className="mt-6 space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="mt-6">
          <Skeleton className="h-9 w-40" />
        </div>
      </div>
    </div>
  );
}
