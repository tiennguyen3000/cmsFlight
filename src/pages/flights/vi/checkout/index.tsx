import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Flights from 'views/Flights';

const Index = ({data}): JSX.Element => {
  
  console.log('hello'+JSON.stringify(data));
  return <Flights />;
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let a =context.query.data;
  console.log('hello'+a);
  let b = window.atob(a as string);
  let c = JSON.parse(b);

  return {
    props: {data:c}, // will be passed to the page component as props
  }
}
