function vtNetLogos(thm) {
  switch (thm) {
    
    case "light":

      // asmr garden
      try {
        document.querySelector(".vtNet-asmrgarden").src = `/vtNet/assets/images/logos/asmrgarden_${thm}.png`;
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }

      // sumiyoi
      try {
        document.querySelector(".vtNetSumiyoiBG").style.backgroundImage = `url("/vtNet/assets/images/backgrounds/mahoroba_${thm}.jpg")`;
        document.querySelector(".vtNet-sumiyoi").src = `/vtNet/assets/images/logos/sumiyoi_${thm}.png`;
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      
      // rt600i
      try {
        document.querySelector(".vtNetRT600iBG").style.backgroundImage = `url("/vtNet/assets/images/backgrounds/detroit_${thm}.jpg")`;
        document.querySelector(".vtNet-rt600i").src = `/vtNet/assets/images/logos/rt600i_${thm}.png`;
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      
      document.querySelectorAll(".vtNetVTBG div").forEach((bg) => { bg.style.backgroundColor = "#dcc6bb60"; });

      return;
      
    case "dark":

      // asmr garden
      try {
        document.querySelector(".vtNet-asmrgarden").src = `/vtNet/assets/images/logos/asmrgarden_${thm}.png`;
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }

      // sumiyoi
      try {
        document.querySelector(".vtNetSumiyoiBG").style.backgroundImage = `url("/vtNet/assets/images/backgrounds/mahoroba_${thm}.jpg")`;
        document.querySelector(".vtNet-sumiyoi").src = `/vtNet/assets/images/logos/sumiyoi_${thm}.png`;
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      
      // rt600i
      try {
        document.querySelector(".vtNetRT600iBG").style.backgroundImage = `url("/vtNet/assets/images/backgrounds/detroit_${thm}.jpg")`;
        document.querySelector(".vtNet-rt600i").src = `/vtNet/assets/images/logos/rt600i_${thm}.png`;
      }
      catch (error) { console.warn("no applicable resources found. skipping."); }
      
      document.querySelectorAll(".vtNetVTBG div").forEach((bg) => { bg.style.backgroundColor = "#3d374ca0"; });

      return;

    default: return;

  }
}