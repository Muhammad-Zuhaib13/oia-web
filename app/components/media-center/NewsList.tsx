"use client";
import { Button, Empty, Image, Input } from "antd";
import React, { useState } from "react";
import ScreenContainer from "../screencontainer/ScreenContainer";
import {setFontFamily} from "../../data/data"
const recordsPerPage = 9;

const calculateNumberOfPages = (
  totalRecords: number,
): number => {
  return Math.ceil(totalRecords / recordsPerPage);
};

const NewsList: React.FC<any> = ({data,locale}) => {
  console.log("data",data)
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState(data);
  const [search, setSearch] = useState("");

  const numberOfPages = calculateNumberOfPages(
    news?.length,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderPaginationButtons = () => {
    return Array.from({ length: numberOfPages }, (_, i) => (
      <div
        key={i + 1}
        onClick={() => handlePageChange(i + 1)}
        className={
          currentPage === i + 1
            ? "flex h-[48px] w-[48px] items-center justify-center rounded-[50%] border bg-white font-DINABold text-[18px] font-bold leading-[20px] text-[#202020] hover:border hover:font-bold hover:text-black"
            : "flex h-[48px] w-[48px] items-center justify-center rounded-[50%] border-0 bg-white font-DINAMedium text-[18px] font-medium leading-[20px] text-[#848484] text-black hover:border hover:font-bold"
        }
      >
        {i + 1}
      </div>
    ));
  };

  const renderRecords = ({
    search,
  }: {
    search: string;
  }) => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const filteredNews = news?.filter((value: any) =>
      value.title
        .toLowerCase()
        .includes(search.toLowerCase()),
    );

    const currentRecords = filteredNews?.slice(
      startIndex,
      startIndex + recordsPerPage,
    );

    if (!filteredNews || filteredNews.length === 0) {
      return (
        <div className="flex h-full w-full items-center justify-center">
          <Empty />
        </div>
      );
    }

    const groupedRecords = [];
    for (let i = 0; i < currentRecords.length; i += 3) {
      groupedRecords.push(currentRecords.slice(i, i + 3));
    }

    return groupedRecords.map((group, index) => (
      <div
        key={index}
        className="mb-[24px] flex w-full justify-between border-b-[1px] border-[#EEEEEE] py-[24px]"
      >
        {group.map((value: any, cardIndex: number) => (
          <div
            key={value.id}
            className={`h-[440px] w-[31.5%]  ${cardIndex === 1 ? "special-card" : ""}`}
          >
            <div className="relative h-[100%]">
              <Image
                src={value.image}
                preview={false}
                className="h-[100%] w-full object-cover"
              />
              <h4 className={`mt-[28px] text-[20px] font-medium leading-[24px] ${setFontFamily(value?.locale || "en","medium")}`}>
                {value.title}
              </h4>
              <div className="absolute bottom-0 left-0 right-0 mb-[20px] bg-white">
                <p className="text-overflow-ellipsis overflow-hidden whitespace-nowrap font-DINAMedium text-[18px] font-medium leading-[26px] text-[#202020]">
                  {value.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <ScreenContainer>
      {/* Search and sort */}
      <div className="mb-[50px] mt-[100px] flex justify-end">
        <Input
          placeholder={locale==="en"?"Search":"بحث"}
          className="h-[50px] w-[423px] rounded-[100px] border-0 bg-[#F5F6F6] px-[20px] py-[12px] text-[18px] font-bold text-[#848484] hover:bg-[#F5F6F6]"
          prefix={
            <Image
              src="/assets/icons/search-icon-gray.svg"
              preview={false}
              width={"30px"}
              height={"30px"}
              style={{ paddingRight: "10px" }}
            />
          }
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="my-[50px] flex flex-wrap ">
        {/* {news?.map((value: any, index: any) => {
          return <div key={value.id} className="h-[400px] ">

          </div>;
        })} */}
        {renderRecords({ search: search })}
      </div>
      <div className="mb-[120px] mt-[100px] flex justify-between">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-btn h-[48px] w-[48px] rounded-[96px] border-0 bg-[#F5F6F6] transition-all duration-300 hover:border-[#EEEEEE]"
        >
          <Image
            src={`/assets/icons/${locale==="en"?"left":"right"}-arrow.svg`}
            preview={false}
          />
        </Button>
        <div className={`flex gap-[28px] ${locale === "en" ? "flex-row":"flex-row-reverse"}`}>
          {renderPaginationButtons()}
        </div>

        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === numberOfPages}
          className="pagination-btn h-[48px] w-[48px] rounded-[96px] border-0 bg-[#F5F6F6] transition-all duration-300 hover:border-[#EEEEEE]"
        >
          <Image
            src={`/assets/icons/${locale==="en"?"right":"left"}-arrow.svg`}
            preview={false}
          />
        </Button>
      </div>
    </ScreenContainer>
  );
};

export default NewsList;
