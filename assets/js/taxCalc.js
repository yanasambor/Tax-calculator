//От 1 до  $9950 налог 10%
//От $9951 to $40525 - 12%
//От $40526 to $86375 - 22%
//От $86376 to $164925 - 24%  
//От $164926 to $209425 - 32%
//От $209426 to $523600 - 35%
//От $523600 or more - 37%

let taxRate = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
let minincomeLevel = [9951, 40526, 86376, 164926, 209426, 523601];
let maxincomeLevel = [9950, 40525, 86375, 164925, 209425, 523600];

let taxzero = maxincomeLevel[0]*taxRate[0];
let taxfirst = taxzero+((maxincomeLevel[1]-minincomeLevel[0])*taxRate[1]);
let taxsecond = taxfirst+((maxincomeLevel[2]-minincomeLevel[1])*taxRate[2]);
let taxthird = taxsecond+((maxincomeLevel[3]-minincomeLevel[2])*taxRate[3]);
let taxfourth = taxthird+((maxincomeLevel[4]-minincomeLevel[3])*taxRate[4]);
let taxfifth= taxfourth+((maxincomeLevel[5]-minincomeLevel[4])*taxRate[5]);
let taxsixth= taxfifth+(incomeInput.value-maxincomeLevel[6]*taxRate[6]);


function taxResult(){
    let income=+incomeInput.value-12550;

    let Tax;

    if(income<=12550){
        netProfit=0
    }
    
    if(income>0 && income<=maxincomeLevel[0]){
        Tax=income*taxRate[0];
    }
    if (income>=minincomeLevel[0] && income<=maxincomeLevel[1]){
        Tax=taxzero+((income-maxincomeLevel[0])*taxRate[1]);
    }
    if (income>=minincomeLevel[1] && income<=maxincomeLevel[2]){
        Tax=taxfirst+((income-maxincomeLevel[1])*taxRate[2]);
    }
    if (income>=minincomeLevel[2] && income<=maxincomeLevel[3]){
        Tax=taxsecond+((income-maxincomeLevel[2])*taxRate[3]);
    }
    if (income>=minincomeLevel[3] && income<=maxincomeLevel[4]){
        Tax=taxthird+((income-maxincomeLevel[3])*taxRate[4]);
    }
    if (income>=minincomeLevel[4] && income<=maxincomeLevel[5]){
        Tax=taxfourth+((income-maxincomeLevel[4])*taxRate[5]);
    }
    if (income>=minincomeLevel[5] && income<=maxincomeLevel[6]){
        Tax=taxfifth+((income-maxincomeLevel[5])*taxRate[6]);
    }
    if (income>=minincomeLevel[6]){
        Tax=taxsixth+((income-maxincomeLevel[6])*taxRate[7]);
    }

    let netProfit = income-Tax;
    TaxPlace.innerHTML=Tax
    netProfitPlace.innerHTML=netProfit
}