import Head from "next/head";

export function MetaHead({ title }) {
  return (
    <>
      <Head>
        <title>
          {title || "Title"} | Shri Balaji Global Insurance Private Limited
        </title>
      </Head>
    </>
  );
}
