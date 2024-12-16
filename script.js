let contentGridElement = document.getElementById("contentGrid");
let projectPageTitle = document.getElementById("projectTitle");
let projectPageElement = document.getElementById("projectPage");



let database = [
	{
	"title" : "Beyond the Floor", 
	"heroImg" : "Img/BeyondTheFloor.png", 
	"detailImg" : ["ImgPJ/BTF/1.png", "ImgPJ/BTF/2.png", "ImgPJ/BTF/3.png", "ImgPJ/BTF/4.png", "ImgPJ/BTF/5.png", "ImgPJ/BTF/6.png", "ImgPJ/BTF/7.png"],
	"year" : "2023",
	"field" : "Product",
	"description" : "We designed a new product through upcycling of the maru (flooring material) and processing by-products that are discarded without passing QC (quality control) during the flooring process. It is not just about making a product, but also a system that allows the floor to be circulated through the use of mycelium so that the product can return to nature. "
	},
	{
	"title" : "Mo-re", 
	"heroImg" : "Img/Mo-re.png",
	"detailImg" : ["ImgPJ/More/1.png", "ImgPJ/More/2.png", "ImgPJ/More/3.png", "ImgPJ/More/4.png", "ImgPJ/More/5.png", "ImgPJ/More/6.png"],
	"year" : "2024",
	"field" : "UI/UX",
	"description" : "<mo-re> is a life finance app for the 2030 welfare recipients in South Korea. It is difficult for the welfare recipients to imagine their future assets and prepare for the future. <mo-re> helps them realize the future value of their investments by comparing the value of their current assets with the value of their future growth. It also encourages users to improve their financial capabilities and lead a healthy lifestyle through daily missions. With this app, welfare recipients can overcome their present orientation and grow economically through stable investments. The system will help recipients achieve economic independence and reduce economic polarization in society."
	},
	{
	"title" : "to-i", 
	"heroImg" : "Img/To-i.png",
	"detailImg" : ["ImgPJ/To-i/1.png"], 
	"year" : "2024",
	"field" : "System",
	"description" : "'to-i' is a communication tool for severely abused teenagers who are continuously abused by their parents to discreetly seek help to the police and child protection agency. It not only strengthens the trust between the abused child and child protection agency and police, but also increases the child's chances of getting help by simplifying and personalizing the abuse reporting process. Ultimately, it serves as a stepping stone to protect the children by getting the abusive parent to receive the necessary actions." 
	},
	{
	"title" : "Emort", 
	"heroImg" : "Img/Emort.jpeg",
	"detailImg" : ["ImgPJ/Emort/1.jpeg", "ImgPJ/Emort/2.jpeg", "ImgPJ/Emort/3.jpeg", "ImgPJ/Emort/4.jpeg"], 
	"year" : "2023",
	"field" : "Product",
	"description" : "Emort is an emotional therapy kit for young children that uses art activities with emotion stones to help children control and relieve negative emotions."
	},
	{
	"title" : "Stool042", 
	"heroImg" : "Img/Stool042.png", 
	"detailImg" : ["ImgPJ/042/1.png", "ImgPJ/042/2.png", "ImgPJ/042/3.png"],
	"year" : "2023",
	"field" : "Product",
	"description" : "Stool 042 is a project that creates 'nerd stools' that capture the lifestyle and persona of intellectuals in Daejeon, South Korea, and places them in actual local bookstores in Daejeon. Based on an interview with Dr. Hyejin Joo, a researcher at Daejeon Sejong and a PhD in sociology, the nudist stool 'Pa-Rang' was created in her persona and placed in a local bookstore in Daejeon, 'Eunyurim'." 
	}
	
];



// URL Params
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let urlSection = urlParams.get('category');
let urlID = urlParams.get('id');


// console.log("Category:", urlSection);
// console.log("Title:", urlID);


// Filtering the category
if (urlSection != null) { 
  for (let i = 0; i < database.length; i++) {
		if (database[i]["field"] == urlSection || urlSection == "" || urlSection == null){
      createElement(database[i]);
      // console.log("category filtered");
    }
  }
}

