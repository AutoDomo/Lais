import React, {useState} from "react";
import * as styled from "./styles";
import AutodomoLogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const menu = [

    {
        title: "Dashboard",
        url: "/",
        icon: "bx bxs-dashboard bx-md icon-reset",
        iconSm: "bx bxs-dashboard bx-sm icon-reset"
    },

    {
        title: "Ambientes",
        url: "/enviroments",
        icon: "bx bx-image-alt icon-reset bx-md",
        iconSm: "bx bx-image-alt icon-reset bx-sm"
    },

    {
        title: "Dispositivos",
        url: "/devices",
        icon: "bx bx-devices bx-md",
        iconSm: "bx bx-devices bx-sm"
    },

    {
        title: "Controles",
        url: "/controls",
        icon: "bx bx-wifi icon-reset bx-md",
        iconSm: "bx bx-wifi icon-reset bx-sm"
    },

    {
        title: "Configurações",
        url: "/settings",
        icon: "bx bx-cog bx-md",
        iconSm: "bx bx-cog bx-sm"
    }
];


export default function Sidebar({ isOpen, onClose}) {

    const [isOpenDesk, setIsOpenDesk] = useState(true);

    return (
        <>
            <div className="mobile">
                <styled.Container>
                    <styled.Nav onClick={onClose}>
                        
                        <styled.NavBox isOpen={isOpen}>

                            <styled.LogoBox>
                                <div>
                                    <img src="/src/assets/images/logo.png" width="32" alt="logo" />
                                    <div className="logo">AutoDomo</div>
                                </div>
                                <i className='bx bx-menu bx-sm icon-reset' onClick={onClose}/>
                            </styled.LogoBox>

                        <styled.Divider />

                            <styled.Shell onClick={e => e.stopPropagation()}>
                                {menu.map( item => (
                                    <Link
                                        key={item.url}
                                        to={item.url}
                                        className="link-reset"
                                    >
                                        <i className={item.icon}/>
                                        {item.title}
                                    </Link>
                                ))}
                            </styled.Shell>
                            
                        </styled.NavBox>

                    </styled.Nav>
                </styled.Container>
            </div>

            <div className="desktop">
                <styled.ContainerDesktop isOpenDesk={isOpenDesk}>
                    <div>
                        <styled.HeaderContent>

                            <styled.LogoBoX isOpenDesk={isOpenDesk}>
                                <img
                                    src={AutodomoLogo}
                                    width="32"
                                    height="32"
                                    alt="User"
                                />
                                <styled.LogoTitle>AutoDomo</styled.LogoTitle>
                            </styled.LogoBoX>

                            <styled.HamburgerBtn
                                isOpenDesk={isOpenDesk}
                                onClick={() => setIsOpenDesk(!isOpenDesk)}
                            >
                                <i className='bx bx-menu bx-sm icon-reset'/>
                            </styled.HamburgerBtn>

                        </styled.HeaderContent>
                    </div>

                    <styled.Bar />

                    <styled.List>

                        <styled.ListItem>
                            {menu.map(item => (
                                <Link
                                    key={item.url}
                                    to={item.url}
                                    className="link-reset"
                                    
                                >
                                    <i className={item.iconSm}/>
                                    <styled.ItemName
                                        isOpenDesk={isOpenDesk}
                                        

                                    >
                                        {item.title}
                                    </styled.ItemName>
                                </Link>
                            ))}
                        </styled.ListItem>

                    </styled.List>
                </styled.ContainerDesktop>
            </div>
        </>
        
    );
};