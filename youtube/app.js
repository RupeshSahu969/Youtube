
const search_results_div = document.getElementById('search_results')

const searchVideos = async () => {

    try {

        let inp = document.getElementById("search").value;

        let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inp}&key=AIzaSyBcKXyV13HjadbiUbb-92oAAQTVFo7Dods&maxResults=40`
        );

       let data= await res.json();

       let videos =data.items;

       appendVideos(videos);
    //    console.log("videos:", videos);
        // return videos;

     } catch (error) {
      console.log("error:", error);
    }

};






const appendVideos =(data) => {

search_results_div.innerHTML=null;
try{
data.forEach(({snippet:{title},id:{videoId}}) => {
    let div =document.createElement("div");

    let name = document.createElement("p");

    name.innerText=title;


   let iframe=document.createElement("iframe");

   iframe.src=` https://www.youtube.com/embed/${videoId}`;
   

   iframe.height="100%";
   iframe.width="100%";
   iframe.allow="fullscreen";
   iframe.height="auto";

   



   div.append(iframe, title);

   search_results_div.append(div);

});
}catch(err) {
   console.log("err",err);
}
};
