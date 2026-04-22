const products = [
  {
    name: "Canva",
    category: "desain",
    icon: "palette",
    logoPath: "assets/logos/canva.png",
    desc: "Paket Canva dengan opsi member pro dan owner untuk kebutuhan desain harian.",
    features: [
      "Member Pro tersedia untuk durasi 1 bulan dan 2 bulan.",
      "Owner cocok untuk kebutuhan akses pengelola.",
      "Pilihan pas untuk creator, tim desain, dan brand kecil."
    ],
    plans: [
      {
        title: "Member Pro",
        items: [
          { label: "1 bulan", price: 5000 },
          { label: "2 bulan", price: 10000 }
        ]
      },
      {
        title: "Owner",
        items: [
          { label: "1 bulan", price: 25000 }
        ]
      }
    ],
    cardMeta: ["Mulai 5rb", "Member & owner"],
    purchaseNote: "Owner bisa invite 100 member",
    popular: true
  },
  {
    name: "ChatGPT",
    category: "ai",
    icon: "bot",
    logoPath: "assets/logos/chatgpt.png",
    desc: "Paket ChatGPT untuk akses invite maupun private dengan durasi bulanan.",
    features: [
      "25 - 30 hari dihitung 1 bulan.",
      "No rush dan wajib tanyakan stok ke admin sebelum order.",
      "Max invite dibatasi untuk menghindari over seat dan akun deactivated.",
      "Semua transaksi no refund kecuali kesalahan admin."
    ],
    plans: [
      {
        title: "ChatGPT Priv Invite",
        items: [
          { label: "1 bulan", price: 15000 }
        ]
      },
      {
        title: "ChatGPT Plus Private",
        items: [
          { label: "1 bulan", price: 20000 }
        ]
      }
    ],
    cardMeta: ["Mulai 15rb", "Invite & private"],
    purchaseNote: "Wajib tanyakan stok ke admin sebelum payment.",
    popular: true
  },
  {
    name: "Netflix Harian",
    category: "entertainment",
    icon: "clapperboard",
    logoPath: "assets/logos/netflix.png",
    desc: "Paket Netflix harian dan mingguan dengan opsi 1 user, 2 user, atau semi private.",
    features: [
      "Tersedia paket 1 hari untuk 1 user maupun 2 user.",
      "Ada pilihan 7 hari untuk 1 user, 2 user, dan semi private.",
      "Cocok untuk kebutuhan nonton singkat dengan harga lebih hemat."
    ],
    plans: [
      {
        title: "Paket 1 hari",
        items: [
          { label: "1 hari 2 user", price: 3000 },
          { label: "1 hari 1 user", price: 5000 }
        ]
      },
      {
        title: "Paket 7 hari",
        items: [
          { label: "7 hari 2 user", price: 9000 },
          { label: "7 hari 1 user", price: 10000 },
          { label: "7 hari semi private", price: 12000 }
        ]
      }
    ],
    cardMeta: ["Mulai 3rb", "1, 2 user & semi"],
    purchaseNote: "Netflix harian tersedia untuk opsi 1 user, 2 user, dan semi private.",
    popular: true
  },
  {
    name: "CapCut",
    category: "video",
    icon: "scissors",
    logoPath: "assets/logos/capcut.png",
    desc: "Paket CapCut dengan opsi sharing 3 user dan private untuk durasi 7 hari atau 1 bulan.",
    features: [
      "Sharing 3 user tersedia untuk durasi 7 hari dan 1 bulan.",
      "Private tersedia untuk durasi 7 hari dan 1 bulan.",
      "Cocok untuk kebutuhan edit video dengan opsi hemat atau akses private."
    ],
    plans: [
      {
        title: "Sharing 3 User",
        items: [
          { label: "7 hari", price: 5000 },
          { label: "1 bulan", price: 10000 }
        ]
      },
      {
        title: "Private",
        items: [
          { label: "7 hari", price: 7000 },
          { label: "1 bulan", price: 12000 }
        ]
      }
    ],
    cardMeta: ["Mulai 5rb", "Sharing & private"],
    purchaseNote: "CapCut tersedia untuk opsi sharing 3 user dan private.",
    popular: true
  },
  {
    name: "Netflix Bulanan",
    category: "entertainment",
    icon: "clapperboard",
    logoPath: "assets/logos/netflix.png",
    desc: "Paket Netflix untuk akses semi private maupun Sultan VIP dengan durasi bulanan.",
    features: [
      "Semi private cocok untuk kebutuhan streaming hemat.",
      "Sultan VIP untuk akses yang lebih premium.",
      "Semua paket tersedia dengan durasi 1 bulan."
    ],
    plans: [
      {
        title: "Netflix Semi Private",
        items: [
          { label: "1 bulan", price: 27000 }
        ]
      },
      {
        title: "Netflix Sultan VIP",
        items: [
          { label: "1 bulan", price: 35000 }
        ]
      }
    ],
    cardMeta: ["Mulai 27rb", "Semi private & VIP"],
    purchaseNote: `Netflix Bulanan

NETFLIX SEMI PRIVATE
Rp.27.000 = 1 Bulan
- Bisa login 2 device
- Tidak bisa nonton secara bersamaan

NETFLIX SULTAN VIP
Rp.35.000 = 1 Bulan
- Jatah 1 profil
- Bisa login 2 device
- Bisa nonton secara bersamaan
- Garansi anti limit`,
    popular: true
  },
  {
    name: "Bstation",
    category: "entertainment",
    icon: "tv",
    logoPath: "assets/logos/bstation.svg",
    desc: "Paket Bstation sharing untuk akses nonton anime dan konten hiburan selama 1 bulan.",
    features: [
      "Tersedia paket sharing untuk durasi 1 bulan.",
      "Cocok untuk kebutuhan nonton hemat di akun premium.",
      "Pilihan simpel buat yang ingin akses bulanan tanpa ribet."
    ],
    plans: [
      {
        title: "Sharing",
        items: [
          { label: "1 bulan", price: 15000 }
        ]
      }
    ],
    cardMeta: ["Sharing", "1 bulan"],
    purchaseNote: "Bstation sharing 1 bulan tersedia dengan harga Rp15.000.",
    popular: false
  },
  {
    name: "Alight Motion",
    category: "video",
    icon: "film",
    logoPath: "assets/logos/alight-motion.png",
    desc: "Paket Alight Motion private untuk akun seller maupun akun buyer dengan durasi tahunan.",
    features: [
      "Private akun seller tersedia untuk durasi 1 tahun.",
      "Private akun buyer juga tersedia untuk durasi 1 tahun.",
      "Cocok untuk editing motion yang dipakai jangka panjang."
    ],
    plans: [
      {
        title: "Private - Akun Seller",
        items: [
          { label: "1 tahun", price: 10000 }
        ]
      },
      {
        title: "Private - Akun Buyer",
        items: [
          { label: "1 tahun", price: 15000 }
        ]
      }
    ],
    cardMeta: ["1 tahun", "Seller / buyer"],
    popular: false
  },
  {
    name: "Apple Music",
    category: "musik",
    icon: "music-4",
    logoPath: "assets/logos/apple-music-cover-formatted.jpg",
    desc: "Paket Apple Music dengan opsi famplan invite, indplan, dan famhead untuk 1 bulan.",
    features: [
      "Famplan invite cocok untuk kebutuhan hemat.",
      "Indplan tersedia untuk penggunaan personal.",
      "Famhead cocok untuk pengelolaan family plan."
    ],
    plans: [
      {
        title: "Famplan (Invite)",
        items: [
          { label: "1 bulan", price: 4000 }
        ]
      },
      {
        title: "Indplan",
        items: [
          { label: "1 bulan", price: 7000 }
        ]
      },
      {
        title: "Famhead",
        items: [
          { label: "1 bulan", price: 10000 }
        ]
      }
    ],
    cardMeta: ["Mulai 4rb", "Invite & head"],
    purchaseNote: `- Akun dari seller
- Head bisa invite 5 orang`,
    popular: false
  },
  {
    name: "Wink",
    category: "fotografi",
    icon: "sparkles",
    logoPath: "assets/logos/wink.png",
    desc: "Pilihan paket Wink dengan opsi sharing, private, dan jaspay.",
    features: [
      "Sharing tersedia untuk durasi 7 hari dan 1 bulan.",
      "Private cocok untuk kebutuhan akses lebih personal.",
      "Jaspay tersedia untuk durasi 7 hari."
    ],
    plans: [
      {
        title: "Sharing",
        items: [
          { label: "7 hari", price: 8000 },
          { label: "1 bulan", price: 30000 }
        ]
      },
      {
        title: "Private",
        items: [
          { label: "7 hari", price: 15000 }
        ]
      },
      {
        title: "Jaspay",
        items: [
          { label: "7 hari", price: 12000 }
        ]
      }
    ],
    cardMeta: ["Mulai 8rb", "Sharing / private / jaspay"],
    popular: false
  },
  {
    name: "Getcontact",
    category: "komunikasi",
    icon: "phone",
    logoPath: "assets/logos/getcontact.png",
    desc: "Paket Getcontact 1 bulan dengan format jaspay atau akun dari buyer.",
    features: [
      "Harga 1 bulan tetap hemat di Rp 15.000.",
      "Format akses tersedia via jaspay atau akun dari buyer.",
      "Cocok untuk kebutuhan akses private yang simpel."
    ],
    plans: [
      {
        title: "Jaspay / akun dari buyer",
        items: [
          { label: "1 bulan", price: 15000 }
        ]
      }
    ],
    cardMeta: ["1 bulan", "Akun dari buyer"],
    purchaseNote: "Format akses: jaspay atau akun dari buyer.",
    popular: false
  },
  {
    name: "Zoom",
    category: "komunikasi",
    icon: "video",
    logoPath: "assets/logos/zoom-app.svg",
    desc: "Zoom private untuk meeting hingga 100 peserta dengan opsi mingguan yang fleksibel.",
    features: [
      "Paket private untuk kapasitas hingga 100 peserta.",
      "Tersedia opsi durasi 7 hari dan 14 hari.",
      "Cocok untuk kelas online, meeting tim, dan webinar singkat."
    ],
    plans: [
      {
        title: "Private 100 peserta",
        items: [
          { label: "7 hari", price: 8000 },
          { label: "14 hari", price: 13000 }
        ]
      }
    ],
    cardMeta: ["100 peserta", "7 atau 14 hari"],
    purchaseNote: "Private room cocok untuk kebutuhan meeting sementara.",
    popular: false
  },
  {
    name: "Spotify",
    category: "musik",
    icon: "music-4",
    logoPath: "assets/logos/spotify.png",
    desc: "Pilihan paket Spotify lengkap, mulai dari full garansi hingga opsi student yang lebih hemat.",
    features: [
      "Full garansi tersedia untuk indplan dan famplan.",
      "No garansi tersedia untuk student dan indplan hemat.",
      "Tersedia juga link penawaran student untuk akun dari buyer."
    ],
    plans: [
      {
        title: "Full garansi",
        items: [
          { label: "1 bulan indplan", price: 22000 },
          { label: "3 bulan indplan", price: 33000 },
          { label: "1 bulan famplan", price: 21000 },
          { label: "3 bulan famplan", price: 34000 }
        ]
      },
      {
        title: "No garansi",
        items: [
          { label: "1 bulan student", price: 13000 },
          { label: "3 bulan indplan", price: 17000 }
        ]
      },
      {
        title: "Link penawaran student",
        items: [
          { label: "akun dari buyer", price: 6000 }
        ]
      }
    ],
    cardMeta: ["Mulai 6rb", "Full & no garansi"],
    purchaseNote: "Tersedia pilihan paket paling hemat sampai full garansi.",
    popular: true
  },
  {
    name: "Duolingo",
    category: "edukasi",
    icon: "book-open",
    logoPath: "assets/logos/duolingo.png",
    desc: "Pilihan paket Duolingo dengan opsi famplan, indplan, dan head.",
    features: [
      "Order harap sabar ya, bisa fast bisa slow.",
      "Selalu tanyakan stok kepada admin sebelum payment.",
      "Full garansi jika patuhi S&K.",
      "Akun dari seller dan paket head bisa invite 5 orang."
    ],
    plans: [
      {
        title: "Famplan",
        items: [
          { label: "1 bulan", price: 10000 }
        ]
      },
      {
        title: "Indplan",
        items: [
          { label: "1 bulan", price: 12000 }
        ]
      },
      {
        title: "Head",
        items: [
          { label: "1 bulan", price: 20000 }
        ]
      }
    ],
    cardMeta: ["Mulai 10rb", "Head invite 5 orang"],
    purchaseNote: "Full garansi jika patuhi S&K.",
    popular: false
  },
  {
    name: "Google Drive",
    category: "cloud",
    icon: "cloud",
    logoPath: "assets/logos/google-drive.svg",
    desc: "Bundle Google Drive 5TB lengkap dengan Gemini Pro dan YouTube Premium 1 bulan.",
    features: [
      "Storage 5TB untuk kebutuhan file dan backup.",
      "Sudah termasuk Gemini Pro selama 1 bulan.",
      "Bonus YouTube Premium 1 bulan dalam satu paket."
    ],
    plans: [
      {
        title: "Bundle cloud",
        items: [
          { label: "5TB + Gemini Pro + YT Premium 1 bulan", price: 15000 }
        ]
      }
    ],
    cardMeta: ["5TB bundle", "Gemini Pro"],
    purchaseNote: `- bisa 100 peserta
- sudah termasuk gemini pro+ youtube premium`,
    popular: true
  }
];

