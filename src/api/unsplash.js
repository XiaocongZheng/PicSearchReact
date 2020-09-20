import axios from 'axios';

export default axios.create({

    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID Q4B8-f-z9KxRtoHmACnxrm4K_hzMRli1-yehQY4EeBg'
    }

});