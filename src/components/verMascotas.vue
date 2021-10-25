<template>
  <div class="verMascotas">
    
    <br />
    <h2>En la mayoría de los casos, adoptar significa darle una segunda oportunidad a un animal que ha sufrido un proceso de abandono, y en ocasiones maltrato.
       Acogerlo en tu casa de por vida y darle la estabilidad, los cuidados y el cariño que necesita va a ayudarlo a que recupere su confianza y su autoestima.</h2>

    <div class="contenedor_slider_M">
      <div class="slider_M" id="slider_M">
        <div class="slider_section_M">
          <img
            src="https://i.ibb.co/q0Q4z7q/Mandarina-11-a-os.jpg"
            alt=""
            class="slider_img_M"
          />
        </div>
        <div class="slider_section_M">
          <img
            src="https://i.ibb.co/fVWYD7r/Imagen1.png"
            alt=""
            class="slider_img_M"
          />
        </div>
        <div class="slider_section_M">
          <img
            src="https://i.ibb.co/phZdLLc/Imagen2.png"
            alt=""
            class="slider_img_M"
          />
        </div>
        <div class="slider_section_M">
          <img
            src="https://i.ibb.co/xGfPCX2/pacha.jpg"
            alt=""
            class="slider_img_M"
          />
        </div>
        <div class="slider_section_M">
          <img
            src="https://i.ibb.co/pPwRHv2/cocoa.jpg"
            alt=""
            class="slider_img_M"
          />
        </div>
        <div class="slider_section_M">
          <img
            src="https://i.ibb.co/ZGRtj3C/tomy.jpg"
            alt=""
            class="slider_img_M"
          />
        </div>
        <div class="slider_section_M">
          <img
            src="https://i.ibb.co/2s2KXD4/cloe.jpg"
            alt=""
            class="slider_img_M"
          />
        </div>
        <div class="slider_section_M">
          <img
            src="https://i.ibb.co/17SwwQ4/panter.jpg"
            alt=""
            class="slider_img_M"
          />
        </div>
        <div class="slider_section_M">
          <img
            src="https://i.ibb.co/M7F1cJD/rouse.jpg"
            alt=""
            class="slider_img_M"
          />
        </div>
        
      </div>
      <div class="slider_btn_M slider_btn--right_M" id="btn-right_M">&#62;</div>
      <div class="slider_btn_M slider_btn--left_M" id="btn-left_M">&#60;</div>
    </div>
  </div>
</template>
<script>

export default {
    
  mounted() {
    const slider = document.querySelector("#slider_M");
    let sliderSection = document.querySelectorAll(".slider_section_M");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    const btnLeft = document.querySelector("#btn-left_M");
    const btnRight = document.querySelector("#btn-right_M");
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    
    function Next_M() {
      let sliderSectionFirst = document.querySelectorAll(".slider_section_M")[0];
      slider.style.marginLeft = "-200%";
      slider.style.transition = "all 0.5s";
      setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
      }, 500);
    }
    function Prev_M() {
      let sliderSection = document.querySelectorAll(".slider_section_M");
      let sliderSectionLast = sliderSection[sliderSection.length - 1];
      slider.style.marginLeft = "0";
      slider.style.transition = "all 0.5s";
      setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
      }, 500);
    }
    btnRight.addEventListener("click", function () {
      Next_M();
    });
    btnLeft.addEventListener("click", function () {
      Prev_M();
    });
    /*setInterval(function () {
        Next_M();
    }, tiempo);*/
  },
};
</script>



<style>
.verMascotas {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  background-image: url("https://www.residenciaoasis.com/wp-content/uploads/2019/02/dog-2411762_960_720.jpg");
 
  background-size:cover;
  align-items: center;
}

.verMascotas h2 {
  color: #000;
  font-size: 30px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
  margin: 0%;
  padding: 20;
  width: 50%;
}

.contenedor_slider_M {
  max-width: 900px;
  width:90%;
  margin: auto;
  overflow: hidden;
  position: relative;
  
  
  }
.slider_img_M {
  display: block;
  width: 100%;
  height: 100%;
  object-fit:scale-down;
  
}
.slider_M {
  display: flex;
  height: 530px;
  width: 900%;
  margin-left: -100%;
  
}
.slider_section_M{
  width: 100%;
}
.slider_btn_M {
  position: absolute;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.7);
  top: 50%;
  transform: translateY(-50%);
  font-size: 250%;
  font-weight: bold;
  font-family: monospace;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
}
.slider_btn_M:hover {
  background: #fff;
}
.slider_btn--left_M {
  left: 10px;
}
.slider_btn--right_M {
  right: 10px;
}
</style>
