const userViews = document.querySelector('#user-views');
const trendGames = document.querySelector('#trending-games');
const topGames = document.querySelector('#top-games');

const features = [
  {
    images: '/src/images/05_featured-01.png',
    name: 'FREE STORAGE'
  },{
    images: '/src/images/10_featured-02.png',
    name: 'USER MORE'
  },{
    images: '/src/images/15_featured-03.png',
    name: 'REPLAY READY'
  },{
    images: '/src/images/03_featured-04.png',
    name: 'EASY LAYOUT'
  }
]

const TrendingGames = [
  {
    img: '/src/images/06_top-game-01.jpg.jpeg',
    oddAmount: "$28",
    newAmount: "$20"
  },{
    img: '/src/images/06_top-game-01.jpg.jpeg',
    oddAmount: "",
    newAmount: "$44"
  },{
    img: '/src/images/06_top-game-01.jpg.jpeg',
    oddAmount: "$64",
    newAmount: "$44"
  },{
    img: '/src/images/06_top-game-01.jpg.jpeg',
    oddAmount: "",
    newAmount: "$32"
  }
]

const TopGames = [
  {
    img: '/src/images/06_top-game-01.jpg.jpeg',
    oddAmount: "$28",
    newAmount: "$20"
  },{
    img: '/src/images/06_top-game-01.jpg.jpeg',
    oddAmount: "",
    newAmount: "$44"
  },{
    img: '/src/images/06_top-game-01.jpg.jpeg',
    oddAmount: "$64",
    newAmount: "$44"
  },{
    img: '/src/images/06_top-game-01.jpg.jpeg',
    oddAmount: "",
    newAmount: "$32"
  }
]

const featureCard = (image,name) => {
  return `
    <div class="hover:cursor-pointer hover:*:odd:bg-[#ee626b] flex flex-col justify-center items-center bg-white space-y-4 py-8 px-20 rounded-4xl shadow-lg">
      <div class="bg-[#0071f8] w-fit p-5 rounded-full">
        <img src="${image}" alt="" class="w-12">
      </div>
      <h1 class="text-[1rem] font-[550] block">${name}</h1>
    </div>
  `
}

const trendingGamesCard = (image,oldAmount,newAmount) => {
  return `
    <div class="aspect-video rounded-4xl bg-[#f7f7f7]">
      <div class="bg-[url(${image})] flex justify-end rounded-4xl aspect-[16/14] text-white bg-top bg-cover bg-no-repeat">
        <p class="flex flex-col items-center bg-[#008af8] w-fit h-fit m-6 rounded-xl px-4 py-2 text-2xl"><span class="text-[.9rem] line-through">${oldAmount}</span>${newAmount}</p>
      </div>
      <div class="flex justify-between items-center px-6 py-4">
        <aside class="">
          <h3 class="text-[#7a7a7a] text-[.9rem]">Action</h3>
          <h1 class="font-bold text-[1.3rem]">Assasin Creed</h1>
        </aside>
        <div class="bg-[#ee626b] rounded-full p-3 text-white">
          <img src="/src/images/shopping.png" alt="" class="w-5">
        </div>
      </div>
    </div>
  `
}

const topGamesCard = (image,oldAmount,newAmount) => {
  return `
    <div class="aspect-video rounded-4xl bg-[#f7f7f7]">
      <div class="bg-[url(${image})] flex justify-end rounded-4xl aspect-[16/14] text-white bg-top bg-cover bg-no-repeat">
        <p class="flex flex-col items-center bg-[#008af8] w-fit h-fit m-6 rounded-xl px-4 py-2 text-2xl"><span class="text-[.9rem] line-through">${oldAmount}</span>${newAmount}</p>
      </div>
      <div class="flex justify-between items-center px-6 py-4">
        <aside class="">
          <h3 class="text-[#7a7a7a] text-[.9rem]">Action</h3>
          <h1 class="font-bold text-[1.3rem]">Assasin Creed</h1>
        </aside>
        <div class="bg-[#ee626b] rounded-full p-3 text-white">
          <img src="/src/images/shopping.png" alt="" class="w-5">
        </div>
      </div>
    </div>
  `
}

features.map((feature) => userViews.innerHTML += featureCard(feature.images,feature.name))
TrendingGames.map((game) => trendGames.innerHTML += trendingGamesCard(game.img,game.oddAmount,game.newAmount))
TopGames.map((games) => topGames.innerHTML += topGamesCard())