const galleryItems = [
  {
    id: 1,
    title: "Brand kit kampanye launch",
    app: "Canva",
    author: "Indra K.",
    likes: "2.4K",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    title: "Konten promo reels mingguan",
    app: "CapCut",
    author: "Maya R.",
    likes: "5.2K",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    title: "Animasi intro channel",
    app: "Alight Motion",
    author: "Ricky W.",
    likes: "3.8K",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    title: "Playlist fokus kerja",
    app: "Apple Music",
    author: "Dian L.",
    likes: "1.9K",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    title: "Katalog produk lifestyle",
    app: "Wink",
    author: "Hendra S.",
    likes: "4.1K",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    title: "Maraton series akhir pekan",
    app: "Netflix",
    author: "Sita M.",
    likes: "6.3K",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=900&q=80"
  }
];

const categoryMeta = {
  semua: { label: "Semua Produk", icon: "layout-grid" },
  desain: { label: "Desain", icon: "palette" },
  ai: { label: "AI Tools", icon: "bot" },
  video: { label: "Video & Edit", icon: "scissors" },
  entertainment: { label: "Entertainment", icon: "clapperboard" },
  musik: { label: "Musik", icon: "music-4" },
  komunikasi: { label: "Komunikasi", icon: "message-circle" },
  edukasi: { label: "Edukasi", icon: "book-open" },
  cloud: { label: "Cloud", icon: "cloud" },
  fotografi: { label: "Fotografi", icon: "camera" }
};

