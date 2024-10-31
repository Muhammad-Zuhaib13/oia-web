"use client";
import { useRouter } from "@/i18n.config";
const PlatformCard = ({ locale, data }: any) => {
  const ImgCard = "/assets/images/home/platform-1.svg";
  const { image, icon, title, desc, btn, link } = data;
  const router = useRouter();
  const handleRoute = () => {
    if (link) {
      window.open(link, "_blank", 'noopener,noreferrer');
    }
  };
  return (
    <div
      className={`platfrom-card-container group relative flex h-auto w-[170px] cursor-pointer flex-col gap-[5px] sm:w-[250px] lg:w-[233px]`}
      onClick={handleRoute}
    >
      <div className="relative h-[170px] w-full overflow-hidden rounded-[4px] sm:min-h-[250px] lg:min-h-[235px]">
        {image ? (
          <img
            src={image}
            className="absolute h-full w-full rounded-[4px] object-cover"
            alt={title}
          />
        ) : (
          <div className="h-full w-full rounded-[4px] bg-[#FFF9ED]"></div>
        )}
        <div className="duration-400 relative z-10 flex h-full w-full flex-col items-center justify-between bg-[#00000080] transition-opacity ease-in-out lg:bg-transparent lg:group-hover:bg-[#00000080]  ">
          <div className="m-auto flex h-[30px] w-auto items-center justify-center sm:h-[44px] lg:h-[50px]">
            {icon && (
              <img
                src={icon}
                alt={title}
                className="duration-400 h-full w-auto object-fill transition-opacity ease-in-out lg:opacity-0 lg:group-hover:opacity-100"
              />
            )}
          </div>
        </div>
      </div>
      <div className="cardBgBottom w-full  rounded-[4px] ">
        <h4 className="homeCardTitle px-[13px] py-[7px] max-[639px]:text-center rtl:font-TajawalMedium rtl:font-medium">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default PlatformCard;
