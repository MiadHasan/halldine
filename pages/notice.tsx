import Head from "next/head";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Notice</title>
      </Head>
      <Layout>
        <h1>Notice</h1>
        {/* notices and create notice form will be added */}
      </Layout>
    </>
  );
}