//Creating project page
else if (urlID != null) {
	for (let i = 0; i < database.length; i++) {
    if (database[i]["title"] == urlID) {
    	// console.log(database[i]);
      createProjectPage(database[i]);
      // console.log("detail page created");
    }
  }
}


//Default page
else {
  for (let i = 0; i < database.length; i++) {
  	createElement(database[i]);
  	// console.log("default");
  }
}




function createElement(incomingJSON) {

	// Creating div
	let newContentElement = document.createElement("div");
	newContentElement.style.backgroundColor = "#FFFFFF";
	newContentElement.classList.add('contentItem');

	/* LINK for project */
	let newA = document.createElement("A");
	newA.href = "index.html?id=" + incomingJSON['title'];

	// Creating img
	let newImage = document.createElement("Img");
	newImage.classList.add('contentImg');
	newImage.src = incomingJSON['heroImg'];
	// newContentElement.appendChild(newImage);
	newA.appendChild(newImage); /* Adding the image inside the A tag link */
	newContentElement.appendChild(newA); /* Then adding the A to the newContentElement */

	// Creating title 
	let newContentTitle = document.createElement("p");
	newContentTitle.classList.add('contentTitle');
	newContentTitle.innerText = incomingJSON['title'];
	newContentElement.appendChild(newContentTitle);

	// Creating year 
	let newContentYear = document.createElement("p");
	newContentYear.classList.add('contentYear');
	newContentYear.innerText = incomingJSON['year'];
	newContentElement.appendChild(newContentYear);

	// Creating field
	let newContentField = document.createElement("p");
	newContentField.classList.add('contentField');
	newContentField.innerText = incomingJSON['field'];
	newContentElement.appendChild(newContentField);

	contentGridElement.appendChild(newContentElement);
}


function createProjectPage(incomingJSON){

	// Creating project page title
	projectPageTitle.innerText = incomingJSON["title"];

	// Creating div
	let newProjectElement = document.createElement("div");
	newProjectElement.classList.add('projectItem');

	// Creating Swiper img slider
	let swiperContainer = document.createElement("div");
	swiperContainer.classList.add('swiper');

	let swiperWrapper = document.createElement("div");
	swiperWrapper.classList.add('swiper-wrapper');

	// Put images in the array
	let slideImgDB = [];

	for (let j = 0; j < incomingJSON['detailImg'].length; j++) {
		slideImgDB.push(incomingJSON['detailImg'][j]);
	}
	console.log(slideImgDB);

	for (let k = 0; k < slideImgDB.length; k++){
		let newSlide = document.createElement("div");
		newSlide.classList.add('swiper-slide');
		console.log(`swiper slide #${k + 1}`);
		console.log(newSlide);

		let slideImg = document.createElement("img");
		slideImg.src = slideImgDB[k];

		newSlide.appendChild(slideImg);
		swiperWrapper.appendChild(newSlide);

	}

	swiperContainer.appendChild(swiperWrapper);


	// Swiper Button
	let swiperButtonPrev = document.createElement("div");
	swiperButtonPrev.classList.add('swiper-button-prev');
	swiperContainer.appendChild(swiperButtonPrev);  

	let swiperButtonNext = document.createElement("div");
	swiperButtonNext.classList.add('swiper-button-next');

	swiperContainer.appendChild(swiperButtonNext);  
	newProjectElement.appendChild(swiperContainer);
	projectPageElement.appendChild(newProjectElement);


	// Creating description
	let newProjectDes = document.createElement("p");
	newProjectDes.classList.add('projectDes');
	newProjectDes.innerText = incomingJSON['description'];
	newProjectElement.appendChild(newProjectDes);


  // Initializing Swiper
	const swiper = new Swiper('.swiper', {
		direction: 'horizontal', 
		loop: true,              
		navigation: {            
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
		},
	});

}


	





