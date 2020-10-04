function homeLoanPayment15(p,r) {
  return(p*(r*((1+r)**180))/(((1+r)**180)-1))
}
  function homeLoanPayment30(p,r) {
  return(p*(r*((1+r)**360))/(((1+r)**360)-1))
}
  
btn15years.onclick = function calcHouseLoanPayment15() {
  let principleValue = inptprinciple1.value
  let monthlyInterest = inptmonthlyInterest1.value
  let housePayment15 = homeLoanPayment15(Number(principleValue),Number(monthlyInterest))
  lblAnswer1.hidden = false
  lblAnswer1.textContent = (" A car loan for $ " + principleValue + " over 15 years at "  + monthlyInterest + " % would have a monthly payment of $ " + housePayment15)
}

btn30years.onclick = function calcHouseLoanPayment30() {
  let principleValue = inptprinciple1.value
  let monthlyInterest = inptmonthlyInterest1.value
  let housePayment30 = homeLoanPayment30(Number(principleValue),Number(monthlyInterest))
  lblAnswer1.hidden = false
  lblAnswer1.textContent = (" A car loan for $ " + principleValue + " over 30 years at "  + monthlyInterest + " % would have a monthly payment of $ " + housePayment30)
}