let news = document.getElementById("news");

let headlines = [

    "🚨 Scientists discover a cat that pays taxes.",

    "🍕 Pizza officially becomes the healthiest food.",

    "🐧 Penguins open the world's coldest coffee shop.",

    "🤖 AI asks students for homework help.",

    "🐔 Chicken becomes principal of a high school.",

    "🦖 Dinosaur spotted shopping in a supermarket.",

    "🐱 Cat wins the world chess championship.",

    "☕ Coffee replaces water across the globe.",

    "🧦 Lost sock returns home after 10 years.",

    "👽 Aliens cancel Earth visit because Wi-Fi is too slow.",

    "🚀 NASA finds a burger floating in space.",

    "🐼 Panda starts teaching yoga online.",
    
    "☕ Chai officially replaces Wi-Fi in Pakistani homes.",

    "🍛 Biryani declared healthier than salad by hungry students.",

    "🛺 Rickshaw driver reaches destination before Google Maps.",

    "🧕 Ammi catches child pretending to study for the 100th time.",

    "📖 Student opens the book, exam gets postponed immediately.",

    "🥭 Mango becomes Pakistan's new Minister of Happiness.",

    "🏏 Cricket fans request 10 national holidays after every match.",

    "🍽 Plate refuses another serving because the guest says 'Bas thora sa aur'.",

    "🫓 Naan officially declared too small for karahi.",

    "📶 Internet starts working perfectly right after the complaint call ends."

];

function generateNews() {

    let randomIndex = Math.floor(Math.random() * headlines.length);

    news.textContent = headlines[randomIndex];

}