$('h1').on('click', ()=>{
    // $("#result").after().remove()
    if(document.querySelector("[id='1']").value !== "" && document.querySelector("[id='2']").value !== "")
{
    var answer = parseInt(document.querySelector("[id='1']").value) + parseInt(document.querySelector("[id='2']").value)
    console.log(answer)
    // $("#result").after().remove()
}
if($("#result").after())
{
    console.log("ran")
}

if (answer)
{
    $("#result").after(`<p>result is : ${answer}</p>`)
}

})
