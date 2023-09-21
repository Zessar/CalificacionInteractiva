// Obtener todos los elementos con la clase "circle y el button"
const circles = document.querySelectorAll('.circle');
const submitButton = document.querySelector('.submmit');

// Variable para almacenar la seleccion
let selectedNumber = null;

// Agregar un evento de escucha a cada elemento "circle"
circles.forEach(circle => {
  circle.addEventListener('click', function() {
    // Remover la clase "selected" de todos los elementos "circle"
    circles.forEach(circle => {
      circle.classList.remove('selected');
    });

    // Agregar la clase "selected" al elemento seleccionado
    this.classList.add('selected');

    // Obtener el número seleccionado dentro del elemento "circle"
    selectedNumber = this.querySelector('.numbers').textContent;

    // Cambiar el color de fondo del círculo seleccionado
    circles.forEach(circle => {
      circle.style.backgroundColor = 'var(--bg-circle-dark)';
      circle.style.color = 'var(--color-text-lightgrey)';
    });
    this.style.backgroundColor = 'var(--bg-circle-orange)';
    this.style.color = 'var(--color-text-white)';
  });
});

// Agregar un evento de escucha al botón de envío
submitButton.addEventListener('click', function() {
  // Mostrar el resultado en el elemento "second__p"
  const resultElement = document.querySelector('.second__p');
  resultElement.textContent = `You selected ${selectedNumber} out of 5`;
});

// Cambiar la visibilidad de las tarjetas cuando se pinche submit
const buttonChange = document.querySelector('.submmit');
buttonChange.onclick = () => {
    const first = document.querySelector('.card__first');
    const second = document.querySelector('.card__second');

    first.style.display = 'none';
    second.style.display = 'block';
}