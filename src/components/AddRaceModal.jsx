import "./AddRaceModal.css";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

export default function AddRaceModal({ onAdd, children }) {
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

  const [open, setOpen] = useState(false); // controlamos apertura/cierre

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
    onAdd({ ...form, id: Date.now() }); // agrega la nueva carrera
    setForm({
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
    setOpen(false); // cierra el modal
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
            Agregar nueva carrera
          </Dialog.Title>

          {/* Descripción oculta para accesibilidad */}
          <Dialog.Description className="sr-only">
            Formulario de agregar nueva carrera
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

            <label>
              <input
                type="checkbox"
                name="isPR"
                checked={form.isPR}
                onChange={handleChange}
              />
              ¿Fue récord personal?
            </label>

            <div className="modal__actions">
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>

              <Dialog.Close asChild>
                <button className="btn btn-secondary">Cancelar</button>
              </Dialog.Close>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
