
function carLoanPayment (p, r, n) {
  return(p*(r*((1+r)**n))/(((1+r)**n)-1))
}


btnCalculate.onclick=function CalcCarLoanPayment() {
  let principleValue = inptPrinciple.value
  let monthlyInterest = inptMonthlyInterest.value
  let totalMonths = inptTotalMonths.value
  let carPayment = carLoanPayment(Number(principleValue), Number(monthlyInterest), Number(totalMonths))
  lblAnswer.hidden = false
  lblAnswer.textContent = "A car loan for " + principleValue + " over " + totalMonths + "at" + monthlyInterest + "% interest would have a monthly payment of " + carPayment
}
  
  