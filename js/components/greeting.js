export function initGreeting() {
    const hoy = new Date();

    // Obtener día en texto (Ej: Martes)
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const diaNombre = diasSemana[hoy.getDay()];

    // Obtener mes en texto (Ej: Mayo)
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const mes = meses[hoy.getMonth()];

    const año = hoy.getFullYear();

    // Calcular la semana del año
    const inicio = new Date(hoy.getFullYear(), 0, 1);
    const dias = Math.floor((hoy - inicio) / (24 * 60 * 60 * 1000));
    const semana = Math.ceil((hoy.getDay() + 1 + dias) / 7);

    // Asignar al HTML
    const dayNameElement = document.getElementById("dayName");
    const weekElement = document.getElementById("week");
    const mesElement = document.getElementById("month");
    const yearElement = document.getElementById("year");

    if (dayNameElement) dayNameElement.textContent = diaNombre;
    if (weekElement) weekElement.textContent = semana;
    if (mesElement) mesElement.textContent = mes;
    if (yearElement) yearElement.textContent = año;
}
