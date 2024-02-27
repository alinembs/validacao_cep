import React from 'react'
import ApiService from '../app/apiservice'
import * as messages from '../app/toastr'
import Informacao from '../app/informacao'
function ConsultaCep() {

    const [cep, setCep] = React.useState('')
    const [bairro, setbairro] = React.useState('')
    const [complemento, setcomplemento] = React.useState('')
    const [ibge, setibge] = React.useState('')
    const [localidade, setlocalidade] = React.useState('')
    const [logradouro, setlogradouro] = React.useState('')
    const [uf, setuf] = React.useState('')
    const endereco = {
        cep, bairro, complemento, ibge, localidade, logradouro, uf
    };
    const service = new ApiService();
    const itaqui_bacanga = service.obterListadeBairros();

    const buscar = () => {
        setbairro('');
        setcomplemento('');
        setibge('');
        setlocalidade('')
        setuf('');
        setlogradouro('');
        try {
            service.validarcampo(endereco)
        }
        catch (erro) {
            const mensagens = erro.mensagens;
            mensagens.forEach(msg => messages.mensagemErro(msg));
            return false;
        }

        service.consultar(endereco).then(resposta => {
            // messages.mensagemSucesso('Busca Feita Com Sucesso.');
            console.log(resposta.data);
            if (itaqui_bacanga.includes(resposta.data.bairro)) {
                messages.mensagemSucesso('O CEP é Válido!');
                setbairro(resposta.data.bairro);
                setcomplemento(resposta.data.complemento);
                setibge(resposta.data.ibge);
                setlocalidade(resposta.data.localidade)
                setuf(resposta.data.uf);
                setlogradouro(resposta.data.logradouro);
            }
            else {
                messages.mensagemAlert('O CEP não é Válido!');
            }

        })
            .catch(error => {
                messages.mensagemErro(error.response.data)
            });
    }


    return (
        <div className="row  row-cols">
            <div className="col-md-6 offset-md-3" >
                <div className="bs-docs-section">
                    <div className="card md-3">
                        <h3 className="card-header">VALIDCEP do Itaqui-Bacanga</h3>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputCEP">CEP: *</label>
                                                <input type="CEP"
                                                    value={cep}
                                                    onChange={e => setCep(e.target.value)}
                                                    className="form-control"
                                                    id="exampleInputCEP" />
                                            </div>
                                            <div className="row">
                                                <div className="col" style={{ margin: '2%' }}>
                                                    <button onClick={buscar} className="btn btn-info">
                                                        <i className="pi pi-search"></i>Buscar</button>
                                                </div>
                                            </div>
                                        </fieldset>

                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="bs-component">
                                                <Informacao
                                                    endereco={endereco}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ConsultaCep