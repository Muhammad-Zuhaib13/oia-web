import {  unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import Whistle from "./whistle";

const WhistlePage: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);


  return (
    <div>
        <Whistle locale={locale}/>
    </div>
  );
};

export default WhistlePage;
