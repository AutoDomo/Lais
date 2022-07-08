import styled from "styled-components";

/* - - - - mobile - - - - -*/

export const Container = styled.div`
    width: 100%;
    overflow: auto;
`;

export const Nav = styled.nav`

    a {
        display: flex;
        align-items: center;
        font-weight: var(--f-medium);
        font-size: var(--fs-xmd);
        padding: 12px 0;
    }
    
    a > i {
        margin-right: 12px;
    }
`;

export const NavBox= styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    padding: var(--p-md);
    height: 100vh;
    background: var(--main-color-opacity);
    transform: ${ props => props.isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: all 0.4s ease;
`;

export const LogoBox = styled.div`
    height: var(--h-xs);
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        
        display: flex;
        align-items: center;

        img {
            width: 36px;
            margin-right: var(--m-sm);
        };
    };

    .logo {
        display: block;
        font-size: var(--fs-bg);
        font-weight: var(--f-semi-bold);
        color: var(--secundary-color-opacity);
    }
`;

export const Divider = styled.hr`
    height: 1px;
    margin: var(--m-md) auto; 
    margin-top: var(--m-sm);
    border: 0;
    background: var(--secundary-color-opacity);
`;

export const Shell = styled.div`

    a {
        transition: 0.4s ease;

        :hover {
            transform: scale(1.03);
        };
    };

`;

/* - - - Desktop - - - */

export const ContainerDesktop = styled.div`
    display: none;
    flex-direction: column;
    position: relative;
    background-color: var(--main-color-opacity);
    width: ${props => props.isOpenDesk ? "18rem" : "4rem"};
    height: 100%;
    padding: var(--p-sm);
    border-radius: var(--sm-rounded);
    box-shadow: var(--shadow-1);
    margin-right: var(--m-sm);
    transition: all 0.4s ease;

    @media (min-width: 1024px) {
        display:flex;
    };

    overflow: auto;
`;

import { BarStyled } from "../../assets/Theme/base/Typography";


export const HeaderContent = styled.div`
    position: relative;
    display: flex;
`;

export const LogoBoX = styled.div`
    color: var(--secundary-color-opacity);
    display: flex;
    height: var(--h-xs);
    width: 100%;
    align-items: center;
    opacity: ${props => props.isOpenDesk ? "1" : "0"};
    pointer-events: none;
`;

export const LogoTitle = styled.div`
    font-size: var(--fs-md);
    font-weight: var(--f-semi-bold);
`

export const HamburgerBtn = styled.button`
    color: var(--secundary-color-opacity);
    background: none;
    border: 0;
    position: ${props => props.isOpenDesk ? "none" : "absolute"};
    width: ${props => props.isOpenDesk ? "var(-w-xs)" : "100%"};
    height: ${props => props.isOpenDesk ? "auto" : "100%"};
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        transition: 0.4s ease;
        transform: scale(1.03);
    };
`;

export const Bar = styled(BarStyled)`
    margin-bottom: var(--m-bg);
`;

export const List = styled.ul`
    overflow-y: scroll;
`;

export const ListItem = styled.li`
    width: 100%;
    list-style: none;
    line-height: 3rem;
    margin: 0 5px;
    transition: all 0.3s ease; 
    
     a {
        color: var(--secundary-color-opacity);
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: all 0.4s ease;

        :hover {
        transform: scale(1.05);
    };
    
    }; 

    i {
      margin-right: 0.75rem;
        cursor: pointer;
    }; 
 
    
`;

export const ItemName= styled.span`
    opacity: ${props => props.isOpenDesk ? "1" : "0"};
    pointer-events: ${props => props.isOpenDesk ? "auto" : "none"};
    cursor: pointer;
`;
