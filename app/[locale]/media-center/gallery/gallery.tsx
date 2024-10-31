"use client";

import ImageBanner from "@/app/components/banners/ImageBanner";
import GallerySlider from "@/app/components/gallery-card/GallerySlider";

const Gallery: React.FC<any> = ({ locale, data }) => {
  const bannerData = {
    title: "Gallery",
    description: "",
    image:"/assets/images/banner/gallery-banner.jpg",
    locale: locale,
  };
  const bannerDataAr = {
    title: "الصور الهوية البصرية والصور",
    description: "",
    image: "/assets/images/banner/gallery-banner.jpg",
    locale: locale,
  };
  const galleryThumbnail = {
    title: "Gallery",
    para: "",
    locale: locale,
    card: [
      {
        id: 1,
        imgSrc: "/assets/images/gallery/corp-event/gallery-img-thumb-1.jpg",
        locale: locale,
      },
      {
        id: 2,
        imgSrc: "/assets/images/gallery/corp-event/gallery-img-thumb-2.jpg",
        locale: locale,
      },
      {
        id: 3,
        imgSrc: "/assets/images/gallery/corp-event/gallery-img-thumb-3.jpg",
        locale: locale,
      },
      {
        id: 4,
        imgSrc: "/assets/images/gallery/corp-event/gallery-img-thumb-4.jpg",
        locale: locale,
      },
      {
        id: 5,
        imgSrc: "/assets/images/gallery/corp-event/gallery-img-thumb-5.jpg",
        locale: locale,
      },
      {
        id: 6,
        imgSrc: "/assets/images/gallery/corp-event/gallery-img-thumb-6.jpg",
        locale: locale,
      },
      {
        id: 7,
        imgSrc: "/assets/images/gallery/corp-event/gallery-img-thumb-7.jpg",
        locale: locale,
      }
    ]
  }
  const ARgalleryThumbnail = {
    title: " التقارير السنوية",
    para: "",
    locale: locale,
    card: [
      {
        id: 1,
        imgSrc: "/assets/images/gallery/corp-event/gallery-img-thumb-1.jpg",
        locale: locale,
      },
      {
        id: 2,
        imgSrc: "/assets/images/gallery/corp-event/gallery-img-thumb-2.jpg",
        locale: locale,
      },
      {
        id: 3,
        imgSrc: "/assets/images/gallery/corp-event/gallery-img-thumb-3.jpg",
        locale: locale,
      },
      {
        id: 4,
        imgSrc: "/assets/images/gallery/corp-event/gallery-img-thumb-4.jpg",
        locale: locale,
      },
      {
        id: 5,
        imgSrc: "/assets/images/gallery/corp-event/gallery-img-thumb-5.jpg",
        locale: locale,
      },
      {
        id: 6,
        imgSrc: "/assets/images/gallery/corp-event/gallery-img-thumb-6.jpg",
        locale: locale,
      },
      {
        id: 7,
        imgSrc: "/assets/images/gallery/corp-event/gallery-img-thumb-7.jpg",
        locale: locale,
      }
    ]
  }

  const oiaEventsThumbnail = {
    title: "OIA Events",
    para: "Future Fund Oman Launch",
    locale: locale,
    card: [
      {
        id: 1,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-1.jpg",
        locale: locale,
      },
      {
        id: 2,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-2.jpg",
        locale: locale,
      },
      {
        id: 3,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-3.jpg",
        locale: locale,
      },
      {
        id: 4,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-4.jpg",
        locale: locale,
      },
      {
        id: 5,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-5.jpg",
        locale: locale,
      },
      {
        id: 6,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-6.jpg",
        locale: locale,
      },
      {
        id: 7,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-7.jpg",
        locale: locale,
      },
      {
        id: 8,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-8.jpg",
        locale: locale,
      },
      {
        id: 9,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-9.jpg",
        locale: locale,
      },
      {
        id: 10,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-10.jpg",
        locale: locale,
      }
    ]
  };
  const ARoiaEventsThumbnail = {
    title: " التقارير السنوية",
    para: "",
    locale: locale,
    card: [
      {
        id: 1,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-1.jpg",
        locale: locale,
      },
      {
        id: 2,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-2.jpg",
        locale: locale,
      },
      {
        id: 3,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-3.jpg",
        locale: locale,
      },
      {
        id: 4,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-4.jpg",
        locale: locale,
      },
      {
        id: 5,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-5.jpg",
        locale: locale,
      },
      {
        id: 6,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-6.jpg",
        locale: locale,
      },
      {
        id: 7,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-7.jpg",
        locale: locale,
      },
      {
        id: 8,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-8.jpg",
        locale: locale,
      },
      {
        id: 9,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-9.jpg",
        locale: locale,
      },
      {
        id: 10,
        imgSrc: "/assets/images/gallery/oia-events/oia-event-thumb-10.jpg",
        locale: locale,
      }
    ]
  };
  const mediaBriefingThumbnail = {
    title: "",
    para: "Media Briefing 2024",
    locale: locale,
    card: [
      {
        id: 1,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-1.jpg",
        locale: locale,
      },
      {
        id: 2,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-2.jpg",
        locale: locale,
      },
      {
        id: 3,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-3.jpg",
        locale: locale,
      },
      {
        id: 4,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-4.jpg",
        locale: locale,
      },
      {
        id: 5,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-5.jpg",
        locale: locale,
      },
      {
        id: 6,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-6.jpg",
        locale: locale,
      },
      {
        id: 7,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-7.jpg",
        locale: locale,
      },
      {
        id: 8,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-8.jpg",
        locale: locale,
      },
      {
        id: 9,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-9.jpg",
        locale: locale,
      },
      {
        id: 10,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-10.jpg",
        locale: locale,
      },
      {
        id: 11,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-11.jpg",
        locale: locale,
      },
      {
        id: 12,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-2.jpg",
        locale: locale,
      },
      {
        id: 13,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-13.jpg",
        locale: locale,
      }
    ]
  }
  const ARmediaBriefingThumbnail = {
    title: "",
    para: "Media Briefing 2024",
    locale: locale,
    card: [
      {
        id: 1,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-1.jpg",
        locale: locale,
      },
      {
        id: 2,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-2.jpg",
        locale: locale,
      },
      {
        id: 3,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-3.jpg",
        locale: locale,
      },
      {
        id: 4,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-4.jpg",
        locale: locale,
      },
      {
        id: 5,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-5.jpg",
        locale: locale,
      },
      {
        id: 6,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-6.jpg",
        locale: locale,
      },
      {
        id: 7,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-7.jpg",
        locale: locale,
      },
      {
        id: 8,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-8.jpg",
        locale: locale,
      },
      {
        id: 9,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-9.jpg",
        locale: locale,
      },
      {
        id: 10,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-10.jpg",
        locale: locale,
      },
      {
        id: 11,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-11.jpg",
        locale: locale,
      },
      {
        id: 12,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-2.jpg",
        locale: locale,
      },
      {
        id: 13,
        imgSrc: "/assets/images/gallery/media-briefing/media-brief-thumb-13.jpg",
        locale: locale,
      }
    ]
  }



  return (
    <>
      <ImageBanner data={locale==="en"?bannerData:bannerDataAr} />
      <div className="py-[100px]">
        <GallerySlider data={locale === "en" ? galleryThumbnail : ARgalleryThumbnail}/>
        <GallerySlider data={locale === "en" ? oiaEventsThumbnail : ARoiaEventsThumbnail}/>
        <GallerySlider data={locale === "en" ? mediaBriefingThumbnail : ARmediaBriefingThumbnail}/>
      </div>
     
    </>
  );
};
export default Gallery;
