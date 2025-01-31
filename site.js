let products = {
	
	data:[
	
	{
		
		productName: "Regular White T-Shirty",
		category:"Topwear",
		price:"30",
		image:"camisa.jpg"
		
	} ,
	
		{
		
		productName: "Regular White T-Shirty2",
		category:"Shorts",
		price:"50",
		image:"shorts.jpg"
		
	} ,
	
	
	
   
	{
		
		productName: "Regular White T-Shirty",
		category:"Jacket",
		price:"100",
		image:"jaqueta.jpg"
		
	} ,
	
		{
		
		productName: "Regular White T-Shirty",
		category:"Whatch",
		price:"200",
		image:"relogio.jpg"
		
	} ,
	
	],
	
	};
	
	for (let i of products.data){
		
		let card  = document.createElement("div");
		
		card.classList.add("card",i.category,"hide")
		
		let imgContainer = document.createElement("div");
		
		imgContainer.classList.add("image-container")
		
		let image  = document.createElement("img")
		
		image.setAttribute("src",i.image)
		
		imgContainer.appendChild(image)
		
		card.appendChild(imgContainer)
		
		document.getElementById("products").appendChild(card)
		
		let container = document.createElement("div")
		container.classList.add("container")
	
		
		card.appendChild(container)
	
		let name = document.createElement("h5")
		
		name.classList.add("product-name")
		
		name.innerText = i.productName.toUpperCase();
		
		container.appendChild(name)
		
		let price = document.createElement("h3")
		
		price.innerText = '$ '  + i.price;
		container.appendChild(price)
	
	}
	
	
	function filter(value){
		
		let buttons = document.querySelectorAll(".button-Value")
		

		buttons.forEach(button =>{
			
		if(value.toUpperCase()== button.innerText.toUpperCase()){
			button.classList.add("active")
			
		} else{
			
			button.classList.remove('active')
		}
			
			
		})
		
		let elements = document.querySelectorAll(".card")
		
		
		elements.forEach((el)=>{
			
			 if(value === "All"){
				 
				 el.classList.remove("hide")
				 
			 }
			
				else if(el.classList.contains(value)){
					 
					 el.classList.remove("hide")
					 
				 }
				 
			
		else{
				 
				 el.classList.add("hide")
				 
			 }
		
		})
		}
	
	
	window.onload = ()=>{
		
		filter("All")
		
	}
	
	
	document.getElementById("search").addEventListener("click",()=>{
		
		
		let searchinput = document.getElementById("search-input").value;
		let elements = document.querySelectorAll(".product-name")
		let cards = document.querySelectorAll(".card")
		
		elements.forEach((index,ite)=>{
			
			if(index.innerText.includes(searchinput.toUpperCase())){
				
				cards[ite].classList.remove("hide")
				
			}else{
				
				cards[ite].classList.add("hide")
				
			}
			
			
		})
		
	})