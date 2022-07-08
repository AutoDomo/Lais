import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DefaultList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    gap: var(--p-xs);


`;

const ListItem = styled.li`
    height: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--p-md);
    border-radius: var(--sm-rounded);
    background: var(--secundary-color-opacity);
    color: var(--main-color-opacity);


    span {
        display: flex;
        align-items: center;

        cursor: pointer;

        i {
            margin-right: var(--m-sm);
        }
    }

    .desktop-item {

        display: none;
        @media (min-width: 1024px) {
            display: block;
        };
    }
`;

const DescriptionItem = styled.li`
    height: 3rem;
    display: none;

    @media (min-width: 1024px) {
             display: flex;
    };
    
    justify-content: space-between;
    align-items: center;
    padding: var(--p-md);
    border-radius: var(--sm-rounded);
    background: var(--secundary-color-opacity);
    color: var(--main-color-opacity);
    margin-bottom: var(--m-bg);

    span {
        display: flex;
        align-items: center;

        i {
            margin-right: var(--m-sm);
        }
    }
`;


export default function List({data, actionIcon, Description, route}) {

    let navigate = useNavigate();

    return (
        <DefaultList>

            <DescriptionItem >
        
                {Description?.map(item => (
                    <span>{item.title}</span>
                ))}

            </DescriptionItem>
        
            {data.map(item => (
                <ListItem>
                        <span>
                            <i className={item.icon}></i>
                            {item.description}
                        </span>

                        <span className="desktop-item">{item.enviroment}</span>

                        <span className="desktop-item">
                            {item.type}
{/*                             <i class='bx bx-sm bx-dots-vertical-rounded' ></i> 
 */}                        </span>

                        <span className="desktop-item">{item.code}</span>
                        <span className="desktop-item">{item.typeN}</span>
                                        
                        <span>
                            <i className={actionIcon} onClick={() => {
                                navigate(`${route}`)
                            }}></i>
                        </span>
                </ListItem>
            ))} 
        </DefaultList>
    );
};