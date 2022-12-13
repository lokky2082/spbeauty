import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div>
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='d-flex flex-row mt-5 justify-content-between gap-5'>
                <General/>  {/* Основная информация вроде названия, типа и телефона */}
                <Addresses className="flex-grow-0" /> {/* Список доступных адресов заведений */}
            </div>
        </div>
    );
}

export default AboutCompany;