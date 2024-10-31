"use client";


const GalleryCard: React.FC<any> = ({ data }: any) => {
    const { imgSrc } = data;
    return (
        <div className="overflow-hidden w-full">
            <img src={imgSrc} alt="gallery" className="w-full min-h-[300px] object-cover"/>
        </div>
    );
};

export default GalleryCard;
