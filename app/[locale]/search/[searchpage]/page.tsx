import {
    getTranslations,
    unstable_setRequestLocale,
  } from "next-intl/server";
import SearchDataContainer from "@/app/components/search/SearchContainer";
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
      <section className="ndf-page">
        <div className="">
          <SearchDataContainer locale={locale} />
        </div>
      </section>
    );
  };
  
  export default NewsDetails;
  