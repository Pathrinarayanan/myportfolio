// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // EmailJS fallback initialization - only runs if the HTML initialization fails
    window.addEventListener('load', function() {
        if (typeof emailjs !== 'undefined' && !window.emailjsLoaded) {
            try {
                emailjs.init("DGqg8o3PyLrUaJZN2");
                window.emailjsLoaded = true;
                console.log("EmailJS initialized from script.js as fallback");
            } catch (error) {
                console.error("EmailJS fallback initialization failed:", error);
            }
        }
    });
    
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            // Change menu icon if needed
            if (navMenu.classList.contains('active')) {
                menuBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Project Modal Functionality
    const modal = document.getElementById('projectModal');
    const modalContent = document.querySelector('.modal-content');
    const projectDetailDivs = document.querySelectorAll('.project-details');
    const closeModalBtn = document.querySelector('.close-modal');
    const viewProjectBtns = document.querySelectorAll('.view-project-btn');
    const projectClickables = document.querySelectorAll('.project-clickable');
    
    console.log('Found project clickables:', projectClickables.length);
    projectClickables.forEach(item => {
        const projectId = item.getAttribute('data-project');
        console.log('Project clickable found:', projectId);
    });
    
    console.log('Found project details:', projectDetailDivs.length);
    projectDetailDivs.forEach(div => {
        console.log('Project detail found:', div.id);
    });
    
    // Hide all project details initially
    projectDetailDivs.forEach(div => {
        div.style.display = 'none';
    });
    
    // Function to open modal with specific project
    function openProjectModal(projectId) {
        console.log('Opening project modal for:', projectId);
        if (projectId) {
            // Hide all project details
            projectDetailDivs.forEach(div => {
                div.style.display = 'none';
            });
            
            // Show the specific project detail
            const projectDetail = document.getElementById(`${projectId}-details`);
            console.log('Looking for project detail:', `${projectId}-details`, projectDetail);
            
            if (projectDetail) {
                projectDetail.style.display = 'block';
                
                // Show the modal with animation
                modal.style.display = 'block';
                // Trigger reflow for animation to work
                void modal.offsetWidth;
                modal.classList.add('show');
                modalContent.classList.add('show');
                document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
            } else {
                console.error('Project detail not found:', `${projectId}-details`);
            }
        }
    }
    
    // Function to close modal
    function closeProjectModal() {
        modal.classList.remove('show');
        modalContent.classList.remove('show');
        
        // Wait for animation to complete before hiding the modal
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }, 500); // Match this timing with the CSS transition duration
    }
    
    // Make entire project items clickable
    projectClickables.forEach(item => {
        item.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            console.log('Project clicked:', projectId);
            openProjectModal(projectId);
        });
    });
    
    // Handle view project buttons if they exist
    if (viewProjectBtns.length > 0) {
        viewProjectBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent triggering parent's click event
                const projectItem = this.closest('.portfolio-item');
                const projectId = projectItem.getAttribute('data-project');
                openProjectModal(projectId);
            });
        });
    }
    
    // Close modal when clicking the close button
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeProjectModal);
    }
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeProjectModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeProjectModal();
        }
    });
    
    // Tab Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding tab content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add a scroll event listener to add a class to header when scrolled
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Animation on scroll
    const animateElements = document.querySelectorAll('.skill-box, .portfolio-item, .course-item, .event-item');
    
    function checkInView() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('show');
            }
        });
    }
    
    // Add show class initially for elements in view
    window.addEventListener('load', checkInView);
    // Add show class on scroll
    window.addEventListener('scroll', checkInView);
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reload EmailJS if not available
            if (typeof emailjs === 'undefined' || !window.emailjsLoaded) {
                console.warn('EmailJS not available for form submission');
                alert('The contact form is currently unavailable. Please email me directly at pathrinarayananmdu@gmail.com');
                return;
            }
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[placeholder="Subject"]').value;
            const message = this.querySelector('textarea').value;
            
            // Basic form validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Prepare template parameters
            const templateParams = {
                name: name,
                email: email,
                subject: subject,
                message: message,
                to_name: "Portfolio Owner"  // You can customize this
            };
            
            console.log('Attempting to send email with EmailJS v3');
            console.log('Template parameters:', templateParams);
            
            try {
                // EmailJS v3 send method
                console.log('About to call emailjs.send with:', {
                    serviceId: 'service_vwlk1h9',
                    templateId: 'template_sdfldv7',
                    templateParams: templateParams
                });
                
                // Show sending status to user
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                
                emailjs.send('service_vwlk1h9', 'template_sdfldv7', templateParams)
                    .then(function(response) {
                        console.log('Email sent successfully:', response);
                        
                        // Show success status
                        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
                        setTimeout(function() {
                            alert('Thank you for your message! I will get back to you soon.');
                            contactForm.reset();
                            
                            // Reset button
                            submitBtn.textContent = originalBtnText;
                            submitBtn.disabled = false;
                        }, 1500);
                    })
                    .catch(function(error) {
                        console.error('Email sending failed:', error);
                        
                        // Show error status
                        submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Failed';
                        setTimeout(function() {
                            alert('Error sending message. Please try again or contact me directly at pathrinarayananmdu@gmail.com');
                            
                            // Reset button
                            submitBtn.textContent = originalBtnText;
                            submitBtn.disabled = false;
                        }, 1500);
                    });
            } catch (error) {
                console.error('Error while trying to use emailjs.send:', error);
                alert('There was a problem with the contact form. Please email me directly at pathrinarayananmdu@gmail.com');
                
                // Reset button
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
}); 