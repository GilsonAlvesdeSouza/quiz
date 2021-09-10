export default class RespostaModel{
    readonly #valor: string;
    readonly #certa: boolean;
    readonly #revelada: boolean;

    constructor(valor: string, certa: boolean, revelada = false) {
        this.#valor = valor;
        this.#certa = certa;
        this.#revelada = revelada;
    }

    static certa(valor: string){
        return new RespostaModel(valor, true);
    }

    static errada(valor: string){
        return new RespostaModel(valor, false);
    }

    get valor(): string {
        return this.#valor;
    }

    get certa(): boolean {
        return this.#certa;
    }

    get revelada(): boolean {
        return this.#revelada;
    }
}