"use client";
import NumberCard from "../common/NumberCard";
import ScreenContainer from "../screencontainer/ScreenContainer";
const KeyIndicator = ({
  data,
  classStyleMain = "",
  locale,
}: any) => {
  const { title, cards, imageUrl } = data || {};
  const [firstCard, secondCard, thirdCard] = cards || [];

  return (
    <div className={`${classStyleMain} `}>
      <ScreenContainer>
        <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[50px]">
          {title && (
            <h2 className="mainHeading rtl:font-TajawalBold">
              {title}
            </h2>
          )}
          <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[24px]">
            <NumberCard
              data={firstCard}
              locale={locale}
              className="items-start justify-center lg:items-center"
            />
            <div className="h-[200px] w-full overflow-hidden rounded-[6px] md:h-[380px] lg:h-[425px]">
              <img
                src={`/assets/images/about/sultanate-of-oman/key-indicator.jpg`}
                alt="Key Indicator - Sultanate of Oman"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col  gap-[24px] md:flex-row">
              <div className="w-full grow">
                <NumberCard
                  data={secondCard}
                  locale={locale}
                  className="items-start px-[30px] "
                />
              </div>
              <div className="w-full grow">
                <NumberCard
                  data={thirdCard}
                  locale={locale}
                  className="items-start px-[30px] "
                />
              </div>
            </div>
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default KeyIndicator;
