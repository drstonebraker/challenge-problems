
function highlightHighestPrice(priceClass, parentId) {
  
  const $prices = jQuery(`#${parentId} .${priceClass}`)
  
  let $maxEl = $prices.eq(0)
  let maxPrice = 0

  $prices.each(function() {
    const el = jQuery(this)
    const currentPrice = stringToNumber(el.text())
    
    // console.log('new each iteration')
    // console.log(el.text())
    // console.log(el)
    // console.log(currentPrice)

    if (currentPrice > maxPrice) {
      maxPrice = currentPrice
      $maxEl = el
    }
  })
  console.log($maxEl)
  $maxEl.css({color: 'red'})

}

function stringToNumber(str) {
  return Number(str.replace(',', '').replace('$', ''))
}

function americanAirlinesHighlightMaxPrice() {
  highlightHighestPrice('price', 'flightResultsContainer_Departure')
}


function unitedAirlinesHighlightMaxPrice() {
  highlightHighestPrice('price-point', 'fl-results')
}