const defaultWhatsAppMessageTemplate = [
  "\u{1F680} *FORM ORDER - REIIZAM STORE*",
  "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501",
  "",
  "Halo Admin, saya ingin memesan paket berikut:",
  "",
  "\u{1F4C2} *Kategori:* {category}",
  "\u{1F4E6} *Produk:* {product_plan}",
  "\u23F3 *Durasi:* {duration}",
  "\u{1F4B0} *Harga:* {price}",
  "\u{1F511} *Kode:* {code}",
  "",
  "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501",
  "Apakah stok ready min? Mohon infonya ya, terima kasih! \u{1F64F}"
].join("\n");

const defaultConfig = {
  hero_title: "Aplikasi Premium yang Bikin Aktivitas Makin Lancar",
  hero_subtitle: "Belanja di Reiizam Store lebih hemat, prosesnya cepat, dan setiap order tetap bergaransi.",
  section_title: "Produk Unggulan",
  background_color: "#0a0f1a",
  surface_color: "#141b2d",
  text_color: "#ffffff",
  primary_action: "#00d296",
  secondary_action: "#00b4d8",
  font_family: "Outfit",
  font_size: 16,
  whatsapp_number: "085126019233",
  whatsapp_message: defaultWhatsAppMessageTemplate
};

const state = {
  activeCategory: "semua",
  activeModal: null,
  config: { ...defaultConfig }
};

const orderMessageIcons = Object.freeze({
  header: String.fromCodePoint(0x1F680),
  category: String.fromCodePoint(0x1F4C2),
  product: String.fromCodePoint(0x1F4E6),
  duration: String.fromCodePoint(0x23F3),
  price: String.fromCodePoint(0x1F4B0),
  code: String.fromCodePoint(0x1F511),
  closing: String.fromCodePoint(0x1F64F)
});

const requiredOrderMessageIcons = Object.freeze(Object.values(orderMessageIcons));

const encodedOrderMessageIcons = Object.freeze({
  header: "%F0%9F%9A%80",
  category: "%F0%9F%93%82",
  product: "%F0%9F%93%A6",
  duration: "%E2%8F%B3",
  price: "%F0%9F%92%B0",
  code: "%F0%9F%94%91",
  closing: "%F0%9F%99%8F"
});

const encodedOrderDivider = "%E2%94%81".repeat(18);

let isSyncingNormalizedWhatsAppTemplate = false;

function safeCreateIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatRupiah(value) {
  return "Rp " + value.toLocaleString("id-ID");
}

function formatWhatsAppPrice(value) {
  return "Rp" + value.toLocaleString("id-ID");
}

function getActiveConfig() {
  return state.config || defaultConfig;
}

function sanitizePhoneNumber(value) {
  const digits = String(value || "").replace(/[^\d]/g, "");

  if (!digits) {
    return "";
  }

  if (digits.startsWith("62")) {
    return digits;
  }

  if (digits.startsWith("0")) {
    return `62${digits.slice(1)}`;
  }

  if (digits.startsWith("8")) {
    return `62${digits}`;
  }

  return digits;
}

