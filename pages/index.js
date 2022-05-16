import Home from '../views/Home';

export default <Home />;

const getStaticProps = async () => {
  return {
    props: {
      title: 'Home',
    },
  };
}