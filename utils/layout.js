import Head from "next/head";

function Layout({ title, content }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="Bookings, Hotels, next"></meta>
      <link rel="icon" href="images/hotel.jpg" />
    </Head>
  );
}

export default Layout;
