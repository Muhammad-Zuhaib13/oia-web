import ImageBanner from "@/app/components/banners/ImageBanner";
import ContactForm from "@/app/components/contact-us/ContactForm";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";


export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({
    locale,
    namespace: "Contact",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
  };
}
interface ContactProps {
  params: {
    locale: string;
  };
}
const Contact: React.FC<ContactProps> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Contact");
  type BannerData = {
    title: string;
    description?: string;
    image: string;
    logoTitle?: boolean;
    locale?: string;
  };

  const bannerData: BannerData = {
    title: t("banner.title"),
    // description: t("banner.description"),
    image: "/assets/images/others/contact-img-banner.svg",
    locale: locale,
  };
  const bannerDataAr: BannerData = {
    title:"تواصل معنا",
    // description: t("banner.description"),
    image: "/assets/images/others/contact-img-banner.svg",
    locale: locale,
  };
  const contactDetails: any = {
    emailHeading: t("contactInfo.emailHeading"),
    phoneHeading: t("contactInfo.phoneHeading"),
    addressHeading: t("contactInfo.addressHeading"),
    locale: locale,
    addressDetails:  [
      {
        id: 1,
        label: t("contactInfo.address.label"),
        phoneNumber: t("contactInfo.address.0.phoneNumber"),
        locale: locale,
      },
      {
        id: 1,
        label: t("contactInfo.phone.1.label"),
        phoneNumber: t("contactInfo.phone.1.phoneNumber"),
        locale: locale,
      },
    ],
    callDetails: [
      {
        id: 1,
        label: t("contactInfo.phone.0.label"),
        phoneNumber: t("contactInfo.phone.0.phoneNumber"),
        locale: locale,
      },
      {
        id: 1,
        label: t("contactInfo.phone.1.label"),
        phoneNumber: t("contactInfo.phone.1.phoneNumber"),
        locale: locale,
      },
    ],
    formLabels: [
      {
        id: 1,
        label: t("formLabels.0.label"),
        placeholder: t("formLabels.0.placeholder"),
        locale: locale,
      },
      {
        id: 2,
        label: t("formLabels.1.label"),
        placeholder: t("formLabels.1.placeholder"),
        locale: locale,
      },
      {
        id: 3,
        label: t("formLabels.2.label"),
        placeholder: t("formLabels.2.placeholder"),
        locale: locale,
      },
      {
        id: 4,
        label: t("formLabels.3.label"),
        placeholder: t("formLabels.3.placeholder"),
        locale: locale,
      },
      {
        id: 5,
        label: t("formLabels.4.label"),
        locale: locale,
      },
      {
        id: 6,
        label: t("formLabels.5.label"),
        locale: locale,
      },
    ],
  };
  // console.log("--------------------------",contactDetails);
  

  return (
    <div className="contact-us-page">
      <div>
      <ImageBanner data={locale==="en"?bannerData:bannerDataAr} />
      </div>
      <div>
        <ContactForm data={contactDetails} locale={locale} />
      </div>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14624.226129812234!2d58.4233111!3d23.6023054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f966250d15e5%3A0x7e22a8160ce27ae5!2sOman%20Investment%20Authority!5e0!3m2!1sen!2s!4v1719992586854!5m2!1sen!2s"
          width="100%"
          height="550"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
