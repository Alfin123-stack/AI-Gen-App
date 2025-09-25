// templates.ts
import { Language } from "@/app/_contexts/LanguageContext";

export interface FormField {
  label: Record<Language, string>;
  field: "input" | "textarea";
  name: string;
  required: boolean;
  placeholder?: Record<Language, string>;
}

export interface Template {
  name: Record<Language, string>;
  desc: Record<Language, string>;
  category: Record<Language, string>;
  icon: string;
  slug: string;
  aiPrompt: Record<Language, string>;
  form: FormField[];
}

const templates: Template[] = [
  {
    name: {
      en: "Blog Ideas",
      id: "Ide Blog",
    },
    desc: {
      en: "An AI tool that generates creative blog ideas based on the topic you provide.",
      id: "Alat AI yang menghasilkan ide blog kreatif berdasarkan topik yang Anda berikan.",
    },
    category: {
      en: "Blog",
      id: "Blog",
    },
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt: {
      en: "Generate 5–7 unique and creative blog topic ideas in bullet points for the following niche. Each idea should be catchy, engaging, and suitable for SEO. Niche: ",
      id: "Hasilkan 5-7 ide topik blog unik dan kreatif dalam poin-poin untuk niche berikut. Setiap ide harus menarik, mengasyikkan, dan cocok untuk SEO. Niche: ",
    },
    slug: "ai-blog-title",
    form: [
      {
        label: {
          en: "Enter your blog topic",
          id: "Masukkan topik blog Anda",
        },
        field: "input",
        name: "niche",
        required: true,
        placeholder: {
          en: "e.g., healthy cooking, digital marketing",
          id: "contoh: masakan sehat, pemasaran digital",
        },
      },
    ],
  },
  {
    name: {
      en: "Blog Content",
      id: "Konten Blog",
    },
    desc: {
      en: "An AI tool that serves as your personal blog writer, generating high-quality SEO-ready blog posts in seconds.",
      id: "Alat AI yang berfungsi sebagai penulis blog pribadi Anda, menghasilkan posting blog siap-SEO berkualitas tinggi dalam hitungan detik.",
    },
    category: {
      en: "Blog",
      id: "Blog",
    },
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "ai-blog-content",
    aiPrompt: {
      en: "Write a complete, SEO-friendly blog article of at least 800 words with a clear introduction, several structured headings (H2, H3), and a conclusion. Optimize for readability and include practical examples when relevant. Title: ",
      id: "Tulis artikel blog yang lengkap dan ramah-SEO setidaknya 800 kata dengan pengantar yang jelas, beberapa heading terstruktur (H2, H3), dan kesimpulan. Optimalkan untuk keterbacaan dan sertakan contoh praktis jika relevan. Judul: ",
    },
    form: [
      {
        label: {
          en: "Enter your blog title",
          id: "Masukkan judul blog Anda",
        },
        field: "input",
        name: "topic",
        required: true,
        placeholder: {
          en: "e.g., 10 Tips for Healthy Living",
          id: "contoh: 10 Tips untuk Hidup Sehat",
        },
      },
    ],
  },
  {
    name: {
      en: "SMS",
      id: "SMS",
    },
    desc: {
      en: "An AI tool that helps you write awesome and natural SMS/message replies in seconds.",
      id: "Alat AI yang membantu Anda menulis balasan SMS/pesan yang luar biasa dan alami dalam hitungan detik.",
    },
    category: {
      en: "SMS",
      id: "SMS",
    },
    icon: "https://cdn-icons-png.flaticon.com/128/890/890260.png",
    slug: "ai-message",
    aiPrompt: {
      en: "Write 2–3 natural, friendly, and engaging replies to this message. Make sure they sound casual, concise, and human-like. Message: ",
      id: "Tulis 2-3 balasan alami, ramah, dan menarik untuk pesan ini. Pastikan terdengar kasual, ringkas, dan seperti manusia. Pesan: ",
    },
    form: [
      {
        label: {
          en: "Enter the message you want to reply to",
          id: "Masukkan pesan yang ingin Anda balas",
        },
        field: "input",
        name: "niche",
        required: true,
        placeholder: {
          en: "e.g., Hi, are you available tomorrow?",
          id: "contoh: Hai, apakah kamu available besok?",
        },
      },
    ],
  },
  {
    name: {
      en: "Email Reply",
      id: "Balasan Email",
    },
    desc: {
      en: "An AI tool that serves as your personal assistant to write professional email replies in seconds.",
      id: "Alat AI yang berfungsi sebagai asisten pribadi Anda untuk menulis balasan email profesional dalam hitungan detik.",
    },
    category: {
      en: "Email",
      id: "Email",
    },
    icon: "https://cdn-icons-png.flaticon.com/128/944/944948.png",
    slug: "ai-email",
    aiPrompt: {
      en: "Write a professional, polite, and well-structured email reply in 2–3 paragraphs. Maintain a positive and respectful tone, and ensure clarity. Original email: ",
      id: "Tulis balasan email yang profesional, sopan, dan terstruktur baik dalam 2-3 paragraf. Pertahankan nada positif dan hormat, serta pastikan kejelasan. Email asli: ",
    },
    form: [
      {
        label: {
          en: "Paste the email you want to reply to",
          id: "Tempel email yang ingin Anda balas",
        },
        field: "textarea",
        name: "keywords",
        required: true,
        placeholder: {
          en: "Paste the email content here...",
          id: "Tempel konten email di sini...",
        },
      },
    ],
  },
  {
    name: {
      en: "Food Research",
      id: "Riset Makanan",
    },
    desc: {
      en: "An AI tool that serves as your personal dietitian, explaining the health benefits of foods.",
      id: "Alat AI yang berfungsi sebagai ahli gizi pribadi Anda, menjelaskan manfaat kesehatan dari makanan.",
    },
    category: {
      en: "Food",
      id: "Makanan",
    },
    icon: "https://cdn-icons-png.flaticon.com/128/706/706164.png",
    slug: "ai-food",
    aiPrompt: {
      en: "Provide a detailed overview of the nutritional values, health benefits, and possible side effects of this food. Present the information in sections or bullet points. Food: ",
      id: "Berikan gambaran detail tentang nilai gizi, manfaat kesehatan, dan efek samping yang mungkin dari makanan ini. Sajikan informasi dalam bagian atau poin-poin. Makanan: ",
    },
    form: [
      {
        label: {
          en: "Enter the food name",
          id: "Masukkan nama makanan",
        },
        field: "input",
        name: "topic",
        required: true,
        placeholder: {
          en: "e.g., avocado, salmon, quinoa",
          id: "contoh: alpukat, salmon, quinoa",
        },
      },
    ],
  },
  {
    name: {
      en: "Chef AI",
      id: "Koki AI",
    },
    desc: {
      en: "An AI tool that serves as your personal chef, generating healthy and delicious recipes based on your preferences.",
      id: "Alat AI yang berfungsi sebagai koki pribadi Anda, menghasilkan resep sehat dan lezat berdasarkan preferensi Anda.",
    },
    category: {
      en: "Recipes",
      id: "Resep",
    },
    icon: "https://cdn-icons-png.flaticon.com/128/1830/1830839.png",
    slug: "ai-chef",
    aiPrompt: {
      en: "Generate a complete step-by-step recipe for the following dish. Include an ingredients list, detailed cooking instructions, serving suggestions, and tips for making it healthier. Dish: ",
      id: "Hasilkan resep langkah-demi-langkah yang lengkap untuk hidangan berikut. Sertakan daftar bahan, instruksi memasak yang detail, saran penyajian, dan tips untuk membuatnya lebih sehat. Hidangan: ",
    },
    form: [
      {
        label: {
          en: "Enter your recipe idea",
          id: "Masukkan ide resep Anda",
        },
        field: "input",
        name: "title",
        required: true,
        placeholder: {
          en: "e.g., vegetarian lasagna, chicken curry",
          id: "contoh: lasagna vegetarian, kari ayam",
        },
      },
    ],
  },
  {
    name: {
      en: "Rewrite Article",
      id: "Tulis Ulang Artikel",
    },
    desc: {
      en: "Use this tool to rewrite existing articles or blog posts so they become plagiarism-free and bypass AI detectors.",
      id: "Gunakan alat ini untuk menulis ulang artikel atau posting blog yang sudah ada sehingga bebas plagiarisme dan melewati detektor AI.",
    },
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: {
      en: "Rewriting Tool",
      id: "Alat Penulisan Ulang",
    },
    slug: "ai-rewrite-article",
    aiPrompt: {
      en: "Rewrite the following article into a natural, human-like version that is 100% plagiarism-free, with at least 80% different wording. Preserve the meaning and keep the formatting in rich text editor format. Article: ",
      id: "Tulis ulang artikel berikut menjadi versi alami seperti manusia yang 100% bebas plagiarisme, dengan setidaknya 80% perbedaan pemilihan kata. Pertahankan makna dan format dalam format editor teks kaya. Artikel: ",
    },
    form: [
      {
        label: {
          en: "Provide your Article/Blogpost or any other content to rewrite.",
          id: "Berikan Artikel/Posting Blog atau konten lain yang ingin ditulis ulang.",
        },
        field: "textarea",
        name: "article",
        required: true,
        placeholder: {
          en: "Paste your content here...",
          id: "Tempel konten Anda di sini...",
        },
      },
    ],
  },
  {
    name: {
      en: "Word Counter",
      id: "Penghitung Kata",
    },
    desc: {
      en: "This handy tool counts the number of words in your text and highlights word frequency.",
      id: "Alat praktis ini menghitung jumlah kata dalam teks Anda dan menyoroti frekuensi kata.",
    },
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: {
      en: "Writing",
      id: "Menulis",
    },
    slug: "ai-word-counter",
    aiPrompt: {
      en: "Count the total number of words in the following text. Then provide a frequency analysis showing how many times each unique word is repeated. Text: ",
      id: "Hitung jumlah total kata dalam teks berikut. Kemudian berikan analisis frekuensi yang menunjukkan berapa kali setiap kata unik diulang. Teks: ",
    },
    form: [
      {
        label: {
          en: "Enter the text you want to count the words for",
          id: "Masukkan teks yang ingin Anda hitung katanya",
        },
        field: "textarea",
        name: "word-counter",
        required: true,
        placeholder: {
          en: "Paste your text here...",
          id: "Tempel teks Anda di sini...",
        },
      },
    ],
  },
  {
    name: {
      en: "Add Emojis to Text",
      id: "Tambahkan Emoji ke Teks",
    },
    desc: {
      en: "An AI tool that makes your text fun and engaging by adding relevant emojis.",
      id: "Alat AI yang membuat teks Anda menyenangkan dan menarik dengan menambahkan emoji yang relevan.",
    },
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: {
      en: "Blog",
      id: "Blog",
    },
    slug: "ai-emoji-to-text",
    aiPrompt: {
      en: "Rewrite the following text by adding relevant and meaningful emojis to make it engaging and fun. Keep the text clear and in rich text editor format. Text: ",
      id: "Tulis ulang teks berikut dengan menambahkan emoji yang relevan dan bermakna untuk membuatnya menarik dan menyenangkan. Jaga teks tetap jelas dan dalam format editor teks kaya. Teks: ",
    },
    form: [
      {
        label: {
          en: "Enter your text to add emojis",
          id: "Masukkan teks Anda untuk menambahkan emoji",
        },
        field: "textarea",
        name: "outline",
        required: true,
        placeholder: {
          en: "Type or paste your text here...",
          id: "Ketik atau tempel teks Anda di sini...",
        },
      },
    ],
  },
  {
    name: {
      en: "Instagram Post Generator",
      id: "Pembuat Posting Instagram",
    },
    desc: {
      en: "Generate catchy, creative, and viral Instagram post captions based on your keywords.",
      id: "Hasilkan caption posting Instagram yang menarik, kreatif, dan viral berdasarkan kata kunci Anda.",
    },
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: {
      en: "Blog",
      id: "Blog",
    },
    slug: "ai-instagram-post-generator",
    aiPrompt: {
      en: "Generate 3 unique Instagram post captions based on the given keywords. Each caption should be engaging, trendy, and include relevant hashtags. Output in rich text editor format. Keywords: ",
      id: "Hasilkan 3 caption posting Instagram unik berdasarkan kata kunci yang diberikan. Setiap caption harus menarik, trendi, dan menyertakan hashtag yang relevan. Keluaran dalam format editor teks kaya. Kata kunci: ",
    },
    form: [
      {
        label: {
          en: "Enter Keywords for your post",
          id: "Masukkan Kata Kunci untuk posting Anda",
        },
        field: "input",
        name: "keywords",
        required: true,
        placeholder: {
          en: "e.g., summer fashion, healthy food",
          id: "contoh: fashion musim panas, makanan sehat",
        },
      },
    ],
  },
  {
    name: {
      en: "Instagram Hash Tag Generator",
      id: "Pembuat Hashtag Instagram",
    },
    desc: {
      en: "Create trending and relevant Instagram hashtags for your posts.",
      id: "Buat hashtag Instagram yang trendi dan relevan untuk posting Anda.",
    },
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: {
      en: "Blog",
      id: "Blog",
    },
    slug: "ai-instagram-hash-tag-generator",
    aiPrompt: {
      en: "Generate 15 trending and niche-specific Instagram hashtags based on the given keywords. Mix broad and specific hashtags. Output in rich text editor format. Keywords: ",
      id: "Hasilkan 15 hashtag Instagram yang trendi dan spesifik niche berdasarkan kata kunci yang diberikan. Campur hashtag luas dan spesifik. Keluaran dalam format editor teks kaya. Kata kunci: ",
    },
    form: [
      {
        label: {
          en: "Enter Keywords for your instagram hashtag",
          id: "Masukkan Kata Kunci untuk hashtag instagram Anda",
        },
        field: "input",
        name: "keywords",
        required: true,
        placeholder: {
          en: "e.g., travel, photography, fitness",
          id: "contoh: perjalanan, fotografi, kebugaran",
        },
      },
    ],
  },
  {
    name: {
      en: "Instagram Post/Reel Idea",
      id: "Ide Posting/Reel Instagram",
    },
    desc: {
      en: "Get fresh and trending Instagram post or reel ideas for your niche.",
      id: "Dapatkan ide posting atau reel Instagram yang segar dan trendi untuk niche Anda.",
    },
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: {
      en: "Instagram",
      id: "Instagram",
    },
    slug: "ai-instagram-post-idea-generator",
    aiPrompt: {
      en: "Generate 5–10 fresh, creative, and trending Instagram post or reel ideas based on the given niche. Include a short description for each idea. Output in rich text editor format. Niche: ",
      id: "Hasilkan 5-10 ide posting atau reel Instagram yang segar, kreatif, dan trendi berdasarkan niche yang diberikan. Sertakan deskripsi singkat untuk setiap ide. Keluaran dalam format editor teks kaya. Niche: ",
    },
    form: [
      {
        label: {
          en: "Enter Keywords / Niche for your instagram idea",
          id: "Masukkan Kata Kunci / Niche untuk ide instagram Anda",
        },
        field: "input",
        name: "keywords",
        required: true,
        placeholder: {
          en: "e.g., beauty, fitness, cooking",
          id: "contoh: kecantikan, kebugaran, memasak",
        },
      },
    ],
  },
  {
    name: {
      en: "English Grammar Check",
      id: "Pemeriksa Tata Bahasa Inggris",
    },
    desc: {
      en: "AI tool to correct grammar, spelling, and sentence structure.",
      id: "Alat AI untuk memperbaiki tata bahasa, ejaan, dan struktur kalimat.",
    },
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: {
      en: "English",
      id: "Bahasa Inggris",
    },
    slug: "ai-english-grammar-checker",
    aiPrompt: {
      en: "Correct the grammar, spelling, and structure of the following text. Rewrite it in a polished and professional way. Output in rich text editor format. Text: ",
      id: "Perbaiki tata bahasa, ejaan, dan struktur teks berikut. Tulis ulang dengan cara yang halus dan profesional. Keluaran dalam format editor teks kaya. Teks: ",
    },
    form: [
      {
        label: {
          en: "Enter text to correct the grammar",
          id: "Masukkan teks untuk memperbaiki tata bahasa",
        },
        field: "input",
        name: "inputText",
        required: true,
        placeholder: {
          en: "Paste your text here...",
          id: "Tempel teks Anda di sini...",
        },
      },
    ],
  },
  {
    name: {
      en: "Write Code",
      id: "Tulis Kode",
    },
    desc: {
      en: "AI tool to generate programming code in any language based on description.",
      id: "Alat AI untuk menghasilkan kode pemrograman dalam bahasa apa pun berdasarkan deskripsi.",
    },
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: {
      en: "Coding",
      id: "Pemrograman",
    },
    slug: "ai-write-code",
    aiPrompt: {
      en: "Write clean, well-commented code in the specified programming language based on the following description. Output should be in a formatted code block. Description: ",
      id: "Tulis kode yang bersih dan berkomentar baik dalam bahasa pemrograman yang ditentukan berdasarkan deskripsi berikut. Keluaran harus dalam blok kode yang diformat. Deskripsi: ",
    },
    form: [
      {
        label: {
          en: "Enter description of code you want along with Programming Language",
          id: "Masukkan deskripsi kode yang Anda inginkan beserta Bahasa Pemrograman",
        },
        field: "textarea",
        name: "codeDescription",
        required: true,
        placeholder: {
          en: "e.g., Create a Python function to calculate factorial",
          id: "contoh: Buat fungsi Python untuk menghitung faktorial",
        },
      },
    ],
  },
  {
    name: {
      en: "Explain Code",
      id: "Jelaskan Kode",
    },
    desc: {
      en: "AI tool to explain programming code line by line.",
      id: "Alat AI untuk menjelaskan kode pemrograman baris demi baris.",
    },
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: {
      en: "Coding",
      id: "Pemrograman",
    },
    slug: "ai-explain-code",
    aiPrompt: {
      en: "Explain the following code line by line in simple terms. Highlight what each section does and provide examples if needed. Output in rich text editor format. Code: ",
      id: "Jelaskan kode berikut baris demi baris dengan istilah sederhana. Soroti apa yang dilakukan setiap bagian dan berikan contoh jika diperlukan. Keluaran dalam format editor teks kaya. Kode: ",
    },
    form: [
      {
        label: {
          en: "Enter code which you want to understand",
          id: "Masukkan kode yang ingin Anda pahami",
        },
        field: "textarea",
        name: "codeDescription",
        required: true,
        placeholder: {
          en: "Paste your code here...",
          id: "Tempel kode Anda di sini...",
        },
      },
    ],
  },
  {
    name: {
      en: "Code Bug Detector",
      id: "Pendeteksi Bug Kode",
    },
    desc: {
      en: "Analyze your code to detect bugs and suggest fixes with explanations.",
      id: "Analisis kode Anda untuk mendeteksi bug dan sarankan perbaikan dengan penjelasan.",
    },
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: {
      en: "Code Bug Detector",
      id: "Pendeteksi Bug Kode",
    },
    slug: "ai-code-bug-detector",
    aiPrompt: {
      en: "Analyze the following code, detect bugs or issues, and provide fixes with explanations. Show corrected code snippets in a formatted code block. Code: ",
      id: "Analisis kode berikut, deteksi bug atau masalah, dan berikan perbaikan dengan penjelasan. Tampilkan cuplikan kode yang dikoreksi dalam blok kode yang diformat. Kode: ",
    },
    form: [
      {
        label: {
          en: "Enter code which you want to test bug",
          id: "Masukkan kode yang ingin Anda uji bugnya",
        },
        field: "textarea",
        name: "codeInput",
        required: true,
        placeholder: {
          en: "Paste your code here...",
          id: "Tempel kode Anda di sini...",
        },
      },
    ],
  },
  {
    name: {
      en: "Tagline Generator",
      id: "Pembuat Slogan",
    },
    desc: {
      en: "Struggling to find the perfect tagline? Let AI help you create catchy ones.",
      id: "Kesulitan menemukan slogan yang sempurna? Biarkan AI membantu Anda membuat yang menarik.",
    },
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: {
      en: "Marketing",
      id: "Pemasaran",
    },
    slug: "ai-tagline-generator",
    aiPrompt: {
      en: "Generate 5–10 catchy, memorable, and creative taglines for the following product or brand. Keep them short (max 10 words) and impactful. Output in rich text editor format. Product: ",
      id: "Hasilkan 5-10 slogan yang menarik, mudah diingat, dan kreatif untuk produk atau merek berikut. Buatlah singkat (maks 10 kata) dan berdampak. Keluaran dalam format editor teks kaya. Produk: ",
    },
    form: [
      {
        label: {
          en: "Product/Brand Name",
          id: "Nama Produk/Merek",
        },
        field: "input",
        name: "productName",
        required: true,
        placeholder: {
          en: "e.g., EcoClean Detergent",
          id: "contoh: Deterjen EcoClean",
        },
      },
      {
        label: {
          en: "What you are selling / Marketing",
          id: "Apa yang Anda jual / Pemasaran",
        },
        field: "textarea",
        name: "outline",
        required: true,
        placeholder: {
          en: "Describe your product or service...",
          id: "Jelaskan produk atau layanan Anda...",
        },
      },
    ],
  },
  {
    name: {
      en: "Product Description",
      id: "Deskripsi Produk",
    },
    desc: {
      en: "AI-powered SEO expert that generates keyword-rich product descriptions.",
      id: "Ahli SEO bertenaga AI yang menghasilkan deskripsi produk kaya kata kunci.",
    },
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: {
      en: "Marketing",
      id: "Pemasaran",
    },
    slug: "ai-product-description",
    aiPrompt: {
      en: "Write an engaging and SEO-friendly product description (100–200 words) for the following product. Highlight features, benefits, and a call-to-action. Output in rich text editor format. Product: ",
      id: "Tulis deskripsi produk yang menarik dan ramah-SEO (100-200 kata) untuk produk berikut. Soroti fitur, manfaat, dan ajakan bertindak. Keluaran dalam format editor teks kaya. Produk: ",
    },
    form: [
      {
        label: {
          en: "Product Name",
          id: "Nama Produk",
        },
        field: "input",
        name: "productName",
        required: true,
        placeholder: {
          en: "e.g., Wireless Bluetooth Headphones",
          id: "contoh: Headphone Bluetooth Nirkabel",
        },
      },
      {
        label: {
          en: "Product Details",
          id: "Detail Produk",
        },
        field: "textarea",
        name: "outline",
        required: true,
        placeholder: {
          en: "Describe your product features and benefits...",
          id: "Jelaskan fitur dan manfaat produk Anda...",
        },
      },
    ],
  },
];

// Helper function to get template text in the current language
export const getTemplateText = (
  template: Template,
  language: Language,
  field: keyof Template
): string => {
  if (
    field === "name" ||
    field === "desc" ||
    field === "category" ||
    field === "aiPrompt"
  ) {
    return (template[field] as Record<Language, string>)[language];
  }
  return "";
};

// Helper function to get form field label in the current language
export const getFormFieldLabel = (
  field: FormField,
  language: Language
): string => {
  return field.label[language as keyof typeof field.label];
};

// Helper function to get form field placeholder in the current language
export const getFormFieldPlaceholder = (
  field: FormField,
  language: Language
): string => {
  return field.placeholder?.[language as keyof typeof field.placeholder] || "";
};

export default templates;
