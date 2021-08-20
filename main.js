const div1 = document.getElementById('first')
const div2 = document.getElementById('second')
const div3 = document.getElementById('third')
const img = document.getElementById('art')
const desc = document.getElementById('desc')
const price = document.getElementById('price')
const free = document.getElementById('free')
const express = document.getElementById('express')

const shippingField = document.getElementById('shipping')

const total = document.getElementById('total')


total.addEventListener('click', function(){




})
div1.addEventListener('click', function(){
   img.src= "images/1.jpg"
  desc.innerText = "first orem ipsum dolor sit amet consectetur adipisicing elit s  rem ipsum dolor sit amet consectetur adipisicing elit srem ipsum dolor sit amet consectetur adipisicing elit s"
  price.innerText = '700$'
  total.innerText = '700'
  updateTotal ()
})
div2.addEventListener('click', function(){
    img.src= "images/2.jpg" 
    desc.innerText = "second orem ipsum dolor sit amet consectetur adipisicing elit s  rem ipsum dolor sit amet consectetur adipisicing elit srem ipsum dolor sit amet consectetur adipisicing elit s"
    price.innerText = '650$'
    total.innerText = '650'
    updateTotal ()
})
div3.addEventListener('click', function(){
    img.src= "images/3.jpg"
    desc.innerText = "third orem ipsum dolor sit amet consectetur adipisicing elit s  rem ipsum dolor sit amet consectetur adipisicing elit srem ipsum dolor sit amet consectetur adipisicing elit s"  
    price.innerText = '350$' 
    total.innerText = '350'
    updateTotal () 
})

express.addEventListener('click', function(){
    shippingField.innerText = '30$'
    updateTotal ()
})
free.addEventListener('click', function(){
    shippingField.innerText = '5$'
    updateTotal ()
})

function updateTotal (){
    const shipingCharge = parseInt(shippingField.innerText)
    const productPrice = parseInt(price.innerText)
    const grandTotal = shipingCharge + productPrice;
    total.innerText = grandTotal
}
