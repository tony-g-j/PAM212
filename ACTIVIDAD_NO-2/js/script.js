class inicioPAM {
  ReglamentoPOO() {
    return (
      `Reglamento:
        Participación activa en clase Trabajos en classroom.
        Entregas completas.
        Respetar tempos de entrega.
        Presentación de trabajo calidad universitaria
        Uso LLM: unicamente investigacion o buscador`
    );
  }
  LineamientosClassroom() {
    return (
      `Portada:
         Diseño libre.
         Logo UPQ, tema datos del alumno, materia.
      Conclusión de aprendizaje:
         Descripción de lo aprendido durante el desarrollo de la actividad.`
    );
  }
  FechasParciales() {
    return (
      `Fechas Parciales:
        1er parcial 30 sep.
        2do parcial 5 nov.
        3er parcial 03 dic.`
    );
  }
  Porcentajes() {
    return (
      `Porcentajes:
        1er parcial: Conocimiento: 40%, Desempeño: 20%, Producto: 30%, PI: 10%.
        2do parcial: Conocimiento: 40%, Desempeño: 20%, Producto: 20%, PI: 20%.
        3er parcial: Conocimiento: 20%, Desempeño: 10%, Producto: 40%, PI: 30%.`
    );
  }
}

  const Act2 = new inicioPAM();

  const info = document.getElementById('informacion');
  const Reglamento = document.getElementById('reglamento');
  const Lineamientos = document.getElementById('lineamientos');
  const Fechas = document.getElementById('fechas');
  const Porcentajes = document.getElementById('porcentajes');

  Reglamento.addEventListener('click', () => {
    info.innerText = Act2.ReglamentoPOO();
  });
  Lineamientos.addEventListener('click', () => {
    info.innerText = Act2.LineamientosClassroom();
  });
  Fechas.addEventListener('click', () => {
    info.innerText = Act2.FechasParciales();
  });
  Porcentajes.addEventListener('click', () => {
    info.innerText = Act2.Porcentajes();
  });