function fillTemplate(template, values) {
  return String(template).replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function getCanonicalWhatsAppMessageTemplate() {
  return [
    `${orderMessageIcons.header} *FORM ORDER - REIIZAM STORE*`,
    "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501",
    "",
    "Halo Admin, saya ingin memesan paket berikut:",
    "",
    `${orderMessageIcons.category} *Kategori:* {category}`,
    `${orderMessageIcons.product} *Produk:* {product_plan}`,
    `${orderMessageIcons.duration} *Durasi:* {duration}`,
    `${orderMessageIcons.price} *Harga:* {price}`,
    `${orderMessageIcons.code} *Kode:* {code}`,
    "",
    "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501",
    `Apakah stok ready min? Mohon infonya ya, terima kasih! ${orderMessageIcons.closing}`
  ].join("\n");
}

function normalizeWhatsAppTemplateSafe(template) {
  const value = String(template || "").trim();
  const canonicalTemplate = getCanonicalWhatsAppMessageTemplate();

  if (!value) {
    return canonicalTemplate;
  }

  const hasOrderHeader = value.includes("FORM ORDER - REIIZAM STORE");
  const hasReplacementChar = value.includes("\uFFFD") || value.includes("\u00EF\u00BF\u00BD");
  const hasMojibake = /[\u00E2\u00F0]/.test(value) || value.includes("\u00C3");
  const hasAllRequiredIcons = requiredOrderMessageIcons.every((icon) => value.includes(icon));

  if (!hasOrderHeader) {
    return value;
  }

  if (hasReplacementChar || hasMojibake || !hasAllRequiredIcons) {
    return canonicalTemplate;
  }

  return value;
}

function hasBrokenWhatsAppOutputSafe(value) {
  const text = String(value || "");
  if (!text) {
    return true;
  }

  return text.includes("\uFFFD")
    || text.includes("\u00EF\u00BF\u00BD")
    || /[\u00E2\u00F0]/.test(text)
    || text.includes("\u00C3")
    || !requiredOrderMessageIcons.every((icon) => text.includes(icon));
}

function buildCanonicalWhatsAppMessage(values) {
  return fillTemplate(getCanonicalWhatsAppMessageTemplate(), values).trim();
}

function getWhatsAppMessageValues(product, option = {}) {
  const plan = [option.groupTitle, option.label].filter(Boolean).join(" - ") || product.name;
  const productPlan = option.groupTitle || product.name;
  const duration = option.label || "-";
  const price = formatWhatsAppPrice(option.price || getStartingPrice(product));

  return {
    product: product.name,
    category: product.name,
    catalog_category: categoryMeta[product.category]?.label || "",
    plan,
    product_plan: productPlan,
    duration,
    price,
    code: buildOrderCode(product, option)
  };
}

function encodeWhatsAppLine(text) {
  return encodeURIComponent(String(text || ""));
}

function buildEncodedCanonicalWhatsAppMessage(values) {
  return [
    `${encodedOrderMessageIcons.header}%20${encodeWhatsAppLine("*FORM ORDER - REIIZAM STORE*")}`,
    encodedOrderDivider,
    "",
    encodeWhatsAppLine("Halo Admin, saya ingin memesan paket berikut:"),
    "",
    `${encodedOrderMessageIcons.category}%20${encodeWhatsAppLine(`*Kategori:* ${values.category}`)}`,
    `${encodedOrderMessageIcons.product}%20${encodeWhatsAppLine(`*Produk:* ${values.product_plan}`)}`,
    `${encodedOrderMessageIcons.duration}%20${encodeWhatsAppLine(`*Durasi:* ${values.duration}`)}`,
    `${encodedOrderMessageIcons.price}%20${encodeWhatsAppLine(`*Harga:* ${values.price}`)}`,
    `${encodedOrderMessageIcons.code}%20${encodeWhatsAppLine(`*Kode:* ${values.code}`)}`,
    "",
    encodedOrderDivider,
    `${encodeWhatsAppLine("Apakah stok ready min? Mohon infonya ya, terima kasih! ")}${encodedOrderMessageIcons.closing}`
  ].join("%0A");
}

function isMobileBrowser() {
  if (typeof navigator === "undefined") {
    return false;
  }

  const userAgent = navigator.userAgent || "";
  return /Android|iPhone|iPad|iPod|IEMobile|Opera Mini|Mobile/i.test(userAgent);
}

function getWhatsAppBaseUrl() {
  if (isMobileBrowser()) {
    return "https://api.whatsapp.com/send";
  }

  return "https://web.whatsapp.com/send";
}

function persistNormalizedWhatsAppTemplate(rawTemplate, normalizedTemplate) {
  if (isSyncingNormalizedWhatsAppTemplate) {
    return;
  }

  const currentValue = String(rawTemplate || "").trim();
  if (!currentValue || currentValue === normalizedTemplate) {
    return;
  }

  if (!window.elementSdk || typeof window.elementSdk.setConfig !== "function") {
    return;
  }

  isSyncingNormalizedWhatsAppTemplate = true;

  try {
    window.elementSdk.setConfig({ whatsapp_message: normalizedTemplate });
  } finally {
    setTimeout(() => {
      isSyncingNormalizedWhatsAppTemplate = false;
    }, 0);
  }
}

function normalizeWhatsAppTemplate(template) {
  const value = String(template || "").trim();

  if (!value) {
    return defaultWhatsAppMessageTemplate;
  }

  const hasOrderHeader = value.includes("FORM ORDER - REIIZAM STORE");
  const hasMojibake = /[\u00E2\u00F0]/.test(value) || value.includes("ï¿½");
  const hasReplacementChar = value.includes("\uFFFD") || value.includes("�");
  const hasExpectedEmoji = /[\u{1F680}\u{1F4C2}\u{1F4E6}\u23F3\u{1F4B0}\u{1F511}\u{1F64F}]/u.test(value);
  const looksLikeBrokenDefault =
    hasOrderHeader && (hasMojibake || hasReplacementChar || !hasExpectedEmoji);

  if (!looksLikeBrokenDefault) {
    return value;
  }

  if (!hasMojibake) {
    return defaultWhatsAppMessageTemplate;
  }

  try {
    return decodeURIComponent(escape(value));
  } catch {
    return defaultWhatsAppMessageTemplate;
  }
}

function hasBrokenWhatsAppIcons(value) {
  return /(?:\uFFFD|ï¿½|ðŸ|â”|â|ðŸ™|Ã)/.test(String(value || ""));
}

function normalizeWhatsAppTemplate(template) {
  const value = String(template || "").trim();

  if (!value) {
    return defaultWhatsAppMessageTemplate;
  }

  const hasOrderHeader = value.includes("FORM ORDER - REIIZAM STORE");
  const hasMojibake = /[\u00E2\u00F0]/.test(value) || value.includes("\u00C3\u00AF\u00C2\u00BF\u00C2\u00BD");
  const hasReplacementChar = value.includes("\uFFFD") || value.includes("\u00EF\u00BF\u00BD");
  const hasExpectedEmoji = /[\u{1F680}\u{1F4C2}\u{1F4E6}\u23F3\u{1F4B0}\u{1F511}\u{1F64F}]/u.test(value);
  const looksLikeBrokenDefault =
    hasOrderHeader && (hasMojibake || hasReplacementChar || !hasExpectedEmoji);

  if (!looksLikeBrokenDefault) {
    return value;
  }

  if (!hasMojibake) {
    return defaultWhatsAppMessageTemplate;
  }

  try {
    return decodeURIComponent(escape(value));
  } catch {
    return defaultWhatsAppMessageTemplate;
  }
}

function hasBrokenWhatsAppIcons(value) {
  const text = String(value || "");
  return text.includes("\uFFFD")
    || text.includes("\u00EF\u00BF\u00BD")
    || /[\u00E2\u00F0]/.test(text)
    || text.includes("\u00C3");
}

function getProductPlanEntries(product) {
  if (!Array.isArray(product.plans)) {
    return [];
  }

  return product.plans.flatMap((group) =>
    group.items.map((item) => ({
      ...item,
      groupTitle: group.title
    }))
  );
}

function getStartingPrice(product) {
  const entries = getProductPlanEntries(product);
  if (entries.length) {
    return Math.min(...entries.map((item) => item.price));
  }
  return product.price;
}

function getGroupStartingPrice(group) {
  return Math.min(...group.items.map((item) => item.price));
}

function getProductOptionCount(product) {
  return Math.max(1, getProductPlanEntries(product).length || 1);
}

function getPrimaryFeatures(product, limit = 3) {
  if (!Array.isArray(product.features)) {
    return [];
  }
  return product.features.slice(0, limit);
}

function summarizePlanItems(group) {
  const labels = group.items.map((item) => item.label);
  if (labels.length <= 2) {
    return labels.join(" / ");
  }
  return `${labels[0]} / ${labels[1]} +${labels.length - 2} opsi`;
}

function normalizeOrderCodePart(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toUpperCase();
}

function buildOrderCode(product, option = {}) {
  const entries = getProductPlanEntries(product);
  const matchIndex = entries.findIndex((entry) =>
    entry.groupTitle === option.groupTitle
    && entry.label === option.label
    && entry.price === option.price
  );
  const sequence = String(matchIndex >= 0 ? matchIndex + 1 : 1).padStart(2, "0");
  const prefix = normalizeOrderCodePart(product.name) || "ORDER";
  return `${prefix}_${sequence}`;
}

function buildWhatsAppMessage(product, option = {}) {
  const activeConfig = getActiveConfig();
  const template = normalizeWhatsAppTemplateSafe(
    activeConfig.whatsapp_message || defaultConfig.whatsapp_message
  );
  const values = getWhatsAppMessageValues(product, option);
  const message = fillTemplate(template, values).trim();

  if (hasBrokenWhatsAppOutputSafe(message)) {
    return decodeURIComponent(buildEncodedCanonicalWhatsAppMessage(values));
  }

  return message;
}

function buildWhatsAppLink(product, option = {}) {
  const phone = sanitizePhoneNumber(getActiveConfig().whatsapp_number);
  if (!phone) {
    return "";
  }

  const values = getWhatsAppMessageValues(product, option);
  const baseUrl = getWhatsAppBaseUrl();
  const encodedMessage = buildEncodedCanonicalWhatsAppMessage(values);

  if (baseUrl.includes("web.whatsapp.com")) {
    return `${baseUrl}?phone=${phone}&text=${encodedMessage}&type=phone_number&app_absent=0`;
  }

  return `${baseUrl}?phone=${phone}&text=${encodedMessage}`;
}

function renderStars(rating, iconSize = 14) {
  const filled = Math.round(rating);
  return Array.from({ length: 5 }, (_, index) => {
    const className = index < filled ? "star-filled" : "star-empty";
    return `<i data-lucide="star" class="${className}" style="width:${iconSize}px;height:${iconSize}px;"></i>`;
  }).join("");
}

function getProductLogoFrameClass(product) {
  return product.logoVariant ? ` logo-frame-${product.logoVariant}` : "";
}

function getProductLogoMetrics(product, context = "card") {
  if (product.logoVariant === "wordmark") {
    return { width: 220, height: context === "modal" ? 96 : 96 };
  }

  if (product.logoVariant === "wordmark-compact") {
    return { width: 148, height: 74 };
  }

  return { width: 96, height: 96 };
}

function renderProductLogo(product, context = "card", options = {}) {
  if (product.logoPath) {
    const baseClass = context === "modal" ? "modal-logo-image" : "product-logo-image";
    const variantClass = product.logoVariant ? ` ${baseClass}--${product.logoVariant}` : "";
    const { eager = false } = options;
    const metrics = getProductLogoMetrics(product, context);
    return `
      <img
        src="${escapeHtml(product.logoPath)}"
        alt="Logo ${escapeHtml(product.name)}"
        class="${baseClass}${variantClass}"
        width="${metrics.width}"
        height="${metrics.height}"
        loading="${eager ? "eager" : "lazy"}"
        fetchpriority="${eager ? "high" : "low"}"
        decoding="async"
        data-fallback="${escapeHtml(product.name)}"
      />
    `;
  }

  return `<i data-lucide="${product.icon}" aria-hidden="true"></i>`;
}

function createPlaceholderImage(label) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#16394a" />
          <stop offset="100%" stop-color="#0b1421" />
        </linearGradient>
      </defs>
      <rect width="900" height="700" fill="url(#g)" />
      <circle cx="760" cy="120" r="120" fill="rgba(0,210,150,0.18)" />
      <circle cx="120" cy="620" r="180" fill="rgba(0,180,216,0.14)" />
      <text x="64" y="340" fill="#ffffff" font-size="42" font-family="Outfit, Arial, sans-serif" font-weight="700">${escapeHtml(label)}</text>
      <text x="64" y="392" fill="rgba(255,255,255,0.65)" font-size="22" font-family="Outfit, Arial, sans-serif">Preview image unavailable</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function bindImageFallbacks(scope = document) {
  scope.querySelectorAll("img[data-fallback]").forEach((image) => {
    image.addEventListener(
      "error",
      () => {
        if (image.dataset.fallbackApplied === "true") {
          return;
        }
        image.dataset.fallbackApplied = "true";
        image.src = createPlaceholderImage(image.dataset.fallback || image.alt || "Preview");
      },
      { once: true }
    );
  });
}

function getFilteredProducts() {
  if (state.activeCategory === "semua") {
    return products;
  }
  return products.filter((product) => product.category === state.activeCategory);
}

function renderProductPricing(product) {
  if (Array.isArray(product.plans)) {
    return `
      <div class="product-pricing product-pricing-multi">
        <div class="starting-label">Mulai dari</div>
        <div class="price-tag">${formatRupiah(getStartingPrice(product))}</div>
      </div>
    `;
  }

  const discount = Math.round((1 - product.price / product.original) * 100);
  return `
    <div class="product-pricing">
      <div class="price-stack">
        <span class="old-price">${formatRupiah(product.original)}</span>
        <span class="discount-chip">-${discount}%</span>
      </div>
      <div class="price-tag">${formatRupiah(product.price)}</div>
    </div>
  `;
}

function renderProductCardMeta(product) {
  if (typeof product.rating === "number" && product.buyers) {
    return `
      <div class="product-meta">
        <span class="rating-stars">
          ${renderStars(product.rating)}
          <span>${product.rating}</span>
        </span>
        <span>&bull;</span>
        <span>${product.buyers} pembeli</span>
      </div>
    `;
  }
  return "";
}

function renderPlanGroups(product) {
  const entries = getProductPlanEntries(product);
  if (!entries.length) {
    return "";
  }

  return `
    <section class="modal-section-block modal-order-section">
      <div class="modal-order-grid">
      ${entries.map((item) => `
        <button
          type="button"
          class="modal-order-option glass"
          data-selected="false"
          aria-pressed="false"
          data-plan-link="${escapeHtml(buildWhatsAppLink(product, {
            groupTitle: item.groupTitle,
            label: item.label,
            price: item.price
          }))}"
          data-plan-group="${escapeHtml(item.groupTitle || product.name)}"
          data-plan-label="${escapeHtml(item.label)}"
          data-plan-price="${item.price}"
          data-plan-price-label="${escapeHtml(formatRupiah(item.price))}"
        >
          <div class="modal-order-option-head">
            <div>
              <div class="modal-order-eyebrow">${escapeHtml(item.groupTitle || product.name)}</div>
              <div class="modal-order-title">${escapeHtml(item.label)}</div>
            </div>
            <span class="modal-order-indicator" aria-hidden="true">
              <span class="modal-order-indicator-dot"></span>
            </span>
          </div>
          <div class="modal-order-option-foot">
            <div class="modal-order-price">${formatRupiah(item.price)}</div>
          </div>
        </button>
      `).join("")}
      </div>
      <div class="modal-order-selection" data-order-selection data-selection-state="empty" aria-live="polite">
        <div class="modal-order-selection-mark" aria-hidden="true">
          <i data-lucide="badge-check" aria-hidden="true"></i>
        </div>
        <div class="modal-order-selection-copy">
          <div class="modal-order-selection-topline">
            <div class="modal-order-selection-kicker" data-order-selection-kicker>Belum dipilih</div>
          </div>
          <div class="modal-order-selection-title" data-order-selection-title>Pilih satu paket di atas dulu.</div>
          <div class="modal-order-selection-price" data-order-selection-price>-</div>
        </div>
      </div>
      <a
        class="modal-order-cta btn-glow accent-gradient is-disabled"
        data-order-cta
        aria-disabled="true"
        target="_blank"
        rel="noreferrer"
      >
        <span class="modal-order-cta-icon" aria-hidden="true">
          <i data-lucide="message-circle" aria-hidden="true"></i>
        </span>
        <span class="modal-order-cta-label">Order Now</span>
        <span class="modal-order-cta-arrow" aria-hidden="true">
          <i data-lucide="arrow-right" aria-hidden="true"></i>
        </span>
      </a>
    </section>
  `;
}

