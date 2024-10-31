"use client";
import ScreenContainer from "../screencontainer/ScreenContainer";
type ImageBannerProps = {
  data: {
    title: string;
    description?: string;
    image: string;
    tabImg?: string;
    mobileImg?: string;
    locale?: string;
  };
  width?: string;
};

const ImageBanner: React.FC<ImageBannerProps> = ({
  data,
  width = "841px",
}) => {
  return (
    <div className="img-banner-text relative h-[200px] md:h-[380px] lg:h-[400px]">
      {!data?.image && !data?.tabImg && !data?.mobileImg ? (
        <div className="h-full w-full bg-[#5A4427]"></div>
      ) : (
        <>
          <img
            src={data.image}
            className="imgbanner-img hidden h-full w-full object-cover lg:block"
            alt="banner img"
          />
          <img
            src={data.tabImg || data.image}
            className="imgbanner-img hidden h-full w-full object-cover md:block lg:hidden"
            alt="banner img"
          />
          <img
            src={data.mobileImg || data.image}
            className="imgbanner-img block h-full w-full object-cover md:hidden lg:hidden"
            alt="banner img"
          />
        </>
      )}
      <ScreenContainer>
        <div
          className={`imgbanner-container absolute top-0 flex h-full flex-col justify-center gap-[16px] pr-[20px] sm:gap-[20px] sm:pr-[60px] lg:gap-[30px] lg:pr-0 rtl:pl-[20px] rtl:sm:pl-[60px] rtl:lg:pl-0`}
        >
          {data?.title && (
            <h3
              className={`heroHeading !text-white rtl:font-TajawalBold`}
            >
              {data?.title}
            </h3>
          )}
          <div
            className="w-full 
          "
            style={{ maxWidth: width }}
          >
            {data?.description && (
              <p
                className="paragraph imgbanner-text-p  text-white"
              >
                {data?.description}
              </p>
            )}
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default ImageBanner;
