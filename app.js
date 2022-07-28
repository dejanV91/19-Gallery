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
        this.previousBtn = getElement(".back");
        this.nextBtn = getElement(".forward");
        this.mainImage = getElement(".image-content");
        this.imageTitle = getElement(".titleMain");
        this.imagesListModal = getElement(".images-list");

        this.closeModal = this.closeModal.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);

        this.container.addEventListener("click", function(e){
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
                title="${item.title}"
                id="${item.dataset.id}"
                class="${selectedItem.dataset.id === item.dataset.id ? "imageM selected" : "imageM"}">`;
            }).join("");
            this.modal.classList.add("open");
            this.closeBtn.addEventListener("click", this.closeModal);
            this.nextBtn.addEventListener("click", this.nextImage);
            this.previousBtn.addEventListener("click", this.previousImage);
        }

        setMainImage(selectedItem){
            this.mainImage.src = selectedItem.src;
            this.imageTitle.textContent = selectedItem.title;
        }

        closeModal(){
            this.modal.classList.remove("open");
        }

        nextImage(){
            const current = this.imagesListModal.querySelector(".selected");
            const next = current.nextSibling || this.imagesListModal.firstChild;

            current.classList.remove("selected");
            next.classList.add("selected");
            this.setMainImage(next);
        }

        previousImage(){
            const current = this.imagesListModal.querySelector(".selected");
            const prev = current.previousSibling || this.imagesListModal.lastElementChild;
            current.classList.remove("selected");
            prev.classList.add("selected");
            this.setMainImage(prev);
        }
    }

const elem = new Nature(getElement(".images-nature"));
const elem2 = new Nature(getElement(".images-city"));

