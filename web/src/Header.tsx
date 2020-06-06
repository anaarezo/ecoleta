import React from 'react';

// title? = não obrigatório title: obrigatório
interface HeaderProps {
	title: string;
}

//Sempre deixar letra maiúscula no nome do componente //FC = Function componente, componente escrito em forma de função
// Maneira mais escalável de manter o sistema
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header;