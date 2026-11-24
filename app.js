const DEFAULT_PATIENTS = [
  {
    id: `pt-ratna`,
    name: `Ny. Ratna Kusumawardhani`,
    dob: `1968-08-14`,
    ageLabel: `58 thn`,
    sex: `Perempuan`,
    mrn: `MRN-2026-0418`,
    bloodType: `O Rh+`,
    unit: `Poliklinik Penyakit Dalam · Ruang 204`,
    allergies: [`Penisilin`, `Kotrimoksazol`],
    allergyKeywords: [`penisilin`, `amoksisilin`, `ampisilin`, `amoxicillin`, `ampicillin`, `kotrimoksazol`, `sulfametoksazol`],
    riskNote: `Hipertensi Urgensi & DM Tipe 2`,
    initialVitals: { sbp: 168, dbp: 98, hr: 106, temp: 37.4, spo2: 97, rr: 20 },
    vitalHistory: {
      sbp: [148, 156, 162, 168],
      hr: [88, 94, 102, 106],
      temp: [36.8, 37.0, 37.2, 37.4],
      spo2: [98, 98, 97, 97]
    },
    defaultSoap: {
      s: `Pasien mengeluh nyeri kepala berdenyut di bagian tengkuk sejak kemarin sore, disertai lemas ringan. Mengaku tidak minum obat antihipertensi selama 4 hari terakhir.`,
      o: `Kesadaran Compos Mentis (GCS E4V5M6). Konjungtiva tidak anemis. Cor S1/S2 reguler, tidak ada murmur. Pulmo vesikuler (+/+), tidak ada ronkhi maupun wheezing.`,
      icd: `I10 — Hipertensi Esensial (Primer)`,
      acuity: `Observasi`,
      a: `Hipertensi urgensi tanpa tanda kerusakan organ target akut pada pasien dengan riwayat DM Tipe 2 terkontrol parsial.`,
      p: `1. Berikan Amlodipin 10 mg PO dosis awal, observasi TD ulang 30 menit kemudian.\n2. Cek GDS sewaktu dan fungsi ginjal (ureum/kreatinin).\n3. Edukasi kepatuhan obat harian dan pembatasan natrium.`,
      pain: 5
    }
  },
  {
    id: `pt-hendra`,
    name: `Tn. Hendra Wijaya`,
    dob: `1954-11-03`,
    ageLabel: `72 thn`,
    sex: `Laki-laki`,
    mrn: `MRN-2026-0792`,
    bloodType: `A Rh+`,
    unit: `IGD Observasi · Bed 03`,
    allergies: [],
    allergyKeywords: [],
    riskNote: `Risiko Jatuh Tinggi (Skor Morse 55)`,
    initialVitals: { sbp: 138, dbp: 86, hr: 114, temp: 38.9, spo2: 91, rr: 24 },
    vitalHistory: {
      sbp: [130, 134, 136, 138],
      hr: [92, 100, 108, 114],
      temp: [37.6, 38.1, 38.5, 38.9],
      spo2: [95, 94, 92, 91]
    },
    defaultSoap: {
      s: `Sesak napas memberat sejak 1 hari terakhir, batuk berdahak kuning kehijauan selama 4 hari disertai demam tinggi menggigil.`,
      o: `Tampak sakit sedang, retraksi interkostal ringan. Paru: ronkhi basah halus pada lapangan bawah paru kanan, SpO2 91% udara ruangan.`,
      icd: `J18.9 — Pneumonia Komunitas`,
      acuity: `Kritis`,
      a: `Suspek Pneumonia Komunitas dengan hipoksemia ringan dan takikardia reaktif terhadap demam.`,
      p: `1. Oksigen nasal kanul 3 L/menit, target SpO2 ≥ 95%.\n2. Parasetamol 1000 mg IV/PO bila suhu ≥ 38.0 °C.\n3. Rencana foto toraks AP, darah lengkap, dan kultur sputum sebelum antibiotik empiris.`,
      pain: 4
    }
  },
  {
    id: `pt-nadira`,
    name: `Sdri. Nadira Putri Pratama`,
    dob: `1997-03-22`,
    ageLabel: `29 thn`,
    sex: `Perempuan`,
    mrn: `MRN-2026-1105`,
    bloodType: `B Rh-`,
    unit: `Poliklinik Umum · Ruang 102`,
    allergies: [`Ibuprofen / OAINS`],
    allergyKeywords: [`ibuprofen`, `oains`, `nsaid`, `ketorolac`, `natrium diklofenak`, `aspirin`, `asam mefenamat`],
    riskNote: `Asma Intermiten Ringan`,
    initialVitals: { sbp: 114, dbp: 74, hr: 76, temp: 36.6, spo2: 99, rr: 16 },
    vitalHistory: {
      sbp: [112, 116, 114, 114],
      hr: [72, 74, 78, 76],
      temp: [36.5, 36.6, 36.6, 36.6],
      spo2: [99, 99, 99, 99]
    },
    defaultSoap: {
      s: `Nyeri tenggorokan ringan dan hidung tersumbat sejak 2 hari lalu. Tidak ada sesak napas maupun demam tinggi.`,
      o: `Kesadaran Compos Mentis. Faring tampak hiperemis ringan, tonsil T1/T1 tenang. Paru vesikuler (+/+), tidak ada wheezing.`,
      icd: `J06.9 — Infeksi Saluran Napas Akut`,
      acuity: `Stabil`,
      a: `Faringitis akut ringan tanpa komplikasi saluran napas bawah.`,
      p: `1. Parasetamol 3x500 mg PO prn nyeri tenggorok (hindari golongan OAINS karena riwayat alergi).\n2. Edukasi hidrasi cukup dan istirahat suara.`,
      pain: 2
    }
  },
  {
    id: `pt-bagas`,
    name: `An. Bagas Pratama`,
    dob: `2016-01-09`,
    ageLabel: `10 thn`,
    sex: `Laki-laki`,
    mrn: `MRN-2026-1340`,
    bloodType: `AB Rh+`,
    unit: `Poliklinik Anak · Ruang 301`,
    allergies: [`Debu Rumah & Tungau`],
    allergyKeywords: [],
    riskNote: `Observasi Demam Hari ke-3`,
    initialVitals: { sbp: 102, dbp: 68, hr: 104, temp: 38.4, spo2: 98, rr: 22 },
    vitalHistory: {
      sbp: [100, 102, 100, 102],
      hr: [94, 98, 102, 104],
      temp: [37.9, 38.2, 38.6, 38.4],
      spo2: [99, 98, 98, 98]
    },
    defaultSoap: {
      s: ``,
      o: ``,
      icd: ``,
      acuity: `Observasi`,
      a: ``,
      p: ``,
      pain: 3
    }
  }
];

const appState = {
  patients: JSON.parse(JSON.stringify(DEFAULT_PATIENTS)),
  activePatientId: `pt-ratna`,
  searchQuery: ``,
  severityFilter: `all`,
  activeStep: 1,
  clinicianName: `dr. Ardiansyah Putra, Sp.PD`,
  draftsByPatient: {},
  savedRecords: [],
  dirty: false
};

