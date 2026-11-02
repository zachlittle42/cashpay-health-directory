# Colombia additions to the shared clinic brief

Registry checks (state WHICH you checked, with date, in `credentials`):
1. REPS (Registro Especial de Prestadores de Servicios de Salud): https://prestadores.minsalud.gov.co/habilitacion/ (consulta de prestadores; search by name or NIT; record the código de prestador, the sede, and whether "cirugía plástica y estética" / "quirófano" / "hospitalización" services are habilitados). If the site blocks you, say so and record what the clinic itself states (código REPS shown on site).
2. ReTHUS (Registro Único Nacional del Talento Humano en Salud): https://web.sispro.gov.co/THS/Cliente/ConsultasPublicas/ConsultaPublicaDeTHxIdentificacion.aspx (per clinician; needs ID number, so usually not possible; say so) or the clinic's published tarjeta profesional number.
3. SCCP membership: https://cirugiaplastica.org.co/ directory ("Encuentre un cirujano plástico certificado"); record "SCCP member: yes/no (checked October 30, 2026)".
4. Accreditation: Icontec accredited institutions (https://www.icontec.org/ acreditación en salud list) and JCI directory (if blocked, say so).
5. Enforcement and incidents: Secretaría de Salud de Medellín / Bogotá / Cali closures (sellamiento), Supersalud actions, and press reports of deaths or injuries naming the clinic or surgeon (El Colombiano, El Tiempo, El País Cali, Semana, Q'hubo; English press).
Shared source ids to reuse: `reps`, `rethus`, `sccp-dir`, `icontec-list`, `jci-directory`. Declare each once (URLs above, date 2026-10-30, kind official).
Extra: record whether surgery happens in the surgeon's own habilitado clinic with hospitalización, in a hospital, or in an office; whether an anesthesiologist (anestesiólogo) is named; whether the surgeon is a plastic surgeon (especialista en cirugía plástica) or a general physician; recovery-house arrangements. Prices in COP or USD as published with date; state USD at 1 USD = 4,100 COP once per price string.
