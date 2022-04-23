import Head from "next/head";

const HeadComponent = (props) => {
  return (
    <Head>
      <title>V's Portfolio | {props.value}</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
    </Head>
  );
};

export default HeadComponent;
