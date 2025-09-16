import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { format, isSameDay, parseISO, isAfter, isBefore } from 'date-fns';
import { es } from 'date-fns/locale';
import 'react-calendar/dist/Calendar.css';
import "./RaceCalendar.css";

function RaceCalendar() {
  const [date, setDate] = useState(new Date());
  const [races, setRaces] = useState(() => {
    const saved = localStorage.getItem('raceCalendar');
    return saved ? JSON.parse(saved) : [];
  });
  const [showForm, setShowForm] = useState(false);
  const [editingRace, setEditingRace] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    date: format(new Date(), 'yyyy-MM-dd'),
    time: '09:00',
    distance: '',
    location: '',
    notes: '',
    priority: 'media',
  });

  // Guardar en localStorage cuando cambian las carreras
  useEffect(() => {
    localStorage.setItem('raceCalendar', JSON.stringify(races));
  }, [races]);

  // Formatear fecha para mostrar en el título
  const formattedDate = format(date, "EEEE d 'de' MMMM 'de' yyyy", { locale: es });
  
  // Obtener carreras para la fecha seleccionada
  const racesForSelectedDate = races.filter(race => 
    isSameDay(parseISO(race.date), date)
  );

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title) return;

    const raceData = {
      ...formData,
      id: editingRace ? editingRace.id : Date.now(),
      date: formData.date,
      time: formData.time || '09:00',
      distance: formData.distance ? parseFloat(formData.distance) : null,
    };

    if (editingRace) {
      // Actualizar carrera existente
      setRaces(prev => 
        prev.map(race => 
          race.id === editingRace.id ? raceData : race
        )
      );
    } else {
      // Agregar nueva carrera
      setRaces(prev => [...prev, raceData]);
    }

    // Limpiar formulario
    setFormData({
      title: '',
      date: format(date, 'yyyy-MM-dd'),
      time: '09:00',
      distance: '',
      location: '',
      notes: '',
      priority: 'media',
    });
    
    setEditingRace(null);
    setShowForm(false);
  };

  // Manejar edición de carrera
  const handleEdit = (race) => {
    setEditingRace(race);
    setFormData({
      title: race.title,
      date: race.date,
      time: race.time || '09:00',
      distance: race.distance || '',
      location: race.location || '',
      notes: race.notes || '',
      priority: race.priority || 'media',
    });
    setShowForm(true);
  };

  // Manejar eliminación de carrera
  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta carrera?')) {
      setRaces(prev => prev.filter(race => race.id !== id));
    }
  };

  // Marcar días que tienen carreras en el calendario
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const hasRace = races.some(race => 
        isSameDay(parseISO(race.date), date)
      );
      return hasRace ? <div className="race-dot"></div> : null;
    }
    return null;
  };

  // Estilos para los días que tienen carreras
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const hasRace = races.some(race => 
        isSameDay(parseISO(race.date), date)
      );
      return hasRace ? 'has-race' : '';
    }
    return '';
  };

  // Obtener eventos próximos (próximos 30 días)
  const upcomingRaces = races
    .filter(race => isAfter(parseISO(race.date), new Date()))
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5);

  return (
    <div className="race-calendar">
      <div className="calendar-container">
        <div className="calendar-wrapper">
          <Calendar
            onChange={setDate}
            value={date}
            locale="es-ES"
            tileContent={tileContent}
            tileClassName={tileClassName}
            minDetail="month"
            next2Label={null}
            prev2Label={null}
            formatShortWeekday={(locale, date) => 
              ['D', 'L', 'M', 'M', 'J', 'V', 'S'][date.getDay()]
            }
          />
          
          <div className="calendar-actions">
            <button 
              className="add-race-btn"
              onClick={() => {
                setFormData(prev => ({
                  ...prev,
                  date: format(date, 'yyyy-MM-dd'),
                  time: '09:00'
                }));
                setShowForm(true);
                setEditingRace(null);
              }}
            >
              + Agregar Carrera
            </button>
          </div>
        </div>

        <div className="race-details">
          <h2>{formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}</h2>
          
          {racesForSelectedDate.length > 0 ? (
            <div className="race-list">
              {racesForSelectedDate.map(race => (
                <div key={race.id} className={`race-card priority-${race.priority}`}>
                  <div className="race-card-header">
                    <h3>{race.title}</h3>
                    <div className="race-time">
                      {race.time}
                      {race.distance && ` • ${race.distance} km`}
                    </div>
                  </div>
                  
                  {(race.location || race.notes) && (
                    <div className="race-card-body">
                      {race.location && <p className="race-location">📍 {race.location}</p>}
                      {race.notes && <p className="race-notes">{race.notes}</p>}
                    </div>
                  )}
                  
                  <div className="race-card-actions">
                    <button 
                      className="edit-btn"
                      onClick={() => handleEdit(race)}
                    >
                      Editar
                    </button>
                    <button 
                      className="delete-btn"
                      onClick={() => handleDelete(race.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-races">
              <p>No hay carreras programadas para este día.</p>
              <button 
                className="add-race-btn"
                onClick={() => setShowForm(true)}
              >
                + Agregar Carrera
              </button>
            </div>
          )}
          
          {upcomingRaces.length > 0 && (
            <div className="upcoming-races">
              <h3>Próximas Carreras</h3>
              <ul>
                {upcomingRaces.map(race => (
                  <li 
                    key={race.id} 
                    className="upcoming-race"
                    onClick={() => setDate(parseISO(race.date))}
                  >
                    <span className="upcoming-date">
                      {format(parseISO(race.date), 'd MMM', { locale: es })}
                    </span>
                    <span className="upcoming-title">{race.title}</span>
                    {race.distance && (
                      <span className="upcoming-distance">{race.distance} km</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Modal de formulario */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{editingRace ? 'Editar Carrera' : 'Nueva Carrera'}</h2>
              <button 
                className="close-btn"
                onClick={() => {
                  setShowForm(false);
                  setEditingRace(null);
                }}
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Título de la carrera *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Ej: Maratón de Buenos Aires"
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Fecha *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={format(new Date(), 'yyyy-MM-dd')}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Hora</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Distancia (km)</label>
                  <input
                    type="number"
                    name="distance"
                    value={formData.distance}
                    onChange={handleInputChange}
                    min="0"
                    step="0.1"
                    placeholder="Ej: 21.1"
                  />
                </div>
                
                <div className="form-group">
                  <label>Prioridad</label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                  >
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label>Ubicación</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Ej: Parque Tres de Febrero, CABA"
                />
              </div>
              
              <div className="form-group">
                <label>Notas</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Detalles adicionales, enlace de inscripción, etc."
                  rows="3"
                />
              </div>
              
              <div className="form-actions">
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => {
                    setShowForm(false);
                    setEditingRace(null);
                  }}
                >
                  Cancelar
                </button>
                <button type="submit" className="save-btn">
                  {editingRace ? 'Actualizar' : 'Guardar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RaceCalendar;