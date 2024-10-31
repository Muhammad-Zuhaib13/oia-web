import {  unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import RiskCompliance from "./risk-compliance";

const RiskCompliancePage: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);


  return (
    <div>
        <RiskCompliance locale={locale}/>
    </div>
  );
};

export default RiskCompliancePage;
