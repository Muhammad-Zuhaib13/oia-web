"use client"
import React from 'react'
import useDarkMode from '@/app/hooks/useDarkMode'
const NoData = ({data="No Data",locale}:any) => {
  const isDark = useDarkMode() || false;
  return (
    <div className="py-[100px] min-h-[100vh]">
        <h2 className={`heroHeading !text-center font-bold rtl:font-TajawalBold ${isDark ? "!ext-[#ffffff]":"!text-[#5A4427]"} `}>
         {data}
        </h2>
      </div>
  )
}

export default NoData
