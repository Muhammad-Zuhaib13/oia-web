import { useTranslations } from "next-intl";
import { getTranslations,unstable_setRequestLocale } from "next-intl/server";
import DataContainer from "./DataContainer";



export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({
    locale,
    namespace: "Future-Generation-Fund",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
  };
}

interface FutureGenerationFundsProps {
  params: {
    locale: string;
  };
}

const FutureGenerationFund: React.FC<
  FutureGenerationFundsProps
> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Future-Generation-Fund");
 





  return (
    <div className="future-generation-fund-section">
      <DataContainer locale={locale} />
    </div>
  );
};

export default FutureGenerationFund;
