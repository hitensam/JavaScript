fetchData = async () =>
{
    DataRecvd = await axios.get('https://programming-quotes-api.herokuapp.com/Quotes/random')
    const jsSelect = document.getElementById("jsSelect");
            while (jsSelect.hasChildNodes()) {
            jsSelect.removeChild(jsSelect.firstChild);
            }
    const selection = document.querySelector("#jsSelect")
    const createElement = document.createElement('div')
    createElement.innerHTML = `
    <div class="pt-6" >
        <div class = 'block'>
            <h1 id="h1" class="title is-2"></h1>
                <div class = 'block'>
                    <div class="level-right">
                        <div class="has-text-black-bis">
                            <p id="p" class="subtitle is-4" ></p>
                        </div>
                    </div>
                </div>
        </div>   
    </div>
    `
    selection.appendChild(createElement)
    const h1 = document.querySelector('#h1')
    const p = document.querySelector('#p')
    h1.innerText =  `${DataRecvd.data.en}`
    p.innerText = ` - ${DataRecvd.data.author}`
}

fetchData().catch(() =>{
   const loadingText = document.querySelector("#loading-text")
   loadingText.textContent = "unable to connect"
})