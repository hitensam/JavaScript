fetchData = async () =>
{
    DataRecvd = await axios.get('https://programming-quotes-api.herokuapp.com/Quotes/random')
    h1.innerText =  `${DataRecvd.data.en}`
    p.innerText = ` - ${DataRecvd.data.author}`
    console.log(DataRecvd.data)
}

const h1 = document.querySelector('#h1')
const p = document.querySelector('#p')
fetchData().catch(() =>{
    h1.innerText = 'Unable to Load'
    p.innerText = 'please check your internet!!'
})