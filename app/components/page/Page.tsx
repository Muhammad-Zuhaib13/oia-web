import { forwardRef, ReactNode, Ref } from "react";
import Head from "next/head";
// import { Box, BoxProps } from "@mui/material";

// interface Props extends BoxProps {
  interface Props  {

children: ReactNode;
  meta?: ReactNode;
  title: string;
}

const Page = forwardRef<HTMLDivElement, Props>(
  (
    { children, title = "", meta, ...other }: any,
    ref: Ref<HTMLDivElement>
  ) => (
    <>
      <Head>
        <title>{`${title} | OIA`}</title>
        {meta}
      </Head>
      <div ref={ref} {...other}>
        {children}
      </div>
    </>
  )
);
Page.displayName = "Page";
export default Page;
