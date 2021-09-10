import RespostaModel from "./resposta";

export default class QuestaoModel{
    readonly #id: number;
    readonly #enunciado: string;
    readonly #respostas: RespostaModel[];
    readonly #acertou: boolean;

    constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false) {
        this.#id = id;
        this.#enunciado = enunciado;
        this.#respostas = respostas;
        this.#acertou = acertou;
    }

    get id(): number {
        return this.#id;
    }

    get enunciado(): string {
        return this.#enunciado;
    }

    get respostas(): any[] {
        return this.#respostas;
    }

    get acertou(): boolean {
        return this.#acertou;
    }

    get respondida(){
        // for (const resposta of this.#respostas) {
        //     if (resposta.revelada){
        //         return true;
        //     }
        // }
        // return false;

        return this.#respostas.reduce((validar, atual) => {
            if (atual.revelada) return true;
            return validar;
        }, false);
    }
}