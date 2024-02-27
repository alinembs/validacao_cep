import React from 'react';


const Informacao = ({ endereco }) => {
   
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Bairro</th>
                    <th scope="col">CEP</th>
                    <th scope="col">Localidade</th>
                    <th scope="col">Logradouro</th>
                    <th scope="col">UF</th>
    
                </tr>
            </thead>
            <tbody>

                 
                        <td>{endereco.bairro}</td>
                        <td>{endereco.cep}</td>
                        <td>{endereco.localidade}</td>
                        <td>{endereco.logradouro}</td>
                        <td>{endereco.uf}</td>
                        
            </tbody>
        </table>
    );
};

export default Informacao;