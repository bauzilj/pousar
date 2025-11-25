 const faqButtons = document.querySelectorAll('.faq-question');
        faqButtons.forEach(button => {
            button.addEventListener('click', () => {
                const currentlyActive = document.querySelector('.faq-question.active');
                if (currentlyActive && currentlyActive !== button) {
                    currentlyActive.classList.remove('active');
                    currentlyActive.nextElementSibling.style.maxHeight = null;
                }
                button.classList.toggle('active');
                const answer = button.nextElementSibling;
                if (button.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = null;
                }
            });
        });