function renderModalSidebar(product) {
  const features = getPrimaryFeatures(product);
  if (!product.purchaseNote && !features.length) {
    return "";
  }

  return `
    <section class="modal-side-card modal-side-card-simple glass">
      <div class="modal-side-card-heading">
        <div class="modal-section-kicker">Info singkat</div>
        <h3 class="modal-section-title">Inti produk</h3>
      </div>
      ${features.length ? `
        <div class="modal-simple-points">
          ${features.map((feature) => `
            <div class="modal-simple-point">
              <i data-lucide="check-circle-2" aria-hidden="true"></i>
              <span>${feature}</span>
            </div>
          `).join("")}
        </div>
      ` : ""}
      ${product.purchaseNote ? `
        <div class="modal-inline-note">
          <div class="modal-inline-note-label">Note</div>
          <div class="modal-inline-note-copy">${escapeHtml(product.purchaseNote)}</div>
        </div>
      ` : ""}
    </section>
  `;
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const filteredProducts = getFilteredProducts();

  if (!filteredProducts.length) {
    grid.innerHTML = `
      <div class="empty-state glass-strong">
        <div class="product-title">Belum ada produk di kategori ini.</div>
        <p class="product-copy">Coba pilih kategori lain untuk melihat produk yang tersedia.</p>
      </div>
    `;
    safeCreateIcons();
    return;
  }

  grid.innerHTML = filteredProducts.map((product, index) => {
    const category = categoryMeta[product.category];
    const eagerLogo = index < 4;

    return `
      <article class="product-card glass-strong fade-up fade-up-d${(index % 3) + 1}">
        <div class="product-card-head">
          <span class="product-category">
            <i data-lucide="${category.icon}" aria-hidden="true"></i>
            ${category.label}
          </span>
        </div>

        <div class="product-card-body">
          <div class="product-logo${getProductLogoFrameClass(product)}">
            ${renderProductLogo(product, "card", { eager: eagerLogo })}
          </div>

          <h3 class="product-title">${product.name}</h3>

          ${renderProductPricing(product)}
          ${renderProductCardMeta(product)}
        </div>

        <button
          type="button"
          class="product-button btn-glow accent-gradient"
          data-product="${escapeHtml(product.name)}"
        >
          <i data-lucide="circle-ellipsis" aria-hidden="true"></i>
          Lihat Detail
        </button>
      </article>
    `;
  }).join("");

  bindImageFallbacks(grid);
  safeCreateIcons();
}

