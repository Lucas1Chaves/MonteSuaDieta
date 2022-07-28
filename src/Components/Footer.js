import React from 'react';
import style from './Footer.module.scss'

function Footer(){
    return(
        <footer className={style.footer}>
            <div className={style.texts}>
                <h4>Kroki - Aplicativos de Engenharia Estrutural</h4>
                <h4>@kroki.engenharia ; @lucas1chaves</h4>
            </div>
            <div className={style.texts}>
                <h4>Lucas Chaves de Aguiar</h4>
                <h4>lucaschaves@kroki.com.br</h4>
            </div>
            <h4 className={style.copyright}>Copyright © 2022 Kroki | Powered by Kroki</h4>
           
        </footer>
    )
}

export default Footer