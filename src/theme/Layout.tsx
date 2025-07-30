import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import Head from '@docusaurus/Head';

export default function Layout(props) {
  // disable dark reader
  return (
    <>
      <Head>
        <meta name="darkreader-lock" ></meta>
      </Head>
      <OriginalLayout {...props} />
    </>
  );
}
