function leidramStory(vol) {
  switch (vol) {
    case 1:
      document.querySelector(".leidramVolNum").innerText = `the Leidram Series, vol.${vol}`;
      document.querySelector(".leidramVolTitle").innerText = "Where Fates Converge";
      document.querySelector(".leidramVolDesc").innerText = "Guided by the mysterious witch, Finn arrived at the distant royal capital guarded by the cursed Knights of the Round Table.";
      return document.querySelector(".leidramStoryViewer").style.display = "flex";
    case 2:
      document.querySelector(".leidramVolNum").innerText = `the Leidram Series, vol.${vol}`;
      document.querySelector(".leidramVolTitle").innerText = "King Arthur, the Cursed Legend";
      document.querySelector(".leidramVolDesc").innerText = "After a hundred years, King Arthur has reached the cursed land of Avalon. Accompanying her are the mightiest knight, Lancelot, and the Knight of the Sun, Gawain. Upon this remote, isolated isle, the final war between the Knights of the Round Table and the nine fairies now commences.";
      return document.querySelector(".leidramStoryViewer").style.display = "flex";
    case 3:
      document.querySelector(".leidramVolNum").innerText = `the Leidram Series, vol.${vol}`;
      document.querySelector(".leidramVolTitle").innerText = "Exiles of the Round Table";
      document.querySelector(".leidramVolDesc").innerText = "The prison island floating at the western edge, and two former Knights of the Round Table. Time, which had stood still, begins to move once more—";
      return document.querySelector(".leidramStoryViewer").style.display = "flex";
    case 4:
      document.querySelector(".leidramVolNum").innerText = `the Leidram Series, vol.${vol}`;
      document.querySelector(".leidramVolTitle").innerText = "King Arthur's Respite";
      document.querySelector(".leidramVolDesc").innerText = "King Arthur, transported to the sea by the Archmage. There, an impossible figure appears—";
      return document.querySelector(".leidramStoryViewer").style.display = "flex";
    case 5:
      document.querySelector(".leidramVolNum").innerText = `the Leidram Series, vol.${vol}`;
      document.querySelector(".leidramVolTitle").innerText = "Tristan and the Sealed Sword";
      document.querySelector(".leidramVolDesc").innerText = "The Knights of the Round Table reunite with the sorrowful knight Tristan in the royal capital. The Saintess encounters the girl who is the ultimate weapon in the sealed land――and the curtain rises on the decisive battle.";
      return document.querySelector(".leidramStoryViewer").style.display = "flex";
    case 6:
      document.querySelector(".leidramVolNum").innerText = `the Leidram Series, vol.${vol}`;
      document.querySelector(".leidramVolTitle").innerText = "Camelot, the Cursed Kingdom";
      document.querySelector(".leidramVolDesc").innerText = "The true purpose of King Arthur, the destination of her journey. The Round Table Saga reaches its grand conclusion!";
      return document.querySelector(".leidramStoryViewer").style.display = "flex";
    case 7:
      document.querySelector(".leidramVolNum").innerText = `the Leidram Series, vol.${vol}`;
      document.querySelector(".leidramVolTitle").innerText = "Shackled Dawn";
      document.querySelector(".leidramVolDesc").innerText = "King Arthur has fallen. Yet the princess of the snow-bound realm prayed in secret, for the return of her Dark King——";
      return document.querySelector(".leidramStoryViewer").style.display = "flex";
    default: event.stopPropagation();
  }
}