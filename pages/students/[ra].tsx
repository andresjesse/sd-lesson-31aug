import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export default function Student() {
  const router = useRouter();

  const { ra } = router.query;

  return <div>Student: {ra}</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("backend", context.query);

  const { ra } = context.query;

  console.log("acessando o banco para obter os dados do ra> ", ra);

  return {
    props: {
      dynamic: Math.random(),
    },
  };
};
