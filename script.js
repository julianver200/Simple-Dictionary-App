const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const button = document.getElementById("searchButton");
const sound = document.getElementById("sound");

const fetchWord = async() =>{
    try{

        let input  =document.getElementById("word").value.toLowerCase();
         let result = document.querySelector(".result");

        const response = await fetch(`${url}${input}`);
        if (!response.ok) {
            throw new Error(`There is no such Word as "${input}"`);
        }

        const data = await response.json();
        console.log(data);

        result.innerHTML =`<div class="result">
                    <div id="word">
                        <h3>${input}</h3>
                        <button>
                            <i class="fa fa-volume-up"></i>
                        </button>
                    </div>

                    <div class="details">
                        <p>${data[0].meanings[0].partOfSpeech}</p>
                        <p> /${data[0].phonetics[1].text}/</p>
                    </div>
                    <div>
                    <p class="wordMeaning">
                       ${data[0].meanings[0].definitions[0].definition}
                    <p class="wordExample">
                        ${data[0].meanings[0].definitions[0].example || "no example available"}    
                    </p>
                    </div>
                </div>`;


    }catch(error){
        console.error(error);
    }
}

button.addEventListener("click", fetchWord);