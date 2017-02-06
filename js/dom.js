/* Learning to access items in the DOM */

/* 
	
	TASK 1
	
1. Access HTML element with id tag-line.
2. Access all headings that belong to div with the class name bg-main-content.
3. Create the variable collect and assign it with content of tag-line.
4. Loop through the array of headings and append the content of each heading to variable collect
5. After the loop, use alert to print collect
	*/
var tagLine = document.getElementById("tag-line");  // gets element with id="tag-line"
var bgMainContent = document.querySelector(".bg-main-content"); // look for the div with the class .bg-main-content and assign it. NOTE that when looking for the class, you need the dot '.' before the class name
var h2InsideBgMainContent = bgMainContent.getElementsByTagName("h2"); //inside of bgMainContent, find all the <h2>s and make them into an array
var collect = tagLine.innerHTML + "\n----------------------\n"; // get the tagline (see line 13), concatenate a line for legibility

for (var i = 0; i < h2InsideBgMainContent.length; i += 1) {
	collect += h2InsideBgMainContent[i].innerHTML + "\n"; // in this, += is concatenating and appending to the value of collect
}

alert(collect);


/*
1. Access 13th div with class name box that belongs to div with the class name bg-main-content. 
2. You can name the variable when_to_launch.
3. Use property children to "scoop" in array all HTML elements that belong to that div.
4. Create the variable collect and assign it with content of heading that belongs to gotten array.
5. Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
6. After the loop, use alert to print collect

*/

var when_to_launch = bgMainContent.children; // make an array that gets all child divs (what if there are children that are NOT divs?
var thirteenthDiv = when_to_launch[12]; //gets 13th element of the array because js starts counting at 0, use [12]
var contentsOfThirteenthDiv = thirteenthDiv.children; // make an array of all the child elements of thirteenthDiv


var collect = contentsOfThirteenthDiv[0].innerHTML + "\n----------------------\n";

for (var j = 1; j < contentsOfThirteenthDiv.length; j +=1) { // start j counting at 1 so that the first child element is skipped
	collect += contentsOfThirteenthDiv[j].innerHTML + "\n\n";
}

alert(collect);

