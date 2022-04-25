// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY] HTTP/1.1

const API="AIzaSyAV1zWx3MH5_r5vRi78ZrZ4fn1Z_JmKt1M";


const searchVideos= async () =>{

    try{
        const q = document.getElementById("query").value

        const res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${API}`);

                   const data=await res.json();

            // console.log(data.items)
            append(data.items)

    }

    

    catch(err){
        console.log(err)
    }
};

const append= (videos) =>{

    let show_video=document.getElementById("show_video");

    show_video.innerHTML=null

    videos.forEach(({id: {videoId}, snippet : {title}}) => {
        
        let div=document.createElement("div");

        let iframe=document.createElement("iframe");

        iframe.src=`https://www.youtube.com/embed/${videoId}`

        iframe.width="100%"
        iframe.height="90%"
        iframe.style.margin="20px"
        iframe.allow="fullscreen"


        let name=document.createElement("h5");
        name.innerText=title;


        div.append(iframe,name)

        

        show_video.append(div)

    });
};

const showvideo= (x) => {

    window.location.href ="video.html";

    localStorage.setItem("video",JSON.stringify(x))
}