import ScreenContainer from "../screencontainer/ScreenContainer";

type Data = {
  title: string;
  para: string;
  titleAlign?: string;
  locale?:string;
};

type SimpleTextImgProps = {
  data: Data;
  lineClip?: number;
};
const SimpleHeadingandText: React.FC<SimpleTextImgProps> = ({ data, lineClip }) => {
  const titleAlignment = data.titleAlign || "start";
  return (
    <ScreenContainer>
      <div className="flex flex-col lg:gap-[24px] gap-[20px] sm:gap-[32px]">
        <div className="">
          <h2
            className={`mainHeading  rtl:font-TajawalBold text-${titleAlignment}`}
          >
            {data?.title}
          </h2>
        </div>
        {data?.para && (
          <div>
            <p
              className="paragraph"
            >
              {data?.para}
            </p>
          </div>
        )}
      </div>
    </ScreenContainer>
  );
};

export default SimpleHeadingandText;
