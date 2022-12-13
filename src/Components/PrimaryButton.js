import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth; 
    const Button = styled.div`
        background: var(--btn-primary-bg-color);
        border-radius: var(--btn-rad);
        min-width: ${minWidth};
        color: var(--btn-primary-color);
        font-size: 15px;
        font-weight: 500;
        &:hover {
            background: var(--btn-primary-hover-bg);
        }
        &:active {
            background: var(--btn-primary-active-bg);
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;