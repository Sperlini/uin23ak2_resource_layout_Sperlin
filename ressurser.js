const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs",
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]


/*let resourcesHTML = ""

resources.map((categorylink) => {
   
    let sourceHTML =  categorylink.sources.map((source) => 
        `<li><a href= "${source.url}">${source.title}</a></li>`         
    )
    resourcesHTML += `
        <h1>${categorylink.category}</h2>
        <p>${categorylink.text}</p>
        <ul>${sourceHTML}</ul>
    `
})

function printRe(){
    document.getElementById("printarea").innerHTML = resourcesHTML;
    console.log()  
}
 Første forsøk jeg hadde for å printe ut innhold, dette funket problemet er at alt av innhold ble printet ut  */






function printCSS() {
	cssHTML = "";
	const csstab = resources.filter((catg) => catg.category === "CSS");
	csstab.map((catg) => {
		cssHTML += `
         <h1>${catg.category}</h1>
		<p>${catg.text}</p>
     
        `
		catg.sources.map((links) => {
			cssHTML += `
            <ul><li><a href="${links.url}">${links.title}</a></li></ul>
            `
		})
		
	})
	document.getElementById("printarea").innerHTML = cssHTML;
	
	
}
/*Her printes det ut fra level 1 av den multidimensional array først, 
så printer den ut level 2 som innholder link/url. Funksjonen ser etter kategori 
navnet for å vite hvem array som skal printes og hentes. 


Denne koden blir gjenbrukt og laget på nytt flere ganger for hver kategori */ 



function printHTML() {
	htmlHTML = "";
	const htmltab = resources.filter((catg) => catg.category === "HTML");
	htmltab.map((catg) => {
		htmlHTML += `
         <h1>${catg.category}</h1>
		<p>${catg.text}</p>
        
        `
		catg.sources.map((links) => {
			htmlHTML += `
            <ul><li><a href="${links.url}">${links.title}</a></li></ul>
            `
		})
		
	})
	document.getElementById("printarea").innerHTML = htmlHTML;
	
	
}

function printJava() {
	javaHTML = "";
	const javatab = resources.filter((catg) => catg.category === "JavaScript");
	javatab.map((catg) => {
		javaHTML += `
         <h1>${catg.category}</h1>
		<p>${catg.text}</p>
        
        `
		catg.sources.map((links) => {
			javaHTML += `
            <ul><li><a href="${links.url}">${links.title}</a></li></ul>
            `
		})
		
	})
	document.getElementById("printarea").innerHTML = javaHTML;
	
	
}

function printReact() {
	reactHTML = "";
	const reacttab = resources.filter((catg) => catg.category === "React");
	reacttab.map((catg) => {
		reactHTML += `
         <h1>${catg.category}</h1>
		<p>${catg.text}</p>
        
        `
		catg.sources.map((links) => {
			reactHTML += `
            <ul><li><a href="${links.url}">${links.title}</a></li></ul>
            `
		})
		document.getElementById("printarea").innerHTML = reactHTML;
	})
	
	
	
}

function printSanity() {
	sanityHTML = "";
	const sanitytab = resources.filter((catg) => catg.category === "Sanity and headless CMS");
	sanitytab.map((catg) => {
		sanityHTML += `
         <h1>${catg.category}</h1>
		<p>${catg.text}</p>
        
        `
		catg.sources.map((links) => {
			sanityHTML += `
            <ul><li><a href="${links.url}">${links.title}</a></li></ul>
            `
		})
		
	})
	document.getElementById("printarea").innerHTML = sanityHTML;
	
	
}




var btnpicked = document.querySelectorAll(".btn");
Array.from(btnpicked).forEach(item => {
    item.addEventListener("click" , () => {
        
        var tabselected = document.getElementsByClassName("active");
        tabselected[0].className = tabselected[0].className.replace("active"," ");
        item.className += " active";
        console.log(btnpicked)
    })
})

/*Funksjon som fjerner class som har ordet "active" i seg så legger til "" , og legger til i class som ikke har "active" i seg. 

/* https://stackoverflow.com/questions/63920712/editing-javascript-to-change-button-color-once-clicked  Ble inspirert av hvordan koden skulle være fra her*/ 





document.getElementById(printHTML).innerHTML = printHTML()

/* Linje er for at siden skal starte/loade med printHTML() allerede kjørt, for å gi mening til active tab knapp fargene */  