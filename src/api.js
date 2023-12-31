import axios from 'axios';

const searchImages = async (term) => {
    const reponse = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
                Authorization: 'Client-ID C82BBSl1ECTwuz1vSmUwwTTK6iLYy4YBuvBtiYT9ozU',
        },
        params: {
                query: term,
        },
    });

    return reponse.data.results;
};

export default searchImages;