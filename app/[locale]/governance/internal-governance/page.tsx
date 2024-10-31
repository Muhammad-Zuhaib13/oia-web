import {  unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import InternalGovernance from "./internal-governance";

const InternalGovernancePage: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);


  return (
    <div>
        <InternalGovernance locale={locale}/>
    </div>
  );
};

export default InternalGovernancePage;
