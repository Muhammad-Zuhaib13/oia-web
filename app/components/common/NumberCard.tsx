"use client";

const NumberCard = ({
  data,
  locale,
  className = "w-full ",
}: any) => {
  const { title, value, desc, year } = data || {};

  return (
    <div
      className={`flex lg:min-h-[253px] h-full flex-col justify-center rounded-[4px] bg-[#FFFFFF] py-[20px] sm:py-[30px] lg:py-[50px] gap-[20px]  lg:gap-[30px]  px-[20px] ${className} `}
    >
      {title && (
        <h5 className="innerIndicatorsLabels rtl:font-TajawalRegular">
          {title}
        </h5>
      )}
      {value && (
        <h2 className="cardFigures font-poppinsSemiBold ">
          {value}
        </h2>
      )}
      {(desc || year) && (
        <h5 className="innerIndicatorsLabels rtl:font-TajawalRegular">
          {desc}
          {year && (
            <span className="font-poppinsRegular">{year}</span>

          )}
        </h5>
      )}
    </div>
  );
};

export default NumberCard;
