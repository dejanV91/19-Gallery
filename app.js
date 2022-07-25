function getElement(element){
    if(element){
        return document.querySelector(element);
    }
}

class Nature{
    constructor(element){
        this.container = element;
        this.list = [...element.querySelectorAll(".img")]

        this.modal = getElement(".modal");
        this.closeBtn = getElement(".close-btn");
        this.closeBtn = getElement(".close-btn");
        this.previousBtn = getElement(".back");
        this.nextBtn = getElement(".forward");
        this.mainImage = getElement(".image-content");
        this.imageTitle = getElement(".title");
        this.imagesListModal = getElement(".images-list");

        this.selectedImages = this.selectedImages.bind(this);
        this.openModal = this.openModal.bind(this);
        
       this.container.addEventListener("click", function(e){
        if (e.target.classList.contains("img")) {
            
        }
       })

    }

    selectedImages(){
        this.list.forEach(function(e){
           e.addEventListener("click", function(a){
               return a.target;
           });
        });
    }
    openModal(selectedImage, list){
        this.setImageMain(selectedImage);
        this.mainImage.innerHTML = list
        .map()function
    }
    setImageMain(selectedImage){
        this.mainImage.src = selectedImage.src;
        this.imageTitle.textContent = selectedImages.title;
    }

    
}

const elem = new Nature(getElement(".images-nature"))

console.log(elem.selectedImages());