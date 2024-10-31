import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import Careers from "./careers";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({
    locale,
    namespace: "Careers",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
  };
}

interface CareerProps {
  params: {
    locale: string;
  };
}

const CareerPage: React.FC<CareerProps> = ({  
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Careers");


  return (
    <div>
      <Careers locale={locale}/>
    </div>
  );
};

export default CareerPage;
