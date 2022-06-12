import Head from "next/head";

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Hibike! Euphonium</title>
      <meta name="description" content="Hibike! Euphonium" />
      <link rel="icon" href="/icon/logo-hibike-euphonium.png" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="keywords" content="Hibike Euphonium" />
      <link
        href="https://fonts.googleapis.com/css?family=Lexend+Deca:100,200,300,regular,500,600,700,800,900"
        rel="stylesheet"
      />
    </Head>
    {children}
  </div>
);

export default Layout;
