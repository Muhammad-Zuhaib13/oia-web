import {  unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import Audit from "./audit";

const AuditsPage: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);


  return (
    <div>
        <Audit locale={locale}/>
    </div>
  );
};

export default AuditsPage;
