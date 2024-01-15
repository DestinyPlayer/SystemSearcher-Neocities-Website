function secret() {
  const secret01 = document.getElementById("secretone");
  const secret02 = document.getElementById("secrettwo");
  
  const date = new Date();
  var day = date.getDay();
  
  const secretlist1 = [
    "Velkam to mai devilish leir",
    "Sethorven iz oosam",
    "Kobalstromo iz adorabl",
    "Brutali efishent self",
    "Bip bip aim ae ship",
    "No elvs tu bi faund hir",
    "Efs in chat fo"
  ];
  const secretlist2 = [
    "Houp iu enjoi ior stei",
    "Pliz voch him",
    "Bat dont tel him ai seid zaet",
    "Replikeiting Mekanism ov vor",
    "Fak fak aim ae dak",
    "Okay meibi sam elvs if iur nais",
    "Ol ze pur bastads"
  ];
  secret01.innerHTML = secretlist1[day];
  secret02.innerHTML = secretlist2[day];
}