function vtNetLogos(thm) {
  switch (thm) {
    
    case "light":
      
      document.querySelectorAll(".vtNetVTBG div").forEach((bg) => { bg.style.backgroundColor = "#dcc6bb60"; });

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

      finally {

        // requires /vtNet/assets/js/perVtuber.js
        try { perVtuberThm(thm); }
        catch (error) { console.warn("/vtNet/assets/js/perVtuber.js not found. skipping.."); }

        return;

      }
      
    case "dark":
      
      document.querySelectorAll(".vtNetVTBG div").forEach((bg) => { bg.style.backgroundColor = "#3d374ca0"; });

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

      finally {

        // requires /vtNet/assets/js/perVtuber.js
        try { perVtuberThm(thm); }
        catch (error) { console.warn("/vtNet/assets/js/perVtuber.js not found. skipping.."); }

        return;

      }

    default: return;

  }
}