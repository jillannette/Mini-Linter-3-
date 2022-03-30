let story = 'Last weekend, I took literally the most beautiful bike ride of my life. \
The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside\
 Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to \
 end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank \
 State Park to take some extremely artsy photos. It was a short stop, though, because I \
 had a really long way left to go. After a quick photo op at the very popular Little Red \
 Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW \
 is actually very long - 4,760 feet! I was already very tired by the time I got to the \
 other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful\
  park along the coast of the Hudson.  Something that was very surprising to me was that \
  near the end of the route you actually cross back into New York! At this point, you \
  are very close to the end.';
let storyWords = story.split(' ');
//  console.log(storyWords);
let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];


//  console.log(storyWords.length);
const betterWords = storyWords.filter(function (word) {
  if (!unnecessaryWords.includes(word)) {
    return word;
  }
});
//  console.log(betterWords.toString(' '));

let overusedWordCount = 0;

  for (let index = 0; index < storyWords.length; index++) {
    let word = storyWords[index];
    for (let j = 0; j < overusedWords.length; j++) {
      let overusedWord = overusedWords[j];
        if (word === overusedWord) {
          overusedWordCount += 1;
    }
    }
    };
let sentenceCounter = 0;

    for (let index = 0; index < storyWords.length; index++) {
      const word = storyWords[index];
      if (word[word.length-1] === '!' || word[word.length-1] === '.') {
        sentenceCounter += 1;
      };
      //  console.log(sentenceCounter);
      
    }
    //  console.log(`'You used overused words ${overusedWordCount} times.'`)
    //  console.log(storyWords);

    console.log(betterWords.length)
    console.log(sentenceCounter);
    console.log(overusedWordCount);
    console.log(betterWords.join(' '));
