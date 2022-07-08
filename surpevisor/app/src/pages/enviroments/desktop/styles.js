import styled from "styled-components";
import { TransparentListItem } from "../../../assets/Theme/components/TransparentList";

export const IconWrapper = styled.div`
    display: flex;

    i {
        margin-right: 12px;
    };
`;

export const EnviroTransparentListItem = styled(TransparentListItem)`
    justify-content: space-between;

    span {
        width: auto;
    };
`;