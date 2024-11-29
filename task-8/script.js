let ladder = {
    step: 0 ,

    up: function () { 
        this.step++;
        return this
    },
    down: function () { 
        this.step--;
        if (this.step < 0)
            this.step = 0
        return this
    },
    showStep: function () { 
        console.log(`Текущая ступенька: ${this.step}`);
        return this
    }
  };
  ladder.up().up().down().showStep(); 
  ladder.up().down().down().down().showStep(); 

