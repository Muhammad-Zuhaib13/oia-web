import NumberCard from "../common/NumberCard";
import ScreenContainer from "../screencontainer/ScreenContainer";

const FactsFigure = ({ data ,locale }: any) => {
  const {title, figures, images} = data;
  return (
    <div>
      <ScreenContainer>
        <h2
          className={`mainHeading rtl:font-TajawalBold`}
        >
          {title}
        </h2>
        <div className="mt-[20px] lg:mt-[30px] flex justify-between">
          <div className="h-auto sm:h-[300px] w-[49%] lg:w-[74.5%] overflow-hidden rounded-[6px]">
            <img
              src={images[0]?.image}
              alt={images[0]?.alt}
              className="h-full w-full object-cover object-center "
            />
          </div>
          <div className="w-[49%] lg:w-[23.5%] ">
            <NumberCard
              data={figures[0]}
              className="items-center justify-center"
            />
          </div>
        </div>
        <div className="mt-[15px] lg:mt-[24px] flex justify-between flex-wrap gap-y-[15px] lg:gap-y-0 lg:flex-nowrap">
          <div className="w-[49%] lg:w-[23.5%]">
            <NumberCard
            data={figures[1]}
              className="items-center justify-center "
            />
          </div>
          <div className="h-auto sm:h-[300px] w-[49%] lg:w-[23.5%] overflow-hidden">
            <img
              src={images[1]?.image}
              alt={images[1]?.alt}
              className="h-full w-full object-cover object-center rounded-[6px]"
            />
          </div>
          <div className="w-[49%] lg:w-[23.5%]">
            <NumberCard
            data={figures[2]}
              className="items-center justify-center px-[30px]"
            />
          </div>
          <div className="h-auto sm:h-[300px] w-[49%] lg:w-[23.5%] overflow-hidden rounded-[6px]">
            <img
               src={images[2]?.image}
               alt={images[2]?.alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default FactsFigure;
