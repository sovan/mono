import { Route, Routes } from "react-router-dom";
import Structure from "./Structure";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Structure />} />
      <Route path="/:pageName" element={<Structure />} />
      <Route path="/:pageName/:operation" element={<Structure />} />
    </Routes>
  );
};
export default Routers;
