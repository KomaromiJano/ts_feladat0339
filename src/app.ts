class Orsoferoid {

    sideAInput?: HTMLInputElement | null;
    sideBInput?: HTMLInputElement | null;
    areaInput?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;

    constructor(){
        this.bindHtml();
        this.handleEvent();
    }

    bindHtml(){
        this.sideAInput = document.querySelector("#aside");
        this.sideBInput = document.querySelector("#bside");
        this.areaInput = document.querySelector("#area");
        this.calcButton = document.querySelector("#calcBtn");
    }

    handleEvent(){
        this.calcButton?.addEventListener('click',() => {
            console.log("click")
            this.startCalc();
        })
    }

    startCalc(){
        const a = Number(this.sideAInput?.value);
        const b = Number(this.sideBInput?.value);
        const T = this.calcArea(a,b);
        this.renderResult(T);
    }

    calcArea(a: number, b: number){
        return 4*Math.PI/3*a*Math.pow(b,2);
    }

    renderResult(area: number){
        if(this.areaInput){
            this.areaInput.value = String(area);
        }
    }

}
new Orsoferoid();