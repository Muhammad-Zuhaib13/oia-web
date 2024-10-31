import {setFontFamily} from "../../data/data"
type Data = {
    id:number;
    title:string;
    para:string;
    img:string;
    icon:string;
    locale?:string;
}
type JoinVentureCardProps = {
    data: Data;
}
const JointVentureCard : React.FC<JoinVentureCardProps> = ({data}) => {
  return (
    <div className="h-full w-full md:max-w-[620px] max-w-full flex flex-col lg:gap-[30px] sm:gap-[16px] gap-[17px] overflow-hidden">
      <div className="relative">
        <div className="sm:max-h-[332px] max-h-auto h-full  w-full image-gradient">
          <img
            src={data?.img}
            className="h-full w-full backdrop-filter object-cover "
            alt={data?.title}
          />
        </div>
        <div className={`lg:h-[80px] lg:w-[80px] sm:h-[40px] sm:w-[40px] w-[45px] h-[45px] bg-white absolute z-10 lg:top-[20px] sm:top-[10px] top-[11px] ${data?.locale === "en" ? "lg:left-[20px] sm:left-[10px] left-[11px]" :"lg:right-[20px] sm:right-[10px] right-[11px]"} rounded-full flex flex-col justify-center items-center overflow-hidden`}>
        <img
            src={data?.icon}
            className="lg:w-[70%] md:w-[70%] sm:w-[66%] w-[66%] h-[70%] backdrop-filter object-contain"
            alt="icon"
          />
        </div>
      </div>
      <div className="flex flex-col lg:gap-[10px] sm:gap-[16px] gap-[12px]">
        <h3 className={`text-[#9F8555] lg:text-[24px] sm:text-[20px] text-[16px] leading-[19px] sm:leading-[24px] lg:leading-[28.8px] font-bold ${setFontFamily(data?.locale || "en","bold")} lg:line-clamp-1 `}>{data?.title}</h3>
        <p className={`text-[#303030] lg:text-[18px] sm:text-[18px] text-[14px] leading-[20px] sm:leading-[24px] lg:leading-[30px] font-medium ${setFontFamily(data?.locale || "en","medium")}`}>
          {data?.para}
        </p>
      </div>
    </div>
  );
};

export default JointVentureCard;
