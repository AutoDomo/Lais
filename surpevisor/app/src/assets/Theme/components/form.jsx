import styled from "styled-components";

const FormStyled = styled.form`
    position: relative;
    width: 100%;

    .last-child {
       margin-bottom: var(--m-md);
   };

   span {
        display: block;
        font-size: var(--fs-sm);
        color: var(--secundary-color-opacity);
        margin-bottom: var(--m-bg);
    };
`;

const Wapper = styled.div`
    margin-bottom: var(--m-bg);
`;

const Label = styled.label`
    position: absolute;
    left: 0;
    color: var(--secundary-color-opacity);
    pointer-events: none;
    font-size: var(--fs-md);
    transition: all 0.4s ease;
`;

const Input = styled.input`
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--secundary-color-opacity);
    background: transparent;
    font-size: var(--fs-md);
    padding: var(--p-sm) 0;
    color: var(--secundary-color-opacity);

    :focus ~ label, :valid ~ label {
            transform: translateY(-1rem);
            font-size: var(--fs-sm);
    };
`;

export default function Form({label, label2}){
    
    return (
        <FormStyled>
            <Wapper>
                <Input id="user" type="text" required />
                <Label htmlFor="user">{label}</Label>
            </Wapper>

            <Wapper className="last-child">
                <Input id="pwd" type="text" required />
                <Label htmlFor="pwd">{label2}</Label>
            </Wapper>
            <span>Esqueceu sua senha?</span>
        </FormStyled>
    );
}