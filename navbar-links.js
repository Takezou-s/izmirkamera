function Link(text, ...subLinks) {
  this.text = text;
  this.subLinks = [...subLinks];
}

const links = [];
links.push(
  new Link(
    "Güvenlik Kamerası",
    "Güvenlik Kamera Sistemleri",
    "Termal Kamera Sistemleri",
    "HD Güvenlik Kameraları",
    "IP Güvenlik Kameraları",
    "İş Yeri Kamera Sistemleri",
    "Ev Kamera Sistemleri",
    "Görüntülü Diafon Sistemleri",
    "Mobil Araç Güvenlik Kameraları",
    "Yardımcı Ürünler"
  ),
  new Link("Alarm Sistemleri", "Ev Alarm Sistemleri", "İş Yeri Alarm Sistemleri"),
  new Link(
    "Kurumsal Çözümler",
    "Kurumsal Güvenlik Kameraları",
    "Personel Takip Sistemi",
    "Yangın Alarm Sistemleri",
    "IP Telefon Santrali"
  ),
  new Link("Referanslar"),
  new Link("İletişim")
);
