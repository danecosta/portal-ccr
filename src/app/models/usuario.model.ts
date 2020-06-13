export class Usuario {
    cpf: string;
    nome: string;
    email: string;
    foto: string;
    whatsapp: string;
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;

    constructor(nome = '', email = '', foto = '') { }
}
