import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ConsultaCep from './consulta_cep';
function Rotas() {
    return (
        <BrowserRouter>
             <Routes>
                <Route path="/" element={<ConsultaCep/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
