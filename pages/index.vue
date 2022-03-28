<template>
  <div>
   <h1>Google Fonts Module for NuxtJS. & Canvas text Google fonts</h1>

      <select v-model="fontselected" @change="handleResize">
          
                   <option 
                          v-for="option in options" :key="option.value" 
                          :value="option.value">{{option.text}}</option>
      </select>
         <br>
         <br>
         <br>
         <br>
          <canvas ref="imagecanvas" width="500" height="200" style="border:2px solid #000;float: left; "></canvas>
         
  </div>
</template>
<script>
export default {
  data() {
    return {
      height: 400,
      width: 400,
      margin: 20,
      text: '',
      fontsize: 30,
      textshadow: '',
      strokeTextCheck: '2',
      onecolor: '',
      textAlignX: 0,
      textAlignY: 0,
      lineHeight: 40,
      fontselected: null,
      options: [
        { value: null, text: 'Select Font' },
        { value: 'Beth Ellen', text: 'Beth Ellen[en]' },
        { value: 'Rubik Beastly', text: 'Rubik Beastly[en]' },
        { value: 'Hanalei', text: 'Hanalei[en]' },
        { value: 'Comforter Brush', text: 'Comforter Brush[en]' },
        { value: 'Butcherman', text: 'Butcherman[en]' },
        // { value: 'Bungee Outline', text: 'Bungee Outline[en]' },
        { value: 'Nosifer', text: 'Nosifer[en]' },
        { value: 'Akronim', text: 'Akronim[en]' },
        { value: 'Mulish', text: 'Mulish[en]' },
        { value: 'Oxygen', text: 'Oxygen[en]' },
        { value: 'Alegreya', text: 'Alegreya[en]' },
        { value: 'Roboto', text: 'Roboto[en]' },
        { value: 'Poppins', text: 'Poppins[Dev]' },
        { value: 'Kalam', text: 'Kalam[Dev]' },
        { value: 'Tillana', text: 'Tillana[Dev]' },
        { value: 'Noto Sans', text: 'Noto Sans[Dev]' },
        { value: 'Yatra One', text: 'Yatra One[Dev]' },
        { value: 'Inknut Antiqua', text: 'Inknut Antiqua[Dev]' },
        { value: 'Sura', text: 'Sura[Dev]' },
        { value: 'Mukta', text: 'Mukta[Dev]' },
        { value: 'Sumana', text: 'Sumana[Dev]' },
        { value: 'Gotu', text: 'Gotu[Dev]' },
        { value: 'Sahitya', text: 'Sahitya[Dev]' },
        { value: 'Arya', text: 'Arya[Dev]' },
        { value: 'Vesper Libre', text: 'Vesper Libre[Dev]' },
        { value: 'Hind', text: 'Hind[Dev]' },
        { value: 'Martel', text: 'Martel[Dev]' },
        { value: 'Yantramanav', text: 'Yantramanav[Dev]' },
        { value: 'Eczar', text: 'Eczar[Dev]' },
        { value: 'Amita', text: 'Amita[Dev]' },
        { value: 'Teko', text: 'Teko[Dev]' },
        // { value: { C: '3PO' }, text: 'This is an option with object value' },
        // { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    }
  },

  computed: {
    canvas() {
      return this.$refs.imagecanvas;
    },
    ctx() {
      return this.canvas.getContext('2d');
    },
    imgpreview() {
      return this.$refs.imgConverted;
    },
    imgbg() {
      return this.$refs.bg;
    }
  },

  mounted() {
    // window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods: {
    textChange() {
      this.drawText()
    },
    handleResize() {
      // this.height = window.innerHeight - this.margin;
      // this.width = window.innerWidth - this.margin;
      this.drawText();
    },
    // wrapText(ctx, text, x, y, maxWidth, lineHeight, strokeTextCheck) {
    //   const words = this.text.split(' ');
    //   let line = '';

    //   for (let n = 0; n < words.length; n++) {
    //     const testLine = line + words[n] + ' ';
    //     const metrics = this.ctx.measureText(testLine);
    //     const testWidth = metrics.width;
    //     // console.log(metrics);
    //     // console.log(testWidth);
    //     if (testWidth > maxWidth && n > 0) {

    //       if (strokeTextCheck === "1") {
    //         this.ctx.strokeText(line, x, y);
    //       } else {
    //         this.ctx.fillText(line, x, y);

    //       }
    //       line = words[n] + ' ';
    //       y += lineHeight;
    //     } else {
    //       line = testLine;
    //     }
    //   }
    //   // this.ctx.fillText(line, x, y);
    //   // this.ctx.strokeText(line, x, y);

    //   if (strokeTextCheck === "1") {
    //     this.ctx.strokeText(line, x, y);
    //   } else {
    //     this.ctx.fillText(line, x, y);

    //   }
    // },
    drawText() {
      
      // canvas dynamic width height set
      this.canvas.width = this.width;
      this.canvas.height = this.height;

      let grd = this.ctx.createLinearGradient(this.num1(), this.num1(), this.num1(), this.num1(), this.num1(), this.num1());

      grd.addColorStop(0.1, "rgb(" + this.color() + ")");
      grd.addColorStop(0, "rgb(" + this.color() + ")");
      grd.addColorStop(0.5, "rgb(" + this.color() + ")");
      grd.addColorStop(1, "rgb(" + this.color() + ")");

      // if (this.textshadow === "1") {
      //   this.ctx.shadowColor = "rgb(" + this.color() + ")";
      //   this.ctx.shadowOffsetX = 0;
      //   this.ctx.shadowOffsetY = 0
      //   this.ctx.shadowBlur = 10;
      // }

      this.ctx.restore();
      // this.ctx.font = 'bold 100px Eczar';
      this.ctx.font = '80px ' + this.fontselected;

      // console.log(this.fontselected);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // if (this.strokeTextCheck === "1") {
      //   this.ctx.strokeStyle = grd;
      // } else {
        this.ctx.fillStyle = grd;
      // }
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";

       // this.ctx.fillText("आत्मविश्वास", this.canvas.width/2,this.canvas.height/2);
       this.ctx.fillText("NuxtJs", this.canvas.width/2,this.canvas.height/2);
    },
    color() {
      const r = Math.floor(Math.random() * 255) + 1;
      const g = Math.floor(Math.random() * 255) + 1;
      const b = Math.floor(Math.random() * 255) + 1;

      const color = r + "," + g + "," + b;
      return color;
    },
    num1() {
      return Math.floor(Math.random() * 255) + 1;
    }
  },
}
</script>