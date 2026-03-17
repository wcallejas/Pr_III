document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remover clase activa de todos los enlaces
                document.querySelectorAll('nav a').forEach(a => {
                    a.classList.remove('active');
                });
                
                // Añadir clase activa al enlace clickeado
                this.classList.add('active');
                
                // Desplazamiento suave
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });