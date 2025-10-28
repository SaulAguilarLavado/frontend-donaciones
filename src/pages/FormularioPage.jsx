import React from 'react';
import UserLayout from '../components/UserLayout';

const FormularioPage = () => {
    return (
        <UserLayout pageTitle="Formulario de Donación">
            {/* Este es el contenido específico de la página de formulario */}
            <div className="container-fluid">
                <h2>Registra una nueva donación</h2>
                <p>
                    Desde aquí podrás llenar los detalles de los alimentos que deseas donar
                    y seleccionar el albergue o la ONG a la que irá destinada tu ayuda.
                </p>
                
                {/* Más adelante, aquí irá tu formulario real */}
                <div className="alert alert-info" role="alert">
                    El formulario de donación estará disponible aquí próximamente.
                </div>
            </div>
        </UserLayout>
    );
};

export default FormularioPage;