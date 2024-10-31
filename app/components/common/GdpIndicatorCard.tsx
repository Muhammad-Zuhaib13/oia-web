"use client";

const GdpIndicatorCard = ({data, locale}: any) => {
  const { title, desc } = data;

  return (
    <div
      className={`w-full sm:w-[49%] md:w-[49%] lg:w-[49%] rounded-[4px] bg-[#FDF9EE] py-[40px] px-[30px] `}
    >
        {title && (
            <h5 className="subHeading mb-[30px]">
                {title}
            </h5>
        )}
        {desc && (
            <h2 className="">
                {desc}
            </h2>
        )}
    </div>
  );
};

export default GdpIndicatorCard;
