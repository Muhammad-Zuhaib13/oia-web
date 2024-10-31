import { Image } from "antd";
import {setFontFamily} from "../../data/data"
type Data = {
  id: number;
  title: string;
  description: string;
  image: string;
  locale?:string;
};

type SimpleCardOneProps = {
  data: Data;
  imgBgColor?: string;
  textBgColor?: string;
  titleColor?: string;
  paraColor?: string;
};
const SimpleCardOne: React.FC<SimpleCardOneProps> = ({
  data,
  imgBgColor = "white",
  textBgColor = "#D8B97A",
  titleColor = "white",
  paraColor = "white",
}) => {
  return (
    <div
      className="simple-card-one flex h-[350.21px] w-full max-w-[297px] flex-col"
      key={data?.id}
    >
      <div
        className={`data-center flex h-[234px] w-full items-center justify-center bg-[${imgBgColor}]`}
        style={{ backgroundColor: imgBgColor }}
      >
        <Image
          src={data?.image}
          preview={false}
          title={data?.title}
          className="h-auto w-auto object-cover"
        />
      </div>
      <div
        className={`flex h-max-auto  w-full flex-col gap-[18px] bg-[${textBgColor}] pb-[28px] pl-[20px] pr-[13px] pt-[26px]`}
        style={{backgroundColor:textBgColor}}
      >
        <h4
          className={`line-clamp-1 ${setFontFamily(data?.locale || "en","bold")} text-[20px] font-bold leading-[24px] text-[${titleColor}]`}
        >
          {data?.title}
        </h4>
        <p
          className={`line-clamp-2 ${setFontFamily(data?.locale || "en","medium")} text-[16px] font-medium leading-[19px] text-[${paraColor}]`}
        >
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default SimpleCardOne;
