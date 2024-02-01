export async function getServerSideProps() {
  return {
    props: {
      ssr: true,
    },
  };
}

const SSR = ({ ssr }) => {
  return (
    <div>
      <pre>{JSON.stringify({ ssr }, null, 2)}</pre>
    </div>
  );
};

export default SSR;
