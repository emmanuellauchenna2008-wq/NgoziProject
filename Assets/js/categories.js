document.addEventListener("DOMContentLoaded" , ()=> {



let category = document.getElementById('categoryimages');

function displayproducts() {
    let categorydisplay = categoryimages.map(function(product) {
       return`
          <div class=" categorycards">
                  <img src="${product.img}" alt="" width="" class="realimg" height="">
                   <div class="backgroundcover"></div>
                  <div class="letterscont">
                <div class="title">${product.quantity}</div>
               <h1 class="run">${product.category}</h1>
               <p class="imagesp">${product.description}</p>
               <div class="shopnow">
                 <a href="/pages/productdetails.html?id=${product.id}">Shop Now <i class="fas fa-arrow-right"></i></a>
               </div>
                  </div>
                 </div> 
       `
    });
    category.innerHTML = categorydisplay.join("");
};
displayproducts();
});
