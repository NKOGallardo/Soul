// Set minimum date to today
        const dateInput = document.getElementById('date');
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);

        // Cancel button handler
        document.getElementById('cancelBtn').addEventListener('click', function() {
            if (confirm('Are you sure you want to cancel? All entered information will be lost.')) {
                document.getElementById('bookingForm').reset();
            }
        });

        // Form submission handler
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                date: document.getElementById('date').value,
                startTime: document.getElementById('startTime').value,
                endTime: document.getElementById('endTime').value,
                service: document.getElementById('service').value,
                location: document.getElementById('location').value,
                guests: document.getElementById('guests').value,
                message: document.getElementById('message').value
            };

            // Store in memory (in a real application, this would be sent to a server)
            console.log('Booking submitted:', formData);

            // Show success message
            document.getElementById('successMessage').style.display = 'block';
            
            // Reset form
            this.reset();

            // Scroll to success message
            document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });

            // Hide success message after 5 seconds
            setTimeout(function() {
                document.getElementById('successMessage').style.display = 'none';
            }, 5000);
        });