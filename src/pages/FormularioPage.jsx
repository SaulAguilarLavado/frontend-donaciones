import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserLayout from '../components/UserLayout';
import DonationService from '../services/donation.service';
import DataService from '../services/data.service';
import DashboardService from '../services/dashboard.service';

// Inyectamos un poco de CSS para mejorar la experiencia de usuario en la lista
const styles = `
    .beneficiary-list-item {
        cursor: pointer;
        transition: background-color 0.2s ease;
    }
    .beneficiary-list-item:hover {
        background-color: #e9ecef;
    }
    .beneficiary-list-item.selected {
        background-color: #0d6efd;
        color: white;
        border-color: #0d6efd;
    }
    .cursor-pointer {
        cursor: pointer;
    }
`;

const FormularioPage = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        foodCategory: 'Abarrotes',
        description: '',
        approximateQuantity: '',
        unit: 'Kg',
        pickupAddress: '',
        pickupDate: '',
        pickupTime: '',
        contactPhone: '',
        assignmentType: 'INTELIGENTE',
        beneficiaryId: null,
        beneficiaryType: null,
        beneficiaryName: '', // Para mostrar en el resumen
        isConsumable: false,
         identificacion: 'INDEPENDIENTE'
    });

    const [organizations, setOrganizations] = useState([]);
    const [latestOrg, setLatestOrg] = useState(null);
    const [isListLoading, setIsListLoading] = useState(true);
    const [listError, setListError] = useState('');

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // useEffect se ejecuta una sola vez cuando el componente se monta
    useEffect(() => {
        DashboardService.getDashboardData()
            .then((response) => {
                const { latestShelters = [], latestNgos = [] } = response.data;
                
                const sheltersData = latestShelters.map(s => ({ ...s, type: 'ALBERGUE' }));
                const ngosData = latestNgos.map(o => ({ ...o, type: 'ONG' }));
                
                const allOrgs = [...sheltersData, ...ngosData];
                setOrganizations(allOrgs);

                if (allOrgs.length > 0) {
                    const latest = allOrgs.reduce((a, b) => a.id > b.id ? a : b);
                    setLatestOrg(latest);
                }

                setIsListLoading(false);
            })
            .catch(err => {
                console.error("Error cargando las organizaciones:", err);
                setListError("No se pudieron cargar las listas de organizaciones.");
                setIsListLoading(false);
            });
    }, []);

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.isConsumable) {
            setError("Debes confirmar que los alimentos son aptos para consumo.");
            return;
        }
        setLoading(true);
        setError('');

        DonationService.createDonation(formData)
            .then(() => {
                alert("¡Donación registrada con éxito! Gracias por tu ayuda.");
                navigate('/pedido');
            })
            .catch(err => {
                const errMsg = err.response?.data?.message || "Ocurrió un error al registrar la donación.";
                setError(errMsg);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                const foodCategories = [
                    'Abarrotes', 'Carnes y Refrigerados', 'Frutas y Verduras',
                    'Carbohidratos', 'Plato de Comida'
                ];
                return (
                    <>
                        <h5 className="mb-4">Paso 1 de 4: ¿Qué vas a donar?</h5>
                        <div className="mb-4 d-flex flex-wrap justify-content-center gap-2">
                            {foodCategories.map(category => (
                                <button
                                    key={category}
                                    type="button"
                                    className={`btn ${formData.foodCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                                    onClick={() => setFormData(prev => ({ ...prev, foodCategory: category }))}
                                >
                                    {category === 'Abarrotes' ? 'Abarrotes (No perecibles)' : category}
                                </button>
                            ))}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Descripción breve (Ej: 5kg de arroz, 2 bolsas de pan)</label>
                            <input type="text" className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} required />
                        </div>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="approximateQuantity" className="form-label">Cantidad Aprox.</label>
                                <input type="number" step="1" min="0" className="form-control" id="approximateQuantity" name="approximateQuantity" value={formData.approximateQuantity} onChange={handleChange} required />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="unit" className="form-label">Unidad</label>
                                <select className="form-select" id="unit" name="unit" value={formData.unit} onChange={handleChange}>
                                    <option value="Kg">Kg</option>
                                    <option value="Unidades">Unidades</option>
                                    <option value="Litros">Litros</option>
                                    <option value="Bolsas">Bolsas</option>
                                    <option value="Cajas">Cajas</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mt-4">
                            <button type="button" onClick={handleNext} className="btn btn-primary">Siguiente →</button>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <h5 className="mb-4">Paso 2 de 4: ¿Desde dónde y cuándo?</h5>
                        <div className="mb-3">
                            <label htmlFor="pickupAddress" className="form-label">Dirección de Recojo</label>
                            <input type="text" className="form-control" id="pickupAddress" name="pickupAddress" value={formData.pickupAddress} onChange={handleChange} required />
                        </div>
                        <div className="row g-3">
                           <div className="col-sm-6">
                                <label htmlFor="pickupDate" className="form-label">Fecha de Recojo</label>
                                <input type="date" className="form-control" id="pickupDate" name="pickupDate" value={formData.pickupDate} onChange={handleChange} required />
                            </div>
                             <div className="col-sm-6">
                                <label htmlFor="pickupTime" className="form-label">Hora Aproximada</label>
                                <input type="time" className="form-control" id="pickupTime" name="pickupTime" value={formData.pickupTime} onChange={handleChange} required />
                            </div>
                        </div>
                         <div className="mb-3 mt-3">
                            <label htmlFor="contactPhone" className="form-label">Teléfono de Contacto (para coordinar)</label>
                            <input type="tel" className="form-control" id="contactPhone" name="contactPhone" value={formData.contactPhone} onChange={handleChange} required />
                        </div>

                         <div className="mb-3">
                <label className="form-label">¿Qué tipo de donante eres?</label>
                <select
                    className="form-select"
                    name="identificacion"
                    value={formData.identificacion}
                    onChange={handleChange}
                    required
                >
                    <option value="INDEPENDIENTE">Usuario Independiente</option>
                    <option value="PANADERIA">Panadería</option>
                    <option value="RESTAURANTE">Restaurante</option>
                </select>
            </div>
                        <div className="d-flex justify-content-between mt-4">
                            <button type="button" onClick={handleBack} className="btn btn-secondary">← Volver</button>
                            <button type="button" onClick={handleNext} className="btn btn-primary">Siguiente →</button>
                        </div>
                    </>
                );
            case 3:
                const handleSelectBeneficiary = (id, type, name) => {
                    setFormData(prev => ({
                        ...prev,
                        beneficiaryId: id,
                        beneficiaryType: type,
                        beneficiaryName: name
                    }));
                };

                return (
                    <>
                        <style>{styles}</style>
                        <h5 className="mb-4">Paso 3 de 4: ¿A quién quieres ayudar?</h5>
                        <p>Elige una de estas dos opciones:</p>
                        <div className="form-check p-3 mb-2 border rounded cursor-pointer" onClick={() => setFormData({...formData, assignmentType: 'INTELIGENTE', beneficiaryId: null, beneficiaryType: null, beneficiaryName: ''})}>
                            <input className="form-check-input" type="radio" name="assignmentType" id="intelligent" value="INTELIGENTE" checked={formData.assignmentType === 'INTELIGENTE'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="intelligent">
                                <strong>Asignación Inteligente</strong>
                                <p className="small text-muted mb-0">Nuestra plataforma asignará tu donación a la organización más cercana que más lo necesite.</p>
                            </label>
                        </div>
                        <div className="form-check p-3 border rounded cursor-pointer" onClick={() => setFormData({...formData, assignmentType: 'MANUAL'})}>
                            <input className="form-check-input" type="radio" name="assignmentType" id="manual" value="MANUAL" checked={formData.assignmentType === 'MANUAL'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="manual">
                                <strong>Quiero elegir una organización</strong>
                                <p className="small text-muted mb-0">Verás una lista de albergues y ONGs cercanos para que elijas a quién donar directamente.</p>
                            </label>
                        </div>

                        <div className="mt-4">
                            {isListLoading && <p>Cargando organizaciones...</p>}
                            {listError && <p className="text-danger">{listError}</p>}
                            
                            {formData.assignmentType === 'INTELIGENTE' && latestOrg && (
                                <div className="alert alert-info">
                                    <strong>Sugerencia:</strong> Tu donación podría ser asignada a <strong>{latestOrg.name}</strong>, nuestra organización más reciente.
                                </div>
                            )}

                            {formData.assignmentType === 'MANUAL' && !isListLoading && (
                                <>
                                    <h6>Selecciona una organización:</h6>
                                    <ul className="list-group" style={{maxHeight: '200px', overflowY: 'auto'}}>
                                        {organizations.map(org => (
                                            <li
                                                key={`${org.type}-${org.id}`}
                                                className={`list-group-item beneficiary-list-item ${formData.beneficiaryId === org.id && formData.beneficiaryType === org.type ? 'selected' : ''}`}
                                                onClick={() => handleSelectBeneficiary(org.id, org.type, org.name)}
                                            >
                                                <strong>{org.name}</strong> ({org.type})
                                                <br />
                                                <small>{org.address || 'Dirección no disponible'}</small>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>

                        <div className="d-flex justify-content-between mt-4">
                            <button type="button" onClick={handleBack} className="btn btn-secondary">← Volver</button>
                            <button type="button" onClick={handleNext} className="btn btn-primary" disabled={formData.assignmentType === 'MANUAL' && !formData.beneficiaryId}>
                                Siguiente →
                            </button>
                        </div>
                    </>
                );
            case 4:
                return (
                    <>
                        <h5 className="mb-4">Paso 4 de 4: ¡Casi listo! Revisa tu donación</h5>
                        <ul className="list-group mb-4">
                            <li className="list-group-item"><strong>Qué donas:</strong> {formData.description || '(no especificado)'} ({formData.approximateQuantity || '0'} {formData.unit})</li>
                            <li className="list-group-item"><strong>Ubicación de Recojo:</strong> {formData.pickupAddress || '(no especificado)'}</li>
                            <li className="list-group-item"><strong>Fecha y Hora:</strong> {formData.pickupDate || '(no especificado)'} a las {formData.pickupTime || '(no especificado)'}</li>
                            <li className="list-group-item"><strong>Beneficiario:</strong> {
                                formData.assignmentType === 'INTELIGENTE' 
                                ? 'Asignación Inteligente' 
                                : formData.beneficiaryName || 'No seleccionado'
                            }</li>
                        </ul>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="isConsumable" id="isConsumable" checked={formData.isConsumable} onChange={handleChange} required />
                            <label className="form-check-label" htmlFor="isConsumable">
                                Confirmo que los alimentos son aptos para consumo.
                            </label>
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                            <button type="button" onClick={handleBack} className="btn btn-secondary" disabled={loading}>← Volver</button>
                            <button type="submit" className="btn btn-success" disabled={loading || !formData.isConsumable}>
                                {loading ? 'Confirmando...' : 'CONFIRMAR DONACIÓN'}
                            </button>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <UserLayout pageTitle="Formulario de Donación">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                     <div className="card shadow-sm">
                        <div className="card-body p-4 p-md-5" style={{backgroundColor: '#FBF5EF', borderRadius: '15px'}}>
                            <form onSubmit={handleSubmit}>
                                {renderStepContent()}
                                {error && <div className="alert alert-danger mt-3">{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default FormularioPage;