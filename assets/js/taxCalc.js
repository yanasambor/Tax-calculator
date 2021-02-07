let taxRate = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
let minincomeLevel = [9951, 40526, 86376, 164926, 209426, 523601];
let maxincomeLevel = [9950, 40525, 86375, 164925, 209425, 523600];
let singleDeduction=12550;

let firstLevel = maxincomeLevel[0]*taxRate[0];
let secondLevel = firstLevel+((maxincomeLevel[1]-minincomeLevel[0])*taxRate[1]);
let thirdLevel = secondLevel+((maxincomeLevel[2]-minincomeLevel[1])*taxRate[2]);
let fourthLevel = thirdLevel+((maxincomeLevel[3]-minincomeLevel[2])*taxRate[3]);
let fifthLevel = fourthLevel+((maxincomeLevel[4]-minincomeLevel[3])*taxRate[4]);
let sixthLevel= fifthLevel+((maxincomeLevel[5]-minincomeLevel[4])*taxRate[5]);


function taxResult(){
    let income=+incomeInput.value-singleDeduction;

    let Tax;

    if(income<=singleDeduction){
        Tax=("Your income is tax-free")
    }

    if(income>0 && income<=maxincomeLevel[0]){
        Tax=income*taxRate[0];
    }
    if (income>=minincomeLevel[0] && income<=maxincomeLevel[1]){
        Tax=firstLevel+((income-maxincomeLevel[0])*taxRate[1]);
    }
    if (income>=minincomeLevel[1] && income<=maxincomeLevel[2]){
        Tax=secondLevel+((income-maxincomeLevel[1])*taxRate[2]);
    }
    if (income>=minincomeLevel[2] && income<=maxincomeLevel[3]){
        Tax=thirdLevel+((income-maxincomeLevel[2])*taxRate[3]);
    }
    if (income>=minincomeLevel[3] && income<=maxincomeLevel[4]){
        Tax=fourthLevel+((income-maxincomeLevel[3])*taxRate[4]);
    }
    if (income>=minincomeLevel[4] && income<=maxincomeLevel[5]){
        Tax=fifthLevel+((income-maxincomeLevel[4])*taxRate[5]);
    }
    if(income>minincomeLevel[5]){
        Tax=sixthLevel+((incomeInput.value-singleDeduction-minincomeLevel[5])*taxRate[6]);
    }

    TaxPlace.innerHTML=Tax

    }
