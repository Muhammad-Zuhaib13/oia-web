import {  unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import Gallery from "./gallery";

const GalleryPage: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);


  return (
    <div>
        <Gallery locale={locale}/>
    </div>
  );
};

export default GalleryPage;
