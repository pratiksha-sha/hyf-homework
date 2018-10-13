
//list
var myArray = [
    'jojo_moyes_me_before_you',
    'fan_girl',
    'me_after_you',
    'crazy_rich_asian',
    'the_alciemist',
    'thousand_years_of_heart',
    'silvia_day_one_with_you',
    'the_twilight_saga',
    'city_of_bones',
    'captive_in_the_dark',
];
console.log(myArray);

const myBooks= 
[{
     id:1,
     title:'Me before you',
     lanuage:'English',
     author: 'Jojo Moyes',
     imagesrc :'http://i38.photobucket.com/albums/e144/pratiksha-sha/me%20before%20you_zpsdokhhr9k.jpeg', 
},  

{
    id:2,
    title:'Fan girl',
    lanuage:'English',
    author: 'Rainbow Rowell',
    imagesrc:'http://i38.photobucket.com/albums/e144/pratiksha-sha/fangirl_zps6jltt18t.jpg',
},


{
    id:3,
    title:'Efter dig',
    lanuage:'Danish',
    author: 'JOJO Moyes',
    imagesrc:'http://i38.photobucket.com/albums/e144/pratiksha-sha/efter%20dig_zpspaksbcbh.jpeg',
},
{
    id:4,
    title:'Crazy Rich Asians',
    lanuage:'English',
    author: 'Kevin Kwan',
    imagesrc:'http://i38.photobucket.com/albums/e144/pratiksha-sha/crazy%20rich%20asian_zpsqcj1vg7n.jpg',  
},
{
    id:5,
    title:'The Alchemist',
    lanuage:'English',
    author: 'Paulo Coelho',
    imagesrc:'http://i38.photobucket.com/albums/e144/pratiksha-sha/the-alchemist-paulo-coelho_zpsrsih1ncc.jpg',
},
{
    id:6,
    title:'One with you',
    lanuage:'English',
    author: 'Slivia Day',
    imagesrc:'http://i38.photobucket.com/albums/e144/pratiksha-sha/one%20with%20you_zpsk7dwvwfj.jpeg',
},
{
    id:7,
title:'The Twilight Saga',
lanuage:'English',
author: 'Stephenie Meyer',
imagesrc:'http://i38.photobucket.com/albums/e144/pratiksha-sha/the_twilight_saga_book_zpshr4emhzd.jpg',
},
{
    id:8,
title:'City of Bones',
lanuage:'English',
author: 'Cassandrs Clare',
imagesrc:'http://i38.photobucket.com/albums/e144/pratiksha-sha/city%20of%20bones_zpsfnz49axp.jpg',
},
{
    id:9,
title:'Captive IN THE Dark',
lanuage:'English',
author: 'CJ Roberts',
imagesrc:'http://i38.photobucket.com/albums/e144/pratiksha-sha/captive_zpsaawpckg0.jpg',
},

{
    id:10,
title:'The Longest Ride',
lanuage:'English',
author: 'Nicholas Sparks',
imagesrc:'http://i38.photobucket.com/albums/e144/pratiksha-sha/Longest%20ride_zpsdfkzywfa.jpg'
}

]
 console.log(myBooks);

 function makelist(){
    const ul =document.createElement ('ul');
    for(i = 0; i<myBooks.length; i++)
    {
        const li=document.createElement('li');
        ul.appendChild(li);
    
        const h2 = document.createElement('h2');
        li.appendChild(h2);
        
        const p =document.createElement('p');
        li.appendChild(p);

        const h3 =document.createElement('h3');
        li.appendChild(h3);

        const img = document.createElement('img');
        li.appendChild(img);
    
        h2.innerHTML = myBooks[i].title;
        p.innerHTML = myBooks[i].author;
        h3.innerHTML = myBooks[i].lanuage;
        img.setAttribute('src',myBooks[i].imagesrc);
        
    
    }
    document.getElementById('myList').appendChild(ul);
    }
    makelist();