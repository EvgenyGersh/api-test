export const filterList = {
    categorys:[

       {
        value: 'top-250-movies',
        name: "top-250",
        params: 'movies',
         id: 1
       },
    
        {
        value: 'most-popular-movies',
        name: "most-popular",
        params: 'movies',
        id: 3
        },
        
    ],
    genres: [
        {   value: 'action',
            params: {genre: 'action'},
            name: "action",
            id: 1
        },
        {
            value: 'comedy',
            params: {genre: 'comedy'},
            name: "comedy",
            id: 2
        },
        {
            value: 'animation',
            params: {genre: 'animation'},
            name: "animation",
            id: 3
        },
        {
            value: 'biography',
            params: {genre: 'biography'},
            name: "biography",
            id: 4
        },
        {
            value: 'fantasy',
            params: {genre: 'fantasy'},
            name: "fantasy",
            id: 5
        },
        
        {
            value: 'get-by-genre',
            params: {genre: 'family'},
            name: "family",
            id: 7
        },
        {
            value: 'get-by-genre',
            params: {genre: 'sport'},
            name: "sport",
            id: 8
        },
    ],
}