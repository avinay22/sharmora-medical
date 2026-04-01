const fs = require('fs');
const path = require('path');

const productNames = [
  'Resmed Airsense 10 Auto Cpap Machine', 'Philips Aed', 'Ltv 1150 Portable Ventilator',
  'Philips Intellivue Mp50 Patient Monitor', 'Philips Bipap A30', 'Philips Heartstart XL Defibrillator',
  'Drager Baby Log 8000 Ventilator', 'Philips Dreamstation Auto Bipap Machine', '10 Lead ECG Cable',
  'ECG Trunk Cables', 'Resmed Lumis 150', 'Resmed Stellar 150 Ventilator', 'Masimo Pulse Oximeter',
  'Philips Intellivue Mp30 Patient Monitor', 'Philips Trilogy Ev300', 'Philips Respironics V60 Ventilator',
  'Nihon Kohden Biphasic Defibrillator', 'Humidifier MR 850 Fisher & Paykel', 'Fisher Paykal Mr850 Heated Humidifier',
  'MR850 Humidifier - Fisher And Paykel', 'Fisher Paykel MR 950', 'Drager Anaesthesia Machine',
  'Aneasthesia work station Datex ohmeda Avance', 'Philips BIPAP Machine', 'Topson Bipap Machine',
  'Maquet Servo I Ventilator', 'Maquet Servo N Ventilator', 'Siemens Servo 300a Ventilator',
  'Ltv 1200 Ventilator', 'Philips Heartstart Xl Plus Defibrillator', 'Philips Efficia Dfm100 Defibrillator',
  'Refurbished Ltv 1000 Ventilator', 'Aeonmed Shangrila 510 S Transport Ventilator',
  'Drager Oxylog 2000 Ventilator', 'parapac 200d transport ventilator', 'Philips Vs3 Moniter',
  'Philips Mp50 Patient Monitor', 'PHILIPS MONITER VS2', 'Philips Vm6 Monitor',
  'Sle5000 Hfo Ventilator', 'Ge Engstrom Carestation Ventilator', 'Philips Trilogy 202 Ventilator',
  'Nippy 3 Plus Ventilator', 'Icu Ventilator Vg70', 'Aeonmed Vg70 Ventilator',
  'Aeonmed Respiratory Ventilator VG70', 'Philips Heartstart Mrx Defibrillator',
  'Philips Heartstart XL Defibrillator monitor ICU Emergency', 'Physio Control Lifepak 20e Defibrillator',
  'Cord Master XL', 'Valleylab Force Triad Cautery Machine', 'Valleylab Force Fx Cautery Machine',
  'ERBE Cautery ICC 200 Electrosurgical Equipment', 'Philips Aed Heartstart Hs1',
  'Physio Control Lp 9 Defibrillator', 'Lifepac 20 Defibrillator Medtronic', 'Zoll M Series Defibrillator',
  'Zoll R Series Defibrillator', 'Zoll Defibrillators', 'Philips AED FR2+', 'AED PHILIPS MODEL FRX2',
  'Philips Heartstart Frx Defibrillator', 'Dolphin Spo2 Sensor', 'Spo2 Sensors', 'Philips Spo2 Sensor',
  'Maquet Datascope Cs300', 'Medtronic Act Plus Machine', 'Drager Evita 4 Ventilator Refurbished',
  'PARAPAC Emergency And Transport Ventilator', 'GE GOLDAWY B 40 MONITER', 'Maquet Datascope Cs100',
  'TRANSPORT VENTIPAC VENTILATOR', 'Resmed Stellar 100 Ventilator', 'Bpl Elisa 600 Ventilators',
  'Maquet Servo U Ventilator', 'Drager Evita 2 Dura Ventilator'
];

const expectedUrls = productNames.map(name => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.jpg';
});

const dirPath = path.join(__dirname, '../src/assets/products');
if (!fs.existsSync(dirPath)) {
  console.log("Directory doesn't exist");
  process.exit(0);
}

const files = fs.readdirSync(dirPath).filter(f => !f.startsWith('.'));

files.forEach(file => {
  const currentBase = file.replace(/\.[^/.]+$/, "").replace(/-/g, ' ').toLowerCase();

  let bestMatchUrl = null;
  let maxScore = 0;

  expectedUrls.forEach(url => {
    const expectedBase = url.replace('.jpg', '').replace(/-/g, ' ').toLowerCase();
    
    // Simple word intersection score
    const currentWords = currentBase.split(' ').filter(x => x.length > 2);
    const expectedWords = expectedBase.split(' ').filter(x => x.length > 2);
    
    let score = 0;
    expectedWords.forEach(w => {
      if (currentWords.includes(w)) score++;
      else if (currentWords.some(cw => cw.includes(w) || w.includes(cw))) score += 0.5;
    });

    if (score > maxScore) {
      maxScore = score;
      bestMatchUrl = url;
    }
  });

  if (bestMatchUrl && maxScore > 0) {
    const oldPath = path.join(dirPath, file);
    const newPath = path.join(dirPath, bestMatchUrl);
    if (oldPath !== newPath && !fs.existsSync(newPath)) {
      console.log(`Renaming: ${file} -> ${bestMatchUrl}`);
      fs.renameSync(oldPath, newPath);
    }
  } else {
    console.log(`No match for: ${file}`);
  }
});
