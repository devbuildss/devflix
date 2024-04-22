import { Button } from "@/components/ui/button";
import prisma from "../utils/db";
import MovieButtons from "./movieButtons";

async function getData() {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      release: true,
      duration: true,
      id: true,
      age: true,
      youtubeString: true,
    },
  });
  return data;
}

export default async function MovieVideo() {
  const data = await getData();

  return (
    <div className="h-[55vh] lg:h-[60] w-full flex justify-start items-center">
      <video
        poster={data?.imageString}
        autoPlay
        muted
        loop
        src={data?.videoSource}
        className="w-full absolute left-0 top-0 h-[60vh] object-cover -z-10 brightness-[60%]"
      ></video>
      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {data?.title}
        </h1>
        <p className="text-white text-lg mt-5 line-clamp-3 ">
          {data?.overview}{" "}
        </p>
        <div className="flex gap-x-3 mt-4">
          <Button>play</Button>
          <Button>know more</Button>
        </div>
      </div>
    </div>
  );
}
