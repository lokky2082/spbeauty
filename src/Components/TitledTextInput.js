import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: var(--rad-base);
    border: var(--inp-border);
    background-color: var(--inp-bg);
    color: var(--text-base-color);
`;

function TitledTextInput({title, def, placeholder}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div className="caption grey-text">{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input placeholder={placeholder} className='px-3 py-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;