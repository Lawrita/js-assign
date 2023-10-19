



const naijaBlog =[
    {
        imgUrl: "https://www.naijaloaded.com.ng/wp-content/uploads/2023/10/naija-artistes.jpg",
        paragraph: "Hello, Naijaloadites! Welcome to another edition of “FORGET CHART“, where we ignore the mainstream hits and focus on the hidden gems of the music scene."
    },
    {
        imgUrl: "https://www.naijaloaded.com.ng/wp-content/uploads/2021/03/black-camaru-thinking-funny-laughing.jpg",
        paragraph: "Challenges and competitions have always been an excellent way to push our limits and discover the depths of our abilities."
    },
    {
        imgUrl: "https://www.naijaloaded.com.ng/wp-content/uploads/2023/07/WIZKID-PHOTO.jpg",
        paragraph: "Wizkid, the iconic Nigerian music sensation, has taken the world by storm with his mesmerizing tunes and charismatic persona."
    },
    {
        imgUrl: "https://www.naijaloaded.com.ng/wp-content/uploads/2023/10/Love-Damini-vs-I-Told-Them.jpg",
        paragraph: "MUSIC LOVERS!! Which Is A Better Album – “Love,Damini” Or “I Told Them”?"
    },
    {
        imgUrl: "https://www.naijaloaded.com.ng/wp-content/uploads/2023/10/Untitled-collage-3-e1530261995213.jpg",
        paragraph: "In a world driven by pop culture and global icons, the battle for fame often pits celebrities from different domains against one another"
    },
    {
        imgUrl: "https://www.naijaloaded.com.ng/wp-content/uploads/2023/04/praying-nigeria-1-717x472_c.jpg",
        paragraph: "In a world where wealth and financial success are highly coveted, it’s not uncommon for individuals to harbor a deep desire to become rich"
    },
    {
        imgUrl: "https://www.naijaloaded.com.ng/wp-content/uploads/2023/10/Arm-wrestling.jpg",
        paragraph: "Between Rambo And Arnold Schwarzenegger – Who Wins This Arm Wrestling Match?"
    },
    {
        imgUrl: "https://www.naijaloaded.com.ng/wp-content/uploads/2023/10/Wizkid.jpg",
        paragraph: "Nigerian celebrities stepped out in grand style for the burial ceremony of award-winning music star, Ayodeji Balogun better known as Wizkid’s late mother."
    },
    {
        imgUrl: "https://www.naijaloaded.com.ng/wp-content/uploads/2023/10/83511.jpg",
        paragraph: "Of course, it’s impossible to feel cheerful all of the time and it’s perfectly normal for negative emotions to crop up every now and again."
    },
    {
        imgUrl: "https://www.naijaloaded.com.ng/wp-content/uploads/2023/10/angry.jpg",
        paragraph: "There is no doubt that we are living through an age of rage, in which everyone experiences anger on social media and one in five of us admits to feeling angrier these days"
    },
    {
        imgUrl: "https://www.naijaloaded.com.ng/wp-content/uploads/2023/03/Zinoleesky-1-e1685548421802.jpg",
        paragraph: "If Zinoleesky Drop a Song Today, Will You Jam It Or He Remains Cancelled In Your Book?"
    },
    {
        imgUrl: "https://www.naijaloaded.com.ng/wp-content/uploads/2023/01/davido-wizkid.jpg",
        paragraph: "The birth of Davido and Chioma’s twins has brought immense joy and excitement to fans and well-wishers worldwide"
    },
    ]



const blogs=document.querySelector(".first-div")
  naijaBlog.forEach((updates)=>{
    blogs.innerHTML +=` 
     <div class ="updates">
        <img src="${updates.imgUrl}" class="updat">
        <p class="paragra">${updates.paragraph}</p>
    </div>
`

  })

const allBody = document.querySelector("body")
const button = document.querySelector(".btn")
const toggleDarkMode = ()=>{
   allBody.classList.toggle("dark")
}

button.addEventListener("click", toggleDarkMode)




