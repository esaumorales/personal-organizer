export async function loadComponent(id, url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error al cargar ${url}: ${response.statusText}`);
        }
        const html = await response.text();
        document.getElementById(id).innerHTML = html;
    } catch (error) {
        console.error("Error cargando el componente:", error);
        document.getElementById(id).innerHTML = `<p style="color: red;">Error cargando componente.</p>`;
    }
}
