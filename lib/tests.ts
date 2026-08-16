/**
 * The full pathology menu of the Icchapur main laboratory — 73 tests in 10 groups.
 * Every one of these can be ordered at the Old Hospital Road collection centre.
 * Names are reproduced exactly as the client supplied them.
 *
 * `aliases` exist only to make search work the way a patient actually types:
 * they search the shorthand their doctor wrote, or the body part they are worried about.
 */

export type TestGroup = {
  key: string;
  name: string;
  short: string;
  aliases: string[];
  tests: { name: string; aliases?: string[] }[];
};

export const TEST_GROUPS: TestGroup[] = [
  {
    key: "haematology",
    name: "Blood counts & haematology",
    short: "Blood counts",
    aliases: ["blood", "haematology", "hematology", "anaemia", "anemia", "platelet", "count"],
    tests: [
      { name: "CBC (5 Part)", aliases: ["complete blood count", "cbc", "hemogram", "haemogram"] },
      { name: "Haemoglobin", aliases: ["hb", "hemoglobin", "anaemia", "anemia"] },
      { name: "ESR", aliases: ["erythrocyte sedimentation rate"] },
      { name: "DLC / TLC / Hb% / ESR", aliases: ["dlc", "tlc", "differential leucocyte", "total leucocyte"] },
      { name: "Differential Count (DC)", aliases: ["dc", "differential"] },
      { name: "Absolute Eosinophil Count (AEC)", aliases: ["aec", "eosinophil", "allergy"] },
      { name: "Total Platelet Count", aliases: ["platelet", "tpc", "dengue platelet"] },
      { name: "ABO Group & Rh Type (Blood Group)", aliases: ["blood group", "abo", "rh", "grouping", "typing"] },
      { name: "BT / CT", aliases: ["bleeding time", "clotting time"] },
      { name: "Sickling", aliases: ["sickle cell", "sickle"] },
    ],
  },
  {
    key: "diabetes",
    name: "Diabetes & sugar",
    short: "Diabetes",
    aliases: ["sugar", "diabetes", "diabetic", "glucose", "madhumeha"],
    tests: [
      { name: "FBS", aliases: ["fasting blood sugar", "fasting glucose", "fasting"] },
      { name: "PPBS", aliases: ["post prandial", "postprandial blood sugar", "after food"] },
      { name: "RBS", aliases: ["random blood sugar", "random glucose"] },
      { name: "PGBS", aliases: ["post glucose blood sugar", "glucose tolerance"] },
      { name: "HbA1c (Gly)", aliases: ["hba1c", "a1c", "glycated haemoglobin", "glycosylated", "3 month sugar"] },
    ],
  },
  {
    key: "cardiac",
    name: "Heart & lipids",
    short: "Heart & lipids",
    aliases: ["heart", "cardiac", "cholesterol", "lipid", "chest pain", "attack"],
    tests: [
      { name: "Lipid Profile", aliases: ["lipid", "cholesterol profile", "hdl", "ldl"] },
      { name: "S. Cholesterol (S. Cho)", aliases: ["cholesterol", "serum cholesterol"] },
      { name: "S. Triglycerides (S. TG)", aliases: ["triglyceride", "tg", "serum triglycerides"] },
      { name: "Troponin-I (Kit)", aliases: ["troponin i", "trop i", "heart attack", "cardiac marker"] },
      { name: "Troponin-T (Kit)", aliases: ["troponin t", "trop t", "heart attack", "cardiac marker"] },
    ],
  },
  {
    key: "thyroid",
    name: "Thyroid & hormones",
    short: "Thyroid & hormones",
    aliases: ["thyroid", "hormone", "fertility", "pregnancy", "period", "menstrual"],
    tests: [
      { name: "Thyroid Profile – I (T3, T4, TSH)", aliases: ["thyroid profile", "tft", "thyroid function"] },
      { name: "TSH", aliases: ["thyroid stimulating hormone"] },
      { name: "T3", aliases: ["triiodothyronine"] },
      { name: "T4", aliases: ["thyroxine"] },
      { name: "FT3 (Free Triiodothyronine)", aliases: ["ft3", "free t3"] },
      { name: "FT4 (Free Thyroxine)", aliases: ["ft4", "free t4"] },
      { name: "Beta hCG", aliases: ["bhcg", "beta hcg", "pregnancy blood test"] },
      { name: "FSH (Follicle Stimulating Hormone)", aliases: ["fsh", "fertility"] },
      { name: "Prolactin (PRL)", aliases: ["prl", "prolactin"] },
      { name: "Estradiol (E2)", aliases: ["e2", "estradiol", "oestradiol"] },
      { name: "Progesterone (P4)", aliases: ["p4", "progesterone"] },
      { name: "Calcitonin (Thyrocalcitonin)", aliases: ["calcitonin", "thyrocalcitonin"] },
    ],
  },
  {
    key: "liver",
    name: "Liver function",
    short: "Liver",
    aliases: ["liver", "jaundice", "hepatic", "bilirubin", "yellow"],
    tests: [
      { name: "LFT", aliases: ["liver function test", "liver profile"] },
      { name: "SGOT (AST)", aliases: ["sgot", "ast", "aspartate"] },
      { name: "SGPT (ALT)", aliases: ["sgpt", "alt", "alanine"] },
      { name: "Bilirubin Total + Direct + Indirect", aliases: ["bilirubin", "jaundice"] },
      { name: "Alkaline Phosphatase (ALP)", aliases: ["alp", "alkaline phosphatase"] },
      { name: "Albumin", aliases: ["albumin", "serum albumin"] },
      { name: "Total Protein", aliases: ["protein", "total protein"] },
      { name: "Amylase", aliases: ["amylase", "pancreas"] },
    ],
  },
  {
    key: "kidney",
    name: "Kidney & electrolytes",
    short: "Kidney",
    aliases: ["kidney", "renal", "electrolyte", "urea", "creatinine", "stone"],
    tests: [
      { name: "KFT", aliases: ["kidney function test", "kidney profile"] },
      { name: "RFT", aliases: ["renal function test", "renal profile"] },
      { name: "Urea / Creatinine", aliases: ["urea", "creatinine"] },
      { name: "BUN (Blood Urea Nitrogen)", aliases: ["bun", "blood urea nitrogen"] },
      { name: "S. Uric Acid", aliases: ["uric acid", "gout", "joint pain"] },
      { name: "Na+ K+ Cl", aliases: ["sodium", "potassium", "chloride", "electrolytes"] },
      { name: "Calcium", aliases: ["calcium", "ca"] },
      { name: "Magnesium", aliases: ["magnesium", "mg"] },
      { name: "S. Phosphorus", aliases: ["phosphorus", "phosphate"] },
    ],
  },
  {
    key: "infection",
    name: "Fever & infection",
    short: "Fever & infection",
    aliases: ["fever", "infection", "jwara", "viral", "typhoid", "malaria"],
    tests: [
      { name: "Dengue (Kit)", aliases: ["dengue", "ns1", "dengue card"] },
      { name: "Mal Card (Kit)", aliases: ["malaria", "mal card", "mp"] },
      { name: "Scrub Typhus", aliases: ["scrub typhus", "typhus"] },
      { name: "Widal Test (Slide Test)", aliases: ["widal", "typhoid"] },
      { name: "CRP (Quantitative)", aliases: ["crp", "c reactive protein", "inflammation"] },
      { name: "ASO (Quantitative)", aliases: ["aso", "antistreptolysin", "throat"] },
      { name: "HIV (Kit)", aliases: ["hiv", "aids"] },
      { name: "HBsAg (Kit)", aliases: ["hbsag", "hepatitis b", "australia antigen"] },
      { name: "HCV (Kit)", aliases: ["hcv", "hepatitis c"] },
      { name: "VDRL (Kit)", aliases: ["vdrl", "syphilis"] },
      { name: "Toxo (Kit)", aliases: ["toxo", "toxoplasma"] },
      { name: "TORCH Panel – 8 (IgG & IgM)", aliases: ["torch", "torch panel", "pregnancy infection"] },
    ],
  },
  {
    key: "fluids",
    name: "Urine, stool & fluids",
    short: "Urine & stool",
    aliases: ["urine", "stool", "fluid", "motion", "pregnancy"],
    tests: [
      { name: "Urine R/M", aliases: ["urine routine", "urine microscopy", "urine rm"] },
      { name: "Urine C/S", aliases: ["urine culture", "culture sensitivity", "uti"] },
      { name: "Urine β-hCG (Kit)", aliases: ["urine pregnancy test", "upt", "beta hcg urine", "pregnancy"] },
      { name: "Stool R/M", aliases: ["stool routine", "stool microscopy", "motion test"] },
      { name: "Seminal Fluid", aliases: ["semen analysis", "seminal", "sperm count", "infertility"] },
    ],
  },
  {
    key: "clotting",
    name: "Clotting & inflammation",
    short: "Clotting",
    aliases: ["clotting", "inflammation", "arthritis", "iron", "joint"],
    tests: [
      { name: "PT / INR", aliases: ["pt", "inr", "prothrombin"] },
      { name: "APTT", aliases: ["aptt", "activated partial thromboplastin"] },
      { name: "RA Factor (Quantitative)", aliases: ["ra factor", "rheumatoid", "arthritis", "joint pain"] },
      { name: "Ferritin", aliases: ["ferritin", "iron store"] },
    ],
  },
  {
    key: "tumour",
    name: "Tumour markers",
    short: "Tumour markers",
    aliases: ["tumour", "tumor", "cancer", "marker", "oncology"],
    tests: [
      { name: "CA 15-3 (Breast Cancer Marker)", aliases: ["ca 15-3", "ca153", "breast cancer"] },
      { name: "CA 19-9 (Pancreatic Cancer Marker)", aliases: ["ca 19-9", "ca199", "pancreatic cancer"] },
      { name: "CA 125 (Ovarian Cancer Marker)", aliases: ["ca 125", "ca125", "ovarian cancer"] },
    ],
  },
];

export const TOTAL_TESTS = TEST_GROUPS.reduce((n, g) => n + g.tests.length, 0);
export const TOTAL_GROUPS = TEST_GROUPS.length;

export type FlatTest = {
  name: string;
  groupKey: string;
  groupName: string;
  groupShort: string;
  haystack: string;
};

export const ALL_TESTS: FlatTest[] = TEST_GROUPS.flatMap((g) =>
  g.tests.map((t) => ({
    name: t.name,
    groupKey: g.key,
    groupName: g.name,
    groupShort: g.short,
    haystack: [t.name, ...(t.aliases ?? []), g.name, ...g.aliases]
      .join(" ")
      .toLowerCase(),
  }))
);
