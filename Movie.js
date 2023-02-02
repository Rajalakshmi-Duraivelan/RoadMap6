/*The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.*/

// Movie class:
class movie{
    // properties:
    title;
    studio;
    rating;
    //constructor:
    constructor (title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getMovieDetails(){
        console.log("Movie Title: ",this.title,", Movie Studio: ",this.studio,", Movie Rating: ",this.rating)
    }
    inputArray
} 

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
// Movie class:
class movie_b{
    // properties:
    title;
    studio;
    rating;
    //constructor:
    constructor (title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating="PG";
    }

}
//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class movie_c{
    // properties:
    title;
    studio;
    rating;
    //constructor:
    constructor (){
    }
    obj = [
        {title:"Avatar",studio:" 20th Century Studios",rating:"PG-13"},
        {title:"The Avengers",studio:"Walt Disney Studios",rating:"PG-13"},
        {title:"Moana",studio:"Walt Disney Pictures",rating:"PG"},
        {title:"The Lion King",studio:"Walt Disney Pictures",rating:"PG"}

    ]
    getPG(obj){
        let result=[];
        for(let i in obj)
        {
           if(obj[i].rating==="PG")
           result.push(obj[i].title);
        }
        console.log(result);
    }
}
var mov_c = new movie_c();
mov_c.getPG([
    {title:"Avatar",studio:" 20th Century Studios",rating:"PG-13"},
    {title:"The Avengers",studio:"Walt Disney Studios",rating:"PG-13"},
    {title:"Moana",studio:"Walt Disney Pictures",rating:"PG"},
    {title:"The Lion King",studio:"Walt Disney Pictures",rating:"PG"}

]);
//Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
var movie_d = new movie("Casino Royale","Eon Productions","PG­13");
movie_d.getMovieDetails();