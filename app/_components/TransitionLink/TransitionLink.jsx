"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "../../utils/animate";

const TransitionLink = ({ href, label }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button className="capitalize" onClick={handleClick}>
      {label}
    </button>
  );
};

export default TransitionLink;
