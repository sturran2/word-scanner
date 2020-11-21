let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let storyWords=story.split(' ')

console.log(storyWords.length)


let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//filter out the unnecessaryWords array
const betterWords=storyWords.filter(w =>{
 
 return !unnecessaryWords.includes(w)
})

let wc=betterWords.length
let reallyCount=0
let veryCount=0
let basicallyCount=0

betterWords.forEach(word => {
  if (word===overusedWords[0]){
    reallyCount++
  } else if (word===overusedWords[1]){
    veryCount++
  } else if (word===overusedWords[2]){
    basicallyCount++
  }
})

const overused=betterWords.filter(w=>{
  return !overusedWords.includes(w)
})
let wc2=overused.length
let timesused=wc-wc2




let sent=0
//now count number of sentences
const sentences=betterWords.forEach(word =>{
  if (word[word.length-1]==='.' || word[word.length-1]==='!'){
    sent++
  }
})
console.log(`you overused the 3 overused words a total of ${timesused} times.(Individual totals: really- ${reallyCount} ; very- ${veryCount}; basically- ${basicallyCount}) There are ${wc} words that make up ${sent} sentences.`)

console.log(betterWords.join(' '))
