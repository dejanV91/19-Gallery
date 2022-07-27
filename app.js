function getElement(element){
    const elem = document.querySelector(element);
    if(elem){
        return elem;
    }
}

class Nature{
    constructor(selection){
        this.container = selection;

        this.list = [...selection.querySelectorAll(".img")];

        this.modal = getElement(".modal");
        this.closeBtn = getElement(".close-btn");
        this.closeBtn = getElement(".close-btn");
        this.previousBtn = getElement(".back");
        this.nextBtn = getElement(".forward");
        this.mainImage = getElement(".image-content");
        this.imageTitle = getElement(".titleMain");
        this.imagesListModal = getElement(".images-list");

        this.container,addEventListener("click", function(e){
            if (e.target.classList.contains("img")) {
                this.openModal(e.target, this.list);
            }
        }.bind(this));
        }
        
        openModal(selectedItem, list){
            this.setMainImage(selectedItem);
            this.imagesListModal.innerHTML = list
            .map(function(item){
                return `<img 
                src="${item.src}" 
                alt="${item.alt}" 
                title="${item.title} 
                id="${item.dataset.id}
                class="${selectedItem.dataset.id === item.dataset.id ? "imageM selected" : "imageM"}">`;
            }).join("");
            this.modal.classList.add("open");
        }

        setMainImage(selectedItem){
            this.mainImage.src = selectedItem.src;
            this.imageTitle.textContent = selectedItem.title;
        }
    }

const elem = new Nature(getElement(".images-nature"));
const elem2 = new Nature(getElement(".images-city"));