function renderGallery() {
  const slider = document.getElementById("gallerySlider");
  if (!slider) {
    return;
  }
  slider.innerHTML = galleryItems.map((item, index) => `
    <button
      type="button"
      class="gallery-item fade-up fade-up-d${(index % 3) + 1}"
      data-gallery-id="${item.id}"
    >
      <img
        src="${item.image}"
        alt="${escapeHtml(item.title)}"
        loading="lazy"
        decoding="async"
        data-fallback="${escapeHtml(item.title)}"
      />
      <div class="gallery-overlay">
        <div class="gallery-badge">
          <i data-lucide="sparkles" aria-hidden="true"></i>
          ${item.app}
        </div>
        <div class="gallery-title">${item.title}</div>
      </div>
    </button>
  `).join("");
  bindImageFallbacks(slider);
  safeCreateIcons();
}

function updateCategoryButtons() {
  document.querySelectorAll(".category-button").forEach((button) => {
    button.dataset.active = button.dataset.category === state.activeCategory ? "true" : "false";
  });
}

function centerCategoryButton(button, behavior = "smooth") {
  if (!button) {
    return;
  }

  const track = button.closest(".category-track");
  if (!track) {
    return;
  }

  const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
  const targetLeft = button.offsetLeft - ((track.clientWidth - button.offsetWidth) / 2);
  const nextLeft = Math.min(Math.max(targetLeft, 0), maxScrollLeft);

  track.scrollTo({
    left: nextLeft,
    behavior
  });

  updateCategoryTrackIndicators();
}

function updateCategoryTrackIndicators() {
  const slider = document.querySelector("[data-category-slider]");
  const track = slider?.querySelector(".category-track");
  if (!slider || !track) {
    return;
  }

  const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
  const isScrollable = maxScrollLeft > 1;
  const canScrollLeft = isScrollable && track.scrollLeft > 6;
  const canScrollRight = isScrollable && track.scrollLeft < maxScrollLeft - 6;

  slider.dataset.scrollable = isScrollable ? "true" : "false";
  slider.dataset.canScrollLeft = canScrollLeft ? "true" : "false";
  slider.dataset.canScrollRight = canScrollRight ? "true" : "false";
}

