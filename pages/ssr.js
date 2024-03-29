import esmOnlyStuff from "parse-json";

export async function getServerSideProps() {
  return {
    props: {
      ssr: true,
      esmTest: esmOnlyStuff(`{"test": "esm"}`),
    },
  };
}

const SSR = ({ ssr, esmTest }) => {
  return (
    <div>
      <pre>{JSON.stringify({ ssr, esmTest }, null, 2)}</pre>
    </div>
  );
};

export default SSR;
