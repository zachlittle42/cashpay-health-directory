# Colombia official registries for a medical-tourism facility directory

Research date: 2026-10-30. Status: IN PROGRESS (updated after each registry).

Working folder: /private/tmp/claude-501/-Users-zachlittle-Documents-cashpay-health-directory/1dad230d-0ae4-4c37-80ab-63e4dcb0b511/scratchpad/colombia/

## Summary table (filled as registries are confirmed)

| # | Registry | Publisher | Bulk download? | Rows | Status |
|---|----------|-----------|----------------|------|--------|
| 1 | REPS prestadores / sedes (Socrata mirror c36g-9fc2) | MinSalud | yes, CSV | 76,821 sedes / 61,073 prestadores (cut 2026-03-12) | downloaded, parsed |
| 1b | REPS servicios + capacidad (MinSalud download area) | MinSalud | yes, but host unreachable from US | — | blocked (geo) |
| 2 | ReTHUS | MinSalud | no (per-ID lookup; only an aggregate 2022 dataset) | 92,373 aggregate rows | confirmed |
| 3 | SCCP member directory | SCCP (private society) | pending | | |
| 4 | Icontec accredited IPS | Icontec (acreditacionensalud.org.co) | PDF list Oct 2026 | 64 institutions | downloaded, parsing |
| 5 | Supersalud sanctions / local closures | Supersalud, secretarías | pending | | |

## 1. REPS (Registro Especial de Prestadores de Servicios de Salud)

**Publisher:** Ministerio de Salud y Protección Social (MinSalud), Dirección de Prestación de Servicios y Atención Primaria. Data is entered by each departmental/district Secretaría de Salud (the "Entidad Territorial de Salud") and consolidated nationally.

**Legal meaning of being listed.** REPS is the national register of *habilitación* under the Sistema Único de Habilitación (SUH), one of the four components of the Sistema Obligatorio de Garantía de Calidad (Decreto 1011 de 2006, compiled in Decreto 780 de 2016, Parte 5, Título 1). The operative rule is **Resolución 3100 de 2019** (procedures and conditions of inscription and habilitación of health services; service manual in its Anexo Técnico), as amended by Resolución 1317 de 2021, Resolución 544 de 2023 and Resolución 465 de 2025. Habilitación is a **mandatory, self-declared registration**: the provider submits an inscription and a *declaración de autoevaluación* of each service against the minimum standards (talento humano, infraestructura, dotación, medicamentos/dispositivos, procesos prioritarios, historia clínica, interdependencia). The Secretaría de Salud registers it and must verify the conditions through on-site inspection within the following periods (verification is risk-prioritised; it is not a precondition to appear in REPS). Being in REPS therefore means "legally permitted to offer this service at this sede"; it is **not** a quality accreditation (that is the voluntary Sistema Único de Acreditación, Icontec, see section 4). Fields `habilitado`, `fecha_cierre`, `numero_distintivo` exist in the detailed tables. Each sede gets a *distintivo de habilitación* that must be displayed per service.

**Official sources.**
- Portal: https://prestadores.minsalud.gov.co/habilitacion/ (consultas: "Registro actual", "Servicios", "Capacidad instalada"; and the file-download area with Prestadores, Sedes, Servicios, Capacidad instalada as delimited text/Excel). **Status 2026-10-30: the host (20.85.213.59, Azure) times out from this US connection on both HTTP and HTTPS; SISPRO (web.sispro.gov.co) likewise. Likely geo/ASN filtering. A Vercel sandbox fetch was attempted but the team lacks sandbox permission (403).** Wayback has indexed only a few pages of this host (consultadistintivo.aspx, capacidad_departamental.aspx, ayudas/*.pdf, and `ayudas/tabla_parametros_servicios_3100_2019.xlsx`), not the bulk files.
- Open-data mirror (Socrata, CSV/JSON export, CC BY-SA 4.0): https://www.datos.gov.co/d/c36g-9fc2 "Registro Especial de Prestadores y Sedes de Servicios de Salud" (MinSalud). Stated refresh "Anual"; rows last updated 2026-04-17; internal `FechaCorte` = **12 March 2026**. 22 columns, one row per sede: CodigoPrestador, NombrePrestador, CodigoHabilitacionSede, NombreSede, TipoIdentificacion, NumeroIdentificacion (NIT/CC), NaturalezaJuridica, ESE, Municipio/Departamento (prestador and sede), Direccion, Email, Telefono (prestador and sede), ClasePrestadorDesc, FechaCorte. **No services, no capacity, no nivel.**
- https://www.datos.gov.co/d/s2ru-bqt6 "Relación de IPS públicas y privadas según el nivel de atención y capacidad instalada" (MinSalud; cut 2022-11; 41,427 rows; one row per sede × capacity line: grupo CAMAS/SALAS/CONSULTORIOS/AMBULANCIAS/CAMILLAS/SILLAS/UNIDAD MOVIL with description e.g. "Quirófano" (153 rows), "Sala de Cirugía" (1,162), "Procedimientos", "Partos", ICU beds). Stale but usable as a 2022 proxy for operating rooms.
- https://www.datos.gov.co/d/ugc5-acjp "Listado de IPS en Colombia según su nivel de complejidad" (MinSalud, cut 2022-06, 11,466 IPS, has nivel/caracter/habilitado/fecha_vencimiento). Stale.
- Departmental mirrors with **service-level rows** (serv_codigo, serv_nombre, modality, complexity) exist only for some territories and are old: Cundinamarca j93s-yemu (2022), Boyacá p9n2-9qsb (public network only), Buga 7r2w-27jm (2026, 688 rows, full Res. 3100 service fields). Antioquia b4dp-ximh (2025-03, 17,232 sedes, no services), Atlántico qsh3-vq78 (2025-05), Barranquilla ykfz-ifui (2021), Bolívar hju9-dp3d (2021).

