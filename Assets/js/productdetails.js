document.addEventListener("DOMContentLoaded", ()=>{
  let productdetails = document.getElementById("productdetails");
//   urlsearchparams is a javascript inbuilt object YOU MUST MAKE USE OF new to instanciate
  let urlparam = new URLSearchParams(window.location.search);
  let productid = Number(urlparam.get("id"));
  console.log(productid, "productid")
   const products = ShopArray.find(function(allitems){
         return allitems.productid === productid
   });
   console.log(products)
  if(products) {
    productdetails.innerHTML =`
             <div class="">
             <img src="${products.img}" alt="">
             <h1>${products.category}</h1>
             <div class="addtocart">
             <button><i class="fas fa-shopping-bag"></i>Add to cart<button>
              <i class="fas fa-heart"></i>
               </div>
                </div>
            `
  }
  else{
    productdetails.innerHTML = `<p>No products found</p>`
  }
});