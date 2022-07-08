import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
//import userReducer from "./redux/reducers/userReducer";
import { useSelector } from "react-redux";


import Dashboard from "./pages/dashboard/index";
import Devices from "./pages/devices/index";
import Enviroments from "./pages/enviroments";
import Controls from "./pages/controls";
import Settings from "./pages/settings";
import Login from "./pages/login/index";

import AddScreen from "./pages/enviroments/mobile/addScreen";
import DetailsScreen from "./pages/enviroments/mobile/detailsScreen";

import DevicesAddScreen from "./pages/devices/mobile/addScreen";
import DevicesDetailsScreen from "./pages/devices/mobile/detailsScreen";

import ControlsAddScreen from "./pages/controls/mobile/addScreen";
import ControlsDetailsScreen from "./pages/controls/mobile/detailsScreen";

import SettingsAddHouse from "./pages/settings/mobile/addHouse";
import SettingsAptHouse from "./pages/settings/mobile/aptHouse";
import SettingsUsers from "./pages/settings/mobile/users/users";
  import DetailsUsers from "./pages/settings/mobile/users/detailsUsers";
import SettingsInfo from "./pages/settings/mobile/info";
import SettingsChangePassword from "./pages/settings/mobile/changePassword";

/* - - nested - -*/

import NestedAddHouse from "./pages/settings/desktop/addHouse";
import NestedAptHouse from "./pages/settings/desktop/AptHouse";
import NestedUsers from "./pages/settings/desktop/users/users";
import NestedInfo from "./pages/settings/desktop/info";
import NestedChangePassword from "./pages/settings/desktop/ChangePassword";

const SettingsRoutes = [
  {
    name: "Informações do sistema",
    route: "info"
  },

  {
    name: "Usuários",
    route: "users"
  },

  {
    name: "Adicionar casa",
    route: "addhouse"
  },

  {
    name: "Atualizar casa",
    route: "aptHouse"
  },

  {
    name: "Mudar senha",
    route: "changePassword"
  }
]

export function getSettingsRoutes() {
  return SettingsRoutes;
};

function ProtectedRoutes() {
  const isLogged = useSelector(state => state.userReducer.logged);

  return (
    <BrowserRouter>
      {isLogged === true ? (
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/enviroments" element={<Enviroments />} />
            <Route path="enviroments/add" element={<AddScreen />} />
            <Route path="enviroments/details" element={<DetailsScreen />} />

          <Route path="devices" element={<Devices />} />
            <Route path="devices/add" element={<DevicesAddScreen />} />
            <Route path="devices/details" element={<DevicesDetailsScreen />} />

          <Route path="controls" element={<Controls />} />
            <Route path="controls/add" element={<ControlsAddScreen />} />
            <Route path="controls/details" element={<ControlsDetailsScreen />} />

          <Route path="settings" element={<Settings />} >
            <Route path="settings/addhouse" element={<NestedAddHouse />} />
            <Route path="settings/apthouse" element={<NestedAptHouse />} />
            <Route path="settings/users" element={<NestedUsers />} />
            <Route index element={<NestedInfo />} />
            <Route path="settings/info" element={<NestedInfo />}  />
            <Route path="settings/changePassword" element={<NestedChangePassword />} />
          </Route>

            <Route path="settings/addhouse" element={<SettingsAddHouse />} />
            <Route path="settings/apthouse" element={<SettingsAptHouse />} />
            <Route path="settings/users" element={<SettingsUsers />} />
              <Route path="settings/users/details" element={<DetailsUsers />} />
            <Route path="settings/info" element={<SettingsInfo />} />
            <Route path="settings/changePassword" element={<SettingsChangePassword />} />
        </Routes>
      ) : (
        <Routes>
            <Route index element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export const MainRoutes = () => {

    return (
      <ProtectedRoutes />
    );
};