const MONTH_NAMES_ID = [`Jan`, `Feb`, `Mar`, `Apr`, `Mei`, `Jun`, `Jul`, `Agu`, `Sep`, `Okt`, `Nov`, `Des`];

function formatDateId(isoDate) {
  if (!isoDate) return `—`;
  const parts = String(isoDate).split(`-`);
  if (parts.length !== 3) return isoDate;
  const year = parts[0];
  const monthIdx = parseInt(parts[1], 10) - 1;
  const day = parts[2];
  const monthLabel = MONTH_NAMES_ID[monthIdx] || parts[1];
  return `${day} ${monthLabel} ${year}`;
}

function computeAgeLabel(isoDate) {
  if (!isoDate) return `—`;
  const birth = new Date(isoDate);
  if (Number.isNaN(birth.getTime())) return `—`;
  const refNow = new Date(`2026-11-20`);
  let years = refNow.getFullYear() - birth.getFullYear();
  const mDiff = refNow.getMonth() - birth.getMonth();
  if (mDiff < 0 || (mDiff === 0 && refNow.getDate() < birth.getDate())) {
    years -= 1;
  }
  return `${Math.max(0, years)} thn`;
}

function formatNowStamp() {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, `0`);
  const mm = MONTH_NAMES_ID[now.getMonth()] || `Nov`;
  const yyyy = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, `0`);
  const min = String(now.getMinutes()).padStart(2, `0`);
  return `${dd} ${mm} ${yyyy}, ${hh}:${min} WIB`;
}

function iconSvg(kind) {
  if (kind === `critical`) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
  }
  if (kind === `warning`) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
  }
  if (kind === `ok`) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
  }
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
}

function getActivePatient() {
  const found = appState.patients.find((p) => p.id === appState.activePatientId);
  return found || appState.patients[0];
}

function ensurePatientDraft(patient) {
  if (!appState.draftsByPatient[patient.id]) {
    appState.draftsByPatient[patient.id] = {
      vitals: Object.assign({}, patient.initialVitals),
      soap: Object.assign({}, patient.defaultSoap)
    };
  }
  return appState.draftsByPatient[patient.id];
}

function evaluateVitalStatuses(vitals) {
  const sbp = Number(vitals.sbp);
  const dbp = Number(vitals.dbp);
  const hr = Number(vitals.hr);
  const temp = Number(vitals.temp);
  const spo2 = Number(vitals.spo2);
  const rr = Number(vitals.rr);

  let bpStatus = `ok`;
  let bpLabel = `Normal`;
  if (sbp >= 160 || dbp >= 100 || sbp < 85 || dbp < 55) {
    bpStatus = `alert`;
    bpLabel = sbp < 85 ? `Kritis Rendah` : `Kritis Tinggi`;
  } else if (sbp >= 130 || dbp >= 85 || sbp < 90) {
    bpStatus = `warning`;
    bpLabel = `Perhatian`;
  }

  let hrStatus = `ok`;
  let hrLabel = `Normal`;
  if (hr >= 110 || hr < 50) {
    hrStatus = `alert`;
    hrLabel = hr < 50 ? `Bradikardia` : `Takikardia`;
  } else if (hr > 100 || hr < 60) {
    hrStatus = `warning`;
    hrLabel = `Perhatian`;
  }

  let tempStatus = `ok`;
  let tempLabel = `Normal`;
  if (temp >= 38.5 || temp < 35.5) {
    tempStatus = `alert`;
    tempLabel = temp < 35.5 ? `Hipotermia` : `Demam Tinggi`;
  } else if (temp > 37.5 || temp < 36.1) {
    tempStatus = `warning`;
    tempLabel = `Subfebris`;
  }

  let spo2Status = `ok`;
  let spo2Label = `Normal`;
  if (spo2 < 92 || rr >= 26 || rr < 10) {
    spo2Status = `alert`;
    spo2Label = spo2 < 92 ? `Hipoksemia` : `Distres Napas`;
  } else if (spo2 < 95 || rr > 20 || rr < 12) {
    spo2Status = `warning`;
    spo2Label = `Perhatian`;
  }

  const statuses = [bpStatus, hrStatus, tempStatus, spo2Status];
  let overall = `ok`;
  if (statuses.includes(`alert`)) overall = `alert`;
  else if (statuses.includes(`warning`)) overall = `warning`;

  return {
    bp: { status: bpStatus, label: bpLabel },
    hr: { status: hrStatus, label: hrLabel },
    temp: { status: tempStatus, label: tempLabel },
    spo2: { status: spo2Status, label: spo2Label },
    overall
  };
}

function getPatientSeverity(patient) {
  const draft = ensurePatientDraft(patient);
  const evalRes = evaluateVitalStatuses(draft.vitals);
  const allergyConflict = detectAllergyConflict(patient, draft.soap.p);
  if (evalRes.overall === `alert` || allergyConflict) return `alert`;
  if (evalRes.overall === `warning` || patient.allergies.length > 0) return `warning`;
  return `ok`;
}