function syncCategoryTrackLayout(options = {}) {
  const { centerActive = false, behavior = "auto" } = options;
  const slider = document.querySelector("[data-category-slider]");
  const track = slider?.querySelector(".category-track");
  if (!track) {
    return;
  }

  const buttons = Array.from(track.querySelectorAll(".category-button"));
  if (!buttons.length) {
    return;
  }

  track.style.removeProperty("--category-edge-start");
  track.style.removeProperty("--category-edge-end");

  const baseStyles = window.getComputedStyle(track);
  const basePaddingStart = parseFloat(baseStyles.paddingLeft) || 0;
  const basePaddingEnd = parseFloat(baseStyles.paddingRight) || 0;
  const hasOverflow = track.scrollWidth > track.clientWidth + 1;

  if (hasOverflow) {
    const firstButton = buttons[0];
    const lastButton = buttons[buttons.length - 1];
    const edgeStart = Math.max(basePaddingStart, (track.clientWidth - firstButton.offsetWidth) / 2);
    const edgeEnd = Math.max(basePaddingEnd, (track.clientWidth - lastButton.offsetWidth) / 2);

    track.style.setProperty("--category-edge-start", `${edgeStart}px`);
    track.style.setProperty("--category-edge-end", `${edgeEnd}px`);
  }

  if (centerActive) {
    const activeButton = track.querySelector('.category-button[data-active="true"]') || buttons[0];
    centerCategoryButton(activeButton, behavior);
    return;
  }

  updateCategoryTrackIndicators();
}

function setActiveCategory(category) {
  state.activeCategory = category;
  updateCategoryButtons();
  syncCategoryTrackLayout({ centerActive: true, behavior: "smooth" });
  renderProducts();
}

function closeModal() {
  if (!state.activeModal) {
    return;
  }
  state.activeModal.remove();
  state.activeModal = null;
  document.body.style.overflow = "";
}

function attachModal(content) {
  closeModal();
  const modal = document.createElement("div");
  modal.className = "modal-backdrop";
  modal.innerHTML = content;
  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest("[data-close-modal]")) {
      closeModal();
    }
  });
  document.body.appendChild(modal);
  document.body.style.overflow = "hidden";
  state.activeModal = modal;
  bindImageFallbacks(modal);
  safeCreateIcons();
  return modal;
}

function initProductModalOrderFlow(modal) {
  if (!modal) {
    return;
  }

  const options = Array.from(modal.querySelectorAll(".modal-order-option[data-plan-link]"));
  const cta = modal.querySelector("[data-order-cta]");
  const selectionCard = modal.querySelector("[data-order-selection]");
  const selectionKicker = modal.querySelector("[data-order-selection-kicker]");
  const selectionTitle = modal.querySelector("[data-order-selection-title]");
  const selectionPrice = modal.querySelector("[data-order-selection-price]");

  if (!options.length || !cta || !selectionCard || !selectionKicker || !selectionTitle || !selectionPrice) {
    return;
  }

  const updateSelection = (activeOption) => {
    options.forEach((option) => {
      const selected = option === activeOption;
      option.dataset.selected = selected ? "true" : "false";
      option.setAttribute("aria-pressed", selected ? "true" : "false");
    });

    if (!activeOption) {
      selectionCard.dataset.selectionState = "empty";
      selectionKicker.textContent = "Belum dipilih";
      selectionTitle.textContent = "Pilih satu paket di atas dulu.";
      selectionPrice.textContent = "-";
      cta.removeAttribute("href");
      cta.setAttribute("aria-disabled", "true");
      cta.classList.add("is-disabled");
      return;
    }

    const group = activeOption.dataset.planGroup || "";
    const label = activeOption.dataset.planLabel || "";
    const priceLabel = activeOption.dataset.planPriceLabel || "";
    const link = activeOption.dataset.planLink || "";

    selectionCard.dataset.selectionState = "selected";
    selectionKicker.textContent = "Paket dipilih";
    selectionTitle.textContent = [group, label].filter(Boolean).join(" - ");
    selectionPrice.textContent = priceLabel || "-";

    if (!link) {
      cta.removeAttribute("href");
      cta.setAttribute("aria-disabled", "true");
      cta.classList.add("is-disabled");
      return;
    }

    cta.href = link;
    cta.setAttribute("aria-disabled", "false");
    cta.classList.remove("is-disabled");
  };

  options.forEach((option) => {
    option.addEventListener("click", () => {
      updateSelection(option);
    });
  });

  cta.addEventListener("click", (event) => {
    if (cta.getAttribute("aria-disabled") === "true") {
      event.preventDefault();
    }
  });

  updateSelection(null);
}

function openGalleryModal(id) {
  const item = galleryItems.find((entry) => entry.id === id);
  if (!item) {
    return;
  }

  attachModal(`
    <div class="modal-card" role="dialog" aria-modal="true" aria-label="${escapeHtml(item.title)}">
      <button type="button" class="modal-close-button" data-close-modal aria-label="Tutup preview">
        <i data-lucide="x" aria-hidden="true"></i>
      </button>
      <div class="modal-media">
        <img
          src="${item.image}"
          alt="${escapeHtml(item.title)}"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          data-fallback="${escapeHtml(item.title)}"
        />
      </div>
      <div class="modal-body">
        <div class="gallery-badge">
          <i data-lucide="sparkles" aria-hidden="true"></i>
          ${item.app}
        </div>
        <h2>${item.title}</h2>
        <p>
          Preview ini menunjukkan hasil akhir pelanggan setelah section galeri
          dibuat lebih rapi, stabil, dan informatif.
        </p>
        <div class="modal-meta">
          <button type="button" class="modal-close btn-glow btn-secondary" data-close-modal>
            Tutup
          </button>
        </div>
      </div>
    </div>
  `);
}

function openProductModal(productName) {
  const product = products.find((entry) => entry.name === productName);
  if (!product) {
    return;
  }

  const category = categoryMeta[product.category];

  const modal = attachModal(`
    <div class="modal-card modal-card-product modal-card-product-simple" role="dialog" aria-modal="true" aria-label="Detail produk ${escapeHtml(product.name)}">
      <button type="button" class="modal-close-button" data-close-modal aria-label="Tutup detail produk">
        <i data-lucide="x" aria-hidden="true"></i>
      </button>
      <div class="modal-product-hero modal-product-hero-simple">
        <div class="modal-product-hero-main">
          <div class="modal-kicker-row">
            <div class="product-category">
              <i data-lucide="${category.icon}" aria-hidden="true"></i>
              ${category.label}
            </div>
            ${product.popular ? `<span class="modal-status-pill">Best Seller</span>` : ""}
          </div>
          <div class="modal-product-head">
            <div class="modal-product-icon${getProductLogoFrameClass(product)}">
              ${renderProductLogo(product, "modal", { eager: true })}
            </div>
            <div class="modal-product-copy">
              <h2>${product.name}</h2>
              <p>${product.desc}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-body modal-product-body modal-product-body-simple">
        <div class="modal-product-stack">
          ${renderPlanGroups(product)}
          ${renderModalSidebar(product)}
        </div>
      </div>
      <div class="modal-mobile-close-bar">
        <button type="button" class="modal-mobile-close btn-glow btn-secondary" data-close-modal>
          <i data-lucide="x" aria-hidden="true"></i>
          Tutup
        </button>
      </div>
    </div>
  `);
  initProductModalOrderFlow(modal);
}

