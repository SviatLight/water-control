export default class Bottle {

  constructor(){
    this.glass = 300;
    this.dailyRate = 1500;
    this.consumed = this.glass;
    // Позначив що один стакан це 20% від цілі.
    this.nubmerGlasses = 20;

    this.listers = document.getElementById('liters');
    this.percentage = document.getElementById('percentage');
    this.remained = document.getElementById('remained');
    this.target = document.getElementById('target');
    this.button = document.getElementById('submit');

    this.myRender();


  }

  myRender(){

    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper.firstElementChild;


  }





  getTemplate(){
    const a = `
        <main class="main_page">
        <div class="text-header">Привіт</div>
        <div class="text-header-target">1500 мл</div>
        <div class="text-header">Ціль на сьогодні</div>
        <div class="cup">
          <div class="remained" id="remained" >
            <span id="liters">1.5</span>
            <small>Remained</small>
          </div>

          <div class="percentage" id="percentage" "></div>
        </div>
        <div class="wrapper-target">
          <div id="watter-drunk" class="watter-drunk">0</div>
          <div class='target-dash'>/</div>
          <div id="target" class='target'>1500</div>
        </div>

        <button id="submit" class="button">Додати</button>
        `;
      return a;

  }

  initEventListeners(){

  };

  buttonClick(){

    this.listers.innerHTML = `this.dailyRate`;


    document.querySelector("#submit").onclick = function(){

      percentage.style.height = `${330 * nubmerGlasses / 100}px`
      percentage.innerText = `${Math.round(consumed * 100 / dailyRate)}%`
      nubmerGlasses += 20;


      if( percentage.style.height === "330px") {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
      } else {
        remained.style.visibility = 'visible'
        listers.innerHTML = `${dailyRate - consumed}g`
      }


      let result = document.querySelector("#watter-drunk").innerHTML = consumed;
      console.log(result)
      if (result === dailyRate || result > dailyRate){
        alert('Ви випили денну норму');
        consumed += glass;

      }else{
        result = document.querySelector("#watter-drunk").innerHTML = consumed;
        consumed += glass;
        console.log(result)
      }
    }


  }



}




  // listers.innerHTML = `${dailyRate}`;


  // document.querySelector("#submit").onclick = function(){

  //   percentage.style.height = `${330 * nubmerGlasses / 100}px`
  //   percentage.innerText = `${Math.round(consumed * 100 / dailyRate)}%`
  //   nubmerGlasses += 20;


  //   if( percentage.style.height === "330px") {
  //     remained.style.visibility = 'hidden'
  //     remained.style.height = 0
  //   } else {
  //     remained.style.visibility = 'visible'
  //     listers.innerHTML = `${dailyRate - consumed}g`
  //   }


  //   let result = document.querySelector("#watter-drunk").innerHTML = consumed;
  //   console.log(result)
  //   if (result === dailyRate || result > dailyRate){
  //     alert('Ви випили денну норму');
  //     consumed += glass;

  //   }else{
  //     result = document.querySelector("#watter-drunk").innerHTML = consumed;
  //     consumed += glass;
  //     console.log(result)
  //   }
  // };







