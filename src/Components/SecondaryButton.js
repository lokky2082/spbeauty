import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
        background: var(--btn-secondary-bg-color);
        border: var(--btn-secondary-border);
        border-radius: var(--btn-rad);
        min-width: ${minWidth};
        color: var(--btn-color);
        font-weight: 500;
        &:hover {
            border-color: transparent;
            background: var(--btn-secondary-hover-bg);
        }
        &:active {
            border-color: transparent;
            background:var(--btn-secondary-active-bg);
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;