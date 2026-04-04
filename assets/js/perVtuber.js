function perVtuberThm(theme) {
  switch (theme) {
    case "light":
      document.querySelector(".vTuberHeroInner").style.backgroundColor = "#dcc6bb60";
      switch (document.querySelector("meta[name='vtubername']").content) {

        case "asmrgarden":

          document.querySelector(".vTuberHeroLogo").src = `/vtNet/assets/images/logos/asmrgarden_${theme}.png`;
          
          return;
          
        case "emiishion":
            
          return;
            
        case "sumiyoi":
              
          document.querySelector(".vTuberHero").style.backgroundImage = `url("/vtNet/assets/images/backgrounds/mahoroba_${theme}.jpg")`;
          document.querySelector(".vTuberHeroLogo").src = `/vtNet/assets/images/logos/sumiyoi_${theme}.png`;

          return;

        case "senrimana":

          return;

        case "rt600i":
              
          document.querySelector(".vTuberHero").style.backgroundImage = `url("/vtNet/assets/images/backgrounds/detroit_${theme}.jpg")`;
          document.querySelector(".vTuberHeroLogo").src = `/vtNet/assets/images/logos/rt600i_${theme}.png`;

          return;

        default: return;
      }
    case "dark":
      document.querySelector(".vTuberHeroInner").style.backgroundColor = "#3d374ca0";
      switch (document.querySelector("meta[name='vtubername']").content) {

        case "asmrgarden":

          document.querySelector(".vTuberHeroLogo").src = `/vtNet/assets/images/logos/asmrgarden_${theme}.png`;
          
          return;
          
        case "emiishion":
            
          return;
            
        case "sumiyoi":
              
          document.querySelector(".vTuberHero").style.backgroundImage = `url("/vtNet/assets/images/backgrounds/mahoroba_${theme}.jpg")`;
          document.querySelector(".vTuberHeroLogo").src = `/vtNet/assets/images/logos/sumiyoi_${theme}.png`;

          return;

        case "senrimana":

          return;

        case "rt600i":
              
          document.querySelector(".vTuberHero").style.backgroundImage = `url("/vtNet/assets/images/backgrounds/detroit_${theme}.jpg")`;
          document.querySelector(".vTuberHeroLogo").src = `/vtNet/assets/images/logos/rt600i_${theme}.png`;

          return;

        default: return;
      }
    default: return;
  }
}