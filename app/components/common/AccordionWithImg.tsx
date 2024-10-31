"use client";
import { useState } from "react";
import ScreenContainer from "./ScreenContainer";
import Accordion from "./SimpleAccordion";
const AccordionWithImg = ({ data, locale }: any) => {
  const { title, src } = data || {};
  const [activeAccordion, setActiveAccordion] = useState<
    number | null
  >(null);
  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };
  const accordData = [
    {
      id: 1,
      title: "Taxation",
      paras: [],
      list: [
        "No personal income tax",
        "A 5% VAT",
        "A flat 15% corporate tax",
        "Withholding tax remittance",
      ],
    },
    {
      id: 2,
      title: "Labor Market",
      paras: [
        "Oman's labor market has 2.7 million workers, with over 65% being expatriates. The country warmly welcomes foreign contributors, supported by robust labor laws that foster a diverse work environment and leverages global skills for national progress.",
      ],
      list: [],
    },
    {
      id: 3,
      title: "Other Incentives and Benefits",
      paras: [],
      list: [
        "Investment projects enjoy incentives under Omani law similar to ‘national projects.",
        "Custom exemptions on the import of plant, machinery and raw materials for five years from the commencement of production.",
        "Favorable terms for debt finance from the domestic banking sector.",
        "Permitted use of long-term leases for land and real estate allocated for investment projects.",
        "Grants foreign investors the right to usufruct agreements that go up to 50 years in free trade zones.",
      ],
    },
    {
      id: 4,
      title: "Judicial and Regulatory System",
      paras: [
        "Oman's judicial system is independent and reliable, with a multi-level court structure where the Commercial Court can rule against governmental bodies. Expropriation is prohibited, adhering to international standards. Investor-friendly policies, efficient dispute resolution, and government accountability underscore Oman's commitment to economic development and investor protection.",
      ],
      list: [],
    },
    {
      id: 5,
      title: "Foreign Direct Investments (FDI)",
      paras: [],
      list: [
        "100% foreign ownership allowed in most industries under the new Foreign Capital Investment Law.",
        "No restrictions on capital, profit repatriation, or dividend transfers.",
        "No currency exchange risk (pegged to the USD).",
      ],
    },
  ];
  const AraccordData = [
    {
      id: 1,
      title: "الضرائب",
      paras: [],
      list: [
        " لا يوجد ضريبة على الدخل الشخصي",
        "ضريبة قيمة مضافة بنسبة  5%",
        "ضريبة شركات ثابتة بنسبة % 15",
        "تحويل الضرائب المقتطعة",
      ],
    },
    {
      id: 2,
      title: "سوق العمل",
      paras: [
        "يضم سوق العمل في سلطنة عمان 2.7 مليون عامل (تاريخ الإحصائية!)، وأكثر من 65% منهم من الوافدين، وترحب البلاد بشكل كبير بالمساهمين الأجانب، يأتي هذا عبر قوانين عمل قوية تعزز بيئة العمل والاستفادة من المهارات بما يحقق من التقدم الوطني",
      ],
      list: [],
    },
    {
      id: 3,
      title: "حوافز ومميزات أخرى",
      paras: [],
      list: [
        "تتمتع المشاريع الاستثمارية بحوافز بموجب القانون العماني بنفس معاملة المشاريع الوطنية",
        "إعفاءات جمركية على استيراد المصانع والآلات والمواد الخام لمدة خمس سنوات من بدء الإنتاج",
        "شروط ملائمة للتمويل بالدين من القطاع المصرفي المحلي.",
        "السماح باستخدام عقود الإيجار طويلة الأجل للأراضي والعقارات المخصصة للمشاريع الاستثمارية",
        "  تمنح المستثمرين الأجانب حق اتفاقيات الانتفاع التي تصل مدتها إلى 50 عاماً في المناطق الحرة.",
      ],
    },
    {
      id: 4,
      title: "النظام القضائي والتنظيمي",
      paras: [
        "يتميز النظام القضائي في سلطنة عمان بالاستقلالية والموثوقية، حيث يتضمن هيكل محاكم متعدد المستويات، ويمكن للمحكمة التجارية أن تصدر أحكاماً ضد المؤسسات الحكومية. وتلتزم سلطنة عمان بالسياسات الداعمة للمستثمرين وحل النزاعات بشكل فعال بين المؤسسات والأفراد",
      ],
      list: [],
    },
    {
      id: 5,
      title: "الاستثمارات الخارجية  المباشرة",
      paras: [],
      list: [
        "يُسمح بالملكية الأجنبية بنسبة 100% في معظم الصناعات بموجب قانون استثمار رأس المال الأجنبي الجديد.",
        "لا توجد قيود على رأس المال أو إعادة الأرباح أو تحويل توزيعات الأرباح.",
        "لا يوجد خطر على تحويل العملات (الريال العماني مرتبط بالدولار الأمريكي).",
      ],
    },
  ];
  return (
    <div className="py-[60px] lg:py-[100px]">
      <ScreenContainer>
        <div className="flex h-auto w-full flex-col items-start justify-between gap-[20px] lg:flex-row lg:gap-[30px]">
          <h2 className="mainHeading block lg:hidden rtl:font-TajawalBold ">
            {title}
          </h2>
          <div className="order-2 flex h-full  w-full shrink-0 flex-col gap-[50px] lg:order-1 lg:min-h-[418px] lg:w-[49.20%]">
            <h2 className="mainHeading hidden lg:block rtl:font-TajawalBold ">
              {title}
            </h2>
            <div className="h-auto w-full">
              {(locale === "en"
                ? accordData
                : AraccordData) &&
                (locale === "en"
                  ? accordData
                  : AraccordData
                ).map((item: any, index: number) => {
                  return (
                    <Accordion
                      key={index}
                      data={item}
                      locale={locale}
                      isOpen={activeAccordion === item.id}
                      onClick={() =>
                        toggleAccordion(item.id)
                      }
                      className={
                        index === 0
                          ? "border-b-[1px] border-t-[1px] border-col"
                          : "border-b-[1px] border-col"
                      }
                    />
                  );
                })}
            </div>
          </div>
          <div className="order-1 h-[425px] w-full shrink-0 rounded-[6px] lg:order-2 lg:w-[40.5%]">
            <img
              src={`${src}`}
              className="h-full w-full rounded-[6px] object-cover"
              alt=""
            />
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
};

export default AccordionWithImg;
