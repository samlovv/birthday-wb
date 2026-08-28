export type Memory = { src: string; caption: string; date: string; alt: string };

/** Kişiselleştirmek için yalnızca bu dosyayı düzenleyin. */
export const birthdayData = {
  name: "Sudemmmm",
  birthday: "31.03.2026",
  opening: "senin için.",
  beginningText: "O gün bunun hayatımın en güzel başlangıçlarından biri olacağını bilmiyordum.",
  firstPhotoText: "Ve sonra sen.",
  firstPhotoSubtext: "Hayatımın en güzel tesadüfü.",
  firstPhoto: "/images/photo-01.jpg",
  story: [
    { date: "Mart 2026", text: "İlk buluşma." }, { date: "Nisan 2026", text: "Birbirimize alışmaya başladığımız zaman." },
    { date: "", text: "Bir gün sadece konuşuyorduk." }, { date: "", text: "Sonra her gün konuşmaya başladık." },
    { date: "", text: "Ara sıra görüşmek yetmemeye başladı." }, { date: "", text: "Ve fark etmeden hayatımın bir parçası oldun." }
  ],
  memories: Array.from({ length: 12 }, (_, index) => ({
    src: `/images/photo-${String(index + 1).padStart(2, "0")}.jpg`,
    caption: ["bu günü çok seviyorum", "burada ne kadar mutlu olduğumuzu hatırlıyorum", "favori anlarımdan biri", "zamansız bir an", "sadece biz", "hep böyle kalsın"][index % 6],
    date: `MEMORY ${String(index + 1).padStart(2, "0")}`, alt: `Anı fotoğrafı ${index + 1}`
  })) satisfies Memory[],
  reasons: ["Gülüşün.", "Yanındayken kendim olabilmem.", "En küçük şeyleri bile önemsemen.", "Beni anlamaya çalışman.", "Sesini duyduğumda günümün değişmesi.", "Yanımdayken dünyanın biraz daha güzel görünmesi.", "Benim saçma taraflarıma bile katlanman.", "Sen olduğun için.", "Hayatıma girdiğin için.", "Ve seni neden bu kadar çok sevdiğimi hâlâ tam olarak açıklayamıyor olmam."],
  emotionalPhoto: "/images/photo-13.jpg",
  giftTitle: "senin için küçük bir şey hazırladım.",
  giftMessage: "Sana ayırdığım küçük bir an var.",
  giftUrl: "https://youtu.be/vNcjZEcqZ9s?si=PTFEOfcPpRFfHnhG",
  letter: "Sevgilim,\n\nBugün senin doğum günün ama nedense sana teşekkür etmek istiyorum.\n\nHayatıma girdiğin için,\nbeni olduğum gibi kabul ettiğin için,\nyanımda olduğun için...\n\nBazen sana ne kadar değer verdiğimi anlatacak kelime bulamıyorum.\n\nAma şunu biliyorum:\n\nSeni çok seviyorum.\n\nİyi ki doğdun.\nİyi ki varsın.\nİyi ki benimlesin.\n\nSeni seviyorum. ♡",
  finalMessage: "nice yıllara, sevgilim. ♡",
  finalSignature: "— seni her şeyden çok seven biri",
  musicSrc: "/audio/our-song.mp3"
} as const;
