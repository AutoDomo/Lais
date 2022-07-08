import * as styled from "./styles";
import Sidebar from "../../components/sidebar";
import MobileModal from "./mobile"; 

import { getSettingsRoutes } from "../../routes";
import { Link, Outlet } from "react-router-dom";



export default function Settings() {

    let settingsRoutes = getSettingsRoutes();

    return (
       
        <styled.Background>

            <Sidebar />

            <styled.Container>

                <div className="mobile">
                    <MobileModal/>
                </div>

                <div className="desktop">

                    <styled.Header>Configurações</styled.Header>
                    
                    <section>

                   <styled.Nav>
                       
                        {settingsRoutes.map( item =>(
                            <label><Link to={`settings/${item.route}`} key={item.route}
                            >
                                {item.name}
                            </Link></label>
                        ))}
                    </styled.Nav>
                    <styled.Bar />
                        
                    </section>
                    <Outlet />

                </div>    
            </styled.Container> 
        </styled.Background>     
    );
};