import React from "react";
import UserLayout from "../components/UserLayout";

// Hemos tomado todo el contenido informativo que hizo tu compañero
// y lo hemos puesto dentro de nuestro componente UserLayout.
// Así, evitamos repetir el código de la sidebar y el header.

const AlimentosPage = () => {
    return (
        <UserLayout pageTitle="Alimentos que puedes Donar">
            {/* Aquí empieza el contenido específico de esta página */}
            <h6>¿Qué puedes donar?</h6>
            <p>
                Las donaciones de alimentos ayudan a mantener la alimentación de personas 
                en situación de vulnerabilidad en albergues y ONGs. Puedes donar 
                productos no perecedibles y en buen estado, incluyendo:
            </p>
            
            <div className="row">
                <div className="col-md-6">
                    <strong>Tipos de Alimentos:</strong>
                    <ul>
                        <li><strong>Enlatados:</strong> atún, sardinas, verduras, sopas, frijoles.</li>
                        <li><strong>Cereales y granos:</strong> arroz, fideos, avena, quinua.</li>
                        <li><strong>Lácteos:</strong> leche en polvo, leche UHT, queso envasado.</li>
                        <li><strong>Panadería y snacks:</strong> galletas, pan empaquetado, frutos secos.</li>
                        <li><strong>Bebidas y suplementos:</strong> jugos, néctares, suplementos nutricionales.</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <strong>Consejos para tus donaciones:</strong>
                    <ul>
                        <li>Verifica que los alimentos estén en buen estado y dentro de la fecha de caducidad.</li>
                        <li>Evita productos abiertos o dañados.</li>
                        <li>Si es posible, agrupa los alimentos por categoría para facilitar su distribución.</li>
                        <li>Incluye alimentos que sean fáciles de preparar y consumir.</li>
                    </ul>
                </div>
            </div>

            <h6 className="mt-4">Impacto de tus donativos:</h6>
            <p>Gracias a tus aportes, los albergues y ONGs pueden:</p>
            <ul>
                <li>Garantizar comidas diarias a niños, adultos y personas mayores en situación vulnerable.</li>
                <li>Proporcionar alimentos durante emergencias o desastres naturales.</li>
                <li>Apoyar programas de nutrición y educación alimentaria.</li>
            </ul>

            <p className="fw-bold mt-4">
                Recuerda que cada pequeño aporte hace una gran diferencia en la vida de quienes más lo necesitan.
            </p>
            {/* Aquí termina el contenido específico */}
        </UserLayout>
    );
};

export default AlimentosPage;