function slideGallery(direction) {
  const slider = document.getElementById("gallerySlider");
  if (!slider) {
    return;
  }
  const amount = Math.max(260, slider.clientWidth * 0.72);
  slider.scrollBy({
    left: direction * amount,
    behavior: "smooth"
  });
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "").trim();
  if (normalized.length === 3) {
    return normalized.split("").map((char) => parseInt(char + char, 16)).join(", ");
  }
  if (normalized.length === 6) {
    return [
      parseInt(normalized.slice(0, 2), 16),
      parseInt(normalized.slice(2, 4), 16),
      parseInt(normalized.slice(4, 6), 16)
    ].join(", ");
  }
  return "255, 255, 255";
}

function hexToRgba(hex, alpha) {
  return `rgba(${hexToRgb(hex)}, ${alpha})`;
}

function splitTextIntoLines(text, targetLength) {
  const words = String(text || "").trim().split(/\s+/).filter(Boolean);
  if (!words.length) {
    return [];
  }

  return words.reduce((lines, word) => {
    const currentLine = lines[lines.length - 1];
    if (!currentLine) {
      lines.push(word);
      return lines;
    }

    const nextLine = `${currentLine} ${word}`;
    if (currentLine.length >= targetLength || nextLine.length > targetLength + 4) {
      lines.push(word);
      return lines;
    }

    lines[lines.length - 1] = nextLine;
    return lines;
  }, []);
}

function setStackedText(elementId, text, className, targetLength) {
  const element = document.getElementById(elementId);
  if (!element) {
    return;
  }

  const lines = splitTextIntoLines(text, targetLength);
  element.replaceChildren(
    ...lines.map((line) => {
      const span = document.createElement("span");
      span.className = className;
      span.textContent = line;
      return span;
    })
  );
}

function applyConfig(config) {
  const incomingWhatsAppTemplate = config?.whatsapp_message;
  const c = { ...defaultConfig, ...config };
  c.whatsapp_message = normalizeWhatsAppTemplateSafe(c.whatsapp_message);
  state.config = c;
  persistNormalizedWhatsAppTemplate(incomingWhatsAppTemplate, c.whatsapp_message);
  const root = document.documentElement;
  setStackedText("heroTitle", c.hero_title, "hero-line", 16);
  setStackedText("heroSubtitle", c.hero_subtitle, "hero-subline", 30);
  document.getElementById("sectionTitle").textContent = c.section_title;
  root.style.setProperty("--bg-color", c.background_color);
  root.style.setProperty("--surface-strong", `rgba(${hexToRgb(c.surface_color)}, 0.88)`);
  root.style.setProperty("--border-soft", hexToRgba(c.text_color, 0.1));
  root.style.setProperty("--text-color", c.text_color);
  root.style.setProperty("--text-soft", hexToRgba(c.text_color, 0.88));
  root.style.setProperty("--text-muted", hexToRgba(c.text_color, 0.68));
  root.style.setProperty("--text-subtle", hexToRgba(c.text_color, 0.48));
  root.style.setProperty("--accent-primary", c.primary_action);
  root.style.setProperty("--accent-secondary", c.secondary_action);
  root.style.setProperty("--base-font-size", `${c.font_size}px`);
  document.body.style.fontFamily = `${c.font_family}, Outfit, sans-serif`;
}

function initInteractions() {
  document.querySelectorAll(".category-button").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveCategory(button.dataset.category);
    });
  });

  const categoryTrack = document.querySelector(".category-track");
  if (categoryTrack) {
    categoryTrack.addEventListener("scroll", () => {
      updateCategoryTrackIndicators();
    }, { passive: true });
  }

  document.getElementById("productGrid").addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-product]");
    if (trigger) {
      openProductModal(trigger.dataset.product);
    }
  });

  const gallerySlider = document.getElementById("gallerySlider");
  if (gallerySlider) {
    gallerySlider.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-gallery-id]");
      if (trigger) {
        openGalleryModal(Number(trigger.dataset.galleryId));
      }
    });
  }

  document.querySelectorAll("[data-gallery-direction]").forEach((button) => {
    button.addEventListener("click", () => {
      slideGallery(Number(button.dataset.galleryDirection));
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  window.addEventListener("resize", () => {
    syncCategoryTrackLayout({ centerActive: true, behavior: "auto" });
  });

  document.getElementById("currentYear").textContent = String(new Date().getFullYear());
}

function initElementSdk() {
  if (!window.elementSdk || typeof window.elementSdk.init !== "function") {
    return;
  }

  window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (config) => applyConfig(config),
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () => config.background_color || defaultConfig.background_color,
          set: (value) => {
            config.background_color = value;
            window.elementSdk.setConfig({ background_color: value });
          }
        },
        {
          get: () => config.surface_color || defaultConfig.surface_color,
          set: (value) => {
            config.surface_color = value;
            window.elementSdk.setConfig({ surface_color: value });
          }
        },
        {
          get: () => config.text_color || defaultConfig.text_color,
          set: (value) => {
            config.text_color = value;
            window.elementSdk.setConfig({ text_color: value });
          }
        },
        {
          get: () => config.primary_action || defaultConfig.primary_action,
          set: (value) => {
            config.primary_action = value;
            window.elementSdk.setConfig({ primary_action: value });
          }
        },
        {
          get: () => config.secondary_action || defaultConfig.secondary_action,
          set: (value) => {
            config.secondary_action = value;
            window.elementSdk.setConfig({ secondary_action: value });
          }
        }
      ],
      borderables: [],
      fontEditable: {
        get: () => config.font_family || defaultConfig.font_family,
        set: (value) => {
          config.font_family = value;
          window.elementSdk.setConfig({ font_family: value });
        }
      },
      fontSizeable: {
        get: () => config.font_size || defaultConfig.font_size,
        set: (value) => {
          config.font_size = value;
          window.elementSdk.setConfig({ font_size: value });
        }
      }
    }),
    mapToEditPanelValues: (config) => new Map([
      ["hero_title", config.hero_title || defaultConfig.hero_title],
      ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
      ["section_title", config.section_title || defaultConfig.section_title],
      ["whatsapp_number", config.whatsapp_number || defaultConfig.whatsapp_number],
      ["whatsapp_message", normalizeWhatsAppTemplateSafe(config.whatsapp_message)]
    ])
  });
}

function init() {
  applyConfig(defaultConfig);
  updateCategoryButtons();
  renderProducts();
  initInteractions();
  initElementSdk();
  safeCreateIcons();
  syncCategoryTrackLayout({ centerActive: true, behavior: "auto" });

  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      syncCategoryTrackLayout({ centerActive: true, behavior: "auto" });
    });
  }
}

init();
