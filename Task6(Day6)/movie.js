class movie{
//a) The constructor for the class Movie is set and respective properties are given
//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
     constructor(title,studio,Rating = 'PG'){
        this.title = title;
        this.studio = studio;
        this.Rating = Rating;
    }
    
    getPG(moviearr,Rating){
        // let PGMovies = [];
        // for (const iterator of moviearr) {
        //     if (iterator.Rating === Rating){
        //      PGMovies.push(iterator);
        //    }
        //   };
        const PGMovies = moviearr.filter(movie => movie.Rating === Rating);
        return PGMovies;
    }

    ToString(){
        return `The Movie "${this.title}" is produced by "${this.studio}" and It Is Censored as "${this.Rating}"`

    }
}
console.log()
console.log("C)Returns a new array of only those movies in the input array with a rating of PG");
let moviearr = [];
moviearr.push(new movie('Intersetlar','warner Bros','PG13'),
              new movie('shawshank Redemption','Bright studios','A'),
               new movie('Jurassic World','universal Studios','PG'));
let movies3 = new movie('NoTitle','NoStudios','NoRating')
console.log(movies3.getPG(moviearr,'PG'))
console.log()
console.log('//------------------------------------------------------------------------------------//')
console.log('D)Instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”')
let movies1 = new movie('Casino Royale','Eon Productions','PG13')
console.log(movies1.ToString());