import { type NextPage } from "next";
import { api } from "../utils/api";
import Title from "../layout/Title";
import Tabela from "../components/Tabela";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Title title={"Tabela"}/>
      <main>
        <div className="w-full flex items-center justify-center h-screen">
            <Tabela/>
        </div>
      </main>
    </>
  );
};

export default Home;
