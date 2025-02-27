document.addEventListener('DOMContentLoaded', () => {
    const text = "I am Mehul Raul";
    const animatedText = document.getElementById('animated-text');
    let index = 0;

    function type() { //defines a function named as 'type' 
        if (index < text.length) { //checks if index val is less than text val
            if (text.slice(index, index + 2) === "Ra") { //text.slice(index, index + 2) returns first 2 charactrers
                //if not ra then goes to line 17 (to underst well read doc in project)
                animatedText.innerHTML += `<span class="text-pink-800">Ra</span>`; 
//innerHTML: This property allows you to set or get the HTML content of an element.
// When you use innerHTML, the browser parses the string as HTML
//This will add a new <span> element with the class text-pink-800 and the text Ra inside it.
//innerText: This propertytreats the content as plain text.
                index = index + 2;
            } else {
                animatedText.innerHTML += text.charAt(index);
                index++;
            }
            setTimeout(type, 100);//his sets a delay of 100 milliseconds before 
            //calling the type function again, creating a typing animation effect.
        }
    }

    type();
});






//for skill section logos and all
document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.skill-icon');
    let iconsAnimated = false; // Flag to check if icons have been animated

    // Function to animate icons to original positions
    function animateIcons() {
        icons.forEach((icon, index) => {
            // Set initial arbitrary positions
            icon.style.transform = `translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px)`;

            // Animate to original positions
            setTimeout(() => {
                icon.style.opacity = '1';
                icon.style.transform = `translate(0, 0) rotate(${getRotationValue(icon)}deg)`;
            }, index * 200); // Delay each icon's animation slightly
        });

        iconsAnimated = true; // Update flag
    }

    // Helper function to get current rotation value
    function getRotationValue(icon) {
        const transformValue = icon.style.transform;
        if (transformValue.includes('rotate(')) {
            return parseFloat(transformValue.split('rotate(')[1].split('deg)')[0]);
        }
        return 0;
    }

    // Call the animation function when navigating to skills section
    const skillsLink = document.querySelector('a[href="#skills"]');
    skillsLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        if (!iconsAnimated) {
            animateIcons(); // Trigger animation only if icons haven't been animated
        }
        // Scroll to the skills section
        const skillsSection = document.getElementById('skills');
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Check if skills section is in viewport on scroll
    function checkSkillsSectionInView() {
        const skillsSection = document.getElementById('skills');
        const skillsSectionRect = skillsSection.getBoundingClientRect();

        // Check if skills section is in viewport
        if (skillsSectionRect.top < window.innerHeight && skillsSectionRect.bottom >= 0) {
            if (!iconsAnimated) {
                animateIcons(); // Trigger animation if icons haven't been animated and section is in view
            }
            // Remove event listener once animation triggered
            window.removeEventListener('scroll', checkSkillsSectionInView);
        }
    }

    // Add event listener to check skills section visibility on scroll
    window.addEventListener('scroll', checkSkillsSectionInView);

    // On page load, check if already in skills section and animate icons
    if (window.location.hash === '#skills') {
        animateIcons();
    }
});
//ends here





//TYPE TEXT FOR MOBILE
 document.addEventListener('DOMContentLoaded', () => {
     const text = "I am Mehul Raul";
     const animatedTextMobile = document.getElementById('animated-text-mobile');
     let index = 0;

    function type() {
         if (index < text.length) {
             if (text.slice(index, index + 2) === "Ra") {
                 animatedTextMobile.innerHTML += `<span class="text-pink-800">Ra</span>`;
                 index += 2;
             } else {
                 animatedTextMobile.innerHTML += text.charAt(index);
                 index++;
             }
             setTimeout(type, 100);
        }
     }

     type();
 });


//form js work
 const form = document.getElementById('contactForm');
 const result = document.getElementById('submitBtn');
 form.addEventListener('submit', function(e) {
     e.preventDefault();
     const formData = new FormData(form);
     const object = Object.fromEntries(formData);
     const json = JSON.stringify(object);

     // Change button text to "Please wait..."
     result.innerHTML = "Please wait...";
     result.disabled = true; // Disable the button to prevent multiple submissions

     fetch('https://api.web3forms.com/submit', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             'Accept': 'application/json'
         },
         body: json
     })
     .then(async (response) => {
         let json = await response.json();
         if (response.status == 200) {
             result.innerHTML = "Form submitted successfully";
         } else {
             console.log(response);
             result.innerHTML = json.message;
         }
     })
     .catch(error => {
         console.log(error);
         result.innerHTML = "Something went wrong!";
     })
     .finally(() => {
         // Reset button state after 3 seconds
         setTimeout(() => {
             result.innerHTML = "Submit";                   
             result.disabled = false; // Re-enable the button
         }, 1000);
     });
 });
  document.addEventListener('DOMContentLoaded', function() {
          const contactForm = document.getElementById('contactForm');
         const fullNameInput = document.getElementById('fullName');
         const emailAddressInput = document.getElementById('emailAddress');
         const mobileNumberInput = document.getElementById('mobileNumber');

         contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            // Optionally, clear form inputs after submission
            fullNameInput.value = '';
            emailAddressInput.value = '';
            mobileNumberInput.value = '';
        
         });
    });
//ends here





document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});





        document.addEventListener('DOMContentLoaded', function() {
            const hamburgerMenu = document.getElementById('hamburger-menu');
            const navbar = document.getElementById('navbar');
            const navLinks = navbar.querySelectorAll('a');
    
            hamburgerMenu.addEventListener('click', () => {
                navbar.classList.toggle('hidden');
            });
    
            // Close navbar when a link is clicked
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    // Scroll to the section smoothly
                    const targetId = link.getAttribute('href').substring(1); // Get target id without the '#'
                    const targetSection = document.getElementById(targetId);
    
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
    
                    // Hide the navbar on mobile
                    navbar.classList.add('hidden');
                });
            });
        });