**Parse results, Socrata c36g-9fc2 (cut 12 Mar 2026).** File: downloads/reps/socrata_c36g-9fc2_prestadores_sedes.csv (28.8 MB, 76,821 sede rows, 61,073 distinct prestadores).

| Clase de prestador | Prestadores | Sedes |
|---|---|---|
| Profesional Independiente | 48,183 | 54,657 |
| Instituciones Prestadoras de Servicios de Salud (IPS) | 10,939 | 19,551 |
| Objeto Social Diferente a la Prestación de Servicios de Salud | 1,452 | 2,107 |
| Transporte Especial de Pacientes | 499 | 506 |

| Naturaleza jurídica | Prestadores | Sedes |
|---|---|---|
| Privada | 59,947 | 72,905 |
| Pública | 1,098 | 3,845 (3,485 sedes flagged ESE) |
| Mixta | 28 | 71 |

Sedes by department (top): Antioquia 16,822; Bogotá D.C. 16,181; Valle del Cauca 7,500; Cundinamarca 3,568; Santander 3,455; Atlántico 2,938; Nariño 2,392; Bolívar 2,120; Norte de Santander 2,037; Boyacá 1,954; Risaralda 1,802.

Sedes by target municipality (all classes): Bogotá 16,181; Medellín 10,056; Cali 5,033; Barranquilla 2,164; Pereira 1,540; Bucaramanga 1,535; Cartagena 1,516. (Private-IPS-only counts per city are in the next update.)

**Services (cirugía plástica, quirófano, hospitalización, odontología, bariátrica): not yet obtained** — the Servicios table is only in the MinSalud download area, which is unreachable from here. Service names/codes per Resolución 3100 de 2019 Anexo Técnico (grupo Quirúrgico includes "Cirugía plástica y estética", "Cirugía maxilofacial", "Cirugía de mano", "Cirugía general", "Cirugía oral", etc.; grupo Internación: "Hospitalización"; Apoyo: "Odontología general"; cirugía bariátrica is not a separate habilitated service, it is performed under Cirugía general / "Cirugía gastrointestinal"). Confirmation against the official parameter table is pending.

## 2. ReTHUS (Registro Único Nacional del Talento Humano en Salud)

**Publisher:** MinSalud, operated through SISPRO. Legal basis: Ley 1164 de 2007 (art. 23) and Decreto 4192 de 2010; a professional must be inscribed in ReTHUS to practise legally (the *tarjeta profesional* / *autorización para ejercer* is issued by the Secretaría de Salud and recorded here).

**Bulk export: NO.** The public consultation (https://web.sispro.gov.co/THS/Cliente/ConsultasPublicas/ConsultaPublicaDeTHxIdentificacion.aspx) is per cédula / per name only, with a captcha. The only open dataset is https://www.datos.gov.co/d/my8c-6xkk "Registro Único Nacional del Talento Humano en Salud - Rethus" (cut 2022-05-30, 92,373 rows) which is **aggregated** (origen título, tipo institución, tipo programa, perfil profesional, año acto administrativo, departamento/municipio de residencia, número de registros): no names, no identifiers. Use: per-surgeon verification step in the editorial workflow only (name → ReTHUS lookup to confirm "Especialista en Cirugía Plástica, Reconstructiva y Estética" is recorded), not a directory source.

## 3. SCCP

(pending)

## 4. Icontec / JCI

(pending)

## 5. Enforcement

(pending)

## Recommendation

(pending)
