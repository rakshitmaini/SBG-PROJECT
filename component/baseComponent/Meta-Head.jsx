import Head from "next/head";

export function MetaHead({ title }) {
  const head = title ? `${title} | ` : "";
  return (
    <>
      <Head>
        <title>{head} Shri Balaji Global Insurance Solution Pvt. Ltd.</title>
      </Head>
    </>
  );
}
