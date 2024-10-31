import {  unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import BrandHub from "./brandhub";

const OIACompaniesPage: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);


  return (
    <div>
        <BrandHub locale={locale}/>
    </div>
  );
};

export default OIACompaniesPage;
