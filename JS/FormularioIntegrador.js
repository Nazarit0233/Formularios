document.getElementById("imagen").addEventListener("change", function(event) {
    let file = event.target.files[0];
    let preview = document.getElementById("preview-img");

    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = "block";
        }
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
        preview.style.display = "none";
    }   
});


document.getElementById("form-product").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let precio = document.getElementById("precio").value.trim();
    let marca = document.getElementById("marca-creador").value.trim();
    let categoria = document.getElementById("categoria").value;
    let descripcion = document.getElementById("descripcion").value.trim();
    let imagenInput = document.getElementById("imagen");
 
    let imagen = document.getElementById("preview-img").src;

    if (imagenInput.files.length === 0) {
        alert("Por favor, selecciona una imagen.");
        return;
    }

    if (nombre === "" || precio === "" || marca === "" || categoria === "" || descripcion === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.push({ nombre, precio, marca, categoria, descripcion, imagen });

    localStorage.setItem("productos", JSON.stringify(productos));
    alert("Producto agregado exitosamente.");

    location.reload();
});