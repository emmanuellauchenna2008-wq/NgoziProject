document.addEventListener("DOMContentLoaded", ()=>{
    let categoryimages = [
    {id:1, img:"/Assets/images/new red shoe.PNG",quantity: "48 Products" , category: "Running", description:"Performance shoes built for speed and endurance" },
    {id:2, img:"/Assets/images/yellow2.PNG",quantity: "86 Products" , category: "Sneakers", description:"Classic and contemporary streetwear styles"},
      {id:3, img:"/Assets/images/blueshoe.PNG",quantity: "32 Products" , category: "Basketball", description:"Court-ready shoes with superior ankle support"},
       {id:4, img:"/Assets/images/yellowbackground.PNG",quantity: "64 Products" , category: "Casual", description:"Everyday comforts meets effortless style"},
       {id:5, img:"/Assets/images/brownslippers.PNG",quantity: "24 Products" , category: "Casual", description:"Breathable comfort for warmer days"},
        {id:6, img:"/Assets/images/trouserspic.PNG",quantity: "28 Products" , category: "Boots", description:"Rugged style for any terrain"}
];
  let productdetails = document.getElementById("productdetails");
//   urlsearchparams is a javascript inbuilt object YOU MUST MAKE USE OF new to instanciate
  let urlparam = new URLSearchParams(window.location.search);
  let productid = urlparam.get("id");
   console.log(categoryimages);
});