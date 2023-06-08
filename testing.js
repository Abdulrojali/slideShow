
let img=['gambar1.jpg','gambar2.jpg','gambar3.jpg']
let picture=document.querySelector('.img')

let count=0
function pushLeft(){
    count++
    if(count>=img.length){
        count=0
    }
    console.log(count)
    console.log(img[count])
    picture.src=img[count]
}

function pushRight(){
    count--
    if(count<0){
        count=img.length-1
    }
    console.log(count)
    console.log(img[count])
    picture.src=img[count]
}
