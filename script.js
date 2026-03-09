document.addEventListener("DOMContentLoaded", function () {

    const toggleBtn = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    toggleBtn.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

});
// Load Header
fetch("header.html")
.then(response => response.text())
.then(data => {
    document.getElementById("header").innerHTML = data;

    // Toggle after loading
    const toggle = document.querySelector(".menu-toggle");
    const navbar = document.getElementById("navbar");

    if(toggle){
        toggle.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });
    }
});

// Load Footer
fetch("footer.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
});





const searchInput = document.getElementById("searchInput");
const productGrid = document.getElementById("productGrid");

/* ===============================
   PRODUCT DATABASE (ALL PRODUCTS)
================================ */

const products = [

    // Visible Products
     {
        name:"Paracetamol",
        category:"Medical",
        // img:"https://www.biofieldpharma.com/wp-content/uploads/2023/06/BIOFIELD-NIMOSET-P-TAB-1-scaled.jpg",
      
    },
    {
        name:"Gastric Care ",
        category:"Medical",
 
   
    },
    {
        name:"Surgical Gloves",
        category:"Medical",
    
       
    },
    {
        name:"Pressure Machine",
        category:"Medical",
      
    
    },
    {
        name:"Pulse Oximeter",
        category:"Medical",
   
      
    },
    {
        name:"Bandage Kit",
        category:"Medical",
      
    },
    {
        name:"Blood Sample Tube",
        category:"Medical",
     
    },
    {
        name:"N95 Face Mask",
        category:"Medical",
      
    },

    {
        name:"Digital BP Monitor",
        category:"BP",
    
    },
    {
        name:"Amlip-5",
        category:"BP ",
       
    },
    {
        name:"Syringe",
        category:"Medical",
    
    },
    {
        name:"Face Shield",
        category:"Safety",
      
    },

    {
        name:"Thermometer",
        category:"RJHS",
     
    },
   
    {
        name:"Digital BP Monitor",
        category:"RJHS",
      
    },
 

    {
        name:"Hand Sanitizer",
        category:"Hygiene",
  
    }
];
let visibleCount = 10; // show first 8 products (2 rows)
let showAll = false;

/* ===============================
   DISPLAY PRODUCTS
================================ */

function displayProducts(list){

    productGrid.innerHTML = "";

    if(list.length === 0){
        productGrid.innerHTML = "<p>No product found</p>";
        return;
    }

    let productsToShow = showAll ? list : list.slice(0, visibleCount);

    productsToShow.forEach(product => {

        productGrid.innerHTML += `
            <div class="product-card">
             
                <h4>${product.name}</h4>
                <span>${product.category}</span>
               
            </div>
        `;
    });

    // Show/Hide button
    const btn = document.getElementById("loadMoreBtn");

    if(list.length > visibleCount && !showAll){
        btn.style.display = "inline-block";
    }else{
        btn.style.display = "none";
    }
}

/* Show all initially */
displayProducts(products);


/* ===============================
   SEARCH FUNCTION
================================ */

searchInput.addEventListener("keyup", () => {

    let value = searchInput.value.toLowerCase();

    let filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(value)
    );

    displayProducts(filteredProducts);
});
document.getElementById("loadMoreBtn").addEventListener("click", () => {
    showAll = true;
    displayProducts(products);
});