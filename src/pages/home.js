import { useRouter } from "next/router";
import React, { useState } from "react";

const home = ({ query }) => {


  return (
    <>
     
    </>
  );
};

export default home;

export async function getServerSideProps(context) {
  const query = context.query;

  return {
    props: {
      query,
    }, // will be passed to the page component as props
  };
}
