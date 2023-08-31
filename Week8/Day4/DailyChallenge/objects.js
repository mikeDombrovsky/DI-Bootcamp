//1 Create a class named Video.The class should be constructed with the following parameters:
// title(a string)
// uploader(a string, the person who uploaded it)
// time(a number, the duration of the video - in seconds)
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    //2  Create a method called watch() which displays a string as follows:
    // “uploader parameter watched all time parameter of title parameter!”
    watch(){
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

//3 Instantiate a new Video instance and call the watch() method.
const the_mask = new Video('The Mask', 'Jim Carrey', 101 * 60);
the_mask.watch();

//4 Instantiate a second Video instance with different values.
const the_truman_show = new Video('The Truman Show', 'Jim Carrey', 103 * 60);

//Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
//Think of the best data structure to save this information within the array.
const videos_arr = [the_mask, the_truman_show];

// Bonus: Loop through the array to instantiate those instances.
for(movie of videos_arr){
    movie.watch();
}