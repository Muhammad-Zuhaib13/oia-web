import {  unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import OIACompanies from "./oia-companies";

const OIACompaniesPage: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);


  return (
    <div>
        <OIACompanies locale={locale}/>
    </div>
  );
};

export default OIACompaniesPage;
