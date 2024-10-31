"use client";
import { ReactNode } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const components: Components = {
  // @ts-ignore
  a: ({
    href,
    children,
  }: {
    href: string;
    children: ReactNode;
  }) => {
    const isPhoneNumber = /^\d+$/.test(href);
    const finalHref = isPhoneNumber ? `tel:${href}` : href;
    return (
      <a
        href={finalHref}
        className={
          isPhoneNumber ? "tel-link" : "external-link"
        }
      >
        {children}
      </a>
    );
  },
};
const RichTextRenderar: React.FC<{
  content: string;
  classNames?: string;
  isRemovePara?: boolean;
  locale?: string;
}> = ({
  content,
  classNames = "",
  isRemovePara = false,
  locale,
}) => {
  return (
    <ReactMarkdown
      className={`${!isRemovePara && "rich-paragraph"} format-link font-normal ltr:font-DINARegular rtl:font-GESndBookRegular ${classNames}`}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  );
};
export default RichTextRenderar;
