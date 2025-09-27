const fetchDefinition = async () =>{

    try {
        const wordInput = document.getElementById("word").value.toLowerCase();
        const fetchWord = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`);

        if(!fetchWord.ok){
            throw new Error(`There's no such word as ${wordInput}`);
        }

        const data = await fetchWord.json();
        
        const wordDefinition = data[0].meanings[0].definitions[0].definition;
        

        
        
            const wordDef = document.getElementById("wordDefinition");
           

            wordDef.textContent = wordDefinition;
                
        

    } catch (error) {
        console.log(error);
    }

}

const button = document.getElementById("buttonW");

button.addEventListener("click", fetchDefinition);