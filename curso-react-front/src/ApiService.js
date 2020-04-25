const ApiService = {
    ListaAutores: () => {
        return fetch('http://localhost:8000/api/autor')
            .then((res) => res.json());
    },

    CriaAutor: (autor) => {
        return fetch('http://localhost:8000/api/autor', {method: 'POST', headers: {'content-type': 'application/json'}, body: autor})
            .then((res) => res.json());
    },

    ListaNomes: async () => {
        const res = await fetch('http://localhost:8000/api/autor/nome');
        return await res.json();
    },

    ListaLivros: async () => {
        const res = await fetch('http://localhost:8000/api/autor/livro');
        return await res.json();
    },

    RemoveAutor: async (id) => {
        const res = await fetch(`http://localhost:8000/api/autor/${id}`, {method: 'DELETE', headers: {'content-type': 'application/json'}});
        return await res.json();
    },
}

export default ApiService;