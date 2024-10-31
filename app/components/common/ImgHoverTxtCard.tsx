interface DataItem {
    id?: number;
    image?: string;
    name?: string;
    role?: string;
    locale?: string;
  }
  
  const ImgHoverTxtCard: React.FC<{ data: DataItem }> = ({ data }) => {
    return (
      <div className="bom-cards w-full max-w-[297px] h-[300px] sm:h-[350px]">
        <div className="bom-cardImg h-full">
          <img
            src={data?.image}
            alt={data?.name}
            className="bom-image sm:min-h-[350px] min-h-[200px]"
          />
        </div>
        <div className="bom-link-hover lg:gap-[18px] sm:gap-[16px] gap-[10px] lg:bottom-[20px] sm:bottom-[30px] bottom-[12px] lg:px-[20px] sm:px-[30px] px-[12px]">
          <p className="profileCard rtl:font-TajawalBold ">
            {data?.name}
          </p>
          <p className="profileRole rtl:font-TajawalRegular">
            {data?.role}
          </p>
        </div>
      </div>
    );
  };
  
  export default ImgHoverTxtCard;
  