import "./AddRaceModal.css";
import * as Dialog from "@radix-ui/react-dialog";
import { useState, useEffect } from "react";

export default function EditRaceModal({ onEdit, raceData, children }) {
  const [form, setForm] = useState({
    title: "",
    img: null,
    distance: "",
    totalTime: "",
    pace: "",
    position: "",
    date: "",
    place: "",
    isPR: false,
  });

  const [open, setOpen] = useState(false);

  // Llenar el formulario con los datos de la carrera cuando se abre el modal
  useEffect(() => {
    if (raceData && open) {
      setForm({
        title: raceData.title || "",
        img: raceData.img || null,
        distance: raceData.distance || "",
        totalTime: raceData.totalTime || "",
        pace: raceData.pace || "",
        position: raceData.position || "",
        date: raceData.date || "",
        place: raceData.place || "",
        isPR: raceData.isPR || false,
      });
    }
  }, [raceData, open]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
            ? URL.createObjectURL(files[0])
            : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit({ ...form, id: raceData.id }); // mantiene el ID original
    setOpen(false);
  };

  const handleCancel = () => {
    // Resetear formulario al cancelar
    if (raceData) {
      setForm({
        title: raceData.title || "",
        img: raceData.img || null,
        distance: raceData.distance || "",
        totalTime: raceData.totalTime || "",
        pace: raceData.pace || "",
        position: raceData.position || "",
        date: raceData.date || "",
        place: raceData.place || "",
        isPR: raceData.isPR || false,
      });
    }
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="modal__overlay" />
        <Dialog.Content className="modal__content">
          <Dialog.Title className="modal__title">
            Editar carrera
          </Dialog.Title>

          <Dialog.Description className="sr-only">
            Formulario de editar carrera
          </Dialog.Description>

          <form className="modal__form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Título"
              value={form.title}
              onChange={handleChange}
              required
            />

            <input
              type="file"
              name="img"
              accept="image/*"
              onChange={handleChange}
            />

            <input
              type="number"
              name="distance"
              placeholder="Distancia (km)"
              value={form.distance}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="totalTime"
              placeholder="Tiempo total (hh:mm:ss)"
              value={form.totalTime}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="pace"
              placeholder="Ritmo (min/km)"
              value={form.pace}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="position"
              placeholder="Posición"
              value={form.position}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="place"
              placeholder="Ubicación"
              value={form.place}
              onChange={handleChange}
              required
            />

            <div className="modal__checkbox-group">
              <label htmlFor="isPR-edit">¿Fue récord personal?</label>
              <input
                id="isPR-edit"
                type="checkbox"
                name="isPR"
                checked={form.isPR}
                onChange={handleChange}
              />
            </div>

            <div className="modal__actions">
              <button type="submit" className="btn btn-primary">
                Guardar cambios
              </button>

              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
