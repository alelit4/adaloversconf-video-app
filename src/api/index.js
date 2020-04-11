const FAKE_DELAY = 2000;
const FAKE_DATA = [
    {  
        id:0,
        title:'Flutter and the Dart Side 💜🌈 - Alexandra Rivero García en AdaLoversConf 2019',
        url:'https://youtu.be/f07uhqGyu78',
        thumbnail:'https://img.youtube.com/vi/f07uhqGyu78/maxresdefault.jpg',
      },
    {   
        id:1,
        title:'Refactorizar y como refactorizar esa es la cuestión 💯⭐️ Yodra López en AdaLoversConf 2019 ',
        url: 'https://youtu.be/mwqfDyQv6Ls',
        thumbnail:'https://img.youtube.com/vi/mwqfDyQv6Ls/maxresdefault.jpg',
      },
      {  
        id:2,
        title:'De su padre y de su madre 📣🔥 Diversidad en equipos de trabajo | Isabel Aguilar Undiano AdaLoversConf 2019',
        url:'https://youtu.be/hmdAT0GtDuU',
        thumbnail:'https://img.youtube.com/vi/hmdAT0GtDuU/maxresdefault.jpg',
      },
      {   
        id:3,
        title:'Test en React 🦄✨ Marta Alvarez Torres en AdaLoversConf 2019',
        url: 'https://youtu.be/UWbhtop9Zgs',
        thumbnail:'https://img.youtube.com/vi/UWbhtop9Zgs/maxresdefault.jpg',
      },
      {  
        id:4,
        title:'Flutter and the Dart Side Parte II 💜🌈 - Alexandra Rivero García en AdaLoversConf 2019',
        url:'https://youtu.be/f07uhqGyu78',
        thumbnail:'https://img.youtube.com/vi/f07uhqGyu78/maxresdefault.jpg',
      },
    {   
        id:5,
        title:'Refactorizar y como refactorizar esa es la cuestión Parte II 💯⭐️ Yodra López en AdaLoversConf 2019 ',
        url: 'https://youtu.be/mwqfDyQv6Ls',
        thumbnail:'https://img.youtube.com/vi/mwqfDyQv6Ls/maxresdefault.jpg',
      },
      {  
        id:6,
        title:'De su padre y de su madre Parte II 📣🔥 Diversidad en equipos de trabajo | Isabel Aguilar Undiano AdaLoversConf 2019',
        url:'https://youtu.be/hmdAT0GtDuU',
        thumbnail:'https://img.youtube.com/vi/hmdAT0GtDuU/maxresdefault.jpg',
      },
      {   
        id:7,
        title:'Test en React Parte II🦄✨ Marta Alvarez Torres en AdaLoversConf 2019',
        url: 'https://youtu.be/UWbhtop9Zgs',
        thumbnail:'https://img.youtube.com/vi/UWbhtop9Zgs/maxresdefault.jpg',
      }
];

const RESOLVE_OK = { ok : 1 };

export const addVideo = (newVideo) => new Promise( (resolve, reject) => {
    setTimeout(() => {
        newVideo.id = FAKE_DATA.length + 1;
        FAKE_DATA.push(newVideo);
        return resolve (RESOLVE_OK);
    }, FAKE_DELAY);
});

export const getVideos = () => new Promise((resolve, reject) => {
    setTimeout( () => resolve(FAKE_DATA), FAKE_DELAY);
});

const getDescription = async () => {
    try {
        let resp = await fetch('http://www.cupcakeipsum.com/#/paragraphs/2/length/short/with_love/false/start_with_cupcake/true/seed/44841c679d07b5a197f51a9213cfcc68cf55aa986295f5d698899276ab20cacd');
        return resp.json();
    } catch (error) {
        throw error;        
    }
}

export const getVideoDetail = (idVideo) => Promise((resolve, reject) => {
    setTimeout(() => {
        let video = FAKE_DATA.find((el) => (parseInt(el.id) === parseInt(idVideo)));
        if(!video)
            return  ({message : "No video"});
        if(!video.description)
            getDescription().then( (description) => {
                video.description = description.join();
                return resolve(video);
            }).catch(console.error);
        return resolve(video);
    }, FAKE_DELAY);
});
