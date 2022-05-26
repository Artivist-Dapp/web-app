import { NextPage } from "next";
import { useState, useRef, useEffect } from "react";
import { Partner } from "../types";
import IconScrollSide from "./icons/icon_scroll_side";
import PartnersListItem from "./partners_list_item";
import TransitionOpacity from "./transition_opacity";

interface Props {
  partners: Array<Partner>;
  className?: string;
}

const PartnersList: NextPage<Props> = ({ partners, className }) => {
  const [isScrollable, setIsScrollable] = useState<boolean>(false);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const list = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (list.current) {
      setIsScrollable(list.current.scrollWidth > list.current.clientWidth);
    }
  }, [list]);

  useEffect(() => {
    const handleScroll = () => {
      if (list.current) {
        if (list.current.scrollLeft > 0) {
          setCanScrollLeft(true);
        } else {
          setCanScrollLeft(false);
        }
        if (
          isScrollable &&
          list.current.scrollLeft <
            list.current.scrollWidth - list.current.clientWidth
        ) {
          setCanScrollRight(true);
        } else {
          setCanScrollRight(false);
        }
      } else {
        setCanScrollLeft(false);
      }
    };
    handleScroll();
    if (list.current) {
      list.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (list.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        list.current.removeEventListener("scroll", handleScroll);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list, isScrollable]);

  const handleScroll = (direction: "left" | "right") => {
    const scrollValue = direction === "left" ? -10 : 10;
    let scrollAmount = 0;
    let slideTimer = setInterval(() => {
      if (list.current) {
        list.current.scrollLeft += scrollValue;
      }
      scrollAmount += 10;
      if (scrollAmount >= 150) {
        window.clearInterval(slideTimer);
      }
    }, 25);
  };

  return (
    <>
      <div className={`${className} relative`}>
        <div className="flex justify-between w-full ">
          <div className="flex justify-center items-center shrink-0 pr-6 lg:pr-12 select-none clickable">
            <div
              className={`${
                canScrollLeft
                  ? "text-primary cursor-pointer"
                  : "text-paragraph cursor-not-allowed"
              }
              inline-flex transition-smooth 
              `}
              onClick={() => handleScroll("left")}
            >
              <IconScrollSide className="w-5" />
            </div>
          </div>
          <div className="relative w-full">
            <div
              className="flex space-x-10 px-1 lg:space-x-28 h-20 overflow-y-hidden no-scrollbar overflow-x-auto items-center"
              ref={list}
            >
              {partners.map((partner, index) => (
                <div key={partner.name + index} className="shrink-0">
                  <PartnersListItem partner={partner} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center shrink-0 pl-6 lg:pl-12 select-none">
            <div
              className={`${
                canScrollRight
                  ? "text-primary cursor-pointer"
                  : "text-paragraph cursor-not-allowed"
              }
              inline-flex transition-smooth 
              `}
              onClick={() => handleScroll("right")}
            >
              <IconScrollSide className="w-5 rotate-180" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersList;
