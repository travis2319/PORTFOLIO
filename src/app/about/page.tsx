import Aboutfooter from "@/components/Aboutfooter";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
const page = () => {
  const items = [
    { hobby: "coding" },
    { hobby: "playing games" },
    { hobby: "Watching Anima" },
    { hobby: "Tect Blog writing" },
    { hobby: "creating Cool Projects" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>
          Software Engineer 
        </Heading>

        <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg">
        👋 Hi, I'm Travis , a beginner frontend developer who loves designing attractive user interfaces. I'm looking forward to learning more about web development and design.
        </p>
      </div>
      <div className="w-full flex flex-row justify-between max-lg:flex-col ">
        <Aboutfooter />
      </div>
      {/* <div className="block">
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {" "}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default page;
