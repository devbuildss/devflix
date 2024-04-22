import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { MdPlayCircle } from "react-icons/md";

interface iAppProps {
  title: string;
  overview: string;
  movieId: number;
  watchListId: string;
  watchList: boolean;
  youtubeUrl: string;
  year: number;
  age: number;
  duration: number;
}
export default function MovieCard({
  movieId,
  overview,
  title,
  watchListId,
  watchList,
  youtubeUrl,
  age,
  duration,
  year,
}: iAppProps) {
  return (
    <div>
      <button className="">
        <MdPlayCircle className="h-20 w-20" />
      </button>
      <div className="right-5 top-5 absolute z-10">
        {watchList ? (
          <form>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4" />
            </Button>
          </form>
        )}
      </div>
      <div className="p-5 absolute bottom-0 left-0">
        <p className="font-bold text-lg line-clamp-1">{title}</p>
        <div className="flex gap-x-2 items-center">
          <p>{year}</p>
          <p>{age}</p>
          <p>{duration} </p>
        </div>
      </div>
    </div>
  );
}
