import Head from "next/head";

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Lexend+Deca:100,200,300,regular,500,600,700,800,900"
        rel="stylesheet"
      />
    </Head>

    {children}
  </div>
);

export default Layout;
