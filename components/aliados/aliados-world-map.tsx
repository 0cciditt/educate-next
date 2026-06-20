"use client";

import "leaflet/dist/leaflet.css";
import type {
  LatLngBoundsExpression,
  Map as LeafletMap,
  Marker,
  Polyline,
} from "leaflet";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../ui/button";
import { allies } from "./aliados-data";

// Spanish continent labels, placed at rough centroids over the label-free base.
const CONTINENT_LABELS: { name: string; lat: number; lng: number }[] = [
  { name: "Norteamérica", lat: 46, lng: -98 },
  { name: "Sudamérica", lat: -12, lng: -58 },
  { name: "Europa", lat: 58, lng: 9 },
  { name: "África", lat: 3, lng: 21 },
  { name: "Asia", lat: 46, lng: 92 },
  { name: "Oceanía", lat: -25, lng: 134 },
];

export function AliadosWorldMap() {
  const hq = useMemo(() => allies.find((a) => a.hq) ?? allies[0], []);
  const partners = useMemo(() => allies.filter((a) => !a.hq), []);
  const countries = useMemo(
    () => Array.from(new Set(partners.map((a) => a.country))),
    [partners],
  );

  const [selectedId, setSelectedId] = useState(partners[0]?.id ?? hq.id);
  const [filter, setFilter] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const selected = allies.find((a) => a.id === selectedId) ?? hq;

  const mapsSrc = `https://www.google.com/maps?q=${selected.lat},${selected.lng}&z=${
    selected.hq ? 12 : 9
  }&hl=es&output=embed`;

  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Record<string, Marker>>({});
  const linesRef = useRef<Record<string, Polyline>>({});

  // Build the map once.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        worldCopyJump: true,
        minZoom: 2,
      });
      mapRef.current = map;

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        },
      ).addTo(map);

      // Spanish continent labels (decorative, non-interactive).
      CONTINENT_LABELS.forEach((c) => {
        L.marker([c.lat, c.lng], {
          interactive: false,
          keyboard: false,
          icon: L.divIcon({
            className: "continent-label",
            html: c.name,
            iconSize: [150, 18],
            iconAnchor: [75, 9],
          }),
        }).addTo(map);
      });

      // Dashed connectors from the HQ to each partner.
      partners.forEach((p) => {
        linesRef.current[p.id] = L.polyline(
          [
            [hq.lat, hq.lng],
            [p.lat, p.lng],
          ],
          { color: "#e76f3a", weight: 1.2, opacity: 0.32, dashArray: "4 7" },
        ).addTo(map);
      });

      // Pins (HTML divIcons → styled + animated via globals.css).
      allies.forEach((a) => {
        const icon = L.divIcon({
          className: `ally-pin${a.hq ? " ally-pin--hq" : ""}`,
          html: '<span class="ally-pin__pulse"></span><span class="ally-pin__dot"></span>',
          iconSize: a.hq ? [26, 26] : [22, 22],
          iconAnchor: a.hq ? [13, 13] : [11, 11],
        });
        const marker = L.marker([a.lat, a.lng], {
          icon,
          title: `${a.country} — ${a.city}`,
          keyboard: true,
        }).addTo(map);
        marker.on("click", () => setSelectedId(a.id));
        markersRef.current[a.id] = marker;
      });

      const bounds: LatLngBoundsExpression = allies.map((a) => [a.lat, a.lng]);
      map.fitBounds(bounds, { padding: [50, 50] });
      setReady(true);

      // Honour a ?country=... deep link (e.g. the "Ver en el mapa" buttons on
      // the camp pages): pre-select that country and its first pin.
      const param = new URLSearchParams(window.location.search).get("country");
      if (param) {
        const match = countries.find(
          (c) => c.toLowerCase() === param.toLowerCase(),
        );
        if (match) {
          setFilter(match);
          const first = partners.find((p) => p.country === match);
          if (first) setSelectedId(first.id);
        }
      }
    })();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current = {};
      linesRef.current = {};
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-style markers/lines on selection or filter change (and once ready).
  useEffect(() => {
    if (!ready) return;
    Object.entries(markersRef.current).forEach(([id, m]) => {
      const el = m.getElement();
      if (!el) return;
      const a = allies.find((x) => x.id === id);
      const on = !filter || a?.hq || a?.country === filter;
      el.classList.toggle("is-dim", !on);
      el.classList.toggle("is-selected", id === selectedId);
    });
    Object.entries(linesRef.current).forEach(([id, line]) => {
      const a = allies.find((x) => x.id === id);
      const on = !filter || a?.country === filter;
      line.setStyle({ opacity: on ? 0.32 : 0.06 });
    });
  }, [ready, selectedId, filter]);

  // Glide to the selected pin. Runs only on later selection changes — on the
  // initial load the map isn't ready yet, so fitBounds keeps the framing.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    map.flyTo([selected.lat, selected.lng], Math.max(map.getZoom() ?? 4, 5), {
      duration: 0.8,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);

  // Reframe the map to the active filter — a country fits its pins, "Todos"
  // (filter === null) zooms back out to show every location.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;
    const pts = (filter ? allies.filter((a) => a.country === filter) : allies).map(
      (a) => [a.lat, a.lng] as [number, number],
    );
    if (pts.length === 0) return;
    if (pts.length === 1) {
      map.flyTo(pts[0], 7, { duration: 0.8 });
    } else {
      map.flyToBounds(pts, { padding: [50, 50], duration: 0.8 });
    }
  }, [filter, ready]);

  return (
    <section
      id="mapa"
      className="relative scroll-mt-20 overflow-hidden bg-navy text-white py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,1) 1.4px, transparent 1.4px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="max-w-[640px]">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-yellow">
            El mapa
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] leading-[0.95] tracking-tight mt-3 text-white">
            Toca un destino y conócelo.
          </h2>
        </div>

        {/* Country filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          <FilterChip
            label="Todos"
            active={filter === null}
            onClick={() => setFilter(null)}
          />
          {countries.map((c) => (
            <FilterChip
              key={c}
              label={c}
              active={filter === c}
              onClick={() => setFilter((f) => (f === c ? null : c))}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:gap-8 lg:grid-cols-[1.65fr_1fr] lg:items-stretch">
          {/* Map — `isolate` traps Leaflet's high z-index panes/controls in their
              own stacking context so they don't paint over the sticky navbar. */}
          <div className="isolate overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/15 shadow-brand-lg">
            <div
              ref={containerRef}
              className="h-[460px] sm:h-[540px] lg:h-full lg:min-h-[600px] w-full bg-[#0e2c47]"
              aria-label="Mapa de aliados internacionales de Educate"
              role="application"
            />
          </div>

          {/* Detail panel */}
          <article
            key={selected.id}
            className="hero-rise flex flex-col gap-4 rounded-[24px] sm:rounded-[28px] border border-white/15 bg-white/[0.06] p-6 sm:p-7 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              {selected.hq ? (
                <span className="grid h-9 w-12 shrink-0 place-items-center rounded-md bg-yellow font-display text-[12px] tracking-[0.06em] text-ink">
                  HQ
                </span>
              ) : (
                <span className="relative h-8 w-12 shrink-0 overflow-hidden rounded-md ring-1 ring-white/25 shadow-sm">
                  <Image
                    src={selected.flag}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover"
                    unoptimized
                  />
                </span>
              )}
              <div>
                <div className="font-display text-2xl leading-none text-white">
                  {selected.country}
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-yellow">
                  {selected.city}
                </div>
              </div>
            </div>

            <div className="font-heading text-[15px] font-bold text-white/90">
              {selected.institution}
            </div>
            <p className="text-[15px] leading-relaxed text-white/80">
              {selected.blurb}
            </p>

            <div className="flex flex-wrap gap-2">
              {selected.programs.map((p) => (
                <span
                  key={p}
                  className="rounded-pill bg-white/10 px-3 py-1 font-heading text-[12px] font-bold text-white/85"
                >
                  {p}
                </span>
              ))}
            </div>

            {/* Street-level view of the selected location */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/15">
              <iframe
                key={mapsSrc}
                src={mapsSrc}
                title={`Mapa de ${selected.country} — ${selected.city}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-1">
              <Button
                href={`https://www.google.com/maps/search/?api=1&query=${selected.lat},${selected.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="accent"
                size="sm"
              >
                Ver en Google Maps →
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`cursor-pointer rounded-pill border px-4 py-2 font-heading text-[13px] font-bold transition-colors ${
        active
          ? "border-yellow bg-yellow text-ink"
          : "border-white/20 bg-white/[0.06] text-white/80 hover:border-white/40 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
