 const btn= document.querySelectorAll('.button');
 const body=document.querySelector('body')
// console.log(btn);

btn.forEach((eachBtn)=>{
    // console.log(eachBtn);
    eachBtn.addEventListener('click', (e)=>{
        // console.log(e);
        // console.log(e.target);
        if(e.target.id === e.target.id){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === e.target.id){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === e.target.id){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === e.target.id){
            body.style.backgroundColor = e.target.id
        }
    })
})