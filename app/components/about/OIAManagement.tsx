import { Image } from "antd";
import { setFontFamily } from "../../data/data";
import ScreenContainer from "../screencontainer/ScreenContainer";
import SimpleHeadingandText from "../simple-heading-text/SimpleHeadingandText";
interface DataItem {
  id: number;
  image: string;
  name: string;
  role: string;
  locale?: string;
}
interface OIAManagementProps {
  title: string;
  para: string;
  card: DataItem[];
  locale?: string;
}

const OIAManagement: React.FC<{
  data: OIAManagementProps;
}> = ({ data }) => {
  const simpleHeadText = {
    title: data?.title,
    para: data?.para,
    locale:data?.locale || "en",
  };
  return (
    <div className="bg-[#FEFAF1] pb-[90px] pt-[80px]">
      <SimpleHeadingandText data={simpleHeadText} />
      <ScreenContainer>
      <div className="lg:mt-[70px] sm:mt-[36px] mt-[20px] grid lg:grid-cols-4 lg:gap-x-[24px] grid-cols-2 sm:gap-[20px] gap-[12px]">
          {data?.card?.map((item: DataItem) => (
           <div className="bom-cards w-full" key={item.id}>
              <div className="bom-cardImg">
                <Image
                  src={item?.image}
                  preview={false}
                 className="bom-image sm:min-h-[350px] min-h-[200px]"
                />
              </div>
              <div className="bom-link-hover lg:gap-[18px] sm:gap-[16px] gap-[10px] lg:bottom-[20px] sm:bottom-[30px] bottom-[12px] lg:px-[20px] sm:px-[30px] px-[12px]">
                <p
                   className={`${setFontFamily(item?.locale || "en", 'bold')} lg:text-[20px] sm:text-[24px] font-bold lg:leading-[24px] sm:leading-[30px] text-[14px] leading-[17px] text-white`}
                >
                  {item?.name}
                </p>
                <p
                 className={`${setFontFamily(item?.locale || "en", 'regular')} lg:text-[16px] sm:text-[18px] font-medium lg:leading-[20px] sm:leading-[22px] text-[10px] leading-[12px] text-white`}
                >
                  {item?.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScreenContainer>
    </div>
  );
};

export default OIAManagement;
