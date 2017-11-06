<template>
    <div class="w3-pale-blue w3-padding w3-text-gray">
        <h3 class="w3-text-black">Welcome</h3>
        <hr>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Polycratem Samium felicem appellabant.</b> Duo Reges: constructio interrete. Utrum igitur tibi litteram videor an totas paginas commovere? Si quicquam extra virtutem habeatur in bonis. Indicant pueri, in quibus ut in speculis natura cernitur. Quae cum essent dicta, discessimus. Eadem nunc mea adversum te oratio est. </p>

        <div v-show="show" class="w3-animate-left">
          <p>Tamen a proposito, inquam, aberramus. His enim rebus detractis negat se reperire in asotorum vita quod reprehendat. </p>

          <p>Quae animi affectio suum cuique tribuens atque hanc, quam dico. <i>Scrupulum, inquam, abeunti;</i> Nam Pyrrho, Aristo, Erillus iam diu abiecti. Nam Pyrrho, Aristo, Erillus iam diu abiecti. Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. <mark>Urgent tamen et nihil remittunt.</mark> Quod totum contra est. Traditur, inquit, ab Epicuro ratio neglegendi doloris. <i>Contineo me ab exemplis.</i> </p>
        </div>

      <button class="w3-button w3-yellow w3-right" @click="showHide" id="button1">More</button>

    </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },

  methods: {
    showHide() {
      this.show = !this.show;

      var x = document.getElementById("button1");
      if (x.innerHTML == "More") {
        x.innerHTML = "Hide";
      } else {
        x.innerHTML = "More";
      }
    }
  }
}
</script>

<style scoped>
  .w3-button {
    border-radius: 50%;
    transform: translateY(-12px);
  }
</style>
