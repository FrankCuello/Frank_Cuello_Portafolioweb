document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Función para activar/desactivar el modo oscuro
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        // Guardar preferencia en localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Modo Dark';
        }
    }

    // Verificar preferencia en localStorage al cargar la página
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    }

    // Evento click del botón de modo oscuro
    darkModeToggle.addEventListener('click', toggleDarkMode);
});