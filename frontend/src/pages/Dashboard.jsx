import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";

export const Dashboard = () => {
  return (
    <>
      <Appbar />
      <Balance value={"10000"} />
    </>
  );
};
