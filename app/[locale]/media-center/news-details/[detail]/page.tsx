import {
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import NewsDetailsContainer from "./detail";
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "News-Detail",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
  };
}
const NewsDetails: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  
  return (
    <div className="ndf-page">
      <div className="">
        <NewsDetailsContainer locale={locale} />
      </div>
    </div>
  );
};

export default NewsDetails;