function detectAllergyConflict(patient, planText) {
  if (!planText || !patient.allergyKeywords || patient.allergyKeywords.length === 0) {
    return null;
  }
  const lowerPlan = planText.toLowerCase();
  const matched = patient.allergyKeywords.filter((kw) => lowerPlan.includes(kw.toLowerCase()));
  if (matched.length === 0) return null;
  return {
    keywords: matched,
    allergies: patient.allergies.join(`, `)
  };
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, `&amp;`)
    .replace(/</g, `&lt;`)
    .replace(/>/g, `&gt;`)
    .replace(/"/g, `&quot;`)
    .replace(/'/g, `&#39;`);
}

function renderSparkline(svgId, points, currentVal, minRange, maxRange, strokeToken) {
  const svg = document.getElementById(svgId);
  if (!svg) return;
  const series = (points || []).slice(0, 3).concat([Number(currentVal)]);
  const w = 140;
  const h = 30;
  const pad = 4;
  const lo = Math.min(minRange, ...series);
  const hi = Math.max(maxRange, ...series);
  const span = Math.max(1, hi - lo);
  const coords = series.map((v, idx) => {
    const x = pad + (idx / Math.max(1, series.length - 1)) * (w - pad * 2);
    const y = h - pad - ((v - lo) / span) * (h - pad * 2);
    return [x.toFixed(1), y.toFixed(1)];
  });
  const pathD = coords.map((pt, i) => `${i === 0 ? `M` : `L`}${pt[0]},${pt[1]}`).join(` `);
  const last = coords[coords.length - 1];
  svg.innerHTML = `<path d="${pathD}" fill="none" stroke="${strokeToken}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${last[0]}" cy="${last[1]}" r="3.2" fill="${strokeToken}"/>`;
}

function renderPatientList() {
  const grid = document.getElementById(`patient-results-grid`);
  const countText = document.getElementById(`patient-count-text`);
  if (!grid) return;

  const q = appState.searchQuery.trim().toLowerCase();
  const filtered = appState.patients.filter((pt) => {
    const sev = getPatientSeverity(pt);
    if (appState.severityFilter !== `all` && sev !== appState.severityFilter) {
      return false;
    }
    if (!q) return true;
    return (
      pt.name.toLowerCase().includes(q) ||
      pt.mrn.toLowerCase().includes(q) ||
      pt.unit.toLowerCase().includes(q) ||
      pt.bloodType.toLowerCase().includes(q)
    );
  });

  if (countText) {
    countText.textContent = `${filtered.length} dari ${appState.patients.length} Pasien`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state-box">
      <strong>Tidak ada pasien yang cocok dengan pencarian "${escapeHtml(appState.searchQuery)}".</strong>
      <span>Coba bersihkan kata kunci pencarian, ubah filter status klinis, atau tambahkan pasien baru.</span>
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map((pt) => {
    const sev = getPatientSeverity(pt);
    const selected = pt.id === appState.activePatientId;
    const sevIcon = sev === `alert` ? `critical` : sev === `warning` ? `warning` : `ok`;
    const sevText = sev === `alert` ? `Alert Kritis` : sev === `warning` ? `Observasi` : `Stabil`;
    const chipStatus = sev === `alert` ? `alert` : sev === `warning` ? `warning` : `ok`;
    return `<button type="button" class="patient-pick-card" role="option" aria-selected="${selected}" data-severity="${sev}" onclick="selectPatient('${pt.id}')">
      <div class="pick-top">
        <span class="pick-name">${escapeHtml(pt.name)}</span>
        <span class="chip" data-status="${chipStatus}">${iconSvg(sevIcon)}<span>${sevText}</span></span>
      </div>
      <div class="pick-meta">${escapeHtml(pt.mrn)} · ${escapeHtml(pt.bloodType)} · DOB ${escapeHtml(formatDateId(pt.dob))}</div>
      <div class="pick-unit">${escapeHtml(pt.unit)}</div>
    </button>`;
  }).join(``);
}

function renderPersistentHeaderAndAlerts() {
  const pt = getActivePatient();
  const draft = ensurePatientDraft(pt);
  const evalRes = evaluateVitalStatuses(draft.vitals);
  const conflict = detectAllergyConflict(pt, draft.soap.p);

  const nameEl = document.getElementById(`hdr-patient-name`);
  const unitEl = document.getElementById(`hdr-patient-unit`);
  const dobEl = document.getElementById(`hdr-patient-dob`);
  const mrnEl = document.getElementById(`hdr-patient-mrn`);
  const bloodEl = document.getElementById(`hdr-patient-blood`);
  const sexAgeEl = document.getElementById(`hdr-patient-sex-age`);
  const histNameEl = document.getElementById(`history-patient-name`);

  if (nameEl) nameEl.textContent = pt.name;
  if (unitEl) unitEl.textContent = pt.unit;
  if (dobEl) dobEl.textContent = formatDateId(pt.dob);
  if (mrnEl) mrnEl.textContent = pt.mrn;
  if (bloodEl) {
    bloodEl.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.25" aria-hidden="true"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg><span>${escapeHtml(pt.bloodType)}</span>`;
  }
  if (sexAgeEl) sexAgeEl.textContent = `${pt.sex} · ${computeAgeLabel(pt.dob)}`;
  if (histNameEl) histNameEl.textContent = `${pt.name} (${pt.mrn})`;

  const strip = document.getElementById(`medical-alerts-strip`);
  if (!strip) return;

  const alerts = [];
  if (conflict) {
    alerts.push({
      level: `critical`,
      icon: `critical`,
      tag: `KONFLIK ALERGI`,
      text: `Obat "${conflict.keywords.join(`, `)}" bertentangan dengan alergi ${conflict.allergies}`
    });
  }
  if (pt.allergies && pt.allergies.length > 0) {
    alerts.push({
      level: `critical`,
      icon: `critical`,
      tag: `ALERGI OBAT/RISIKO`,
      text: pt.allergies.join(`, `)
    });
  } else {
    alerts.push({
      level: `ok`,
      icon: `ok`,
      tag: `ALERGI`,
      text: `Tidak Ada Alergi Diketahui (NKA)`
    });
  }

  if (evalRes.overall === `alert`) {
    const criticalParts = [];
    if (evalRes.bp.status === `alert`) criticalParts.push(`TD ${draft.vitals.sbp}/${draft.vitals.dbp} mmHg`);
    if (evalRes.hr.status === `alert`) criticalParts.push(`Nadi ${draft.vitals.hr} bpm`);
    if (evalRes.temp.status === `alert`) criticalParts.push(`Suhu ${draft.vitals.temp} °C`);
    if (evalRes.spo2.status === `alert`) criticalParts.push(`SpO₂ ${draft.vitals.spo2}%`);
    alerts.push({
      level: `critical`,
      icon: `critical`,
      tag: `VITAL KRITIS`,
      text: criticalParts.join(` · `)
    });
  } else if (evalRes.overall === `warning`) {
    alerts.push({
      level: `warning`,
      icon: `warning`,
      tag: `VITAL OBSERVASI`,
      text: `Satu atau lebih tanda vital berada di luar rentang target normal`
    });
  } else {
    alerts.push({
      level: `ok`,
      icon: `ok`,
      tag: `VITAL STABIL`,
      text: `Seluruh tanda vital dalam batas referensi normal`
    });
  }

  if (pt.riskNote) {
    alerts.push({
      level: `info`,
      icon: `info`,
      tag: `CATATAN RISIKO`,
      text: pt.riskNote
    });
  }

  strip.innerHTML = alerts.map((al) => {
    return `<div class="alert-pill" data-level="${al.level}">
      ${iconSvg(al.icon)}
      <span class="alert-level-tag">${escapeHtml(al.tag)}:</span>
      <span>${escapeHtml(al.text)}</span>
    </div>`;
  }).join(``);
}

function setVitalCardUi(cardId, chipId, status, label) {
  const card = document.getElementById(cardId);
  const chip = document.getElementById(chipId);
  if (card) card.setAttribute(`data-status`, status);
  if (chip) {
    chip.setAttribute(`data-status`, status);
    const iconName = status === `alert` ? `critical` : status === `warning` ? `warning` : `ok`;
    chip.innerHTML = `${iconSvg(iconName)}<span>${escapeHtml(label)}</span>`;
  }
}

function clampPct(val, min, max) {
  const pct = ((Number(val) - min) / (max - min)) * 100;
  return Math.max(4, Math.min(96, pct)).toFixed(1);
}

function renderVitalsPanel() {
  const pt = getActivePatient();
  const draft = ensurePatientDraft(pt);
  const v = draft.vitals;
  const evalRes = evaluateVitalStatuses(v);

  const overallChip = document.getElementById(`vitals-overall-chip`);
  const overallText = document.getElementById(`vitals-overall-text`);
  if (overallChip && overallText) {
    overallChip.setAttribute(`data-status`, evalRes.overall);
    overallText.textContent =
      evalRes.overall === `alert`
        ? `Prioritas Kritis — Eskalasi`
        : evalRes.overall === `warning`
          ? `Perlu Observasi Berkala`
          : `Semua Parameter Normal`;
  }

  const dispBp = document.getElementById(`disp-vital-bp`);
  const dispHr = document.getElementById(`disp-vital-hr`);
  const dispTemp = document.getElementById(`disp-vital-temp`);
  const dispSpo2 = document.getElementById(`disp-vital-spo2`);
  const dispRr = document.getElementById(`disp-vital-rr`);

  if (dispBp) dispBp.textContent = `${v.sbp}/${v.dbp}`;
  if (dispHr) dispHr.textContent = String(v.hr);
  if (dispTemp) dispTemp.textContent = Number(v.temp).toFixed(1);
  if (dispSpo2) dispSpo2.textContent = `${v.spo2}%`;
  if (dispRr) dispRr.textContent = `RR ${v.rr} x/mnt`;

  const inSbp = document.getElementById(`input-sbp`);
  const inDbp = document.getElementById(`input-dbp`);
  const inHr = document.getElementById(`input-hr`);
  const inTemp = document.getElementById(`input-temp`);
  const inSpo2 = document.getElementById(`input-spo2`);
  const inRr = document.getElementById(`input-rr`);

  if (inSbp && document.activeElement !== inSbp) inSbp.value = v.sbp;
  if (inDbp && document.activeElement !== inDbp) inDbp.value = v.dbp;
  if (inHr && document.activeElement !== inHr) inHr.value = v.hr;
  if (inTemp && document.activeElement !== inTemp) inTemp.value = v.temp;
  if (inSpo2 && document.activeElement !== inSpo2) inSpo2.value = v.spo2;
  if (inRr && document.activeElement !== inRr) inRr.value = v.rr;

  setVitalCardUi(`card-vital-bp`, `chip-vital-bp`, evalRes.bp.status, evalRes.bp.label);
  setVitalCardUi(`card-vital-hr`, `chip-vital-hr`, evalRes.hr.status, evalRes.hr.label);
  setVitalCardUi(`card-vital-temp`, `chip-vital-temp`, evalRes.temp.status, evalRes.temp.label);
  setVitalCardUi(`card-vital-spo2`, `chip-vital-spo2`, evalRes.spo2.status, evalRes.spo2.label);

  const mBp = document.getElementById(`marker-vital-bp`);
  const mHr = document.getElementById(`marker-vital-hr`);
  const mTemp = document.getElementById(`marker-vital-temp`);
  const mSpo2 = document.getElementById(`marker-vital-spo2`);

  if (mBp) mBp.style.left = `${clampPct(v.sbp, 70, 200)}%`;
  if (mHr) mHr.style.left = `${clampPct(v.hr, 35, 150)}%`;
  if (mTemp) mTemp.style.left = `${clampPct(v.temp, 34.5, 40.5)}%`;
  if (mSpo2) mSpo2.style.left = `${clampPct(v.spo2, 82, 100)}%`;

  const statusColor = (st) =>
    st === `alert` ? `var(--error)` : st === `warning` ? `var(--warning)` : `var(--tertiary)`;

  renderSparkline(`spark-bp`, pt.vitalHistory.sbp, v.sbp, 90, 170, statusColor(evalRes.bp.status));
  renderSparkline(`spark-hr`, pt.vitalHistory.hr, v.hr, 55, 125, statusColor(evalRes.hr.status));
  renderSparkline(`spark-temp`, pt.vitalHistory.temp, v.temp, 36.0, 39.5, statusColor(evalRes.temp.status));
  renderSparkline(`spark-spo2`, pt.vitalHistory.spo2, v.spo2, 88, 100, statusColor(evalRes.spo2.status));
}

function getPainLabel(val) {
  const n = Number(val);
  if (n === 0) return `0 = Tidak Nyeri`;
  if (n <= 3) return `${n} = Nyeri Ringan`;
  if (n <= 6) return `${n} = Nyeri Sedang`;
  return `${n} = Nyeri Berat`;
}

function renderSoapGrid() {
  const pt = getActivePatient();
  const draft = ensurePatientDraft(pt);
  const soap = draft.soap;

  const sEl = document.getElementById(`soap-s-input`);
  const oEl = document.getElementById(`soap-o-input`);
  const icdEl = document.getElementById(`soap-icd-input`);
  const acEl = document.getElementById(`soap-acuity-select`);
  const aEl = document.getElementById(`soap-a-input`);
  const pEl = document.getElementById(`soap-p-input`);
  const painSlider = document.getElementById(`pain-slider`);
  const painNum = document.getElementById(`pain-number`);
  const painDesc = document.getElementById(`pain-desc-label`);

  if (sEl && document.activeElement !== sEl) sEl.value = soap.s || ``;
  if (oEl && document.activeElement !== oEl) oEl.value = soap.o || ``;
  if (icdEl && document.activeElement !== icdEl) icdEl.value = soap.icd || ``;
  if (acEl) acEl.value = soap.acuity || `Stabil`;
  if (aEl && document.activeElement !== aEl) aEl.value = soap.a || ``;
  if (pEl && document.activeElement !== pEl) pEl.value = soap.p || ``;

  const painVal = Number.isFinite(Number(soap.pain)) ? Number(soap.pain) : 0;
  if (painSlider) painSlider.value = painVal;
  if (painNum && document.activeElement !== painNum) painNum.value = painVal;
  if (painDesc) painDesc.textContent = getPainLabel(painVal);

  const sDone = (soap.s || ``).trim().length >= 10;
  const oDone = (soap.o || ``).trim().length >= 10;
  const aDone = (soap.a || ``).trim().length >= 10 && (soap.icd || ``).trim().length >= 3;
  const pDone = (soap.p || ``).trim().length >= 10;

  const conflict = detectAllergyConflict(pt, soap.p);
  const cdsBox = document.getElementById(`allergy-cds-alert`);
  const cdsMsg = document.getElementById(`allergy-cds-message`);
  if (cdsBox && cdsMsg) {
    if (conflict) {
      cdsBox.hidden = false;
      cdsMsg.textContent = `Terdeteksi kata kunci obat "${conflict.keywords.join(`, `)}" pada Rencana (P), sedangkan pasien memiliki riwayat alergi: ${conflict.allergies}. Ganti dengan alternatif non-reaktif silang sebelum menyimpan rekam medis.`;
    } else {
      cdsBox.hidden = true;
      cdsMsg.textContent = ``;
    }
  }

  updateSoapCardStatus(`s`, sDone ? `ok` : `info`, sDone ? `Lengkap` : `Perlu Diisi`);
  updateSoapCardStatus(`o`, oDone ? `ok` : `info`, oDone ? `Lengkap` : `Perlu Diisi`);
  updateSoapCardStatus(`a`, aDone ? `ok` : `info`, aDone ? `Lengkap` : `Perlu Diisi`);
  if (conflict) {
    updateSoapCardStatus(`p`, `alert`, `Konflik Alergi`);
  } else {
    updateSoapCardStatus(`p`, pDone ? `ok` : `info`, pDone ? `Lengkap` : `Perlu Diisi`);
  }

  const filledCount = [sDone, oDone, aDone, pDone].filter(Boolean).length;
  const compChip = document.getElementById(`soap-completeness-chip`);
  const compText = document.getElementById(`soap-completeness-text`);
  if (compChip && compText) {
    compChip.setAttribute(`data-status`, filledCount === 4 ? `ok` : filledCount > 0 ? `warning` : `info`);
    compText.textContent = `${filledCount} / 4 Bagian Lengkap`;
  }

  renderSafetyChecklist(filledCount, conflict);
}

function updateSoapCardStatus(letter, status, label) {
  const card = document.getElementById(`soap-card-${letter}`);
  const chip = document.getElementById(`soap-chip-${letter}`);
  if (card) card.setAttribute(`data-status`, status);
  if (chip) {
    chip.setAttribute(`data-status`, status);
    const iconName = status === `alert` ? `critical` : status === `ok` ? `ok` : `info`;
    chip.innerHTML = `${iconSvg(iconName)}<span>${escapeHtml(label)}</span>`;
  }
}

function renderSafetyChecklist(filledCount, conflict) {
  const pt = getActivePatient();
  const draft = ensurePatientDraft(pt);
  const evalRes = evaluateVitalStatuses(draft.vitals);

  const elVitals = document.getElementById(`check-vitals`);
  const elSoap = document.getElementById(`check-soap`);
  const elAllergy = document.getElementById(`check-allergy`);

  if (elVitals) {
    if (evalRes.overall === `alert`) {
      elVitals.setAttribute(`data-status`, `warning`);
      elVitals.innerHTML = `${iconSvg(`warning`)}<span>Tanda Vital Kritis: pastikan rencana tindak lanjut tertulis di Plan</span>`;
    } else {
      elVitals.setAttribute(`data-status`, `ok`);
      elVitals.innerHTML = `${iconSvg(`ok`)}<span>Tanda Vital Terukur &amp; Tervalidasi</span>`;
    }
  }

  if (elSoap) {
    if (filledCount === 4) {
      elSoap.setAttribute(`data-status`, `ok`);
      elSoap.innerHTML = `${iconSvg(`ok`)}<span>Seluruh Grid SOAP (4/4) Lengkap</span>`;
    } else {
      elSoap.setAttribute(`data-status`, `warning`);
      elSoap.innerHTML = `${iconSvg(`warning`)}<span>Kelengkapan SOAP: ${filledCount}/4 bagian terpenuhi</span>`;
    }
  }

  if (elAllergy) {
    if (conflict) {
      elAllergy.setAttribute(`data-status`, `alert`);
      elAllergy.innerHTML = `${iconSvg(`critical`)}<span>Konflik Alergi Aktif: ${escapeHtml(conflict.keywords.join(`, `))}</span>`;
    } else {
      elAllergy.setAttribute(`data-status`, `ok`);
      elAllergy.innerHTML = `${iconSvg(`ok`)}<span>Pemeriksaan Alergi Obat: Aman</span>`;
    }
  }

  const syncBadge = document.getElementById(`record-sync-badge`);
  if (syncBadge) {
    if (conflict) {
      syncBadge.setAttribute(`data-status`, `alert`);
      syncBadge.innerHTML = `${iconSvg(`critical`)}<span>Periksa Konflik Alergi</span>`;
    } else if (appState.dirty) {
      syncBadge.setAttribute(`data-status`, `warning`);
      syncBadge.innerHTML = `${iconSvg(`warning`)}<span>Perubahan Belum Disimpan</span>`;
    } else {
      syncBadge.setAttribute(`data-status`, `ok`);
      syncBadge.innerHTML = `${iconSvg(`ok`)}<span>Tersinkronisasi</span>`;
    }
  }
}

function renderSavedRecordsList() {
  const pt = getActivePatient();
  const listEl = document.getElementById(`saved-records-list`);
  const countText = document.getElementById(`saved-count-text`);
  if (!listEl) return;

  const patientRecords = appState.savedRecords.filter((r) => r.patientId === pt.id);
  if (countText) {
    countText.textContent = `${patientRecords.length} Rekam Pasien Ini · ${appState.savedRecords.length} Total`;
  }

  if (patientRecords.length === 0) {
    listEl.innerHTML = `<div class="empty-state-box">
      <strong>Belum ada rekam medis tersimpan untuk ${escapeHtml(pt.name)}.</strong>
      <span>Lengkapi tanda vital dan catatan SOAP di atas, lalu tekan tombol "Simpan Rekam Medis" untuk mengarsipkan kunjungan ini.</span>
    </div>`;
    return;
  }

  listEl.innerHTML = patientRecords.map((rec) => {
    const isDraft = rec.kind === `draft`;
    const badgeStatus = isDraft ? `warning` : `ok`;
    const badgeIcon = isDraft ? `warning` : `ok`;
    const badgeText = isDraft ? `Draf Tersimpan` : `Tersimpan Resmi`;
    return `<div class="record-entry" data-kind="${escapeHtml(rec.kind)}">
      <div class="record-main">
        <div class="record-meta-line">
          <span class="chip" data-status="${badgeStatus}">${iconSvg(badgeIcon)}<span>${badgeText}</span></span>
          <span class="mono-code">${escapeHtml(rec.recordCode)}</span>
          <span>${escapeHtml(rec.savedAt)}</span>
          <span>· ${escapeHtml(rec.clinicianName)}</span>
        </div>
        <p class="record-summary">
          <strong>Vital:</strong> TD ${escapeHtml(rec.vitals.sbp)}/${escapeHtml(rec.vitals.dbp)} mmHg · Nadi ${escapeHtml(rec.vitals.hr)} bpm · Suhu ${escapeHtml(rec.vitals.temp)} °C · SpO₂ ${escapeHtml(rec.vitals.spo2)}%
        </p>
        <p class="record-summary">
          <strong>Asesmen:</strong> ${escapeHtml(rec.soap.icd || `Tanpa kode ICD-10`)} (${escapeHtml(rec.soap.acuity || `Stabil`)}) — ${escapeHtml((rec.soap.a || ``).slice(0, 140))}${(rec.soap.a || ``).length > 140 ? `…` : ``}
        </p>
      </div>
      <button type="button" class="btn btn-secondary btn-sm" onclick="loadSavedRecord('${rec.id}')">Muat ke Formulir</button>
    </div>`;
  }).join(``);
}

function renderAll() {
  renderPatientList();
  renderPersistentHeaderAndAlerts();
  renderVitalsPanel();
  renderSoapGrid();
  renderSavedRecordsList();
}

function setActiveStep(stepNum) {
  appState.activeStep = stepNum;
  for (let i = 1; i <= 4; i += 1) {
    const btn = document.getElementById(`step-nav-${i}`);
    if (!btn) continue;
    if (i === stepNum) {
      btn.setAttribute(`aria-current`, `step`);
    } else {
      btn.removeAttribute(`aria-current`);
    }
    btn.setAttribute(`data-done`, i < stepNum ? `true` : `false`);
  }
}

function jumpToStep(stepNum, targetId) {
  setActiveStep(stepNum);
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({ behavior: `smooth`, block: `start` });
  }
}

function handleSearchInput(val) {
  appState.searchQuery = val || ``;
  setActiveStep(1);
  renderPatientList();
}

function clearPatientSearch() {
  appState.searchQuery = ``;
  const input = document.getElementById(`patient-search-input`);
  if (input) input.value = ``;
  renderPatientList();
}

function setSeverityFilter(sev) {
  appState.severityFilter = sev;
  const keys = [`all`, `alert`, `warning`, `ok`];
  keys.forEach((k) => {
    const btn = document.getElementById(`filter-${k}`);
    if (btn) btn.setAttribute(`aria-pressed`, k === sev ? `true` : `false`);
  });
  renderPatientList();
}

function selectPatient(patientId) {
  appState.activePatientId = patientId;
  appState.dirty = false;
  setActiveStep(2);
  const banner = document.getElementById(`save-feedback-banner`);
  if (banner) banner.hidden = true;
  renderAll();
  persistAppState();
}

function toggleNewPatientDrawer() {
  const drawer = document.getElementById(`new-patient-drawer`);
  const btn = document.getElementById(`toggle-new-patient-btn`);
  if (!drawer || !btn) return;
  const nextHidden = !drawer.hidden;
  drawer.hidden = nextHidden;
  btn.setAttribute(`aria-expanded`, nextHidden ? `false` : `true`);
}

function createNewPatient() {
  const nameIn = document.getElementById(`new-pt-name`);
  const dobIn = document.getElementById(`new-pt-dob`);
  const sexIn = document.getElementById(`new-pt-sex`);
  const bloodIn = document.getElementById(`new-pt-blood`);
  const unitIn = document.getElementById(`new-pt-unit`);
  const allergyIn = document.getElementById(`new-pt-allergy`);
  const errBox = document.getElementById(`new-patient-error`);

  const name = (nameIn ? nameIn.value : ``).trim();
  const dob = dobIn ? dobIn.value : ``;
  if (name.length < 3 || !dob) {
    if (errBox) {
      errBox.hidden = false;
      errBox.textContent = `Nama pasien minimal 3 karakter dan Tanggal Lahir wajib diisi agar identitas klinis valid.`;
    }
    return;
  }
  if (errBox) errBox.hidden = true;

  const rawAllergy = (allergyIn ? allergyIn.value : ``).trim();
  const allergies = rawAllergy ? rawAllergy.split(`,`).map((s) => s.trim()).filter(Boolean) : [];
  const allergyKeywords = allergies.map((a) => a.toLowerCase());
  const randomNum = 1400 + appState.patients.length * 37;
  const newId = `pt-custom-${Date.now()}`;

  const newPatient = {
    id: newId,
    name,
    dob,
    ageLabel: computeAgeLabel(dob),
    sex: sexIn ? sexIn.value : `Laki-laki`,
    mrn: `MRN-2026-${randomNum}`,
    bloodType: bloodIn ? bloodIn.value : `O Rh+`,
    unit: (unitIn ? unitIn.value : `Poliklinik Umum`).trim() || `Poliklinik Umum`,
    allergies,
    allergyKeywords,
    riskNote: `Pasien Baru Terdaftar`,
    initialVitals: { sbp: 120, dbp: 78, hr: 76, temp: 36.7, spo2: 98, rr: 18 },
    vitalHistory: {
      sbp: [118, 120, 120, 120],
      hr: [74, 76, 75, 76],
      temp: [36.6, 36.7, 36.7, 36.7],
      spo2: [98, 99, 98, 98]
    },
    defaultSoap: { s: ``, o: ``, icd: ``, acuity: `Stabil`, a: ``, p: ``, pain: 0 }
  };

  appState.patients.unshift(newPatient);
  appState.activePatientId = newId;
  appState.dirty = true;
  if (nameIn) nameIn.value = ``;
  if (allergyIn) allergyIn.value = ``;
  toggleNewPatientDrawer();
  setActiveStep(2);
  renderAll();
  persistAppState();
}

function copyActiveMrn() {
  const pt = getActivePatient();
  const btn = document.getElementById(`copy-mrn-btn`);
  if (navigator.clipboard && typeof navigator.clipboard.writeText === `function`) {
    navigator.clipboard.writeText(pt.mrn).catch(() => {});
  }
  if (btn) {
    btn.textContent = `Tersalin!`;
    setTimeout(() => {
      btn.textContent = `Salin`;
    }, 1400);
  }
}

function updateVitalField(field, rawValue) {
  const pt = getActivePatient();
  const draft = ensurePatientDraft(pt);
  const val = Number(rawValue);
  setActiveStep(2);

  const bounds = {
    sbp: { min: 40, max: 260, errId: `err-vital-bp`, inputId: `input-sbp`, label: `Sistolik` },
    dbp: { min: 25, max: 160, errId: `err-vital-bp`, inputId: `input-dbp`, label: `Diastolik` },
    hr: { min: 25, max: 220, errId: `err-vital-hr`, inputId: `input-hr`, label: `Nadi` },
    temp: { min: 32, max: 43, errId: `err-vital-temp`, inputId: `input-temp`, label: `Suhu` },
    spo2: { min: 60, max: 100, errId: `err-vital-spo2`, inputId: `input-spo2`, label: `SpO₂` },
    rr: { min: 6, max: 50, errId: `err-vital-spo2`, inputId: `input-rr`, label: `Laju Napas` }
  };

  const cfg = bounds[field];
  if (!cfg) return;
  const errEl = document.getElementById(cfg.errId);
  const inEl = document.getElementById(cfg.inputId);

  if (Number.isNaN(val) || val < cfg.min || val > cfg.max) {
    if (inEl) inEl.setAttribute(`aria-invalid`, `true`);
    if (errEl) {
      errEl.hidden = false;
      errEl.textContent = `${cfg.label} harus ${cfg.min}–${cfg.max}`;
    }
    return;
  }

  if (inEl) inEl.setAttribute(`aria-invalid`, `false`);
  if (errEl) {
    errEl.hidden = true;
    errEl.textContent = ``;
  }

  draft.vitals[field] = val;
  appState.dirty = true;
  renderPersistentHeaderAndAlerts();
  renderVitalsPanel();
  renderPatientList();
  renderSoapGrid();
  persistAppState();
}

function applyVitalPreset(mode) {
  const pt = getActivePatient();
  const draft = ensurePatientDraft(pt);
  setActiveStep(2);
  if (mode === `stable`) {
    draft.vitals = { sbp: 118, dbp: 76, hr: 74, temp: 36.7, spo2: 98, rr: 16 };
  } else if (mode === `fever`) {
    draft.vitals = { sbp: 126, dbp: 80, hr: 108, temp: 38.6, spo2: 96, rr: 22 };
  } else if (mode === `crisis`) {
    draft.vitals = { sbp: 184, dbp: 110, hr: 124, temp: 39.2, spo2: 89, rr: 28 };
  } else {
    draft.vitals = Object.assign({}, pt.initialVitals);
  }
  appState.dirty = true;
  renderAll();
  persistAppState();
}

function updateSoapField(field, value) {
  const pt = getActivePatient();
  const draft = ensurePatientDraft(pt);
  setActiveStep(3);
  draft.soap[field] = value;
  appState.dirty = true;
  renderPersistentHeaderAndAlerts();
  renderSoapGrid();
  renderPatientList();
  persistAppState();
}

function syncPainFromSlider(val) {
  const numEl = document.getElementById(`pain-number`);
  if (numEl) numEl.value = val;
  updateSoapField(`pain`, Number(val));
}

function syncPainFromNumber(val) {
  let n = Number(val);
  if (Number.isNaN(n)) n = 0;
  n = Math.max(0, Math.min(10, Math.round(n)));
  const sliderEl = document.getElementById(`pain-slider`);
  if (sliderEl) sliderEl.value = n;
  updateSoapField(`pain`, n);
}

const SOAP_TEMPLATES = {
  s: {
    pusing: `Keluhan pusing berdenyut sejak 2 hari yang lalu, memberat saat beraktivitas.`,
    sesak: `Sesak napas progresif disertai batuk berdahak kuning kehijauan 4 hari terakhir.`,
    demam: `Demam naik turun sejak 3 hari lalu, nafsu makan menurun, mual tanpa muntah.`,
    obat: `Riwayat kepatuhan minum obat antihipertensi kurang teratur dalam 2 minggu terakhir.`
  },
  o: {
    cm: `Kesadaran: Compos Mentis (GCS E4V5M6). Konjungtiva tidak anemis, sklera tidak ikterik.`,
    ronkhi: `Thoraks: Vesikuler (+/+), terdengar ronkhi basah halus di basal paru kanan, wheezing (-/-).`,
    cor: `Cor: Bunyi jantung S1/S2 reguler, murmur (-), gallop (-). Akral hangat, CRT < 2 detik.`
  },
  p: {
    amlodipin: `Amlodipin 1x5 mg PO (pagi), monitor TD ulang dalam 30 menit.`,
    parasetamol: `Parasetamol 3x500 mg PO bila suhu >= 38.0 °C atau nyeri.`,
    oksigen: `Oksigen nasal kanul 3 L/menit, pantau SpO2 berkala tiap 15 menit, cek foto toraks dan lab darah lengkap.`,
    amoksisilin: `Amoksisilin 3x500 mg PO selama 5 hari.`,
    ibuprofen: `Ibuprofen 3x400 mg PO sesudah makan.`
  }
};

const ICD_PRESETS = {
  i10: `I10 — Hipertensi Esensial (Primer)`,
  j18: `J18.9 — Pneumonia Komunitas`,
  e11: `E11.9 — Diabetes Melitus Tipe 2`,
  r50: `R50.9 — Demam Akut Observasi`,
  j06: `J06.9 — Infeksi Saluran Napas Akut`
};

function insertSoapTemplate(field, key) {
  const group = SOAP_TEMPLATES[field];
  if (!group || !group[key]) return;
  appendSoapSnippet(field, group[key]);
}

function applyIcdPreset(key) {
  const text = ICD_PRESETS[key];
  if (!text) return;
  setIcdQuick(text);
}

function appendSoapSnippet(field, snippet) {
  const pt = getActivePatient();
  const draft = ensurePatientDraft(pt);
  const current = (draft.soap[field] || ``).trim();
  draft.soap[field] = current ? `${current}\n${snippet}` : snippet;
  appState.dirty = true;
  setActiveStep(3);
  renderPersistentHeaderAndAlerts();
  renderSoapGrid();
  renderPatientList();
  persistAppState();
}

function syncVitalsToObjective() {
  const pt = getActivePatient();
  const draft = ensurePatientDraft(pt);
  const v = draft.vitals;
  const vitalStamp = `Tanda Vital (${formatNowStamp()}): TD ${v.sbp}/${v.dbp} mmHg, Nadi ${v.hr} bpm, Suhu ${Number(v.temp).toFixed(1)} °C, SpO₂ ${v.spo2}%, RR ${v.rr} x/mnt.`;
  appendSoapSnippet(`o`, vitalStamp);
}

function setIcdQuick(icdText) {
  const pt = getActivePatient();
  const draft = ensurePatientDraft(pt);
  draft.soap.icd = icdText;
  appState.dirty = true;
  setActiveStep(3);
  renderSoapGrid();
  persistAppState();
}

function updateClinicianName(val) {
  appState.clinicianName = val;
  persistAppState();
}

function resetCurrentEncounter(btn) {
  if (btn && btn.dataset.armed !== `true`) {
    btn.dataset.armed = `true`;
    btn.textContent = `Klik lagi untuk konfirmasi reset`;
    setTimeout(() => {
      if (btn.dataset.armed === `true`) {
        btn.dataset.armed = `false`;
        btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" aria-hidden="true"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg> Reset Catatan`;
      }
    }, 4000);
    return;
  }
  if (btn) {
    btn.dataset.armed = `false`;
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" aria-hidden="true"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg> Reset Catatan`;
  }
  const pt = getActivePatient();
  appState.draftsByPatient[pt.id] = {
    vitals: Object.assign({}, pt.initialVitals),
    soap: { s: ``, o: ``, icd: ``, acuity: `Stabil`, a: ``, p: ``, pain: 0 }
  };
  appState.dirty = true;
  const banner = document.getElementById(`save-feedback-banner`);
  if (banner) {
    banner.hidden = false;
    banner.setAttribute(`data-tone`, `info`);
    banner.textContent = `Catatan SOAP dikosongkan dan tanda vital dikembalikan ke nilai awal pasien.`;
  }
  renderAll();
  persistAppState();
}

function saveMedicalRecord(kind) {
  const pt = getActivePatient();
  const draft = ensurePatientDraft(pt);
  const soap = draft.soap;
  const banner = document.getElementById(`save-feedback-banner`);
  setActiveStep(4);

  const conflict = detectAllergyConflict(pt, soap.p);
  if (kind === `final` && conflict) {
    if (banner) {
      banner.hidden = false;
      banner.setAttribute(`data-tone`, `error`);
      banner.textContent = `Penyimpanan ditahan: Konflik alergi obat "${conflict.keywords.join(`, `)}" ditemukan pada Plan (P). Perbaiki resep atau simpan sebagai Draf.`;
    }
    return;
  }

  const missingParts = [];
  if ((soap.s || ``).trim().length < 10) missingParts.push(`Subjective (S)`);
  if ((soap.o || ``).trim().length < 10) missingParts.push(`Objective (O)`);
  if ((soap.a || ``).trim().length < 10 || (soap.icd || ``).trim().length < 3) missingParts.push(`Assessment & ICD-10 (A)`);
  if ((soap.p || ``).trim().length < 10) missingParts.push(`Plan (P)`);

  if (kind === `final` && missingParts.length > 0) {
    if (banner) {
      banner.hidden = false;
      banner.setAttribute(`data-tone`, `error`);
      banner.textContent = `Rekam medis belum dapat disahkan. Lengkapi bagian berikut terlebih dahulu: ${missingParts.join(`, `)}.`;
    }
    return;
  }

  const codeNum = 1001 + appState.savedRecords.length;
  const newRecord = {
    id: `rec-${Date.now()}`,
    recordCode: `RM-${codeNum}`,
    patientId: pt.id,
    patientName: pt.name,
    mrn: pt.mrn,
    kind,
    savedAt: formatNowStamp(),
    clinicianName: (appState.clinicianName || `Dokter Jaga`).trim(),
    vitals: Object.assign({}, draft.vitals),
    soap: Object.assign({}, draft.soap)
  };

  appState.savedRecords.unshift(newRecord);
  appState.dirty = false;
  if (banner) {
    banner.hidden = false;
    banner.setAttribute(`data-tone`, `ok`);
    banner.textContent =
      kind === `draft`
        ? `Draf ${newRecord.recordCode} untuk ${pt.name} tersimpan pada ${newRecord.savedAt}.`
        : `Rekam medis resmi ${newRecord.recordCode} untuk ${pt.name} berhasil disahkan dan disimpan pada ${newRecord.savedAt}.`;
  }

  renderAll();
  persistAppState();
}

function loadSavedRecord(recordId) {
  const rec = appState.savedRecords.find((r) => r.id === recordId);
  if (!rec) return;
  appState.activePatientId = rec.patientId;
  appState.draftsByPatient[rec.patientId] = {
    vitals: Object.assign({}, rec.vitals),
    soap: Object.assign({}, rec.soap)
  };
  appState.clinicianName = rec.clinicianName;
  const clinIn = document.getElementById(`clinician-name-input`);
  if (clinIn) clinIn.value = rec.clinicianName;
  appState.dirty = false;

  const banner = document.getElementById(`save-feedback-banner`);
  if (banner) {
    banner.hidden = false;
    banner.setAttribute(`data-tone`, `info`);
    banner.textContent = `Arsip ${rec.recordCode} (${rec.savedAt}) berhasil dimuat ke kokpit untuk ditinjau atau disunting.`;
  }
  renderAll();
  jumpToStep(3, `soap-grid-section`);
}

function exportRecordTxt() {
  const pt = getActivePatient();
  const draft = ensurePatientDraft(pt);
  const v = draft.vitals;
  const s = draft.soap;
  const content = [
    `RINGKASAN REKAM MEDIS PASIEN (SOAP)`,
    `====================================`,
    `Waktu Ekspor   : ${formatNowStamp()}`,
    `Klinisi        : ${appState.clinicianName}`,
    `Nama Pasien    : ${pt.name}`,
    `Tanggal Lahir  : ${formatDateId(pt.dob)} (${computeAgeLabel(pt.dob)})`,
    `Jenis Kelamin  : ${pt.sex}`,
    `MRN            : ${pt.mrn}`,
    `Golongan Darah : ${pt.bloodType}`,
    `Unit           : ${pt.unit}`,
    `Alergi         : ${pt.allergies.length ? pt.allergies.join(`, `) : `Tidak Ada Alergi (NKA)`}`,
    ``,
    `TANDA VITAL TERKINI`,
    `-------------------`,
    `Tekanan Darah  : ${v.sbp}/${v.dbp} mmHg`,
    `Detak Jantung  : ${v.hr} bpm`,
    `Suhu Tubuh     : ${Number(v.temp).toFixed(1)} C`,
    `Saturasi O2    : ${v.spo2}%`,
    `Laju Napas     : ${v.rr} x/menit`,
    ``,
    `CATATAN SOAP`,
    `------------`,
    `[S] Subjective (Skala Nyeri ${s.pain}/10):`,
    s.s || `(Kosong)`,
    ``,
    `[O] Objective:`,
    s.o || `(Kosong)`,
    ``,
    `[A] Assessment (${s.icd || `-`} · Akuitas: ${s.acuity || `Stabil`}):`,
    s.a || `(Kosong)`,
    ``,
    `[P] Plan:`,
    s.p || `(Kosong)`
  ].join(`\n`);

  const blob = new Blob([content], { type: `text/plain;charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement(`a`);
  link.href = url;
  link.download = `rekam-medis-${pt.mrn.toLowerCase()}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  const banner = document.getElementById(`save-feedback-banner`);
  if (banner) {
    banner.hidden = false;
    banner.setAttribute(`data-tone`, `info`);
    banner.textContent = `Ringkasan rekam medis ${pt.mrn} siap diunduh sebagai berkas .TXT.`;
  }
}

const STORAGE_KEY = `kokpit-rekam-medis-v1`;

function persistAppState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      patients: appState.patients,
      activePatientId: appState.activePatientId,
      clinicianName: appState.clinicianName,
      draftsByPatient: appState.draftsByPatient,
      savedRecords: appState.savedRecords
    }));
  } catch (err) {
    // Abaikan jika localStorage tidak tersedia
  }
}

