// tutorial: https://www.youtube.com/watch?v=POX3dT-pB4E&ab_channel=TraversyMedia

// ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        // (span in HTML, data-words array, data-wait)
        this.txtElement = txtElement;
        this.words = words;
        this.txt = "";
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    // Type Method
    // All JavaScript objects inherit properties and methods from a prototype:
    //      Date objects inherit from Date.prototype
    //      Person objects inherit from Person.prototype
    // The Object.prototype is on the top of the prototype inheritance chain:
    // Date objects, Array objects, and Person objects inherit from Object.prototype.
    // We are creating the type() method
    // This function is running in loop, typeSpeed is how fast are loops after each other
    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into span element
        this.txtElement.innerHTML = '<span class="txt">' + this.txt + "</span>";

        // Initial type speed
        let typeSpeed = 150;
        if (this.isDeleting) {
            typeSpeed /= 2; // typeSpeed = typeSpeed / 2
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make a pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
            // if whole word is deleted -> switch word
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed); //do something every 500ms
    }
}


// Init On DOM Load
//window.onload = function() {};// the whole document and its resources (e.g. images, iframes, scripts) have been loaded // object.addEventListener("load", myScript); // object.onload = function(){myScript};
document.addEventListener("DOMContentLoaded", init); // the whole document (HTML) has been loaded.

function init() {
	const txtElement = document.querySelector(".txt_type");
	const words = JSON.parse(txtElement.getAttribute("data-words"));
	const wait = txtElement.getAttribute("data-wait");
	// Init TypeWriter
	new TypeWriter(txtElement, words, wait);
}

