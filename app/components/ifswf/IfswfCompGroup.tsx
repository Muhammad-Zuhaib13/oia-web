"use client"
import React from 'react'
import TitleWithImg from '../common/TitleWithImg'
import TextWithImgandBtn from '../common/TextWithImgandBtn'
const IfswfCompGroup = ({data, locale}:any) => {

  const {sectionOne, sectionTwo}=data || {}
  return (
    <div className="flex flex-col gap-[20px] lg:gap-[30px] py-[60px] lg:py-[100px]">
      <TitleWithImg locale={locale} data={sectionOne} />
      <TextWithImgandBtn locale={locale} data={sectionTwo} />
    </div>
  )
}

export default IfswfCompGroup
