import React from 'react';
import wppicon from '../../assets/images/icons/whatsapp.svg';
import './styles.css'

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/32915782?s=460&u=4b115edf3177bd27df14d2ca657787d8ed67846c&v=4" alt="Maria Luiza" />
                <div>
                    <strong>Maria Luiza</strong>
                    <span>Geografia</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores nanacas e sonecas.
                        <br /><br />
                        Apaixonada por dormir numa cama quentinha e por fazer pessoas dormir de tedio.
                        Mais de 3000 pessoas ja capotaram com as minhas aulas!
                    </p>
            <footer>
                <p> Preço/hora
                            <strong> R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={wppicon} alt="whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;