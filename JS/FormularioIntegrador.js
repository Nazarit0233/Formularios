document.getElementById("imagen").addEventListener("change", function (event) {
    let file = event.target.files[0];
    let preview = document.getElementById("preview");

    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = "block";
        }
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
        preview.style.display = "none";
    }
});

document.getElementById("form.product").addEventListener("submit", function (event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let precio = document.getElementById("precio").value.trim();
    let catergoria = document.getElementById("categoria").value;
    let imagenInput = document.getElementById("imagen");
    let imagen = document.getElementById("previewImg").src;

    if (imagenInput.files.length === 0) {
        alert("Por favor, selecciona una imagen.");
        return;
    }


    if (nombre === "" || precio === "" || catergoria === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.push({ nombre, precio, catergoria, imagen });

    localStorage.setItem("productos", JSON.stringify(productos));
    alert("Producto agregado exitosamente.");

    location.reload();
});