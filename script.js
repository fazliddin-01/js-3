var age =+prompt('sizning yoshingiz')
if (age > 17)alert('siz ishlashingiz mumkin')
else alert('siz yoshsiz oqishingiz kerak')
console.log('sizning yoshingiz '+ age);

var age =+prompt('sizning yoshingiz')
if (age > 55)alert('siz pensiyaga chiqishingiz mumkin')
else alert('siz yoshsiz oqishingiz kerak')

console.log('sizning yoshingiz '+ age);

var age =+prompt('sizning yoshingiz')
if (age > 85)alert('siz pensiyaga chiqib bolgan bolishingiz kerak')
else alert('siz pensiyaga chiqishingiz kerak')
console.log('sizning yoshingiz '+ age);

while(isNaN(age) || age==0){
    age=+prompt('iltimos son kiriting')
}