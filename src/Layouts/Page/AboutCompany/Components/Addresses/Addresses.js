import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex flex-column gap-2 sheet p-5 flex-grow-1'>
            <div className='title mb-4'>Адреса заведений</div>
            <div className='d-inline-flex flex-grow-1 flex-column justify-content-between gap-3'>
                <div>
                    <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
                <SecondaryButton className="mt-5">Добавить филиал</SecondaryButton>
            </div>
        </div>
    );
}

export default Addresses;