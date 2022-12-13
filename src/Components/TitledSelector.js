import styled from "styled-components";

const Select = styled.select`
    background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.8334 7.5L10.0001 13.3333L4.16675 7.5' stroke='%230F172A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A") no-repeat;
    background-position: calc(100% - 0.75rem) center !important;
    -moz-appearance:none !important;
    -webkit-appearance: none !important; 
    appearance: none !important;
    outline: none;
    border-radius: var(--rad-base);
    border: var(--inp-border);
    background-color: var(--inp-bg);
    color: var(--text-base-color);
`;

function TitledSelector({title, options}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div className="caption grey-text">{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Select className='px-3 py-2'>
                {options.map(optionName => {
                    return (
                        <option key={optionName}>{optionName}</option>
                    );
                })}
            </Select>
        </div>
    );
}

export default TitledSelector;