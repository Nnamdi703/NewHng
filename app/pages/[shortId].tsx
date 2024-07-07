import { GetServerSideProps } from 'next';
import connect from '../lib/mongoose';
import Url from '../models/Url';

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
  await connect();

  const { shortId } = params as { shortId: string };
  const url = await Url.findOne({ shortId });

  if (url) {
    res.writeHead(301, { Location: url.originalUrl });
    res.end();
  } else {
    return {
      notFound: true,
    };
  }

  return { props: {} };
};

const Redirect = () => null;
export default Redirect;
