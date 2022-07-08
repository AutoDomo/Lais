import { useNavigate } from "react-router-dom";
import {
    TransparentList,
    TransparentListItem,
    TransparentElement,
    TransparentIcon
} from "../../../assets/Theme/components/TransparentList/index";

const mobileList = [

    {
        description: "Adicionar casa",
        icon: "bx bx-sm  bx-chevron-right",
        route: "/settings/addhouse"
    },

    {
        description: "Atualizar casa",
        icon: "bx bx-sm  bx-chevron-right",
        route: "/settings/apthouse"
    },

    {
        description: "Usuários",
        icon: "bx bx-sm  bx-chevron-right",
        route: "/settings/users"
    },

    {
        description: "Informações do sistema",
        icon: "bx bx-sm  bx-chevron-right",
        route: "/settings/info"
    },

    {
        description: "Mudar senha",
        icon: "bx bx-sm  bx-chevron-right",
        route: "/settings/changePassword"
    },
];

export default function MobileModal() {

    let navigate = useNavigate();

    return (
        <TransparentList>
            {mobileList.map(item => (
                <TransparentListItem>
                    <TransparentElement>{item.description}</TransparentElement>
                    <TransparentIcon className={item.icon}onClick={() => {
                        navigate(`${item.route}`)
                    }}></TransparentIcon>
                </TransparentListItem>
            ))}
        </TransparentList>
    );
};