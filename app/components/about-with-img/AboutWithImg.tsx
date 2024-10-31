import { setFontFamily } from "../../data/data";
import ScreenContainer from "../screencontainer/ScreenContainer";
import Box from '@mui/material/Box';
type Paragraph = {
  id: number;
  text: string;
  subHeading?: string;
  text2?: string;
  locale?: string;
};

type Data = {
  src: string;
  alt: string;
  title: string;
  locale?: string;
  paragraphs: Paragraph[];
};

type AboutWithImgProps = {
  data: Data;
  orderText?: number;
  orderImg?: number;
  marginY?: string;
  isShowMarginYResp?:boolean;
};
const AboutWithImg: React.FC<AboutWithImgProps> = ({
  data,
  orderText = 1,
  orderImg = 2,
  marginY = "100px",
  isShowMarginYResp=true,
}) => {

  return (
    <ScreenContainer>
      <Box
        className={`flex lg:flex-row flex-col lg:gap-[55px] sm:gap-[32px] gap-[16px] items-center about-text-with-img-container `}
        sx={{
          "@media (min-width: 1024px)": { margin: `${marginY} 0 !important` }, 
          "@media (min-width: 640px)": { margin: isShowMarginYResp ? '50px 0' :'0' },
          "@media (max-width: 639px)": { margin: isShowMarginYResp ? '40px 0':'0' }
        }}
      >
        {/* py-[17.5px] */}
        {/* my-[${marginY}] */}
        <div
          className={`text-section flex w-full lg:max-w-[408px] max-w-full  flex-col justify-center  lg:gap-[30px] sm:gap-[32px] gap-[16px]`}
          style={{ order: orderText }}
        >
          <h2
            className={`${setFontFamily(data?.locale || "en", "bold")} sm:text-[36px] text-[20px] leading-[43px] font-bold lg:leading-[43px] sm:leading-[76px] text-[#9F8555]`}
          >
            {data.title}
          </h2>
          <div className="flex flex-col gap-[15px]">
            {data.paragraphs?.map(
              (paragraph: Paragraph) => (
                <div key={paragraph?.id}>
                  <p
                    className={`font-medium ${setFontFamily(paragraph?.locale || "en", "medium")} text-[18px] leading-[27px] text-[#202020]`}
                  >
                    {paragraph?.subHeading}
                  </p>
                  <p
                    className={`font-medium ${setFontFamily(paragraph?.locale || "en", "medium")} lg:text-[18px] sm:text-[24px] text-[14px] lg:leading-[27px] sm:leading-[36px] leading-[20px] text-[#202020]`}
                  >
                    {paragraph?.text}
                    <br />
                    {paragraph?.text2}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
        <div
          className="img-section lg:h-[380px] sm:h-[360px] h-[200px] w-full lg:max-w-[796px] max-w-full"
          style={{ order: orderImg }}
        >
          <img
            src={data?.src}
            alt={data?.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </Box>
    </ScreenContainer>
  );
};

export default AboutWithImg;
