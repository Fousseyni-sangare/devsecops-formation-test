import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/app/Layout";
import { Home, NoMatch } from "@/pages";
import Login from "@/pages/Login/ui/Page";
import RegisterUniversity from "@/pages/RegisterUniversity/ui/Page";
import RegisterEnterprise from "@/pages/RegisterEnterprise/ui/Page";
import RegisterConsultant from "@/pages/RegisterConsultant/ui/Page";
import RegisterChoice from "@/pages/RegisterChoice/ui/Page";
import Digitaliser from "@/pages/Digitaliser/ui/Page";
import Check from "@/pages/Check/ui/Page";
import CheckConfirm from "@/pages/CheckConfirm/ui/Page";
import CheckFailure from "@/pages/CheckFailure/ui/Page";
import Reference from "@/pages/Reference/ui/Page";
import { SharedDataProvider } from "../context/StateContext"
import PrivateRoutes from "../utils/PrivateRoutes"
import CheckDiplomeConfirm from "@/pages/CheckDiplomeConfirm/ui/Page";

const App: FC = () => {
  return (
    <SharedDataProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-choice" element={<RegisterChoice />} />
          <Route path="/register-university" element={<RegisterUniversity />} />
          <Route path="/register-enterprise" element={<RegisterEnterprise />} />
          <Route path="/register-consultant" element={<RegisterConsultant />} />
          <Route path="/digitaliser" element={<PrivateRoutes Component={Digitaliser} />} />
          <Route path="/add-reference" element={<Reference />} />
          <Route path="/verifier" element={<Check />} />
          <Route path="/verifier-success" element={<CheckConfirm />} />
          <Route path="/verif-dip-success" element={<CheckDiplomeConfirm />} />
          <Route path="/verifier-failure" element={<CheckFailure />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </SharedDataProvider>
  );
};

export default App;
