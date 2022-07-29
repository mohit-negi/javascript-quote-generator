let btn = document.querySelector('button');
let quote = document.querySelector('.quote-text');
let author = document.querySelector('.quote-author');

const content = [
    {
    quote: '"No matter how much it hurts,how dark it gets or no matter how far you fall, you are never out of the fight."',
    author: 'Marcus Luttrel'
    },
    {
    quote: '"You have authority over your deeds not on results."',
    author: 'Bhagwat geeta' 
    },
    {
    quote: '"I dreamed a dream and found only shadow.I walked the path and found the eternal."',
    author: 'john northam'
    },
    {
    quote: '"Men should be taught as if you taught them not, and things unknown proposed as things forgot."',
    author: 'Benjamin franklin'
    },
    {
    quote: '"All truth passes from three stages, first it is ridiculed, second it is violently opposed, third it is accepted as self-evident."',
    author: 'Arthut schopanhaeur'
    },
    {
    quote: '"Only the disciplined ones are free in life. If you are undisciplined you are slave to your moods, you are a slave to your passions."',
    author: 'Eliud kipchoge'
    },
    {
    quote: '"Pain is inevitable, suffering is not."',
    author: 'Gautam budha'
    },
    {
    quote: '"It takes all the running you can do, to keep in the same place.If you want to get somewhere, you must run twice as fast as that"',
    author: 'Lewis carol'
    },
    {
    quote: 'The more you improve the way you work, the harder the work will be.',
    author: 'Timothy R. Lister'
    },
    {
    quote: 'The Idea is not to live forever but to create something that will.',
    author: 'Andy warhol'
    },
    {
    quote: 'Capacity is just a state of belief, Faith can move mountains.',
    author: 'anonymous'
    },
];
btn.addEventListener('click',()=>{
    let rand = Math.floor(Math.random() * content.length);
    quote.innerText = content[rand].quote;
    author.innerText = content[rand].author;
});