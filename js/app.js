const gmau = document.getElementById("gmau")
const bdy = document.getElementById("bdy")
const btnSadar= document.getElementById("btnSadar")

btnSadar.addEventListener("click",()=>{
    Swal.fire("Alhamdulillah kamu masih sadar")
})

gmau.style.transition = "all 0.5s";
let flag = 1;
let countHover = 0

gmau.addEventListener("mouseover", () => {
gmau.style.position = "absolute";

    geser()
    countHover++;

    if (countHover == 8) {
        const a = Swal.fire({
            title: `Kamu masi belum nyerah yah ?
             ｡ﾟ･ (>﹏<) ･ﾟ｡'`,
            imageUrl: 'https://c.tenor.com/ArxFy8X5O0sAAAAM/qxwaii-kawaii.gif',
            imageWidth: 300,
            imageHeight: 250,
            imageAlt: 'Cewe Animech',
            showCancelButton: true,
            cancelButtonText:"Belum",
            confirmButtonColor: 'rgb(7, 173, 7)',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Udah'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({ 
                imageUrl:"https://c.tenor.com/enOKkaL4ZtAAAAAd/zakir-naik-meme.gif",
                imageWidth:300,
                imageHeight:250,
                confirmButtonColor: 'rgb(7, 173, 7)',
                confirmButtonText: 'Tutup Web ini'
            }
              )
            }
            else{
                Swal.fire({
                    title:'Hmm Mending nyerah deh',
                    confirmButtonColor: '#d33',
                    confirmButtonText: 'G ah'
                })
            }
          })
          
        if (a) {
            gmau.classList.add("gila")
            gmau.innerHTML = "Tobatlah kawan "
        } else if (!a) {     
            Swal.fire('Alhamdulillah dirimu telah sadar !')
        }
        
    }

    if (countHover == 10) {
        const title = document.getElementById("title")
        const imgKaget = document.getElementById("kaget")
        
        bdy.classList.add("clsUtkBdy");

        imgKaget.setAttribute('src','img/Rika.jpg')
        imgKaget.style.width="370px"
        title.innerHTML="Nipaaa"
        title.style.transition="all 0.5s"
        btnSadar.style.display="none"
    }
    console.log(countHover)
})

function geser() {
    let a = Math.floor(Math.random() * 300)
    let b = Math.floor(Math.random() * 300)
    if (flag == 1) {
        
        gmau.style.left = `${a}px`;
        gmau.style.top = `${b}px`;
        gmau.style.transition = "0.5s"
        flag = 2
    } else if (flag == 2) {
        gmau.style.left = `${a}px`;
        gmau.style.top = `${b}px`;
        gmau.style.transition = "0.5s"
        flag = 1
    }
}