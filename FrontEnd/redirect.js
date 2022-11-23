function mostrarAsignaturas(){
    let asignaturas = document.getElementById('asignatura');
    let endPoint = 'http://127.0.0.1:8000/api/asignatura';
    asignaturas.innerHTML = '';
    fetch(endPoint)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            asignaturas.innerHTML += `
                <div class="card my-4" style="width: 18rem;">
                    <div class="card-header">
                      Asignatura
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">${element.id}</li>
                      <li class="list-group-item">${element.nombre}</li>
                      <li class="list-group-item">${element.cantidad_creditos}</li>
                      <li class="list-group-item">${element.intensidad_horaria}</li>
                      <li class="list-group-item">${element.carrera_asociada}</li>
                    </ul>
                </div>
            `;
        });
    });
}