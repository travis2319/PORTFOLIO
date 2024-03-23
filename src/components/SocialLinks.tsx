import { cn } from "@/lib/utils";
import {  Linkedin, Twitter, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const SocialLinks = () => {
  const links = [
    { name: "Twitter", link: "https://twitter.com/Travisf22033396", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/travizxfernandez/", icon: <Linkedin /> },
    // { name: "External", link: "", icon: <ExternalLink /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        return (
          <Link key={indx} target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
          >{itm.icon}</Link>
        );
      })}
    </>
  );
};

export default SocialLinks;
