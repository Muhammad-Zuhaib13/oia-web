import {  unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import OpenDataContainer from "./OpenDataContainer";

const OpenDataPage: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);


  return (
    <div>
        <OpenDataContainer locale={locale} />
    </div>
  );
};

export default OpenDataPage;
