import axios from 'axios'
import ErroValidacao from '../app/validacao'

const httpClient = axios.create({
    //baseURL: 'http://cdn.apicep.com/file/apicep',
    baseURL: 'http://opencep.com/v1'
})

class ApiService {

    constructor(apiurl){
        this.apiurl = apiurl;
        
    }

    post(url, objeto){
        const requestUrl = `${url}`
        return httpClient.post(requestUrl, objeto);
    }

    put(url, objeto){
        const requestUrl = `${url}`
        return httpClient.put(requestUrl, objeto);
    }

    delete(url){
        const requestUrl = `${url}`
        return httpClient.delete(requestUrl)
    }

    get(url){
        const requestUrl = `${url}`
        return httpClient.get(requestUrl)
    }

    validarcampo(endereco)
    {
        const erros =  []
        if(!endereco.cep)
        {
            erros.push("O campo CEP é Obrigatorio!");
        }
        if(endereco.cep.length !== 8)
        {
            erros.push("CEP não possui 8 Dígitos!");
        }
        if(erros && erros.length > 0){
            throw new ErroValidacao(erros);
        }

    }
    consultar(endereco)
    {
            return this.get(`/${endereco.cep}`)
            // return get(`/${endereco.cep}.json`)
    }

    obterListadeBairros()
    {
        return[
            "Alto da Vitoria", "Anjo da Guarda", "Fumacê",
"Gancharia", "Itaqui", "Vila Verde", "Alto da Esperança","Mauro Fecury I", "Mauro Fecury II", "ResidencialAna Jansen"," São Raimundo", "Tamancão", "Vila Ariri", "Vila Nova", "Vila São Luís", "Vila São Mateus",
"Jambeiro", "Sa Viana", "Vila Bacanga","Vila Cerâmica", "Vila Dom Luís", "Vila Isabel", "Vila Real", "América do Norte", "Argola e Tambor", "Cidade Nova", "Gapara", "Residencial Paraiso", "Residencial Primavera",
"Residencial", "Resende", "São Benedito", "Vila da Paz", "Vila Embratel ","Vila Embratel I", "Vila Embratel II", "Vila São João",
"Vila São João da Boa Vista", "Vila Zagueiro", "Vila Maranhão", "Taim", "Rio dos Cachorros", "Cajueiro", "Porto Grande", "Vila Conceição"," Vila São Benedito", "Limoeiro", "Parnuaçu", "Jardim São Joaquim" , "Vila Tiradentes" ]
        
    }
    
}

export default ApiService;