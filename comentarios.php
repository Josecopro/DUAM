<?php
$host = "localhost"; 
$usuario = "root"; 
$contrasena = ""; 
$base_datos = "PQRS";

// Conectar a la base de datos
$conexion = new mysqli($host, $usuario, $contrasena, $base_datos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error en la conexión: " . $conexion->connect_error);
}

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$comentario = $_POST['comentario'];

// Preparar la consulta SQL para insertar los datos en la tabla "Peticiones"
$sql = "INSERT INTO Peticiones (comentario) VALUES ('$comentario')";
$previousPage = $_SERVER['HTTP_REFERER'];
if ($conexion->query($sql) === TRUE) {
    // La inserción se realizó con éxito, ahora obtendremos el ID del último registro insertado
    $ultimoId = $conexion->insert_id;

    // Preparar la consulta SQL para insertar los datos en la tabla "Usuario"
    $sqlUsuario = "INSERT INTO Usuario (Numero_orden, Nombre, Correo) VALUES ('$ultimoId', '$nombre', '$correo')";

    if ($conexion->query($sqlUsuario) === TRUE) {
        // Redirigir al usuario a la página anterior (la que contiene el formulario)
        header("Location: $previousPage");
        exit(); // Asegurarse de que no se ejecute más código después de la redirección
    } else {
        echo "Error al insertar datos de usuario: " . $conexion->error;
    }
} else {
    echo "Error al insertar comentario: " . $conexion->error;
}

// Cerrar la conexión
$conexion->close();
?>

