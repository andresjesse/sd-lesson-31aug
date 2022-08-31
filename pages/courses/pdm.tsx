import { GetServerSideProps } from "next";

interface PdmProps {
  dynamic: number;
}

export default function Pdm({ dynamic }: PdmProps) {
  return (
    <div>
      <h1>Programação para DIspositivos Móveis</h1>
      <div>{dynamic}</div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      dynamic: Math.random(),
    },
  };
};
