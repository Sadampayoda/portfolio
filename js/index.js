
const navbar = document.querySelector('nav')
const Teki = document.getElementById('tebakan');
const Hasil = document.getElementById('jawab')
const ButtonMasuk = document.getElementById('masuk')

const container = document.querySelector('.first')

console.log(Teki)

//halaman utama masuk
const Pertanyaan = [
    'Kipas apa yang ditunggu2 cewe ?' ,
    'Kota apa yang rame sama orang pacaran ?' ,
    'Ayam ayam apa yang nyantai ? ' ,
    'Daun apa yang gk boleh di pegang ?', 
    'Buah apa yang suka bangun pagi ? ',
    'Buah apa yang cocok buat jomblo ? ', 
    'Telor yang ditakuti ? '  ,
]

const jawab = [
    'Jawabannya Kipastian hahahahah!!',
    "Jawabannya malang ,soalnya malang minggu hahahaha!!!",
    'Jawabannya adem ayam wkwkwk',
    'Daun touch me lol',
    'Apel Pagi hueee',
    'Buaahhhhhhhhaahhahha',
    'yaa telor asin haha (pikir sendiri)'
]
let Result = Math.floor(Math.random() * 6)

Teki.innerHTML = Pertanyaan[Result]
Hasil.innerHTML = jawab[Result];

ButtonMasuk.addEventListener('click', () => {
    document.body.classList.remove('over')
    container.classList.add('AfterButton')
    container.classList.remove('first')
})



//navbar
window.addEventListener('scroll' ,() => {
    if(window.pageYOffset > 200){
        navbar.classList.add('AfterNav')
        navbar.classList.remove('Nav')
        
    }else{
        navbar.classList.add('Nav')
        navbar.classList.remove('AfterNav')
    }

    if(window.pageYOffset > 600){
        navbar.classList.add('navbar-light')
        navbar.classList.remove('navbar-dark')
    }else{
        navbar.classList.remove('navbar-light')
        navbar.classList.add('navbar-dark')
    }
})


//untuk form pesan
const scriptURL = 'https://script.google.com/macros/s/AKfycbzLAFq_Nc7cCfbZwXwooOeDVLxfY3ipRjPetR0O-ePujsFiAknEMHmgplcvnegfVaZeWQ/exec'
  const form = document.forms['pesan-portfolio']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        location.reload()
        console.log('Success!', response)
    })
      .catch(error => console.error('Error!', error.message))
  })


let i = document.querySelectorAll('.project-nav')
for (let index = 0; index < i.length; index++) {
    console.log(i[index])
    
}

// let next = document.getElementById('nexts')
// let prev = document.getElementById('prevs')

let elemen_slide = document.getElementsByClassName('prevs')

// console.log(elemen_slide)
elemen_slide.classList.add('prevs-remove')


function slide(value){
}





