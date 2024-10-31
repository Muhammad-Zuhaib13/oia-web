"use client";
import { useRouter } from "next/navigation";

const ContactButton = ({ className="", locale }: any) => {
  const router = useRouter();

  const handleNavigation = () => {
    const localizedPath = `/${locale}/contact-us`;
    router.push(localizedPath);
  };

  return (
    <>
      <button className={`ctaBordered flex items-center gap-[20px] justify-between ${className}`} onClick={handleNavigation} >
        <span className="rtl:font-TajawalMedium">{locale === "en" ? "CONTACT US" : "اتصل بنا"}</span>
        <span className="flex flex-col justify-center">
          <img
            src="/assets/icons/arrow-sq.svg"
            alt="contact us"
            className="shrink-0 rtl:rotate-180"
          />
        </span>
      </button>
    </>
  );
};

export default ContactButton;
