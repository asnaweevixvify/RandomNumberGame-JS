
let randomNum = Math.floor(Math.random() * 100 + 1)
let life=10;
let j=10;


function enterNum(){
    const num = document.querySelector('.type').value;
    let lifeNum = document.querySelector('.h1low')
    let lifeValue = document.querySelector('.h1hi')
    let Heart = document.querySelector('.heart')
    document.querySelector('.type').value = '';

        if(num>randomNum){
            life--;
            j--;
            lifeNum.innerText=("มากไป");
            lifeValue.innerText=("คุณเหลือพลังชีวิตอีก "+life);
            Heart.remove();

        }
        else if(num<randomNum){
            life--;
            j--;
            lifeNum.innerText=("น้อยไป");
            lifeValue.innerText=("คุณเหลือพลังชีวิตอีก "+life);
            Heart.remove();
        }
        else if(num==randomNum){
            Swal.fire({
                title: "คุณชนะ!",
                icon: "success",
                draggable: true
        });  
        resetGame();      
        }
        if(life===0){
            Swal.fire({
                title: "คุณแพ้!",
                icon: "error",
                draggable: true
              });
              resetGame();    
        }
        function resetGame(){
            randomNum = Math.floor(Math.random() * 100 + 1)
            life=10;
            lifeValue.innerText=("คุณเหลือพลังชีวิตอีก 10");
            lifeNum.innerText=("ยังไม่ได้กรอกเลข");
            const heartContainer = document.querySelector('.heartall');
            for (let i = j; i < 10; i++) {
            const newHeart = document.createElement('li');
            newHeart.classList.add('heart');
            newHeart.innerHTML = '<i class="fa-solid fa-heart fa-2xl" style="color: #ff0000;"></i>';
            heartContainer.appendChild(newHeart);
            j=10;
        }
       
    
 
    
}
}
