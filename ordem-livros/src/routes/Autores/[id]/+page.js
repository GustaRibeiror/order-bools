import autores from "../../../constants/autores";

export function load(dados) {
    const autorId = dados.params.id;

    for (let autor of autores) {
        if (autor.id == autorId) {
            return { autor };
        }
    }
}

