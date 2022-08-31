import { GetStaticProps } from "next";

interface SdProps {
  content: Array<string>;
}

export default function Sd({ content }: SdProps) {
  return (
    <div>
      <h1>Sistemas Distribuídos</h1>

      {content.map((fruit) => (
        <div>{fruit}</div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const content = ["Next Setup", "Database config", "CSS Styles"];

  return {
    props: {
      content,
    },
    revalidate: 10,
  };
};
