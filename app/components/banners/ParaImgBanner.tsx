import { Image, Typography } from "antd";
import ScreenContainer from "../screencontainer/ScreenContainer";
import { setFontFamily } from "@/app/data/data";

type BannerData = {
  title: string;
  description: string;
  image: string;
  logoTitle?: boolean;
  locale?: string;
};

type ParaImgBannerProps = {
  data: BannerData;
  isShowBgImg?:boolean;
};

const ParaImgBanner = ({ data, isShowBgImg=true }: ParaImgBannerProps) => {
  const { title, description, image, logoTitle, locale } = data;

  return (
    <section className={`lg:py-[100px] sm:py-[50px] py-[40px] ${isShowBgImg && "bg-[url('/assets/images/bg-section.png')]"} bg-no-repeat bg-cover`}>
      <ScreenContainer>
        <div className="flex flex-col lg:gap-[70px] sm:gap-[32px] gap-[16px]">
        <div className="flex w-full flex-col lg:gap-[30px] sm:gap-[32px] gap-[16px]">
          {logoTitle ? (
            <Image
              src={title}
              preview={false}
              width={"238px"}
              height={"65px"}
            />
          ) : (
            <Typography className={`sub-heading ${setFontFamily(locale || "en", 'bold')}`}>
              {title}
            </Typography>
          )}

          <Typography className={`${setFontFamily(locale || "en", 'medium')} lg:text-[18px] sm:text-[24px] text-[14px] font-medium leading-[20px] sm:leading-[36px] lg:leading-[27px] text-[#202020]`}>
            {description}
          </Typography>
        </div>
        <Image src={image} preview={false} width={"100%"} className="lg:min-h-[450px] sm:min-h-[380px] min-h-[200px] object-cover" />
        </div>
      </ScreenContainer>
    </section>
  );
};

export default ParaImgBanner;