function initApp() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const saved = raw ? JSON.parse(raw) : null;
    if (saved && typeof saved === `object`) {
      if (Array.isArray(saved.patients) && saved.patients.length > 0) {
        appState.patients = saved.patients;
      }
      if (saved.activePatientId) {
        appState.activePatientId = saved.activePatientId;
      }
      if (saved.clinicianName) {
        appState.clinicianName = saved.clinicianName;
        const clinIn = document.getElementById(`clinician-name-input`);
        if (clinIn) clinIn.value = saved.clinicianName;
      }
      if (saved.draftsByPatient && typeof saved.draftsByPatient === `object`) {
        appState.draftsByPatient = saved.draftsByPatient;
      }
      if (Array.isArray(saved.savedRecords)) {
        appState.savedRecords = saved.savedRecords;
      }
    }
  } catch (err) {
    // Pakai data pasien bawaan
  }

  renderAll();
}

function setDockPinned(pinned) {
  const dock = document.getElementById(`cockpit-persistent-dock`);
  const btn = document.getElementById(`pin-dock-btn`);
  if (dock) dock.setAttribute(`data-pinned`, pinned ? `true` : `false`);
  if (btn) {
    btn.setAttribute(`aria-pressed`, pinned ? `true` : `false`);
    btn.textContent = pinned ? `Lepas Dock` : `Sematkan Dock`;
  }
}

function toggleDockPin() {
  const dock = document.getElementById(`cockpit-persistent-dock`);
  const next = !(dock && dock.getAttribute(`data-pinned`) === `true`);
  setDockPinned(next);
  try { localStorage.setItem(`kokpit-dock-pinned`, next ? `1` : `0`); } catch (err) {}
}

function initDockPin() {
  let pref = null;
  try { pref = localStorage.getItem(`kokpit-dock-pinned`); } catch (err) {}
  // Default: menempel hanya di layar tinggi (>= 1000px)
  setDockPinned(pref === null ? window.innerHeight >= 1000 : pref === `1`);
}

document.addEventListener(`DOMContentLoaded`, () => { initDockPin(); });
document.addEventListener(`DOMContentLoaded`, initApp);
