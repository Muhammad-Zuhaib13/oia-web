"use client";
import { useState } from "react";
import ScreenContainer from "../screencontainer/ScreenContainer";
import { useRouter } from "@/i18n.config";
import Pagination from "./Pagination";
const NewsSearchandCards = ({
  data,
  locale,
}: {
  data: any;
  locale: string;
}) => {
  const { title, newsCards } = data;
  const [page, setPage] = useState(1);

  const paginatedCards = newsCards?.slice(
    (page - 1) * 6,
    page * 6,
  );


  const router = useRouter();

  return (
    <div className="py-[40px] sm:py-[50px] lg:pb-[120px] lg:pt-[100px]">
      <ScreenContainer>
        <div className="">
          {/* search field */}
 
          <div>
            {title && (
              <h2
              // mt-[50px]
                className={`sectionTitle text-[#9F8555] rtl:font-TajawalBold`}
              >
                {title}
              </h2>
            )}
          </div>
          {/* News container */}
          {newsCards && (
            <div className="mt-[50px] w-full overflow-hidden sm:mt-[50px] lg:mt-[50px]">
              <div className="w-[100.1%]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {paginatedCards?.map(
                    (item: any, index: number) => {
                      return (
                        <div
                        onClick={() => router.push(`/media-center/news-details/${item.id}`)}
                          key={index}
                          className={`cursor-pointer news-card h-auto w-full max-w-full overflow-hidden border-b-[1px] border-[#EEEEEE] py-[20px] sm:py-[10px]  md:h-[441px] lg:h-[441px] lg:py-[19px] ${item?.locale === "en" ? "sm:pl-[10px]  lg:pl-[19px]" : " sm:pr-[10px]  lg:pr-[19px]"}`}
                        >
                          <div
                            className={`bg-red- flex h-full  w-full flex-col  justify-between gap-[50px]  ${item?.locale === "en" ? "border-r-[1px]" : "border-l-[1px]"}  border-[#EEEEEE]   lg:max-w-full lg:gap-0  ${item?.locale === "en" ? "sm:pr-[10px] lg:pr-[19px]" : "sm:pl-[10px] lg:pl-[19px]"} `}
                          >
                            <div className="flex flex-col gap-[21px] sm:gap-[29px]">
                              <div className="h-[200px] w-full sm:h-[180px] md:h-[240px]">
                                <img
                                  src={item?.image}
                                  alt=""
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <h3
                                className={`subHeading subHeadingFontClrBW  rtl:font-TajawalRegular rtl:!font-normal`}
                              >
                                {item?.title}
                              </h3>
                            </div>
                            <h4
                              className={`news-date font-DINAMedium rtl:font-TajawalMedium font-medium`}
                            >
                              {item?.date}
                            </h4>
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          )}
          {/* news pagination */}
          <div className="mt-[20px] sm:mt-[50px] lg:mt-[100px]">
            <Pagination
              locale={locale}
              totalItems={newsCards?.length}
              page={page}
              setPage={setPage}
            />
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default NewsSearchandCards;
