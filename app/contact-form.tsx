"use client";

export function ContactForm() {
  return (
    <form className="cta__form" onSubmit={(e) => e.preventDefault()}>
      <div className="cta__form-title">Reserva tu clase gratis.</div>
      <div className="cta__row">
        <div className="field">
          <label className="field__label">Tu nombre</label>
          <input className="input" placeholder="María" />
        </div>
        <div className="field">
          <label className="field__label">¿Y para quién?</label>
          <select className="select" defaultValue="Para mi hijo/a">
            <option>Para mi hijo/a</option>
            <option>Para mí</option>
            <option>Para mi familia</option>
            <option>Para mi equipo de trabajo</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label className="field__label">Correo o WhatsApp</label>
        <input className="input" placeholder="maria@correo.com  ·  +57 300 …" />
      </div>
      <div className="field">
        <label className="field__label">Sede preferida</label>
        <select className="select" defaultValue="Ciudad Jardín">
          <option>Ciudad Jardín</option>
          <option>Tequendama</option>
          <option>Norte / Vipasa</option>
          <option>Virtual</option>
          <option>Aún no estoy seguro/a</option>
        </select>
      </div>
      <button
        type="submit"
        className="btn btn--accent btn--lg"
        style={{ justifyContent: "center", marginTop: 4 }}
      >
        Agendar mi clase gratis
      </button>
      <p style={{ fontSize: 12, color: "var(--ed-ink-3)", textAlign: "center", marginTop: -4 }}>
        Te respondemos en menos de 24 horas. Solo te escribimos sobre tu clase — nunca marketing.
      </p>
    </form>
  );
}
