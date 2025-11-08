/* ===================== Theme Toggle behavior ===================== */
const themeToggle = document.getElementById('themeToggle');
const themeSlider = document.getElementById('themeSlider');
const pageHeader = document.getElementById('pageHeader');
function setTheme(t){
  document.body.setAttribute('data-theme', t);
  pageHeader.setAttribute('data-theme', t);
  themeSlider.textContent = t === 'dark' ? '🌙' : '☀️';
}
let currentTheme = 'dark';
setTheme(currentTheme);
themeToggle.addEventListener('click', (e)=>{
  e.stopPropagation();
  currentTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(currentTheme);
});

// Playlist data with multiple categories
const playlistData = [
{
title: "▶️1️⃣Best Videos For Everyone | Parenting Tips & Life Lessons",
description: "An essential collection of parenting guidance and life lessons for parents and children. This playlist offers valuable insights into child development, family relationships, and practical parenting strategies that every family can benefit from.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3YKvO0SQVGzO5E-OCqVxwgH",
channel: "@YouTubePlaylistHindi",
categories: ["VVIMP", "Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "▶️2️⃣ Best Videos For Everyone | Health, Fitness, Food & Nutrition Guide",
description: "Comprehensive health and wellness playlist covering fitness routines, nutritional guidance, and healthy lifestyle tips. Features expert advice on diet planning, exercise techniques, and maintaining overall well-being for people of all ages.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bMEMebsuU2FSSa7TnXm-tv",
channel: "@YouTubePlaylistHindi",
categories: ["VVIMP", "Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "▶️3️⃣ Best Videos For Everyone | Reality of Media, Government, Elites & Society",
description: "Eye-opening content revealing truths about media, government systems, and societal structures. This playlist provides critical analysis and awareness about power dynamics and hidden realities in modern society.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZdGXiXHKmxnEDxeohkEqvS",
channel: "@YouTubePlaylistHindi",
categories: ["VVIMP", "Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "▶️4️⃣ Best Videos For Everyone | Wisdom, Philosophy & Purpose",
description: "Deep philosophical content exploring life's purpose, time management, and inner growth. Features profound discussions on existential questions and practical wisdom for personal development and self-discovery.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bnDV6C6pSha40W1VSqy_bu",
channel: "@YouTubePlaylistHindi",
categories: ["VVIMP", "Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "▶️5️⃣ Best Videos For Everyone | Motivation, Inspiration, Transformation & Life Hacks",
description: "Transformative content focused on motivation, mindset development, and productivity enhancement. Includes practical life hacks, discipline building techniques, and inspirational stories for personal growth.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3aCvH38Bz5UQZGzkCV1AIEs",
channel: "@YouTubePlaylistHindi",
categories: ["VVIMP", "Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "Great World Thinkers & Spiritual Teachers | Hindi",
description: "Exploring the wisdom of global spiritual leaders and philosophers through detailed biographical content. This playlist provides deep insights into various spiritual traditions and philosophical teachings from around the world.",
url: "https://www.youtube.com/playlist?list=PLKEG0DlLAghkcWt_lKnqLVpBRcAM_xKph",
channel: "@HumanityWood",
categories: ["Biography", "VVIMP", "Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "Great Indian Thinkers & Gurus | Hindi",
description: "Comprehensive collection featuring India's spiritual masters and philosophical thinkers. Delve into the teachings, messages, and wisdom of traditional Indian gurus and modern spiritual guides.",
url: "https://www.youtube.com/playlist?list=PLKEG0DlLAghmjies7K7wj-97s6WY01syw",
channel: "@HumanityWood",
categories: ["Biography", "VVIMP", "Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "God, Religion & Spirituality as Philosophy | Hindi",
description: "Philosophical exploration of religious concepts and spiritual practices. This playlist examines the deeper meanings behind religious traditions and spiritual beliefs from a philosophical perspective.",
url: "https://www.youtube.com/playlist?list=PLKEG0DlLAghnuOokCA9XS1X8IPR1jqlqk",
channel: "@HumanityWood",
categories: ["VVIMP", "Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "The Beauty of Earth | Nature, Rivers, Mountains & Wildlife",
description: "Breathtaking visual journey through Earth's natural wonders featuring stunning landscapes, wildlife, and geographical marvels. Experience the planet's beauty through high-quality original videos and stories.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bLOvY3_SJKMYzE22gbh5rw",
channel: "@YouTubePlaylistHindi",
categories: ["World", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Beauty Of Science | best science experiments | best science videos",
description: "Fascinating science experiments and educational content that demonstrates the beauty of scientific principles. Features amazing demonstrations and explanations of natural phenomena and scientific discoveries.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3YsTBG1WeR6fjUwLWAghxHT",
channel: "@YouTubePlaylistHindi",
categories: ["World", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "When Earth Strikes Back | Dangerous Natural Events | Natural Calamities & Disasters",
description: "Documentary-style content showcasing Earth's powerful natural forces and catastrophic events. Features real footage of geological disasters, extreme weather, and natural phenomena that demonstrate our planet's raw power.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZXJCWztKIsehcw9Y5uK0Wn",
channel: "@YouTubePlaylistHindi",
categories: ["World", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Science of Earth | Understanding Earth | Secrets of Our Planet Explained",
description: "Educational content explaining Earth's geological processes, climate systems, and planetary secrets. From core dynamics to atmospheric phenomena, this playlist makes complex earth science accessible and engaging.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3aoVRajK40eYXkMivB8RZZW",
channel: "@YouTubePlaylistHindi",
categories: ["World", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Space & Universe Real Original Videos",
description: "Authentic space exploration content featuring real footage from NASA and other space agencies. Experience the wonders of the universe through genuine space videos and astronomical observations.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3aP2vKqxW1N5sX2MwuWii9",
channel: "@YouTubePlaylistHindi",
categories: ["World", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Playlist of Universe(Astronomy) | Space, Science & Universe World",
description: "Comprehensive astronomy playlist covering space exploration, cosmic phenomena, and scientific discoveries about our universe. Features the best educational content about planets, stars, galaxies, and space technology.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZIETAVStifcubQFAn9IhWq",
channel: "@YouTubePlaylistHindi",
categories: ["World", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Modern Civilization VS Ancient or Early Civilizations",
description: "Comparative analysis of modern society versus ancient civilizations, exploring technological, social, and cultural differences. Examines how human societies have evolved and what we can learn from historical cultures.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3YHItVxR9EOUgSC-__Rpen8",
channel: "@YouTubePlaylistHindi",
categories: ["World", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Science vs Religion",
description: "Thought-provoking discussions exploring the relationship between scientific discovery and religious belief. Features debates, analyses, and perspectives on how these two domains of human understanding interact.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZvlfmR_ZtRErTDGN6zKePk",
channel: "@YouTubePlaylistHindi",
categories: ["Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Life on Earth: From Animals to Humans | Life, Earth & Evolution",
description: "Comprehensive evolutionary biology content tracing the development of life on our planet. From single-celled organisms to human civilization, this playlist explores the fascinating journey of evolution.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bMOk9f1CRFD8QTrycVCx6N",
channel: "@YouTubePlaylistHindi",
categories: ["World", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "✅®♾️♥️Deep, Pure & Soulful Love - ENGLISH 🇬🇧| True & Timeless Love",
description: "Beautiful collection of English love songs celebrating deep, authentic relationships and timeless romance. Features soulful music that captures the essence of true love and emotional connection.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18NDgPT0f82l4wIPZyuz0TOD",
channel: "@DarkSideOf-India",
categories: ["Music"],
impact: "Positive",
usefulness: "Average",
},
{
title: "✅®♾️♥️Deep, Pure & Soulful Love - HINDI 🇮🇳 | True & Timeless Love",
description: "Heartfelt Hindi love songs expressing deep emotions and pure romantic feelings. This playlist features timeless melodies that celebrate the beauty of true love and emotional bonding in Indian culture.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18Ow3QoFfWaVgFC0M8PGDtuP",
channel: "@DarkSideOf-India",
categories: ["Music"],
impact: "Positive",
usefulness: "High",
},
{
title: "🥱⚡🎧 Neutral / Normal Songs | Pure Love, Sad & Others Music",
description: "Versatile music collection featuring various emotional tones from pure love songs to melancholic melodies. Perfect for different moods and occasions with good lyrical content and pleasant vibes.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18PmsRyp-XGtEgYRosgR1L4x",
channel: "@DarkSideOf-India",
categories: ["Music"],
impact: "Positive",
usefulness: "Average",
},
{
title: "Best Humanity Songs | Soulful Music for Humanity, Peace, Kindness, and Emotions",
description: "Inspirational music promoting human values, peace, and emotional connection. Features positive Hindi songs that touch the heart and encourage kindness, empathy, and social harmony.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdEfMBMWwY2JZ2M2cBPqMkcf",
channel: "@WeAreMature",
categories: ["VVIMP", "Music"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "Best Travel & Life Songs | Feel Good Songs | Road Trip Vibes",
description: "Upbeat and cheerful music perfect for travel adventures and positive life moments. Features feel-good Hindi songs that create perfect road trip vibes and celebrate life's joyful experiences.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdHZcsyQWHTQHQKdAitJtqFw",
channel: "@WeAreMature",
categories: ["Music"],
impact: "Positive",
usefulness: "Average",
},
{
title: "Best Motivational & Inspiring Songs | Top Motivational | Top Inspiring",
description: "Energizing music collection designed to motivate and inspire listeners. Features powerful Hindi songs that boost confidence, encourage determination, and provide emotional upliftment during challenging times.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdHFHj2xglxZ_0I6_cm47cqk",
channel: "@WeAreMature",
categories: ["Music"],
impact: "Positive",
usefulness: "Average",
},
{
title: "Best Philosophy & Deep Meaning Songs | Emotional & Thoughtful Hindi Songs",
description: "Profound music with philosophical themes and deep emotional resonance. Features Hindi songs that explore life's big questions, emotional depth, and thoughtful reflections on human existence.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdExAU3Dud9bmbZsfCHHyLZf",
channel: "@WeAreMature",
categories: ["VVIMP", "Music"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "🔞®🔥🫦💦 All Indian Bold & Item Songs | Sensual, Erotic, Seductive Music Videos & Lyrics",
description: "Collection of Indian item songs featuring sensual and bold music videos with adult themes. Includes erotic choreography and seductive performances from Bollywood and regional cinema.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18PZBGgIZeMsP0Iz4VfqWD9n",
channel: "@DarkSideOf-India",
categories: ["Music"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "🔞®🔥🫦💦 All Indian Bold & Item Songs | (Part 2: Less Sensual & Softer Vibes)",
description: "Second installment of Indian item songs collection with relatively milder sensual content. Features seductive music videos with softer vibes while maintaining adult-oriented themes.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18PTjC1K6NKsniAIS2BRgZk2",
channel: "@DarkSideOf-India",
categories: ["Music"],
impact: "Negative",
usefulness: "High",
},
{
title: "🔞®🌍🔥🥵 Global Hot Hits: Erotic International Music Videos & Lyrics",
description: "International collection of bold and sensual music videos from around the world. Features adult-oriented content with erotic themes and seductive performances from global artists.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18N6aL0GfJFWN6fnJNjc-V1S",
channel: "@DarkSideOf-India",
categories: ["Music"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "🔞®🫦💋🔥 Viral, Vulgar & Bold Meaning Songs |Lyrically Problematic",
description: "Collection of controversial songs featuring double-meaning lyrics and daring content. Includes India's most provocative music with problematic lyrics that push cultural boundaries.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18Og5B6nP_1BtrSablQEbHta",
channel: "@DarkSideOf-India",
categories: ["Music"],
impact: "Negative",
usefulness: "High",
},
{
title: "❌®💩💀📈 Most Useless Videos In The World But Viral So Much",
description: "Compilation of viral but meaningless content including cringe videos, clickbait, and mindless entertainment. Features AI-generated and low-quality content that gained unexpected popularity.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18N0Ztcn4aBFdS9tZ7NrcpVi",
channel: "@DarkSideOf-India",
categories: ["VVIMP", "Video"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "🔞®🌊👙🥵 Girl Videos in water | Water Beauties Gone Viral",
description: "Collection of viral videos featuring women in water settings including pools, beaches, and rivers. Includes sensual content and salacious footage that gained popularity on social media.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18P5JyEyFzsVHCt1RqX-MvL-",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "🔞®🔥💃🥵 Sensual Dance Compilation | Hot & Romantic Choreography",
description: "Collection of erotic dance videos featuring sensual choreography and romantic movements. Includes hottest dance performances with seductive expressions and intimate dance sequences.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18NeSxMorvepywtw6VY32gJg",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "🔞®🔥💪💦 Hottest Fitness Reels Compilation | Viral Workout Girls",
description: "Compilation of viral fitness content featuring attractive women in workout settings. Includes hot gym reels, exercise videos, and fitness model content that gained social media popularity.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18OCsPhD7FR-4Yz4BEFsv7MA",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "❌®🍟🙅💩 Digital Junk Food | Clickbait, Adult & Low-value Content",
description: "Collection of low-quality digital content including clickbait, adult entertainment, and mindless media. Features cheap entertainment that provides temporary amusement but little real value.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18PSx_7GUXGINJC8o4IxgoZO",
channel: "@DarkSideOf-India",
categories: ["VVIMP", "Video"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "Ravish Kumar - रवीश कुमार | Ravish Kumar Unfiltered",
description: "Comprehensive collection of Ravish Kumar's journalism featuring unfiltered perspectives and authentic reporting. Showcases his best work and true journalistic approach to current affairs and social issues.",
url: "https://www.youtube.com/playlist?list=PLKEG0DlLAghkAz_WFj3klV2lmpCNQFwDa",
channel: "@HumanityWood",
categories: ["Biography", "Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "✅®😑👁️ Save Humanity, Society | A lot of changes are needed in the world",
description: "Thought-provoking content addressing societal issues and the need for global change. Features critical analysis of human behavior, media influence, and suggestions for improving society and collective thinking.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18Nn6QDYicOqt7aZYJMliPSH",
channel: "@DarkSideOf-India",
categories: ["VVIMP", "Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "🇮🇳 Best Videos in the World | At least everyone should see this much",
description: "Essential video collection that everyone should watch, covering crucial societal and humanitarian topics. Features life-changing content about society, humanity, and important life lessons for personal growth.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdG3Hq1Q3geCGjkX-bDDjXn9",
channel: "@WeAreMature",
categories: ["VVIMP", "Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "❌®🤖🙅💩 AI Misusing | Negative Videos & Massage",
description: "Critical examination of artificial intelligence misuse and negative applications in modern technology. Features content exposing dangerous AI implementations and their potential harmful effects on society.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18PU7wk8FsL9MJFFnAAE6zwH",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Negative",
usefulness: "High",
},
{
title: "🔞®🔥💦🫦 Hot Viral Reels & Videos | Ultimate Sensual Reels Compilation",
description: "Compilation of viral sensual content from social media platforms featuring erotic dance and seductive expressions. Includes hottest reels that gained massive popularity for their bold and intimate content.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18PDsJ0N_08IdunRLyiEuwf7",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Negative",
usefulness: "High",
},
{
title: "Disgusting 🤢 weird 😑 Shocking 😳videos",
description: "Collection of disturbing and unusual content featuring bizarre, shocking, and disgusting videos. Includes strange occurrences, weird phenomena, and unsettling footage from various sources.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18OWan9_8tE8vCQWK8QOjl3x",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Negative",
usefulness: "High",
},
{
title: "❌®💩💦 Clickbait & Cringe Videos | Adult Entertainment & Information",
description: "Compilation of cringe-worthy content including clickbait videos, adult entertainment, and time-wasting media. Features mindless content designed for temporary amusement without substantial value.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18PXk72wpGrl6d4BRujVINRa",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "❌®💩 🤢Useless/Meaningless/Timepass Videos | Negative Massage",
description: "Collection of meaningless content that wastes time and promotes negative messages. Features videos that lack educational or entertainment value while criticizing modern media trends.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18NxA59YCViCREO-9l-uVF-f",
channel: "@DarkSideOf-India",
categories: ["VVIMP", "Video"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "🔞®🎨🥼🔥 Nude Videos | Necked Girls & Boys Videos",
description: "Collection of nude content presented in various contexts including art, protest, and educational formats. Features naked performances and body-positive content with informational or artistic intentions.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18PVpb5ApWHZaKwuLsU1nbWH",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "✅®😱💀😂 Roast, Explanation & Opinion | Expose Media",
description: "Critical content featuring roasting sessions, explanations, and opinion pieces exposing media practices. Includes analysis of vulgar content, adult media, and discussions about sexuality in modern media.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18N3_WiIJ9d-7qdRWJR4ydab",
channel: "@DarkSideOf-India",
categories: ["Expose", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "✅®🙂 Nice Videos & Good Massage",
description: "Collection of positive and uplifting videos with good messages and wholesome content. Features feel-good moments, inspirational stories, and content that promotes positivity and good values.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18OyPa_pJfz3uqP44lLIXgHE",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Best Podcast For Parents & Child",
description: "Educational podcast series focusing on parenting challenges and child development. Features expert advice, practical tips, and discussions about family relationships and raising children effectively.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdHS02D_Z_ZHM_77rqrroNxB",
channel: "@WeAreMature",
categories: ["Family", "Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "⭐🎙️Best Podcast Playlist | Must Watch for Everyone",
description: "Essential podcast collection covering life improvement, mental health, and personal growth topics. Features top Hindi podcasts discussing mind development, health awareness, and self-improvement strategies.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdF4QwopmwfhcoOP8y-iznqu",
channel: "@WeAreMature",
categories: ["Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "✅®❣️💋 Real Love Videos | Romantic Real Love",
description: "Heartwarming collection featuring genuine love stories and romantic real-life moments. Showcases natural relationships and authentic emotional connections between couples in various situations.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18Oy6EJETsMEHGTXyLu7l-EN",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Positive",
usefulness: "Average",
},
{
title: "✅®🫰😅😑Relatable, Little Funny but timepass also",
description: "Entertaining content featuring relatable situations with humorous elements and light entertainment. Includes funny moments, relatable scenarios, and casual content perfect for relaxation and lighthearted viewing.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18MeCGdQHSVVqxLM6-O6gSyH",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Positive",
usefulness: "Average",
},
{
title: "Godman Special | Baba Bazar | Andhvishwas vs Sach",
description: "Critical examination of fake gurus, superstitions, and blind faith in religious figures. Features exposés of fraudulent saints, funny claims by spiritual leaders, and hidden truths about godmen culture.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3Yrv-pCbM4W2Lhejd3Tx8PY",
channel: "@YouTubePlaylistHindi",
categories: ["VVIMP", "Guru"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "😱🎭🔍 Exposing Acharya Prashant | Acharya Prashant Debunked",
description: "Critical analysis and debunking of Acharya Prashant's teachings and claims. Features detailed examinations, criticisms, and unmasking of controversial aspects of his philosophical approach and public statements.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3YwrEYUEnI9Y0P5L3zCPLmC",
channel: "@YouTubePlaylistHindi",
categories: ["Expose", "Video", "Guru"],
impact: "Positive",
usefulness: "High",
},
{
title: "Playlist of Sudhanshu Trivedi Exposed | Sudhanshu Trivedi Exposed",
description: "Investigative content revealing the reality behind Sudhanshu Trivedi's public persona and statements. Features critical analysis of his political positions and public speaking content with fact-checking.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bW0owiBy05ZgNK4DcPRrXy",
channel: "@YouTubePlaylistHindi",
categories: ["Expose", "Video", "Guru"],
impact: "Positive",
usefulness: "High",
},
{
title: "Playlist Of Amogh Lila Das expose | Best Expose Playlist of Amogh Lila Das",
description: "Comprehensive exposé of Amogh Lila Das and ISKCON practices through critical analysis and investigation. Features detailed examinations of teachings, organizational practices, and controversial aspects.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZcsuPp6QfLCVXQylaYHO03",
channel: "@YouTubePlaylistHindi",
categories: ["Expose", "Video", "Guru"],
impact: "Positive",
usefulness: "High",
},
{
title: "Playlist Of Dhirendra shastri expose | Best Playlist",
description: "Critical content examining Dhirendra Shastri's spiritual claims and public activities. Features investigative reporting and analysis of his religious practices and public demonstrations.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3Y57ly2K0CghIaSW6j6Ok6E",
channel: "@YouTubePlaylistHindi",
categories: ["Expose", "Video", "Guru"],
impact: "Positive",
usefulness: "High",
},
{
title: "Playlist Of Premanand Maharaj Ji expose | Best Expose Playlist",
description: "Investigative content revealing aspects of Premanand Maharaj Ji's teachings and organizational practices. Features critical analysis and examination of his spiritual claims and public persona.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3YQcI7f4q0-hJvLjVLbAxgV",
channel: "@YouTubePlaylistHindi",
categories: ["Expose", "Video", "Guru"],
impact: "Positive",
usefulness: "High",
},
{
title: "Famous People Talk About Osho | Testimonials, Support & Praise",
description: "Collection of testimonials and appreciative comments about Osho from famous personalities and followers. Features support, praise, and personal experiences shared by people influenced by his teachings.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bVJpznwyVXFxvTjqhMjmS_",
channel: "@YouTubePlaylistHindi",
categories: ["Video", "Guru"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "😱🙏👍 Testimonials Acharya Prashant | Acharya Prashant Appreciation",
description: "Positive testimonials and appreciation content about Acharya Prashant from followers and admirers. Features support, praise, and personal transformation stories attributed to his teachings.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZCrA6J1HRE8eGuGq5JBroS",
channel: "@YouTubePlaylistHindi",
categories: ["Video", "Guru"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "Best of OSHO (Rajneesh) | Osho Vibes, Edits, Status",
description: "Curated collection of Osho's most impactful teachings in short format videos, edits, and status content. Features powerful quotes, philosophical insights, and inspirational moments from his discourses.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3aTKfsd9MQiPLQUWKl3Xqop",
channel: "@YouTubePlaylistHindi",
categories: ["Video", "Guru"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "Best of Acharya Prashant | Acharya Prashant Vibes, Edits, Status",
description: "Collection of Acharya Prashant's most significant teachings in short video formats, edits, and social media content. Features key insights, philosophical points, and inspirational messages from his work.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3aLDzq7qj1ReqADhKPkUR5A",
channel: "@YouTubePlaylistHindi",
categories: ["Video", "Guru"],
impact: "Positive",
usefulness: "High",
},
{
title: "Osho Best Videos On Knowledge, Time & Life | Osho on knowledge",
description: "Deep philosophical content featuring Osho's teachings about knowledge acquisition, time management, and life purpose. Features profound insights into human consciousness and existential questions.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3age85jy20mwYZtVSkfXAjU",
channel: "@YouTubePlaylistHindi",
categories: ["Philosophy", "Video", "Guru"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "Best of Acharya Prashant | Videos, Thinking, Opinion, Explain",
description: "Comprehensive collection of Acharya Prashant's videos featuring his unique thinking patterns, opinions, and explanations. Covers various philosophical topics and practical life guidance.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3a2KhpdHeLks_cblzqOn9yF",
channel: "@YouTubePlaylistHindi",
categories: ["Philosophy", "Video", "Guru"],
impact: "Positive",
usefulness: "High",
},
{
title: "Jiddu Krishnamurti | Hindi | Best Videos To Understand Him & His Teachings",
description: "Comprehensive introduction to Jiddu Krishnamurti's philosophy and teachings in Hindi language. Features detailed explanations of his thoughts on freedom, education, and human consciousness.",
url: "https://www.youtube.com/playlist?list=PLKEG0DlLAghlCR4k6bfk6W-9uI1BVLqGP",
channel: "@HumanityWood",
categories: ["Biography", "Video", "Guru"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "Osho: Acharya Rajneesh | Hindi | Best Videos To Understand Who He Is",
description: "Detailed exploration of Osho's life, philosophy, and controversial aspects through comprehensive Hindi content. Helps understand his unique approach to spirituality and modern living.",
url: "https://www.youtube.com/playlist?list=PLKEG0DlLAghlORg1o1rDp_gx-XyhMpW57",
channel: "@HumanityWood",
categories: ["Biography", "Video", "Guru"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "Playlist of Unusual Temples Of India | Weird Temples in India",
description: "Exploration of India's most unusual and architecturally unique temples with strange histories and designs. Features temples with unconventional features, mysterious origins, and peculiar worship practices.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ahljsR-wwsktf6FLXIj05x",
channel: "@YouTubePlaylistHindi",
categories: ["Religion", "Hinduism"],
impact: "Negative",
usefulness: "High",
},
{
title: "❌®🕉️🤯😡 Fake Hinduism Exposed | AI, Clickbait & Misleading Portrayals",
description: "Critical examination of fake and misleading representations of Hinduism in digital media. Exposes AI-generated content, clickbait strategies, and distorted portrayals of Sanatan Dharma online.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3YyX09mEpcwPioqmMO7TlzZ",
channel: "@YouTubePlaylistHindi",
categories: ["Religion", "Hinduism"],
impact: "Negative",
usefulness: "High",
},
{
title: "🇮🇳®⭐®♾️🕉️ Real Hinduism: An Introduction to Sanatan Dharma 🕉️",
description: "Authentic introduction to Sanatan Dharma featuring genuine philosophical teachings and spiritual wisdom. Explores ancient knowledge, traditional practices, and the true essence of Hindu philosophy.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZD-kdGzFPnFyBKze3s3nYZ",
channel: "@YouTubePlaylistHindi",
categories: ["Religion", "Hinduism"],
impact: "Positive",
usefulness: "High",
},
{
title: "Great Indian Reformers, Leaders & Peoples | Hindi",
description: "Inspirational collection featuring India's great social reformers, leaders, and influential personalities. Highlights their contributions, social work, and lasting legacy in Indian society and culture.",
url: "https://www.youtube.com/playlist?list=PLKEG0DlLAghllP95ZIujl9eNuJndbweX8",
channel: "@HumanityWood",
categories: ["Biography", "VVIMP", "Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "Great Indian peoples (Part 2)",
description: "Second installment featuring more influential Indian personalities and their remarkable contributions. Continues the exploration of India's great minds and their impact on society and culture.",
url: "https://www.youtube.com/playlist?list=PLKEG0DlLAghkEDmszvSXAH9RfyoFKGPtE",
channel: "@HumanityWood",
categories: ["Biography", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Mahatma Gandhi - महात्मा गांधी | Mahatma Gandhi special",
description: "Special collection dedicated to Mahatma Gandhi's life, philosophy, and freedom struggle contributions. Features comprehensive content about his principles, non-violence movement, and lasting legacy.",
url: "https://www.youtube.com/playlist?list=PLKEG0DlLAghkKk16v462MfqTbC_-N6Fij",
channel: "@HumanityWood",
categories: ["Biography", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Understanding Purpose and Action",
description: "Philosophical exploration of life purpose and meaningful action through book summaries and discussions. Helps viewers understand how to align their actions with their deeper life purposes.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdFZjqmZSwSZOPcUrjJ3opGw",
channel: "@WeAreMature",
categories: ["Book", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Understanding the Meaning of Life | Life Purpose | Real Truth About Life",
description: "Deep exploration of life's meaning and purpose through philosophical book summaries in Hindi. Features wisdom about existential questions and practical guidance for finding life direction.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdHPxIuNpN2dRgSaXL5pySCf",
channel: "@WeAreMature",
categories: ["Book", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Understanding Relationships | Self & People Bonding",
description: "Comprehensive guide to understanding human relationships and improving interpersonal connections. Features book summaries about love, family dynamics, and emotional bonding techniques.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdGAG9MaNZUQJJbUXuNGb3Du",
channel: "@WeAreMature",
categories: ["Book", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Understanding Humanity | Real Human Nature | Kindness, Empathy, Real Values",
description: "Exploration of human nature, empathy, and core human values through philosophical book summaries. Examines what makes us truly human and how to cultivate kindness and compassion.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdG3h5_I_nKnInliSp3RGsGI",
channel: "@WeAreMature",
categories: ["Book", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Understanding Health | Physical, Mental & Emotional Wellness",
description: "Comprehensive health education through book summaries covering physical, mental, and emotional well-being. Features practical advice for healthy living and wellness maintenance in Hindi.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdFhgp7lTQfCDb1cv00SFqeg",
channel: "@WeAreMature",
categories: ["Book", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Understanding the Mind | Mind Power, Psychology & Self Mastery",
description: "Deep exploration of mental processes, psychology, and self-mastery techniques through book summaries. Features content about mental clarity, cognitive functions, and mind power development.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdGIBgUPOvTGg6kTlXJwN2S2",
channel: "@WeAreMature",
categories: ["Book", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Understanding the World | Society, Systems & Global Truths",
description: "Eye-opening content about global systems, societal structures, and universal truths through book summaries. Provides big-picture understanding of how the world actually works.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdHI08HjVnn7ml0pjbaVbnUP",
channel: "@WeAreMature",
categories: ["Book", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Understanding Ourself | Self-Awareness, Identity & Life Purpose",
description: "Journey of self-discovery through book summaries focusing on self-awareness and personal identity. Helps viewers understand who they are and discover their unique life purposes.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdHsdw-sE3tfzMtjWOnXD7j8",
channel: "@WeAreMature",
categories: ["Book", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Understanding the Spirituality",
description: "Exploration of spiritual concepts and practices through comprehensive book summaries in Hindi. Features content about different spiritual paths, meditation techniques, and inner growth.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdGZ8Zwq3tsojj5VpM-8khXp",
channel: "@WeAreMature",
categories: ["Book", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Understanding Wealth | Real Money Wisdom | Financial Mindset",
description: "Financial education through book summaries focusing on wealth creation and financial mindset development. Features balanced approaches to money management and success principles.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdG2UKWG45EGz72dKDQkO4ea",
channel: "@WeAreMature",
categories: ["Book", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "🙏 Please Save My India 🇮🇳🥹✅ | Change My India",
description: "Emotional appeal for positive change in India addressing social issues and national improvement needs. Features content about necessary reforms and collective responsibility for national development.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdGKgkSbYXNBqRPQQt_CXzyr",
channel: "@WeAreMature",
categories: ["VVIMP", "Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "🎬💗🎨 Cinema for the Soul | Best Films & Short Films",
description: "Curated collection of meaningful cinema that provokes thought and inspires personal transformation. Features life-changing films and short movies with deep philosophical and emotional content.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdEDsolXH0KRhc0GZpjMmt-b",
channel: "@WeAreMature",
categories: ["VVIMP", "Film"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "❤️🎧🎶 My Favourite Songs",
description: "Personal collection of favorite music tracks spanning various genres and emotional tones. Features specially curated songs that resonate deeply with personal taste and emotional preferences.",
url: "https://www.youtube.com/playlist?list=PLM6hCXv-ZtdE6PSKGHaQEjLRpJm5xuY0_",
channel: "@WeAreMature",
categories: ["Music"],
impact: "Positive",
usefulness: "Average",
},
{
title: "🙏🎼 Anandmurti Guruma | Bhakti aur Shastriya Sangeet ke Bhajan 🪕",
description: "Devotional music collection featuring Anandmurti Guruma's spiritual songs blending bhakti and classical elements. Includes soft devotional music with deep emotional and spiritual resonance.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3aQeDTLRYZwh9LEQR85jQka",
channel: "@YouTubePlaylistHindi",
categories: ["Music", "Hinduism"],
impact: "Positive",
usefulness: "Average",
},
{
title: "Media expose/reality - Part 2 | Godi Media | Indian Fake Politition",
description: "Second part of media exposure content revealing biased media practices and fake political narratives. Features critical analysis of media manipulation and political propaganda in India.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bGn8zPwHb1O42OmZGjFcCQ",
channel: "@YouTubePlaylistHindi",
categories: ["Expose", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Best podcast for parents",
description: "Educational podcast series providing valuable parenting advice and child development insights. Features expert discussions about family relationships, child psychology, and effective parenting strategies.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bUVIpK1oCle7q8_3NHndhh",
channel: "@YouTubePlaylistHindi",
categories: ["Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "Baba ramdev expose",
description: "Investigative content examining Baba Ramdev's practices, business ventures, and public claims. Features critical analysis and exposé of controversial aspects of his yoga empire and public persona.",
url: "",
channel: "@YouTubePlaylistHindi",
categories: ["Expose", "Video", "Guru"],
impact: "Positive",
usefulness: "High",
},
{
title: "Indian leaders trolling By Art | By cursing each other",
description: "Political satire content featuring artistic trolling of Indian political leaders through music and animation. Includes humorous takes on political rivalries between major parties and their leaders.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bLb4Vxv_SzoB3DKhrYNEE9",
channel: "@YouTubePlaylistHindi",
categories: ["Politics", "Video"],
impact: "Negative",
usefulness: "High",
},
{
title: "AAP party Songs | aam aadmi party song | kattar AAP Songs",
description: "Political music collection featuring Aam Aadmi Party's promotional songs and supporter anthems. Includes party propaganda music and enthusiastic supporter content for AAP political campaigns.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3aLVpFfawkBWfU-KvSkczJI",
channel: "@YouTubePlaylistHindi",
categories: ["Politics", "Music"],
impact: "Negative",
usefulness: "Average",
},
{
title: "Congress party Songs | kattar Congress Songs | best Congress songs",
description: "Collection of Indian National Congress party songs and political propaganda music. Features party anthems, campaign songs, and supporter content promoting Congress political ideology.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3YLAYJpsMrH2K3N9KFooLr3",
channel: "@YouTubePlaylistHindi",
categories: ["Politics", "Music"],
impact: "Negative",
usefulness: "Average",
},
{
title: "BJP party Songs | kattar BJP Songs | best bjp songs",
description: "Political music collection featuring Bharatiya Janata Party's promotional content and supporter songs. Includes party propaganda music and enthusiastic content for BJP political campaigns.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZRTC9WOEs3LwuRmbpOqngp",
channel: "@YouTubePlaylistHindi",
categories: ["Politics", "Music"],
impact: "Negative",
usefulness: "Average",
},
{
title: "Dvaita vs Advaita vs Others Differences",
description: "Philosophical exploration of different Hindu philosophical schools including Dvaita, Advaita, and other traditions. Examines the differences, similarities, and unique aspects of each philosophical approach.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3YM1yioKx_bOGUCQ2f3qGr8",
channel: "@YouTubePlaylistHindi",
categories: ["Video"],
impact: "Positive",
usefulness: "Average",
},
{
title: "1️⃣3️⃣ Kaivalya Upanishad (Atharvaveda)",
description: "Comprehensive study of Kaivalya Upanishad from Atharvaveda featuring detailed explanations and commentaries. Explores profound spiritual teachings and philosophical insights from this ancient text.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZM7Bwf0IXVnG8yNuvbLi8y",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "1️⃣3️⃣ All Playlist Of Kaivalya Upanishad (Atharvaveda)",
description: "Complete collection of all playlists related to Kaivalya Upanishad study and commentary. Features comprehensive coverage of this important Upanishad from various perspectives and teachers.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3YSsKHKe2CPXmA9zF2U8Eu6",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "1️⃣2️⃣ Amritabindu Upanishad (Atharvaveda)",
description: "Detailed exploration of Amritabindu Upanishad from Atharvaveda with spiritual interpretations. Features teachings about consciousness, meditation, and the nature of reality from this ancient text.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bO2O191M9EH-jJFGzt63Zo",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "1️⃣2️⃣ All Playlist Of Amritabindu Upanishad (Atharvaveda)",
description: "Complete collection covering all aspects of Amritabindu Upanishad study and commentary. Provides thorough understanding of this Upanishad's spiritual teachings and philosophical depth.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3aeLuJl8qizADsfBgAxBpna",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "1️⃣1️⃣ Shvetashvatara (Yajurveda) Upanishad",
description: "Comprehensive study of Shvetashvatara Upanishad from Yajurveda featuring detailed explanations. Explores profound spiritual concepts and philosophical teachings from this important text.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3Z9iy1uQ4ObH89k3CMXygEo",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "1️⃣1️⃣ All Playlist Of Shvetashvatara (Yajurveda) Upanishad",
description: "Complete collection of all playlists related to Shvetashvatara Upanishad study and commentary. Features comprehensive coverage from multiple teachers and philosophical perspectives.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZqKNmV3Y_wIaZrvrU7UoqM",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "🔟 Brihadaranyaka (Yajurveda)Upanishad",
description: "Detailed study of Brihadaranyaka Upanishad from Yajurveda with comprehensive explanations. Features one of the most important Upanishads covering vast philosophical and spiritual topics.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZJvjf-bDChI2xqHWo30Qeb",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "🔟 All Playlist Of Brihadaranyaka (Yajurveda)Upanishad",
description: "Complete collection covering all aspects of Brihadaranyaka Upanishad study and interpretation. Provides thorough understanding of this extensive and profound spiritual text.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3buDJ-yrAFbq7STiOJCFSiV",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "9️⃣ Chandogya (Samaveda) Upanishad",
description: "Comprehensive exploration of Chandogya Upanishad from Samaveda with detailed commentaries. Features spiritual teachings about sound, meditation, and the nature of consciousness.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bRa0xS7_0dzPkBz-pkZwHP",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "9️⃣ All Playlist Of Chandogya (Samaveda) Upanishad",
description: "Complete collection of all Chandogya Upanishad related content from various teachers and perspectives. Provides comprehensive understanding of this important Vedic text.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3Y9rXVzJrKQ5HqsWyEh-Ub-",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "8️⃣ All Playlist Of Aitareya (Rigveda) Upanishad",
description: "Complete collection covering Aitareya Upanishad from Rigveda with comprehensive study materials. Features multiple interpretations and detailed explanations of this ancient text.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZxzNyf4lCwa5gAKoF8rQgo",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "8️⃣ Aitareya (Rigveda) Upanishad",
description: "Detailed study of Aitareya Upanishad from Rigveda featuring philosophical explorations and spiritual insights. Examines creation theories and consciousness concepts from this ancient text.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3arXPVnseVxlTXRDqi_c_Me",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "7️⃣ Taittiriya (Yajurveda) Upanishad",
description: "Comprehensive exploration of Taittiriya Upanishad from Yajurveda with detailed philosophical analysis. Features teachings about the five koshas and spiritual development stages.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bGfKej7IEjAjZkmHBidoe8",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "7️⃣ All Playlist Of Taittiriya (Yajurveda) Upanishad",
description: "Complete collection of Taittiriya Upanishad study materials from various sources and teachers. Provides thorough understanding of this important text's spiritual teachings.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3Yh1MgBs3MtncjJbmnZz4vW",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "6️⃣ Mandukya (Atharvaveda) Upanishad",
description: "Detailed study of Mandukya Upanishad from Atharvaveda focusing on consciousness states and AUM symbolism. Explores profound teachings about waking, dreaming, and deep sleep states.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZMrPalvTVErPqZAPTsrrrl",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "6️⃣ All Playlist Of Mandukya (Atharvaveda) Upanishad",
description: "Complete collection covering Mandukya Upanishad from multiple perspectives and teaching styles. Features comprehensive analysis of this concise but profound spiritual text.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3aoIr2_BfxVgQByOxcOJbtc",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "5️⃣ Mundaka (Atharvaveda) Upanishad",
description: "Comprehensive exploration of Mundaka Upanishad from Atharvaveda with spiritual interpretations. Features teachings about higher and lower knowledge and the path to spiritual realization.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3aqSJsneEjD_gbx-5KGKZqR",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "5️⃣ All Playlist Of Mundaka (Atharvaveda) Upanishad",
description: "Complete collection of Mundaka Upanishad study materials from various teachers and traditions. Provides thorough understanding of this important text's philosophical depth.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3b7iFZ7GOzAxMacjIXiLdyv",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "4️⃣ Prashna (Atharvaveda) Upanishad",
description: "Detailed study of Prashna Upanishad from Atharvaveda featuring question-answer format teachings. Explores six fundamental questions about life, creation, and spiritual practice.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZUebSZ0YT_F_TDIJuvLHTO",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "4️⃣ All Playlist Of Prashna (Atharvaveda) Upanishad",
description: "Complete collection covering Prashna Upanishad from multiple teaching perspectives and commentaries. Provides comprehensive understanding of this question-based spiritual text.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3YxJHnfg5PSoI16qnVb9KW-",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "3️⃣ Katha (Yajurveda) Upanishad",
description: "Comprehensive exploration of Katha Upanishad from Yajurveda featuring the story of Nachiketa. Includes profound teachings about life, death, and the nature of the self.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3a2ARowM0W0rFIH1_w79PKS",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "3️⃣ All Playlist Of Katha (Yajurveda) Upanishad",
description: "Complete collection of Katha Upanishad study materials from various spiritual teachers. Features detailed commentaries and interpretations of this famous dialogue between Nachiketa and Yama.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3Zcucn26w6Timt8F4rFzf9F",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "2️⃣ Kena (Samaveda) Upanishad",
description: "Detailed study of Kena Upanishad from Samaveda exploring the nature of Brahman and spiritual knowledge. Features teachings about the ultimate reality and the means of knowing it.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bRkGV9VR57aolMLsHnXMNN",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "2️⃣ All Playlist Of Kena (Samaveda) Upanishad",
description: "Complete collection covering Kena Upanishad from multiple teaching traditions and perspectives. Provides comprehensive understanding of this important text's spiritual teachings.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3aYk8xpuiXpB71yjNpHXhpz",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "1️⃣ Isha (Yajurveda) Upanishad",
description: "Comprehensive exploration of Isha Upanishad from Yajurveda featuring profound spiritual teachings. Includes instructions for living in the world while maintaining spiritual awareness.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3YNTlLLfoOFkJjYg9AWnw7q",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "1️⃣ All Playlist Of Isha (Yajurveda) Upanishad",
description: "Complete collection of Isha Upanishad study materials from various spiritual teachers and traditions. Features detailed commentaries on this concise but profound spiritual text.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZTBhOPhaTUrWplgA7yTFl0",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Upnishad", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "6️⃣ -🕉️♾️ Pure Essence / Masterpiece Bhakti | Pure Bhakti",
description: "Highest quality devotional music featuring pure spiritual essence and advanced musical artistry. Includes world-class devotional songs that represent the pinnacle of bhakti musical expression.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZgIwL7gyBQNnGtPI9uySiz",
channel: "@YouTubePlaylistHindi",
categories: ["Music", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "5️⃣ - 🕉️ 👁️Wisdom-based Bhakti Songs | Sant-Vani / Gyan-Vichar",
description: "Devotional music with deep philosophical content and spiritual wisdom teachings. Features songs that combine bhakti with gyan, offering both emotional devotion and intellectual spiritual insight.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3Z-uT68YD-_Ny_KmXgHsRdY",
channel: "@YouTubePlaylistHindi",
categories: ["Music", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "4️⃣ -🕉️♾️Instrumental Devotional Songs | Meditative / Instrumental Bhakti",
description: "Peaceful instrumental devotional music perfect for meditation and spiritual contemplation. Features calming melodies without lyrics, allowing deep immersion in spiritual atmosphere and inner reflection.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3Za73qzJpS0_wCMOeU48zop",
channel: "@YouTubePlaylistHindi",
categories: ["Music", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "3️⃣ -🕉️⚡Modern Devotional Songs | New & Popular Devotional songs",
description: "Contemporary devotional music blending traditional spirituality with modern musical elements. Features popular bhakti songs with beats and modern production while maintaining spiritual essence.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZUyJAUADh62Fvd2G8nKqGW",
channel: "@YouTubePlaylistHindi",
categories: ["Music", "Hinduism"],
impact: "Positive",
usefulness: "High",
},
{
title: "2️⃣ -🕉️🙏 Mangalmayi Bhakti | मंगलमयी भक्ति",
description: "Transactional devotional music focused on seeking blessings and fulfilling desires through worship. Features mangalmayi bhakti songs that express devotional requests and gratitude for divine favors.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3YBnZIdr0R-qSMiP8RXuGAf",
channel: "@YouTubePlaylistHindi",
categories: ["Music", "Hinduism"],
impact: "Negative",
usefulness: "High",
},
{
title: "1️⃣ -🕉️🔥Kattar Bhakti Songs | Kattar Devotional Songs",
description: "Intense devotional music with strong religious fervor and sometimes political or agenda-based themes. Features hardcore bhakti songs that express extreme devotion and sometimes divisive religious sentiments.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bJKAQStQk-Gn3tq8IPl_zt",
channel: "@YouTubePlaylistHindi",
categories: ["VVIMP", "Music", "Hinduism"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "⭐ Yoga Vasistha",
description: "Comprehensive study of Yoga Vasistha, the profound spiritual text containing dialogues between Rama and Sage Vasistha. Features detailed explanations of non-dual philosophy and spiritual practices.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3a4hj-VFkeDtbzsf8DyZCGT",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "⭐ Vivekachudamani (Adi Shankaracharya)",
description: "Detailed exploration of Vivekachudamani, Adi Shankaracharya's masterpiece on discrimination and self-knowledge. Features comprehensive commentary on this essential Advaita Vedanta text.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bVaLD75lbWS9qgu4etLzYD",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "⭐ Srimad Bhagavad Gita (श्रीमद भगवत गीता)",
description: "Comprehensive study of Srimad Bhagavad Gita, the most important Hindu spiritual text. Features detailed chapter-by-chapter explanations and practical applications of Lord Krishna's teachings.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3ZPD8aebjHoKe4Sqng_W8v3",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "⭐ Ashtavakra Gita",
description: "Deep exploration of Ashtavakra Gita, the profound dialogue between King Janaka and Sage Ashtavakra. Features non-dual teachings about the nature of self and ultimate reality.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3YjCkdt5aMVZ9AzM8NUd0zT",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "⭐ All Playlist Of Yoga Vasistha",
description: "Complete collection of all Yoga Vasistha related content from various teachers and perspectives. Provides comprehensive understanding of this extensive spiritual text's teachings.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3Zv4IJJ4W6nvCpdo99iqjSM",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "⭐ All Playlist Of Vivekachudamani (Adi Shankaracharya)",
description: "Complete collection covering Vivekachudamani from multiple teaching traditions and commentaries. Features comprehensive study materials for this essential discrimination text.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3aI_fP5X1v7AEZO6Nt7SjxD",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "⭐ All Playlist Of Srimad Bhagavad Gita (श्रीमद भगवत गीता)",
description: "Complete collection of all Bhagavad Gita related content from various spiritual teachers. Provides thorough understanding of this most important Hindu scripture from multiple perspectives.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3bwMmBkNyEZgrjmtVaunIN0",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "⭐ All Playlist Of Ashtavakra Gita",
description: "Complete collection of Ashtavakra Gita study materials from various spiritual traditions. Features comprehensive coverage of this profound non-dual text's teachings and applications.",
url: "https://www.youtube.com/playlist?list=PLwPax9asFg3Yz4tK-aPcZm-jpuzJsuh2B",
channel: "@YouTubePlaylistHindi",
categories: ["Sanatan Dharma", "Hinduism"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "Leaders & Party Devotional songs | Indian leaders Songs",
description: "Political devotional music featuring songs dedicated to Indian political leaders and parties. Includes devotional content with political propaganda elements and leader worship themes.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18NWUHGOBfV7wk9VmlvjJAFW",
channel: "@DarkSideOf-India",
categories: ["Politics", "Music"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "🇮🇳®⭐®😑💀 Expose India | Dark Side of India | India's Dark Side",
description: "Investigative content revealing the darker aspects of Indian society, politics, and culture. Features exposés of corruption, social issues, and negative realities often hidden from public view.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18Olmu4JxIAqklle8WQFCI2y",
channel: "@DarkSideOf-India",
categories: ["Expose", "Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "🇮🇳®⭐®😍💖 India | Beautiful India 😍 | I Love My India ❤️",
description: "Celebratory content showcasing India's beauty, culture, and positive aspects. Features stunning visuals of landscapes, cultural events, and heartwarming stories about the country and its people.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18PBS7pmJJoVFjqjBCR6MSiz",
channel: "@DarkSideOf-India",
categories: ["VVIMP", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "⭐®⭐ VVIMP VIDEOS | VERY VERY IMPORTANT VIDEOS",
description: "Collection of extremely important videos covering crucial topics that everyone should watch. Features content with significant impact on understanding society, life, and important issues.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18MtYO3TLt-hS1VzwclxDgFo",
channel: "@DarkSideOf-India",
categories: ["VVIMP", "Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "🔞®🔥🎬💦 Hot & Romantic Movie Scenes",
description: "Collection of cinema's most sensual and romantic moments from various films. Features intimate scenes, romantic encounters, and emotionally charged moments between characters in movies.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18N7qh5jW5XSHE87Evu63Vjb",
channel: "@DarkSideOf-India",
categories: ["Film"],
impact: "Negative",
usefulness: "High",
},
{
title: "Journalism murder in india",
description: "Documentary content examining cases of journalist killings and attacks on press freedom in India. Features investigative reports about media suppression and dangers faced by journalists.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18MkHo692HMhqNd9k47Ayx65",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "Make me cry 😭",
description: "Emotional content designed to evoke deep feelings and tears through heartwarming or sad stories. Features touching moments, emotional reunions, and stories that connect with human emotions.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18NHUIv7t9Duwfj4zPtxc2z0",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Positive",
usefulness: "Average",
},
{
title: "✅®🎨 Art",
description: "Creative content featuring various art forms, artistic expressions, and creative processes. Includes visual arts, performances, and innovative artistic concepts from different cultures and styles.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18M36SAg0YPaLZoKKfxeJhRq",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "🇮🇳®⭐®😍🐾 World of Animals: Beauty, Emotion & Kindness in the Wild",
description: "Beautiful animal content showcasing wildlife's emotional depth, family bonds, and kind behaviors. Features heartwarming stories about animal intelligence, emotions, and surprising human-like qualities.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18OelB5bk13m1VNgkgmEqiJx",
channel: "@DarkSideOf-India",
categories: ["VVIMP", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "🇮🇳®😢🐾World Of Animals -The Unseen Suffering",
description: "Disturbing content exposing animal cruelty, suffering, and the dark side of human-animal interactions. Features documentation of abuse, neglect, and the painful realities many animals face worldwide.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18MSscw6Vl_2ZJAm-M_-sEAA",
channel: "@DarkSideOf-India",
categories: ["VVIMP", "Video"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "❌®😳🤢💩 The Negative Influence | Problematic Content",
description: "Critical examination of socially damaging media content and negative influences in popular culture. Features analysis of problematic messages, harmful trends, and content that negatively impacts society.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18Nw2k2HUJYUB9_wHN9JnuDQ",
channel: "@DarkSideOf-India",
categories: ["VVIMP", "Video"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "🇮🇳⚫ Dark India | Mass Level 👥 | India's Biggest Riots and Tragedies",
description: "Documentary content examining large-scale tragedies, riots, and collective suffering in Indian history. Features analysis of major social crimes, communal violence, and national tragedies.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18M-JFgBXRcaMTHQGzqIpr17",
channel: "@DarkSideOf-India",
categories: ["VVIMP", "Video"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "🇮🇳®⭐®🏴‍☠️😳 About India | Dark India: Exposing Corruption",
description: "Investigative content exposing corruption within India's political system, police forces, and power structures. Features critical analysis of systemic corruption and its impact on society.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18NeA2xnzN3oXqN4Bf_ZBRa3",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "🇮🇳⚫ Dark India | Individual Level 👤 | Crimes That Shocked the Nation",
description: "Documentation of individual-level crimes and personal tragedies that gained national attention in India. Features analysis of shocking criminal cases and their societal implications.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18PvtkBXfpJqJaiII11wXaH5",
channel: "@DarkSideOf-India",
categories: ["VVIMP", "Video"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "✅®🎬🖤☠️ Based on a True Story: Films Inspired by Dark Real Events",
description: "Collection of films and documentaries based on real-life crimes, tragedies, and dark historical events. Features true crime stories and movies inspired by shocking real incidents.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18OpSt8DBTH2px7Gkq70C7dJ",
channel: "@DarkSideOf-India",
categories: ["Film"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "Family ❤️ | The Power of Family Love & Bonds",
description: "Heartwarming content celebrating family relationships, unconditional love, and emotional bonds. Features beautiful moments of family connection, support, and intergenerational relationships.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18PeujHbzRYqt9mvLMXhZLd_",
channel: "@DarkSideOf-India",
categories: ["Family", "Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "Family 💔 | The Dark Side of Family",
description: "Exploration of family dysfunction, emotional manipulation, and toxic relationship dynamics. Features content about family conflicts, control issues, and the painful aspects of family life.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18M9xXBl9noCX4DyaKgn0JJB",
channel: "@DarkSideOf-India",
categories: ["Family", "Video"],
impact: "Negative",
usefulness: "High",
},
{
title: "Raajneetik Neta (Political Leaders) Of INDIA",
description: "Comprehensive content about Indian political leaders, their careers, and political impact. Features biographical information, political analysis, and critical examination of leadership styles.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18N3xjk8ec3ovdSKRgInh-v_",
channel: "@DarkSideOf-India",
categories: ["VVIMP", "Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "Dhruv Rathi On Narendra Modi",
description: "Content featuring Dhruv Rathi's analysis, criticism, and commentary about Narendra Modi's policies and leadership. Includes political satire, factual analysis, and opinion pieces about the Prime Minister.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18M8EYboaZJtANsAMyN1264_",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Positive",
usefulness: "Average",
},
{
title: "Narendra Modi Exposed Videos",
description: "Critical content examining Narendra Modi's political career, decisions, and controversial aspects. Features investigative reporting and analysis of his governance and political strategies.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18MBeLOYyObaSnur2ZNWi4zi",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "🔞®🇮🇳🔥💦 Best India Hot Sexy Bold Adult Music Videos",
description: "Collection of India's hottest and most sensual music videos featuring bold adult content. Includes very hot item songs, seductive performances, and erotic music video content.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18NdKY9pjvGlh2EhamxXXQri",
channel: "@DarkSideOf-India",
categories: ["VVIMP", "Music"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "Save Sonam Wangchuck ❤️💔 | ⚫ Dark Side Of India 🇮🇳",
description: "Content focused on Sonam Wangchuck's activism, struggles, and the issues he represents. Features special videos about his protests, environmental work, and the challenges he faces.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18OH_7bOX4K--yyuMF1BCm4P",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Positive",
usefulness: "High",
},
{
title: "🇮🇳®⭐®✊🏴‍☠️ Protest Music India 🇮🇳🎵🎧 | Expose Govt, Society By Music",
description: "Powerful protest music collection addressing social and political issues in India through songs. Features music that criticizes government, exposes societal problems, and calls for change.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18NvWMBJLqxewyGzM7pH2jVI",
channel: "@DarkSideOf-India",
categories: ["VVIMP", "Music"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "🇮🇳®⭐®✊😂💀Protest Stand-Up Comedy 🎙️",
description: "Political and social commentary through stand-up comedy addressing government and societal issues. Features comedians using humor to critique power structures and social problems in India.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18PsOL0h3Z_6YdLsG4SEQ6wn",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "🇮🇳®🗓️⏳🥱 The Great Indian Timepass | Why Is This Viral",
description: "Collection of pointless viral trends and time-wasting content from Indian social media. Features useless but popular internet content that gained unexpected attention and popularity.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18Np7ZIsnAin5P0RyN_npsnY",
channel: "@DarkSideOf-India",
categories: ["Video"],
impact: "Negative",
usefulness: "Average",
},
{
title: "🇮🇳®🕵️‍♂️☠️🇮🇳 The Unseen India | India's Dark Reality",
description: "Investigative content revealing hidden realities and dark aspects of Indian society beyond mainstream narratives. Features underreported issues, hidden truths, and realities often ignored by media.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18N-sNusYQKEqVaS-1myxL4n",
channel: "@DarkSideOf-India",
categories: ["VVIMP", "Video"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "🇮🇳®⭐®🎬 Movies (Expose And Reality of Society)",
description: "Meaningful cinema that exposes social realities and addresses important societal issues through storytelling. Features films that reveal truths about Indian society, culture, and systemic problems.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18OlB0vNkxN9r7EyKkG-4Pgw",
channel: "@DarkSideOf-India",
categories: ["VVIMP", "Film"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "🔞®🎬💀🥵 Cinema's Dark Side | When Indian Films Show & Support - Crime & R@pe",
description: "Critical examination of how Indian cinema portrays and sometimes glorifies crime and sexual violence. Features analysis of problematic scenes, narratives, and the impact of such content on society.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18MVNiAyemuWB5m-98wutnOz",
channel: "@DarkSideOf-India",
categories: ["VVIMP", "Film"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "🔞®🎬🔥🥵 Bhojpuri Cinema's Hottest Scenes",
description: "Collection of bold and romantic scenes from Bhojpuri cinema featuring sensual content. Includes hot movie clips, romantic moments, and intimate scenes from Bhojpuri films.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18OYqDYVpD2cu3IU_1I_47Zl",
channel: "@DarkSideOf-India",
categories: ["Film"],
impact: "Negative",
usefulness: "Average",
},
{
title: "🔞®🎵🔥Bhojpuri Hot Music Video | Bhojpuri Erotic Songs",
description: "Collection of sensual Bhojpuri music videos featuring adult content and erotic themes. Includes hot songs, seductive performances, and bold music content from Bhojpuri cinema.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18OTqiI_yQd12eauMPtxVyYe",
channel: "@DarkSideOf-India",
categories: ["Music"],
impact: "Negative",
usefulness: "Average",
},
{
title: "🔞®🔥💦👀 New / latest Hot Viral Music Videos in india",
description: "Collection of newly released hot and viral music videos gaining popularity in India. Features latest sensual songs, erotic content, and trending adult-oriented music from various platforms.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18Mokk9tBKiEw9fpFuyEAYE5",
channel: "@DarkSideOf-India",
categories: ["Music"],
impact: "Negative",
usefulness: "Very High",
},
{
title: "🔞®🎬🔥🍿 Hot Films & Short Films | Sensual & Erotic Cinema",
description: "Collection of sensual films and short movies featuring erotic storytelling and bold content. Includes adult-oriented cinema with intimate scenes and sexually charged narratives.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18NTXAhlRAUm2GiLzMRxlkjO",
channel: "@DarkSideOf-India",
categories: ["Film"],
impact: "Negative",
usefulness: "High",
},
{
title: "Philosophical Music Hindi | Osho, Acharya Prashant, Others",
description: "Unique music collection featuring philosophical teachings set to musical compositions. Includes Osho's discourses, Acharya Prashant's teachings, and other philosophical content in musical format.",
url: "https://www.youtube.com/playlist?list=PLynExFj5Lc5cAwtB7XaJES9qoHqSZaa2z",
channel: "@MyFavouriteMusicsEver",
categories: ["Music"],
impact: "Positive",
usefulness: "Very High",
},
{
title: "🎧💀🔥 Kunal Kamara Music | Kunal Kamara Song",
description: "Music collection featuring Kunal Kamara's songs and musical compositions. Includes his unique style of music with philosophical or social commentary elements in the lyrics and composition.",
url: "https://www.youtube.com/playlist?list=PLynExFj5Lc5fBdWMOUAEKjiH-5kTCpTIf",
channel: "@MyFavouriteMusicsEver",
categories: ["Music"],
impact: "Positive",
usefulness: "High",
},
{
title: "Art Music Video",
description: "Creative music videos with strong artistic elements and visual storytelling. Features music content that emphasizes artistic expression, creative visuals, and innovative video production.",
url: "https://www.youtube.com/playlist?list=PLynExFj5Lc5dcLYsx-emczBu7N1MbqDyh",
channel: "@MyFavouriteMusicsEver",
categories: ["Music"],
impact: "Positive",
usefulness: "Average",
},
{
title: "Osho Music | Osho Song | Best Osho songs",
description: "Musical content featuring Osho's teachings, discourses, and philosophical insights set to music. Includes songs based on his wisdom, meditative music, and spiritual compositions inspired by his work.",
url: "https://www.youtube.com/playlist?list=PLynExFj5Lc5dzSuNO7ER6QeY3PMRccmIY",
channel: "@MyFavouriteMusicsEver",
categories: ["Music"],
impact: "Positive",
usefulness: "High",
},
{
title: "🔞®🎬 🫨Weird movie",
description: "Collection of unusual and bizarre films featuring strange plots, unconventional storytelling, and odd characters. Includes movies that defy normal cinematic conventions and explore weird themes.",
url: "https://www.youtube.com/playlist?list=PLLPLg12cL18NasY5JS2K7EjEjQxoVKFOE",
channel: "@DarkSideOf-India",
categories: ["Film"],
impact: "",
usefulness: "Average",
}
];

// DOM Elements
const playlistsContainer = document.getElementById('playlists-container');
const totalCountElement = document.getElementById('total-count');
const showingCountElement = document.getElementById('showing-count');
const categoryFilters = document.querySelectorAll('.filter-btn');
const impactFilters = document.querySelectorAll('.impact-filters input');
const usefulnessFilters = document.querySelectorAll('.usefulness-filters input');


// Initialize the application
function init() {
    // Set total count
    totalCountElement.textContent = playlistData.length;
    
    // Render all playlists initially
    renderPlaylists(playlistData);
    
    // Set up event listeners
    setupEventListeners();
}


// Render playlists to the DOM
function renderPlaylists(playlists) {
    playlistsContainer.innerHTML = '';
    
    if (playlists.length === 0) {
        playlistsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No playlists match your filters. Try adjusting your criteria.</p>
            </div>
        `;
        showingCountElement.textContent = '0';
        return;
    }
    
    playlists.forEach(playlist => {
        const playlistCard = createPlaylistCard(playlist);
        playlistsContainer.appendChild(playlistCard);
    });
    
    showingCountElement.textContent = playlists.length;
}


// Create a playlist card element
function createPlaylistCard(playlist) {
    const card = document.createElement('div');
    card.className = 'playlist-card';
    
    // Extract playlist ID from URL for embedding
    const playlistId = extractPlaylistId(playlist.url);
    
    card.innerHTML = `
        <div class="playlist-header">
            <div>
                <div class="playlist-title">${playlist.title}</div>
                <div class="tags-container">
                    ${playlist.categories.map(category => `<span class="tag ${category.replace(/\s+/g, '-')}">${category}</span>`).join('')}
                </div>
            </div>
            <div class="expand-icon">
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
        <div class="playlist-details">
            <a href="${playlist.url}" target="_blank" class="watch-btn">
                <i class="fab fa-youtube"></i> Watch Playlist on YouTube
            </a>
            ${playlistId ? `
                <div class="youtube-embed-container">
                    <button class="load-video-btn" data-playlist-id="${playlistId}">
                        <i class="fab fa-youtube"></i> Click to load Video Preview
                    </button>
                    <div class="youtube-embed" style="display:none;">
                        <iframe 
                            src=""
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            ` : ''}
            <div class="playlist-description-section">
                <div class="description-toggle">
                    <span>Playlist Description</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="description-text">
                    ${playlist.description}
                </div>
            </div>
            <div class="details-grid">
                <div class="detail-item">
                    <span class="detail-label">Channel</span>
                    <span class="detail-value">${playlist.channel || 'N/A'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Impact</span>
                    <span class="detail-value">${playlist.impact || 'N/A'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Usefulness</span>
                    <span class="detail-value">${playlist.usefulness || 'N/A'}</span>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners for this card
    const header = card.querySelector('.playlist-header');
    const descriptionToggle = card.querySelector('.description-toggle');
    const descriptionText = card.querySelector('.description-text');
    const loadVideoBtn = card.querySelector('.load-video-btn');
    const youtubeEmbed = card.querySelector('.youtube-embed');
    
    header.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
    
    descriptionToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        descriptionText.classList.toggle('expanded');
        descriptionToggle.classList.toggle('expanded');
        descriptionToggle.innerHTML = descriptionText.classList.contains('expanded') 
            ? '<span>Playlist Description</span><i class="fas fa-chevron-up"></i>' 
            : '<span>Playlist Description</span><i class="fas fa-chevron-down"></i>';
    });
    
    // Add event listener for load video button
    if (loadVideoBtn && youtubeEmbed) {
        loadVideoBtn.addEventListener('click', function() {
            const playlistId = this.getAttribute('data-playlist-id');
            const iframe = youtubeEmbed.querySelector('iframe');
            iframe.src = `https://www.youtube.com/embed/videoseries?list=${playlistId}&rel=0`;
            youtubeEmbed.style.display = 'block';
            this.style.display = 'none';
        });
    }
    
    return card;
}


// Extract playlist ID from YouTube URL
function extractPlaylistId(url) {
    const match = url.match(/[&?]list=([^&]+)/i);
    return match ? match[1] : null;
}


// Filter playlists based on selected criteria
function filterPlaylists() {
    // Get active category
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
    
    // Get selected impact values
    const selectedImpacts = Array.from(impactFilters)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    
    // Get selected usefulness values
    const selectedUsefulness = Array.from(usefulnessFilters)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    
    // Filter playlists
    const filteredPlaylists = playlistData.filter(playlist => {
        // Category filter
        const categoryMatch = activeCategory === 'all' || 
            playlist.categories.includes(activeCategory);
        
        // Impact filter
        const impactMatch = selectedImpacts.length === 0 || 
            (playlist.impact && selectedImpacts.includes(playlist.impact));
        
        // Usefulness filter
        const usefulnessMatch = selectedUsefulness.length === 0 || 
            (playlist.usefulness && selectedUsefulness.includes(playlist.usefulness));
        
        return categoryMatch && impactMatch && usefulnessMatch;
    });
    
    // Render filtered playlists
    renderPlaylists(filteredPlaylists);
}


// Set up event listeners
function setupEventListeners() {
    // Category filter buttons
    categoryFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterPlaylists();
        });
    });
    
    // Impact filter checkboxes
    impactFilters.forEach(checkbox => {
        checkbox.addEventListener('change', filterPlaylists);
    });
    
    // Usefulness filter checkboxes
    usefulnessFilters.forEach(checkbox => {
        checkbox.addEventListener('change', filterPlaylists);
    });
}


// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
