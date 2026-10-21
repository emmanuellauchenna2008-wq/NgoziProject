document.addEventListener("DOMContentLoaded", ()=>{
    let allCategories = document.getElementById("allCategories");
    let params = new URLSearchParams(window.location.search);
    //   urlsearchparams is a javascript inbuilt object YOU MUST MAKE USE OF new to instanciate
    let newparam = params.get("category")
   //  console.log(newparam)
let catInfo = document.getElementById("catInfo");
    let filterarray = ShopArray.filter(function(item){
       return item.category === newparam
    });
   //  function displaycatitem() {
   //     const catItem = filterarray.map(function(allItem){
   //    return`
   //       <div class="allcat">
   //          <a href="./categories.html">All categories</a>
   //          <h1>${allItem.category}</h1>
   //          <h5>Performance shoes built for speed and endurance</h5>
   //          <p>4 products in this collection</p>
   //        </div>
   //    `
   //  })   
   //   catInfo.innerHTML = catItem.join("");        
   //  };
   //  displaycatitem()
    console.log(filterarray, "filterarry")
    function displayallcategories() {
        if (filterarray.length === 0){
            allCategories.innerHTML =`
            <p>No matching product found</p>;
            `
            return;  
            // we use return to  stop the execution of code
        }
        const realcategories = filterarray.map(
            function(foundcat){
                return`
                <div class="collectionimages">
                  <div class="collectionimage1">
                  <div class="opacitycont">
                      <img src="${foundcat.img}"  class="imagechild1 imagechild3" width="100%">
                  <img src="${foundcat.similarimg}"  class="imagechild2 imagechild3" width="100%">
                  <div class="${foundcat.classcont}">
                       <p>${foundcat.topcont}</p>
                     <h1>${foundcat.best}</h1>
                  </div>
                     <div class="addtocart">
                        <a href="/pages/productdetails.html?id=${foundcat.productid}"><i class="fas fa-shopping-bag"></i> Add to cart</a>
                        <i class="fas fa-heart"></i>
                     </div>
                  </div>
                     <div class="velocityRunner">
                        <div class="Running">
                           <p>${foundcat.category}</p>
                           <p><i class="fas fa-star"></i>4.9</p>
                        </div>
                        <h2>${foundcat.title}</h2>
                        <div class="span">
                           <span>${foundcat.number}</span>
                          <strike>${foundcat.strike}</strike>
                        </div>
                        <div class="circles">
                           <p class="${foundcat.circle1}"></p>
                           <p class="${foundcat.circle2}"></p>
                           <p class="${foundcat.circle3}"></p>
                             <p class="${foundcat.circle4}"></p>
                        </div>
                        <p class="sizes">
                           ${foundcat.sizes}
                        </p>
                     </div>
               </div>
               </div>
                </div>
                `
            });
        allCategories.innerHTML = realcategories.join("");
    };
displayallcategories();
});