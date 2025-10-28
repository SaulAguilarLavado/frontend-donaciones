import React from 'react';
import UserLayout from '../components/UserLayout';

const EstadoPedidoPage = () => {
    return (
        <UserLayout pageTitle="Estado de Pedido">
            {/* Este es el contenido específico de la página de estado de pedido */}
            <div className="container-fluid">
                <h2>Seguimiento de tus Donaciones</h2>
                <p>
                    En esta sección podrás ver el historial de todas tus donaciones y
                    verificar en qué estado se encuentran (pendiente de recojo, en camino, entregado).
                </p>

                {/* Más adelante, aquí irá la lista de pedidos */}
                <div className="alert alert-info" role="alert">
                    El historial de donaciones estará disponible aquí próximamente.
                </div>
            </div>
        </UserLayout>
    );
};

export default EstadoPedidoPage;