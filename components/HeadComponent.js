import Head from "next/head";

function HeadComponent(props) {
  return (
    <Head>
      <title>Vs Portfolio |{props.value}</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </Head>
  );
}

export default HeadComponent;
