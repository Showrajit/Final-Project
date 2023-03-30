function change(list){
    var val=list.options[list.selectedIndex].value;
    document.body.style.background=val;
}

//FORUM


var defaultThreads = [
        {
        id: 1,
        title: "Natwest Bank ",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 2",
        comments: [

        ]
    },
        {
        id: 2,
        title: "Barclays Bank ",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 2",
        comments: [

        ]
    },
        {
        id: 3,
        title: "Loyds Bank ",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 2",
        comments: [

        ]
    },
        {
        id: 4,
        title: "Santander Bank ",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 2",
        comments: [

        ]
    },
        {
        id: 5,
        title: "HSBC Bank ",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 2",
        comments: [

        ]
    },
        {
        id: 6,
        title: "Nationwide Bank ",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 2",
        comments: [

        ]
    },
        {
        id: 7,
        title: "Bank Of England ",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 2",
        comments: [

        ]
    },
        {
        id: 8,
        title: "Post Office",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 2",
        comments: [

        ]
    },
        {
        id: 9,
        title: "Halifax Bank",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 2",
        comments: [

        ]
    },
        {
        id: 10,
        title: "Other",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 2",
        comments: [

        ]
    }

]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}

//Slide show banner

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 5000;	// Time Between Switch
	 
// Image List
images[0] = "IMG/slide1.jpg";
images[1] = "IMG/slide2.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
