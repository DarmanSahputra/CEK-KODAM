let btn = document.getElementById('cek')
let nama = document.getElementById('nama')
let asal = document.getElementById('asal')
let box1 = document.getElementById("box1")
let kodam = document.getElementById("kodam")
let namas = document.getElementById("nama_k")
let as = document.getElementById("asal_k")
let hasil = document.getElementById("hasil")
let back = document.getElementById("back")
let text = document.getElementById("note")

const data_kodam = ["Tidak Ada", "Kosong", "Ular Sepuh", "Rawa Rontek", "Shaun the sheep", "Planton",
                    "Putri Emas", "Macan Brangos", "Merak Putih", "Panca Sona", "Kris Emas", "Roro Menduk",
                    "Kera Putih", "Putri Ratu", "Barongsatun", "Naga Tunduk", "Kera Jancok", "Belum Ada Khodam",
                    "Mahkota Ular", "Ular Sawah", "Macan Brangos"
                ]

btn.addEventListener("click", function (){
    let name = nama.value
    let asl = asal.value
    box1.style.display = "none"
    hasil.style.display = "block"
    back.style.display = "block"
    
    const randomIndex = Math.floor(Math.random() * data_kodam.length);
    let kodam_view = data_kodam[randomIndex]
    
    if(data_kodam[randomIndex] === "Tidak Ada" || data_kodam[randomIndex] === "Kosong" || data_kodam[randomIndex] === "Belum Ada Kodam"){
        text.innerText = "Tidak Ada Yang Melindungimu";
    } else {
        text.innerText = '" Kodam kamu akan datang menyelamatkanmu ketika kamu dalam bahaya dan dia akan selalu ada disisimu"'
    }
    kodam.textContent = kodam_view;
    namas.textContent = name;
    as.textContent = asl;
});