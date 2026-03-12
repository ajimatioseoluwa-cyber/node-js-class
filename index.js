const express = require('express')
const ejs = require('ejs')
const app = express();
const portNo = 2008;
const name = "Oseoluwa";

app.set("view engine", "ejs")
const musicNga = [
  {
    id: 1,
    title: "Essence",
    artist: "Wizkid ft. Tems",
    duration: "4:05",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e0/Wizkid_-_Made_in_Lagos.png"
    
  },
  {
    id: 2,
    title: "Last Last",
    artist: "Burna Boy",
    duration: "3:38",
    
    image: "https://upload.wikimedia.org/wikipedia/en/6/6c/Burna_Boy_-_Love%2C_Damini.png"
  },
  {
    id: 3,
    title: "FEM",
    artist: "Davido",
    duration: "3:10",
    
    image: "https://upload.wikimedia.org/wikipedia/en/4/4c/A_Better_Time_by_Davido.jpg"
  },
  {
    id: 4,
    title: "Organise",
    artist: "Asake",
    duration: "2:56",
    
    image: "https://upload.wikimedia.org/wikipedia/en/e/ed/Asake_-_Mr_Money_With_the_Vibe.png"
    
  },
  {
    id: 5,
    title: "Rush",
    artist: "Ayra Starr",
    duration: "2:42",
    
    image: "https://upload.wikimedia.org/wikipedia/en/5/5e/Ayra_Starr_-_Rush_%28single%29.png"
    
  },
  {
    id: 6,
    title: "Juju",
    artist: "Seyi Vibez",
    duration: "3:27",
    
    image: "https://i1.sndcdn.com/artworks-VxAn4l5r9dVXqyxE-aHZ3aA-t500x500.jpg"
  },
  {
    id: 7,
    title: "Love Nwantiti",
    artist: "CKay",
    duration: "2:41",
    
    image: "https://upload.wikimedia.org/wikipedia/en/f/f2/CKay_-_Love_Nwantiti.png"
    
  },
  {
    id: 8,
    title: "Calm Down",
    artist: "Rema",
    duration: "3:38",
    
    image: "https://upload.wikimedia.org/wikipedia/en/c/ca/Rema_-_Rave_%26_Roses.png"
    
  },
  {
    id: 9,
    title: "Woman",
    artist: "Rema ft. Wizkid",
    duration: "3:10",
    image: "https://i1.sndcdn.com/artworks-rema-woman-cover.jpg"
  },
  {
    id: 10,
    title: "Kizz Daniel - Cough (Odo)",
    artist: "Kizz Daniel",
    duration: "3:01",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9b/Kizz_Daniel_-_Cough_%28Odo%29.png"
    
  }

];

// 
app.get('/api', (req,res)=>{
    res.send(musicNga)
})

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/about', (req,res)=>{
    res.render('index.ejs', {name: name})
})

app.listen(portNo, ()=> {
    console.log(`running the port${portNo}`);
    
})
