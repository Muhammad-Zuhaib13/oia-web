"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import ImageBanner from "../banners/ImageBanner";
import ScreenContainer from "../common/ScreenContainer";
import Pagination from "./Pagination";
import { Link } from "@/i18n.config";
const SearchDataContainer: React.FC<any> = ({
  locale,
}: any) => {

const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (
     event: React.ChangeEvent<HTMLInputElement>,
   ) => {
     setSearchQuery(event.target.value);
   };
   const handleKeyDown = (
     event: React.KeyboardEvent<HTMLInputElement>,
   ) => {
     if (event.key === "Enter"  && searchQuery.length >= 1) {
       router.push(`/search/${searchQuery}`);
     }
   };
  const params: { detail: string; locale: string } =
    useParams();
  const bannerData = {
    title: "Search",
    description: "",
    image: "",
    locale: locale,
  };
  const bannerDataAr = {
    title:  "يبحث",
    description: "",
    image: "",
    locale: locale,
  };

  const results = [
    {
      id: 1,
      title: "Oman",
      desc: "Oman is a country on the southeastern coast of the Arabian Peninsula, known for its diverse landscapes, including deserts, mountains, and a long coastline. Its capital, Muscat, is a historic city that reflects the nation’s rich maritime trade heritage. Oman is famous for its cultural blend of Arab, African, and South Asian influences, offering a variety of traditional music, crafts, and cuisine. In recent years, the country has become a popular tourist destination, attracting visitors with its natural beauty and outdoor activities like desert safaris and mountain trekking. While Oman’s economy has long been driven by oil, it is actively diversifying into sectors such as tourism and logistics.",
      link: "/oman",
    },
    {
      id: 2,
      title: "Oman",
      desc: "Oman is a country on the southeastern coast of the Arabian Peninsula, known for its diverse landscapes, including deserts, mountains, and a long coastline. Its capital, Muscat, is a historic city that reflects the nation’s rich maritime trade heritage. Oman is famous for its cultural blend of Arab, African, and South Asian influences, offering a variety of traditional music, crafts, and cuisine. In recent years, the country has become a popular tourist destination, attracting visitors with its natural beauty and outdoor activities like desert safaris and mountain trekking. While Oman’s economy has long been driven by oil, it is actively diversifying into sectors such as tourism and logistics.",
      link: "/oman",
    },
    {
      id: 3,
      title: "Oman",
      desc: "Oman is a country on the southeastern coast of the Arabian Peninsula, known for its diverse landscapes, including deserts, mountains, and a long coastline. Its capital, Muscat, is a historic city that reflects the nation’s rich maritime trade heritage. Oman is famous for its cultural blend of Arab, African, and South Asian influences, offering a variety of traditional music, crafts, and cuisine. In recent years, the country has become a popular tourist destination, attracting visitors with its natural beauty and outdoor activities like desert safaris and mountain trekking. While Oman’s economy has long been driven by oil, it is actively diversifying into sectors such as tourism and logistics.",
      link: "/oman",
    },
    {
      id: 4,
      title: "Oman",
      desc: "Oman is a country on the southeastern coast of the Arabian Peninsula, known for its diverse landscapes, including deserts, mountains, and a long coastline. Its capital, Muscat, is a historic city that reflects the nation’s rich maritime trade heritage. Oman is famous for its cultural blend of Arab, African, and South Asian influences, offering a variety of traditional music, crafts, and cuisine. In recent years, the country has become a popular tourist destination, attracting visitors with its natural beauty and outdoor activities like desert safaris and mountain trekking. While Oman’s economy has long been driven by oil, it is actively diversifying into sectors such as tourism and logistics.",
      link: "/oman",
    },
    {
      id: 5,
      title: "Oman",
      desc: "Oman is a country on the southeastern coast of the Arabian Peninsula, known for its diverse landscapes, including deserts, mountains, and a long coastline. Its capital, Muscat, is a historic city that reflects the nation’s rich maritime trade heritage. Oman is famous for its cultural blend of Arab, African, and South Asian influences, offering a variety of traditional music, crafts, and cuisine. In recent years, the country has become a popular tourist destination, attracting visitors with its natural beauty and outdoor activities like desert safaris and mountain trekking. While Oman’s economy has long been driven by oil, it is actively diversifying into sectors such as tourism and logistics.",
      link: "/oman",
    },
    {
      id: 6,
      title: "Oman",
      desc: "Oman is a country on the southeastern coast of the Arabian Peninsula, known for its diverse landscapes, including deserts, mountains, and a long coastline. Its capital, Muscat, is a historic city that reflects the nation’s rich maritime trade heritage. Oman is famous for its cultural blend of Arab, African, and South Asian influences, offering a variety of traditional music, crafts, and cuisine. In recent years, the country has become a popular tourist destination, attracting visitors with its natural beauty and outdoor activities like desert safaris and mountain trekking. While Oman’s economy has long been driven by oil, it is actively diversifying into sectors such as tourism and logistics.",
      link: "/oman",
    },
    {
      id: 7,
      title: "Oman",
      desc: "Oman is a country on the southeastern coast of the Arabian Peninsula, known for its diverse landscapes, including deserts, mountains, and a long coastline. Its capital, Muscat, is a historic city that reflects the nation’s rich maritime trade heritage. Oman is famous for its cultural blend of Arab, African, and South Asian influences, offering a variety of traditional music, crafts, and cuisine. In recent years, the country has become a popular tourist destination, attracting visitors with its natural beauty and outdoor activities like desert safaris and mountain trekking. While Oman’s economy has long been driven by oil, it is actively diversifying into sectors such as tourism and logistics.",
      link: "/oman",
    },
  ];
  const [page, setPage] = useState(1);

  const paginatedCards = results?.slice(
    (page - 1) * 6,
    page * 6,
  );
  return (
    <div>
      <ImageBanner
        data={locale === "en" ? bannerData : bannerDataAr}
      />
      <ScreenContainer>
        <div className="py-[50px]">
          <div className="flex w-full flex-col gap-[20px]">
            <div className="relative w-full">
              <input
                type="text"
                className="h-[57px] w-full rounded-[4px] border-[1px] border-[#E6E9EB] px-[55px] py-[16px] focus:outline-none rtl:font-GESndBookMedium font-DINAMedium placeholder:font-DINAMedium placeholder:text-[#30303099] focus:border-[#9F8555]  placeholder:rtl:font-TajawalMedium"
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                placeholder={
                    locale === "en" ? "Search" : "يبحث"
                  }
              />
              <button className="absolute left-[30px] rtl:right-[30px] top-[18px] z-10 h-[21px] w-[21px]">
                <img
                  src="/assets/icons/search-icon.svg"
                  className=""
                />
              </button>
            </div>
            <div className="flex justify-between">
              <div></div>
              <div className="h-[56px] w-full max-w-[444px] border-[1px] border-[#E6E9EB]">
                <select
                  className={`news-select h-full w-full px-[20px] py-[16px] ${locale === "en" ? "request-select-en" : "request-select-ar"} placeholder:font-DINARegular placeholder:text-[14px] placeholder:font-normal focus:outline-none rtl:placeholder:font-TajawalRegular`}
                >
                  <option>This Month</option>
                  <option>Last Month</option>
                  <option>This Year</option>
                </select>
              </div>
            </div>
          </div>
          <div className="search-results">
          {paginatedCards?.map((item: any, index: number) => (
              <Link href={item.link} key={index} passHref>
                <div className="flex flex-col gap-[30px] pt-[30px] cursor-pointer">
                  <h2 className="mainHeading rtl:font-TajawalBold">
                    {item?.title}
                  </h2>
                  <p className="paragraph rtl:font-TajawalRegular">
                    {item?.desc}
                  </p>
                  <hr />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-[20px] sm:mt-[50px] lg:mt-[100px]">
            <Pagination
              locale={locale}
              totalItems={results?.length}
              page={page}
              setPage={setPage}
            />
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default SearchDataContainer;
