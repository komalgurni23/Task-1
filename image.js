const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

/* Open Lightbox */

images.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex = index;
        showImage();

        lightbox.style.display = "flex";
    });
});

/* Display Current Image */

function showImage(){
    lightboxImg.src = images[currentIndex].src;
}

/* Next Image */

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showImage();
});

/* Previous Image */

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    showImage();
});

/* Close Lightbox */

closeBtn.addEventListener("click",()=>{
    lightbox.style.display = "none";
});

lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox){
        lightbox.style.display = "none";
    }
});

/* Keyboard Navigation */

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display === "flex"){

        if(e.key === "ArrowRight"){
            nextBtn.click();
        }

        if(e.key === "ArrowLeft"){
            prevBtn.click();
        }

        if(e.key === "Escape"){
            lightbox.style.display = "none";
        }
    }
});

/* Category Filter */

const filterBtns = document.querySelectorAll(".filters button");
const galleryItems = document.querySelectorAll(".gallery-item");

filterBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        filterBtns.forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        galleryItems.forEach(item=>{

            if(filter === "all" ||
               item.classList.contains(filter)){
                item.style.display = "block";
            }
            else{
                item.style.display = "none";
            }
        });
    });
});