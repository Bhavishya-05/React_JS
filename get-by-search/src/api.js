import axios from 'axios';

const searchImages = async (term) => {
  const response =  await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID Be7h3EF_sMKE6GRQt-9WR4yAz9jQ8iFbkg4u3U44jrs'
        },
        params: {
            query:term,
        },

    });
    console.log(response.data);

    return response.data.results;
};
export default searchImages;